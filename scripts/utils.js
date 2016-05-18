/*
 * @Author: dontry
 * @Date:   2016-05-10 16:55:14
 * @Last Modified by:   dontry
 * @Last Modified time: 2016-05-18 16:07:11
 */



'use strict';
require('./jquery.twbsPagination.min.js');

/**
 * [Utils description: 辅助工具函数，主要处理数据加载]
 */
var Utils = function() {
    var PREVIOUS_ID = null;
    return {
        loadCase: loadCase,
        loadMainList: loadMainList,
        mobileScroll: mobileScroll,
        twbsPaginationFunc: twbsPaginationFunc,
        loadNoticeList: loadNoticeList,
        encodeParamURI: encodeParamURI,
        setPreviousId: setPreviousId,
        getPreviousId: getPreviousId
    }
};

/**
 * [loadCase description: 加载法庭视频播放时的信息页面]
 * @param  {[type]}   uri      [视频地址]
 * @param  {Function} callback [backbone回调函数,根据返回数据加载视图层]
 * @return {[type]}            [由于callback需要在ajax成功返回数据后才调用，因此需要利用闭包保存函数参数]
 */
function loadCase(uri, callback) {
    return (function() {
        $.ajax({
            type: 'GET',
            url: uri,
            dataType: 'json',
            error: function(jqXHR) {
                alert('发生错误:' + jqXHR.status);
            },
            success: function(data) {
                if (data.success) {
                    console.log('请求成功!');
                    var item = data.case;
                    // new app.CaseView(item);
                    callback(item);
                    if (Constants.MOBILE_REG.test(navigator.userAgent)) { //若是移动端则采用HLS格式播放
                        var resource = item.data.HLS;
                    } else {
                        var resource = item.data.RTMP || item.data.RTSP;
                    }
                    if (!resource) {
                        alert('没有合适资源无法播放');
                        return false;
                    }

                    /*调用jwplayer插件，在调用前需加载jwplayer的脚本*/
                    var playerWidth = $('.wrapper-player').width();
                    var playerHeight = $('.wrapper-player').height();
                    var myPlayer = jwplayer('OnlinePlayer').setup({
                        primary: 'flash',
                        flashplayer: '../assets/tools/jwplayer.flash.swf',
                        skin: {
                            name: 'glow',
                            url: '../assets/skins/glow.css'
                        },
                        file: resource,
                        autostart: true,
                        screencolor: '000000',
                        wmode: 'transparent',
                        width: playerWidth,
                        height: playerHeight
                    });
                } else {
                    alert('出现错误:' + data.message);
                }
            },
        });
    })();
};


/**
 * [loadMainList description 加载视频列表]
 * @param  {[type]}   id        [加载的列表位置：直播、点播]
 * @param  {[type]}   pageIndex [加载的页数]
 * @param  {Function} callback  [backbone回调函数,根据ajax返回数据加载视图层]
 * @return {[type]}             [由于callback需要在ajax成功返回数据后才调用，因此需要利用闭包保存函数参数]
 */
function loadMainList(id, pageIndex, callback) {
    pageIndex = pageIndex || 1;
    if (id.indexOf('#') !== -1) {
        id = id.substr(1);
    }
    var url = this.encodeParamURI({
        host: Constants.HOST,
        pathname: 'json/' + id + '.html',
        search: 'PageIndex=' + pageIndex + '&PageSize=' + Constants.PAGE_MD_SIZE
    });
    var self = this;
    return (function() {
        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            setTimeout: 3000,
            error: function(request) {
                console.log('Connection Error');
            },
            success: function(data) {
                callback(data.list);
                if (!Constants.IS_MOBILE && self.getPreviousId() != id) {
                    $('#videolist-pagination').show();
                    self.twbsPaginationFunc(id, data.query.pageCount, 1, callback);
                }
                if ($('.main').height() > 300) {
                    $('.sidebar-container').height($('.main').height());
                }
                self.setPreviousId(id);
            }
        });
    })();
};

/**
 * [mobileScroll description 当浏览器为移动端时采用滚动加载模式]
 * @param  {[type]}   id       [加载的列表位置]
 * @param  {[type]}   pageIndex[加载的页数号码]
 * @param  {Function} callback [backbone回调函数,根据ajax返回数据加载视图层]
 * @return {[type]}            [由于callback需要在ajax成功返回数据后才调用，因此需要利用闭包保存函数参数]
 */
function mobileScroll(id, pageIndex, callback) {
    var self = this;
    return (function() {
        $(window).on('scroll', function() {
            var scrollTop = $(this).scrollTop();
            var scrollHeight = $(document).height();
            var windowHeight = $(this).height();
            $('#tip-loading').text('正在加载中……');
            $('#loading-footer').append($('#img-loading'));
            if ($('#loading-footer').css('display') === 'none') {

                if (scrollTop + windowHeight >= scrollHeight) {
                    $('#loading-footer').css('display', 'block');
                    if (pageIndex < 3) {
                        pageIndex++;
                        self.loadMainList(id, pageIndex, callback);
                    } else {
                        $('#img-loading').remove();
                        $('#tip-loading').text('到底了……');
                        $(window).off('scroll'); //要移除监听，否则切换新的tab时，仍会监听原来的事件，导致错误
                    }
                }
            }
            if ($('#loading-footer').css('display') === 'block') {
                setTimeout(function() {
                    $('#loading-footer').css('display', 'none');
                }, 2000);
            }
        });
    })();
};

/**
 * [twbsPaginationFunc description  当浏览器为桌面端时采用分页加载模式]
 * @param  {[type]}   id         [加载的列表位置]
 * @param  {[type]}   totalpages [总页数]
 * @param  {[type]}   startpage  [开始页]
 * @param  {Function} callback   [backbone回调函数,根据ajax返回数据加载视图层]
 * @return {[type]}              [由于callback需要在ajax成功返回数据后才调用，因此需要利用闭包保存函数参数]
 */
function twbsPaginationFunc(id, totalpages, startpage, callback) {
    var self = this;
    return (function() {
        $('#videolist-pagination').twbsPagination('destroy');
        $('#videolist-pagination').twbsPagination({
            totalPages: totalpages,
            startPage: startpage,
            visiblePage: 4,
            first: '首页',
            last: '末页',
            prev: '上一页',
            next: '下一页',
            initiateStartPageClick: false,
            onPageClick: function(event, pageIndex) {
                // console.log(flag);
                self.loadMainList(id, pageIndex, callback);
            }
        });
    })();
};


/**
 * [loadNoticeList description 加载公告列表数据]
 * @param  {Function} callback [backbone回调函数,根据ajax返回数据加载视图层]
 * @return {[type]}            [由于callback需要在ajax成功返回数据后才调用，因此需要利用闭包保存函数参数]
 */
function loadNoticeList(callback) {
    return (function() {
        $.ajax({
            type: 'GET',
            url: encodeParamURI({
                host: Constants.HOST,
                pathname: 'json/' + 'notice' + '.html',
                search: 'PageIndex=1' + '&PageSize=' + Constants.PAGE_MD_SIZE
            }),
            dataType: 'json',
            setTimeout: 3000,
            error: function(request) {
                console.log('Connection Error');
            },
            success: function(data) {
                // new app.PreviewListView(data.previewlist);
                callback(data.list);
            }
        })
    })();
};



/**
 * [encodeParamURI description 根据参数进行uri地址编码]
 * @param  {[type]} options [host:地址域;  pathname: 路径;  search:查找参数]
 * @return {[type]}         [description]
 */
function encodeParamURI(options) {
    var host = options.host || 'localhost:8080',
        pathname = options.pathname,
        search = options.search;

    var url = host + '/' + pathname + '?' + search;

    // return encodeURIComponent(url);
    return url;
}

function setPreviousId(id) {
    this.PREVIOUS_ID = id;
};

function getPreviousId() {
    return this.PREVIOUS_ID;
};


/**
 * [format description  日期信息格式化]
 * @param  {[type]} fmt [格式]
 * @return {[type]}     [description]
 */
Date.prototype.format = function(fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份   
        "d+": this.getDate(), //日   
        "h+": this.getHours(), //小时   
        "m+": this.getMinutes(), //分   
        "s+": this.getSeconds(), //秒   
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
        "S": this.getMilliseconds() //毫秒   
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
};

/**
 * [cachedScript description 动态加载脚本]
 * @param  {[type]} url     [脚本地址]
 * @param  {[type]} options [ajax选项]
 * @return {[type]}         [返回重载后的jQuery.ajax函数]
 */
jQuery.cachedScript = function(url, options) {
    options = $.extend(options || {}, {
        dataType: 'script',
        cache: true,
        url: url,
        async: false
    });
    return jQuery.ajax(options);
};

module.exports = Utils();
