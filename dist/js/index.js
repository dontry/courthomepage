webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*
	* @Author: dontry
	* @Date:   2016-04-26 09:45:19
	* @Last Modified by:   dontry
	* @Last Modified time: 2016-05-10 18:58:14
	*/
	global.Constants = __webpack_require__(27);
	global.app = __webpack_require__(31);
	__webpack_require__(30);
	__webpack_require__(28);
	__webpack_require__(24);
	__webpack_require__(23);
	__webpack_require__(20);
	__webpack_require__(21);
	__webpack_require__(22);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, jQuery) {/*
	 * @Author: dontry
	 * @Date:   2016-05-10 16:55:14
	 * @Last Modified by:   dontry
	 * @Last Modified time: 2016-05-18 16:07:11
	 */
	
	
	
	'use strict';
	__webpack_require__(29);
	
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(1)))

/***/ },
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 21 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 22 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 23 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 24 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 25 */,
/* 26 */,
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/*
	* @Author: dontry
	* @Date:   2016-05-10 18:56:32
	* @Last Modified by:   dontry
	* @Last Modified time: 2016-05-18 16:02:18
	*/
	
	'use strict';
	
	//全局常量
	
	module.exports.MOBILE_REG = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i; //判断是否移动客户端;;
	module.exports.IS_MOBILE = $(window).width() < 480 ? true : false;  //通过屏幕大小判断是否手机屏幕
	module.exports.HOST = 'http://192.168.2.30:9080';
	module.exports.PAGE_BG_SIZE = 12;
	module.exports.PAGE_MD_SIZE = 9;
	module.exports.PAGE_SM_SIZE = 8;
	module.exports.TIME_FORMAT = 'yyyy-MM-dd hh:mm:ss';
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/*
	 * @Author: dontry
	 * @Date:   2016-05-05 09:02:52
	 * @Last Modified by:   dontry
	 * @Last Modified time: 2016-05-12 17:11:30
	 */
	
	'use strict';
	var Utils = __webpack_require__(6);
	
	$(document).ready(function() {
	    var IS_MOBILE = $(window).width() < 480 ? true : false;
	    var PAGE_SIZE = 9; //每页显示视频数
	    $('[data-toggle=offcanvas]').on('click', function() {
	        $('.row-offcanvas').toggleClass('active');
	    });
	
	    Utils.loadNoticeList(function(data) {
	        new app.NoticeListView(data);
	    });
	    Utils.loadMainList('#live', 1, function(id, data) {
	        new app.LiveListView(id, data);
	    });
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/*
	 * jQuery Bootstrap Pagination v1.3
	 * https://github.com/esimakin/twbs-pagination
	 *
	 * Copyright 2014-2015 Eugene Simakin <eugenesimakin@mail.ru>
	 * Released under Apache 2.0 license
	 * http://apache.org/licenses/LICENSE-2.0.html
	 */
	!function(a,b,c,d){"use strict";var e=a.fn.twbsPagination,f=function(c,d){if(this.$element=a(c),this.options=a.extend({},a.fn.twbsPagination.defaults,d),this.options.startPage<1||this.options.startPage>this.options.totalPages)throw new Error("Start page option is incorrect");if(this.options.totalPages=parseInt(this.options.totalPages),isNaN(this.options.totalPages))throw new Error("Total pages option is not correct!");if(this.options.visiblePages=parseInt(this.options.visiblePages),isNaN(this.options.visiblePages))throw new Error("Visible pages option is not correct!");if(this.options.totalPages<this.options.visiblePages&&(this.options.visiblePages=this.options.totalPages),this.options.onPageClick instanceof Function&&this.$element.first().on("page",this.options.onPageClick),this.options.href){var e,f=this.options.href.replace(/[-\/\\^$*+?.|[\]]/g,"\\$&");f=f.replace(this.options.pageVariable,"(\\d+)"),null!=(e=new RegExp(f,"i").exec(b.location.href))&&(this.options.startPage=parseInt(e[1],10))}var g="function"==typeof this.$element.prop?this.$element.prop("tagName"):this.$element.attr("tagName");return"UL"===g?this.$listContainer=this.$element:this.$listContainer=a("<ul></ul>"),this.$listContainer.addClass(this.options.paginationClass),"UL"!==g&&this.$element.append(this.$listContainer),this.options.initiateStartPageClick?this.show(this.options.startPage):(this.render(this.getPages(this.options.startPage)),this.setupEvents()),this};f.prototype={constructor:f,destroy:function(){return this.$element.empty(),this.$element.removeData("twbs-pagination"),this.$element.off("page"),this},show:function(a){if(1>a||a>this.options.totalPages)throw new Error("Page is incorrect.");return this.render(this.getPages(a)),this.setupEvents(),this.$element.trigger("page",a),this},buildListItems:function(a){var b=[];if(this.options.first&&b.push(this.buildItem("first",1)),this.options.prev){var c=a.currentPage>1?a.currentPage-1:this.options.loop?this.options.totalPages:1;b.push(this.buildItem("prev",c))}for(var d=0;d<a.numeric.length;d++)b.push(this.buildItem("page",a.numeric[d]));if(this.options.next){var e=a.currentPage<this.options.totalPages?a.currentPage+1:this.options.loop?1:this.options.totalPages;b.push(this.buildItem("next",e))}return this.options.last&&b.push(this.buildItem("last",this.options.totalPages)),b},buildItem:function(b,c){var d=a("<li></li>"),e=a("<a></a>"),f=null;return f=this.options[b]?this.makeText(this.options[b],c):c,d.addClass(this.options[b+"Class"]),d.data("page",c),d.data("page-type",b),d.append(e.attr("href",this.makeHref(c)).html(f)),d},getPages:function(a){var b=[],c=Math.floor(this.options.visiblePages/2),d=a-c+1-this.options.visiblePages%2,e=a+c;0>=d&&(d=1,e=this.options.visiblePages),e>this.options.totalPages&&(d=this.options.totalPages-this.options.visiblePages+1,e=this.options.totalPages);for(var f=d;e>=f;)b.push(f),f++;return{currentPage:a,numeric:b}},render:function(b){var c=this;this.$listContainer.children().remove();var d=this.buildListItems(b);jQuery.each(d,function(a,b){c.$listContainer.append(b)}),this.$listContainer.children().each(function(){var d=a(this),e=d.data("page-type");switch(e){case"page":d.data("page")===b.currentPage&&d.addClass(c.options.activeClass);break;case"first":d.toggleClass(c.options.disabledClass,1===b.currentPage);break;case"last":d.toggleClass(c.options.disabledClass,b.currentPage===c.options.totalPages);break;case"prev":d.toggleClass(c.options.disabledClass,!c.options.loop&&1===b.currentPage);break;case"next":d.toggleClass(c.options.disabledClass,!c.options.loop&&b.currentPage===c.options.totalPages)}})},setupEvents:function(){var b=this;this.$listContainer.find("li").each(function(){var c=a(this);return c.off(),c.hasClass(b.options.disabledClass)||c.hasClass(b.options.activeClass)?void c.on("click",!1):void c.click(function(a){!b.options.href&&a.preventDefault(),b.show(parseInt(c.data("page")))})})},makeHref:function(a){return this.options.href?this.makeText(this.options.href,a):"#"},makeText:function(a,b){return a.replace(this.options.pageVariable,b).replace(this.options.totalPagesVariable,this.options.totalPages)}},a.fn.twbsPagination=function(b){var c,e=Array.prototype.slice.call(arguments,1),g=a(this),h=g.data("twbs-pagination"),i="object"==typeof b?b:{};return h||g.data("twbs-pagination",h=new f(this,i)),"string"==typeof b&&(c=h[b].apply(h,e)),c===d?g:c},a.fn.twbsPagination.defaults={totalPages:1,startPage:1,visiblePages:5,initiateStartPageClick:!0,href:!1,pageVariable:"{{page}}",totalPagesVariable:"{{total_pages}}",page:null,first:"First",prev:"Previous",next:"Next",last:"Last",loop:!1,onPageClick:null,paginationClass:"pagination",nextClass:"next",prevClass:"prev",lastClass:"last",firstClass:"first",pageClass:"page",activeClass:"active",disabledClass:"disabled"},a.fn.twbsPagination.Constructor=f,a.fn.twbsPagination.noConflict=function(){return a.fn.twbsPagination=e,this}}(window.jQuery,window,document);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * @Author: dontry
	 * @Date:   2016-05-03 10:41:52
	 * @Last Modified by:   dontry
	 * @Last Modified time: 2016-05-18 16:14:50
	 */
	
	'use strict';
	var Mock = __webpack_require__(4);
	var COURT_STATUS = ['正在庭审中', '闭庭中', '等待开庭', '归档'];
	var COURT_TITLE = ['租赁合同纠纷', '故意伤害他人罪', '重大经济诈骗罪', '物权确认纠纷', '挂靠经营合同纠纷', '宅基地违建纠纷'];
	
	// var Mock = require('mockjs');
	var data = Mock.mock('http://g.cn', {
	    'data': {
	        'HLS': null,
	        'RTSP': null,
	        // 'RTSP': 'rtsp://192.168.2.28:5557/dispatch/0?model=rtsp-tcp&config.client_type=web'
	        'RTMP': '../assets/videos/movie.mp4'
	    },
	    'errorCode': '',
	    'html': '',
	    'key': '',
	    'message': '没有请求的资源',
	    'success': true,
	    'uri': ''
	});
	
	var data1_1 = Mock.mock(encodeURIComponent('http://g.cn#livelist&pageIndex=1'),
	    Mock.mock({
	        'videolist|9': [{
	            'id|+1': Mock.mock('@integer(0,10000)'),
	            'status|+1': ['正在庭审中', '闭庭中', '等待开庭', '归档'],
	            'title|+1': ['租赁合同纠纷', '故意伤害他人罪', '重大经济诈骗罪', '物权确认纠纷', '挂靠经营合同纠纷', '宅基地违建纠纷'],
	            'time|+1': [Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")')],
	            'location|+1': [Mock.mock('@city'), Mock.mock('@city'), Mock.mock('@city'), Mock.mock('@city'), Mock.mock('@city')],
	            'plaintiff|+1': [Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname')],
	            'defendant|+1': [Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname')],
	            'uri|+1': [encodeURIComponent('http://g.cn#livelist&pageIndex=1&item=1'), encodeURIComponent('http://g.cn#livelist&pageIndex=1&item=2'), encodeURIComponent('http://g.cn#livelist&pageIndex=1&item=3'), encodeURIComponent('http://g.cn#livelist&pageIndex=1&item=4'), encodeURIComponent('http://g.cn#livelist&pageIndex=1&item=5'), encodeURIComponent('http://g.cn#livelist&pageIndex=1&item=6')]
	        }]
	    }));
	
	var data1_2 = Mock.mock(encodeURIComponent('http://g.cn#livelist&pageIndex=2'),
	    Mock.mock({
	        'videolist|9': [{
	            'id|+1': Mock.mock('@integer(0,10000)'),
	            'status|+1': ['正在庭审中', '闭庭中', '等待开庭', '归档'],
	            'title|+1': COURT_TITLE[Mock.mock('@integer(0,3)')],
	            'time|+1': [Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")')],
	            'location|+1': [Mock.mock('@city'), Mock.mock('@city'), Mock.mock('@city'), Mock.mock('@city'), Mock.mock('@city')],
	            'plaintiff|+1': [Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname')],
	            'defendant|+1': [Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname')]
	        }]
	    }));
	
	var data1_3 = Mock.mock(encodeURIComponent('http://g.cn#livelist&pageIndex=3'),
	    Mock.mock({
	        'id|+1': Mock.mock('@integer(0,10000)'),
	        'videolist|2-8': [{
	            'status|+1': COURT_STATUS[Mock.mock('@integer(0,3)')],
	            'title|+1': COURT_TITLE[Mock.mock('@integer(0,3)')],
	            'time|+1': [Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")')],
	            'location|+1': [Mock.mock('@city'), Mock.mock('@city'), Mock.mock('@city'), Mock.mock('@city'), Mock.mock('@city')],
	            'plaintiff|+1': [Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname')],
	            'defendant|+1': [Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname')]
	        }]
	    }));
	
	var data2_1 = Mock.mock(encodeURIComponent('http://g.cn#vodlist&pageIndex=1'),
	    Mock.mock({
	        'videolist|9': [{
	            'id|+1': Mock.mock('@integer(0,10000)'),
	            'status|+1': COURT_STATUS[Mock.mock('@integer(0,3)')],
	            'title|+1': COURT_TITLE[Mock.mock('@integer(0,3)')],
	            'time|+1': [Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")')],
	            'location|+1': [Mock.mock('@city'), Mock.mock('@city'), Mock.mock('@city'), Mock.mock('@city'), Mock.mock('@city')],
	            'plaintiff|+1': [Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname')],
	            'defendant|+1': [Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname')],
	        }]
	    }));
	
	var data2_2 = Mock.mock(encodeURIComponent('http://g.cn#vodlist&pageIndex=2'),
	    Mock.mock({
	        'videolist|9': [{
	            'id|+1': Mock.mock('@integer(0,10000)'),
	            'status|+1': COURT_STATUS[Mock.mock('@integer(0,3)')],
	            'title|+1': COURT_TITLE[Mock.mock('@integer(0,3)')],
	            'time|+1': [Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")')],
	            'location|+1': [Mock.mock('@city'), Mock.mock('@city'), Mock.mock('@city'), Mock.mock('@city'), Mock.mock('@city')],
	            'plaintiff|+1': [Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname')],
	            'defendant|+1': [Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname')],
	        }]
	    }));
	
	var data2_3 = Mock.mock(encodeURIComponent('http://g.cn#vodlist&pageIndex=3'),
	    Mock.mock({
	        'videolist|2-8': [{
	            'id|+1': Mock.mock('@integer(0,10000)'),
	            'status|+1': COURT_STATUS[Mock.mock('@integer(0,3)')],
	            'title|+1': COURT_TITLE[Mock.mock('@integer(0,3)')],
	            'time|+1': [Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")')],
	            'location|+1': [Mock.mock('@city'), Mock.mock('@city'), Mock.mock('@city'), Mock.mock('@city'), Mock.mock('@city')],
	            'plaintiff|+1': [Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname')],
	            'defendant|+1': [Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname')],
	        }]
	    }));
	
	
	var data3_1 = Mock.mock(encodeURIComponent('http://g.cn#albumlist&pageIndex=1'),
	    Mock.mock({
	        'videolist|9': [{
	            'id|+1': Mock.mock('@integer(0,10000)'),
	            'status|+1': COURT_STATUS[Mock.mock('@integer(0,3)')],
	            'title|+1': COURT_TITLE[Mock.mock('@integer(0,3)')],
	            'time|+1': [Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")')],
	            'location|+1': [Mock.mock('@city'), Mock.mock('@city'), Mock.mock('@city'), Mock.mock('@city'), Mock.mock('@city')],
	            'plaintiff|+1': [Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname')],
	            'defendant|+1': [Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname')],
	        }]
	    }));
	
	var data3_2 = Mock.mock(encodeURIComponent('http://g.cn#albumlist&pageIndex=2'),
	    Mock.mock({
	        'videolist|9': [{
	            'id|+1': Mock.mock('@integer(0,10000)'),
	            'status|+1': COURT_STATUS[Mock.mock('@integer(0,3)')],
	            'title|+1': ['租赁合同纠纷', '故意伤害他人罪', '重大经济诈骗罪', '物权确认纠纷', '挂靠经营合同纠纷', '宅基地违建纠纷'],
	            'time|+1': [Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")')],
	            'location|+1': [Mock.mock('@city'), Mock.mock('@city'), Mock.mock('@city'), Mock.mock('@city'), Mock.mock('@city')],
	            'plaintiff|+1': [Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname')],
	            'defendant|+1': [Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname')],
	        }]
	    }));
	
	var data3_3 = Mock.mock(encodeURIComponent('http://g.cn#albumlist&pageIndex=3'),
	    Mock.mock({
	        'videolist|1-5': [{
	            'id|+1': Mock.mock('@integer(0,10000)'),
	            'status|+1': COURT_STATUS[Mock.mock('@integer(0,3)')],
	            'title|+1': ['租赁合同纠纷', '故意伤害他人罪', '重大经济诈骗罪', '物权确认纠纷', '挂靠经营合同纠纷', '宅基地违建纠纷'],
	            'time|+1': [Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")'), Mock.mock('@datetime("yyyy-MM-dd HH:MM")')],
	            'location|+1': [Mock.mock('@city'), Mock.mock('@city'), Mock.mock('@city'), Mock.mock('@city'), Mock.mock('@city')],
	            'plaintiff|+1': [Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname')],
	            'defendant|+1': [Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname')]
	        }]
	    }));
	// console.log(JSON.stringify(data, null, 4));
	
	
	var data_case_1 = Mock.mock(encodeURIComponent('http://g.cn#livelist&pageIndex=1&item=1'), {
	    case: {
	        'title': '重大经济诈骗罪',
	        'id': '（2016）穗中法刑一初第80号',
	        'reason': '80号案由',
	        'plaintiff': '张晓芬',
	        'defendant': '黄大雷',
	        'chief_judge': '梁朝',
	        'acting_judge': '刘德任',
	        'clerk': '杨佳志',
	        'time': '2016-3-21 11:00',
	        'location': '海珠区人民法院',
	        'intro': '  因为虚构600万元债权妄图损害他人合法权益的手法被法院识破，唐某不但被判决承担17万余元的诉讼费、鉴定费，还因串通变造证据虚假诉讼的行为，被法院处以法定最高额10万元的罚款，与其一起串通进行虚假诉讼的孙某也被法院处以5万元罚款。近日，在上海市第一中级人民法院对其二人启动强制执行措施后，唐某、孙某最终向法院缴纳罚款，并履行了民事判决书确定的义务。',
	        'data': {
	            'HLS': null,
	            'RTSP': null,
	            'RTMP': '../../assets/videos/movie1.mp4'
	        }
	    },
	    'errorCode': '',
	    'html': '',
	    'key': '',
	    'message': '没有请求的资源',
	    'success': true,
	    'uri': ''
	});
	
	
	var data_case_2 = Mock.mock(encodeURIComponent('http://g.cn#livelist&pageIndex=1&item=2'), {
	    case: {
	        'title': '非法经营罪',
	        'id': '（2016）穗中法刑一初第60号',
	        'reason': '60号案由',
	        'plaintiff': '张三',
	        'defendant': '李源潮',
	        'chief_judge': '黄金桂',
	        'acting_judge': '张无忌',
	        'clerk': '谢逊',
	        'time': '2016-3-21 11:00',
	        'location': '海珠区人民法院',
	        'intro': '  因为虚构600万元债权妄图损害他人合法权益的手法被法院识破，唐某不但被判决承担17万余元的诉讼费、鉴定费，还因串通变造证据虚假诉讼的行为，被法院处以法定最高额10万元的罚款，与其一起串通进行虚假诉讼的孙某也被法院处以5万元罚款。近日，在上海市第一中级人民法院对其二人启动强制执行措施后，唐某、孙某最终向法院缴纳罚款，并履行了民事判决书确定的义务。',
	        'data': {
	            'HLS': null,
	            'RTSP': '../../assets/videos/movie2.mp4',
	            'RTMP': '../../assets/videos/movie2.mp4'
	        }
	    },
	    'errorCode': '',
	    'html': '',
	    'key': '',
	    'message': '没有请求的资源',
	    'success': true,
	    'uri': ''
	});
	
	var data_case_2 = Mock.mock(encodeURIComponent('http://g.cn#livelist&pageIndex=1&item=3'), {
	    case: {
	        'title': '物权确认纠纷',
	        'id': '（2016）穗中法刑一初第80号',
	        'reason': '80号案由',
	        'plaintiff': '马云',
	        'defendant': '周鸿祎',
	        'chief_judge': '李彦宏',
	        'acting_judge': '马化腾',
	        'clerk': '张小龙',
	        'time': '2016-3-21 11:00',
	        'location': '海珠区人民法院',
	        'intro': '  因为虚构600万元债权妄图损害他人合法权益的手法被法院识破，唐某不但被判决承担17万余元的诉讼费、鉴定费，还因串通变造证据虚假诉讼的行为，被法院处以法定最高额10万元的罚款，与其一起串通进行虚假诉讼的孙某也被法院处以5万元罚款。近日，在上海市第一中级人民法院对其二人启动强制执行措施后，唐某、孙某最终向法院缴纳罚款，并履行了民事判决书确定的义务。',
	        'data': {
	            'HLS': null,
	            'RTSP': '../../assets/videos/movie3.mp4',
	            'RTMP': '../../assets/videos/movie3.mp4'
	        }
	    },
	    'errorCode': '',
	    'html': '',
	    'key': '',
	    'message': '没有请求的资源',
	    'success': true,
	    'uri': ''
	});
	
	var data_case_2 = Mock.mock(encodeURIComponent('http://g.cn#livelist&pageIndex=1&item=4'), {
	    case: {
	        'title': '故意伤害他人罪',
	        'id': '（2016）穗中法刑一初第20号',
	        'reason': '80号案由',
	        'plaintiff': '张晓芬',
	        'defendant': '黄大雷',
	        'chief_judge': '梁朝',
	        'acting_judge': '刘德任',
	        'clerk': '杨佳志',
	        'time': '2016-3-21 11:00',
	        'location': '海珠区人民法院',
	        'intro': '  因为虚构600万元债权妄图损害他人合法权益的手法被法院识破，唐某不但被判决承担17万余元的诉讼费、鉴定费，还因串通变造证据虚假诉讼的行为，被法院处以法定最高额10万元的罚款，与其一起串通进行虚假诉讼的孙某也被法院处以5万元罚款。近日，在上海市第一中级人民法院对其二人启动强制执行措施后，唐某、孙某最终向法院缴纳罚款，并履行了民事判决书确定的义务。',
	        'data': {
	            'HLS': '../../assets/videos/movie4.mp4',
	            'RTSP': null,
	            'RTMP': '../../assets/videos/movie4.mp4'
	        }
	    },
	    'errorCode': '',
	    'html': '',
	    'key': '',
	    'message': '没有请求的资源',
	    'success': true,
	    'uri': ''
	});
	
	
	var data_notice_1 = Mock.mock(encodeURIComponent('http://g.cn#noticelist'),
	    Mock.mock({
	        'noticelist|1-9': [{
	            'title|+1': ['租赁合同纠纷', '故意伤害他人罪', '重大经济诈骗罪', '物权确认纠纷', '挂靠经营合同纠纷', '宅基地违建纠纷'],
	            'time|+1': Mock.mock('@datetime("yyyy-MM-dd HH:MM")'),
	            'uri|+1': [encodeURIComponent('http://g.cn#noticelist&notice=1'),encodeURIComponent('http://g.cn#noticelist&notice=2'),encodeURIComponent('http://g.cn#noticelist&notice=3'),encodeURIComponent('http://g.cn#noticelist&notice=4'),encodeURIComponent('http://g.cn#noticelist&notice=5')] 
	        }]
	    })
	);
	
	
	var data_live_page1 = Mock.mock('http://192.168.2.30:9080/json/live.html?PageIndex=1&PageSize=9', {
	    "data": null,
	    "errorCode": "",
	    "html": "",
	    "key": "",
	    "list": [
	        {
	            "caseInfoId": 2,
	            "caseInfoName": "测试案号1122",
	            "courtBeginTime": {
	                "date": 12,
	                "day": 4,
	                "hours": 0,
	                "minutes": 0,
	                "month": 4,
	                "nanos": 0,
	                "seconds": 0,
	                "time": 1462982400000,
	                "timezoneOffset": -480,
	                "year": 116
	            },
	            "courtEndTime": {
	                "date": 7,
	                "day": 6,
	                "hours": 0,
	                "minutes": 0,
	                "month": 4,
	                "nanos": 0,
	                "seconds": 0,
	                "time": 1462550400000,
	                "timezoneOffset": -480,
	                "year": 116
	            },
	            "cover": "min-iconfont-rocket-active.png",
	            "id": 11,
	            "liveCount": 1,
	            "liveStatus": 2,
	            "remark": "123",
	            "status": 1
	        },
	        {
	            "caseInfoId": 2,
	            "caseInfoName": "测试案号1122",
	            "courtBeginTime": {
	                "date": 12,
	                "day": 4,
	                "hours": 0,
	                "minutes": 0,
	                "month": 4,
	                "nanos": 0,
	                "seconds": 0,
	                "time": 1462982400000,
	                "timezoneOffset": -480,
	                "year": 116
	            },
	            "courtEndTime": {
	                "date": 26,
	                "day": 4,
	                "hours": 0,
	                "minutes": 0,
	                "month": 4,
	                "nanos": 0,
	                "seconds": 0,
	                "time": 1464192000000,
	                "timezoneOffset": -480,
	                "year": 116
	            },
	            "cover": "min-iconfont-rocket.png",
	            "id": 12,
	            "liveCount": 123,
	            "liveStatus": 0,
	            "remark": "",
	            "status": 1
	        },
	        {
	            "caseInfoId": 1,
	            "caseInfoName": "12311",
	            "courtBeginTime": {
	                "date": 12,
	                "day": 4,
	                "hours": 0,
	                "minutes": 0,
	                "month": 4,
	                "nanos": 0,
	                "seconds": 0,
	                "time": 1462982400000,
	                "timezoneOffset": -480,
	                "year": 116
	            },
	            "courtEndTime": {
	                "date": 21,
	                "day": 6,
	                "hours": 0,
	                "minutes": 0,
	                "month": 4,
	                "nanos": 0,
	                "seconds": 0,
	                "time": 1463760000000,
	                "timezoneOffset": -480,
	                "year": 116
	            },
	            "cover": "min-iconfont-rocket-active.png",
	            "id": 13,
	            "liveCount": 2,
	            "liveStatus": 1,
	            "remark": "",
	            "status": 1
	        }
	    ],
	    "message": "",
	    "query": {
	        "fields": [],
	        "orders": [
	            {
	                "asc": true,
	                "property": "courtBeginTime"
	            }
	        ],
	        "pageCount": 2,
	        "pageIndex": 1,
	        "pageSize": 9,
	        "recordCount": 3,
	        "recordEnd": 3,
	        "recordStart": 1
	    },
	    "success": true,
	    "uri": ""
	});
	
	var data_live_page2 = Mock.mock('http://192.168.2.30:9080/json/live.html?PageIndex=2&PageSize=5', {
	    "data": null,
	    "errorCode": "",
	    "html": "",
	    "key": "",
	    "list": [
	        {
	            "caseInfoId": 2,
	            "caseInfoName": "测试案号1122",
	            "courtBeginTime": {
	                "date": 12,
	                "day": 4,
	                "hours": 0,
	                "minutes": 0,
	                "month": 4,
	                "nanos": 0,
	                "seconds": 0,
	                "time": 1462982400000,
	                "timezoneOffset": -480,
	                "year": 116
	            },
	            "courtEndTime": {
	                "date": 7,
	                "day": 6,
	                "hours": 0,
	                "minutes": 0,
	                "month": 4,
	                "nanos": 0,
	                "seconds": 0,
	                "time": 1462550400000,
	                "timezoneOffset": -480,
	                "year": 116
	            },
	            "cover": "min-iconfont-rocket-active.png",
	            "id": 11,
	            "liveCount": 1,
	            "liveStatus": 1,
	            "remark": "123",
	            "status": 1
	        },
	        {
	            "caseInfoId": 2,
	            "caseInfoName": "测试案号1122",
	            "courtBeginTime": {
	                "date": 12,
	                "day": 4,
	                "hours": 0,
	                "minutes": 0,
	                "month": 4,
	                "nanos": 0,
	                "seconds": 0,
	                "time": 1462982400000,
	                "timezoneOffset": -480,
	                "year": 116
	            },
	            "courtEndTime": {
	                "date": 26,
	                "day": 4,
	                "hours": 0,
	                "minutes": 0,
	                "month": 4,
	                "nanos": 0,
	                "seconds": 0,
	                "time": 1464192000000,
	                "timezoneOffset": -480,
	                "year": 116
	            },
	            "cover": "min-iconfont-rocket.png",
	            "id": 12,
	            "liveCount": 123,
	            "liveStatus": 2,
	            "remark": "",
	            "status": 1
	        },
	        {
	            "caseInfoId": 1,
	            "caseInfoName": "12311",
	            "courtBeginTime": {
	                "date": 12,
	                "day": 4,
	                "hours": 0,
	                "minutes": 0,
	                "month": 4,
	                "nanos": 0,
	                "seconds": 0,
	                "time": 1462982400000,
	                "timezoneOffset": -480,
	                "year": 116
	            },
	            "courtEndTime": {
	                "date": 21,
	                "day": 6,
	                "hours": 0,
	                "minutes": 0,
	                "month": 4,
	                "nanos": 0,
	                "seconds": 0,
	                "time": 1463760000000,
	                "timezoneOffset": -480,
	                "year": 116
	            },
	            "cover": "min-iconfont-rocket-active.png",
	            "id": 13,
	            "liveCount": 2,
	            "liveStatus": 3,
	            "remark": "",
	            "status": 1
	        }
	    ],
	    "message": "",
	    "query": {
	        "fields": [],
	        "orders": [
	            {
	                "asc": true,
	                "property": "courtBeginTime"
	            }
	        ],
	        "pageCount": 2,
	        "pageIndex": 1,
	        "pageSize": 5,
	        "recordCount": 3,
	        "recordEnd": 3,
	        "recordStart": 1
	    },
	    "success": true,
	    "uri": ""
	});
	
	
	var data_video_page = Mock.mock('http://192.168.2.30:9080/json/video.html?PageIndex=1&PageSize=9', {
	    "data": null,
	    "errorCode": "",
	    "html": "",
	    "key": "",
	    "list": [
	        {
	            "caseInfoId": 1,
	            "caseInfoName": "12311",
	            "caseTitle": "",
	            "courtTime": null,
	            "cover": "2.jpg",
	            "fileName": "a.mp4",
	            "fileSize": 0,
	            "id": 4,
	            "remark": "test",
	            "status": 1,
	            "videoConvertStatus": 1,
	            "vodCount": 0
	        },
	        {
	            "caseInfoId": 1,
	            "caseInfoName": "12311",
	            "caseTitle": "testadd",
	            "courtTime": {
	                "date": 11,
	                "day": 3,
	                "hours": 13,
	                "minutes": 6,
	                "month": 4,
	                "nanos": 0,
	                "seconds": 59,
	                "time": 1462943219000,
	                "timezoneOffset": -480,
	                "year": 116
	            },
	            "cover": "2.jpg",
	            "fileName": "a.mp4",
	            "fileSize": 0,
	            "id": 5,
	            "remark": "test",
	            "status": 1,
	            "videoConvertStatus": 1,
	            "vodCount": 0
	        }
	    ],
	    "message": "",
	    "query": {
	        "fields": [],
	        "orders": [],
	        "pageCount": 32,
	        "pageIndex": 2,
	        "pageSize": 2,
	        "recordCount": 64,
	        "recordEnd": 4,
	        "recordStart": 3
	    },
	    "success": true,
	    "uri": ""
	});
	
	var data_album_page = Mock.mock('http://192.168.2.30:9080/json/album.html?PageIndex=1&PageSize=9', {
	    "data": null,
	    "errorCode": "",
	    "html": "",
	    "key": "",
	    "list": [
	        {
	            "cover": "2",
	            "id": 10,
	            "name": "1",
	            "remark": "3",
	            "status": 1
	        },
	        {
	            "cover": "5",
	            "id": 11,
	            "name": "4",
	            "remark": "6",
	            "status": 1
	        }
	    ],
	    "message": "",
	    "query": {
	        "fields": [],
	        "orders": [],
	        "pageCount": 1,
	        "pageIndex": 1,
	        "pageSize": 2,
	        "recordCount": 2,
	        "recordEnd": 2,
	        "recordStart": 1
	    },
	    "success": true,
	    "uri": ""
	});
	
	
	
	
	
	var data_notice_page = Mock.mock('http://192.168.2.30:9080/json/notice.html?PageIndex=1&PageSize=9',{
	    "data": null,
	    "errorCode": "",
	    "html": "",
	    "key": "",
	    "list": [
	        {
	            "beginDate": {
	                "date": 9,
	                "day": 1,
	                "hours": 0,
	                "minutes": 0,
	                "month": 4,
	                "nanos": 0,
	                "seconds": 0,
	                "time": 1462723200000,
	                "timezoneOffset": -480,
	                "year": 116
	            },
	            "caseInfoId": 13,
	            "caseInfoName": "2",
	            "content": "sdfsd",
	            "endDate": {
	                "date": 19,
	                "day": 4,
	                "hours": 0,
	                "minutes": 0,
	                "month": 4,
	                "nanos": 0,
	                "seconds": 0,
	                "time": 1463587200000,
	                "timezoneOffset": -480,
	                "year": 116
	            },
	            "id": 1,
	            "noticeTypeId": 1,
	            "noticeTypeName": "开庭公告",
	            "status": 1,
	            "title": "222222222"
	        },
	        {
	            "beginDate": {
	                "date": 9,
	                "day": 1,
	                "hours": 0,
	                "minutes": 0,
	                "month": 4,
	                "nanos": 0,
	                "seconds": 0,
	                "time": 1462723200000,
	                "timezoneOffset": -480,
	                "year": 116
	            },
	            "caseInfoId": 2,
	            "caseInfoName": "测试案号1122",
	            "content": "1",
	            "endDate": {
	                "date": 27,
	                "day": 5,
	                "hours": 0,
	                "minutes": 0,
	                "month": 4,
	                "nanos": 0,
	                "seconds": 0,
	                "time": 1464278400000,
	                "timezoneOffset": -480,
	                "year": 116
	            },
	            "id": 2,
	            "noticeTypeId": 1,
	            "noticeTypeName": "开庭公告",
	            "status": 1,
	            "title": "123"
	        }
	    ],
	    "message": "",
	    "query": {
	        "fields": [],
	        "orders": [
	            {
	                "asc": false,
	                "property": "beginDate"
	            }
	        ],
	        "pageCount": 1,
	        "pageIndex": 1,
	        "pageSize": 2,
	        "recordCount": 2,
	        "recordEnd": 2,
	        "recordStart": 1
	    },
	    "success": true,
	    "uri": ""
	})

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/*
	 * @Author: dontry
	 * @Date:   2016-05-04 09:10:54
	 * @Last Modified by:   dontry
	 * @Last Modified time: 2016-05-12 17:22:46
	 */
	
	'use strict';
	var Backbone = __webpack_require__(2);
	var Mustache = __webpack_require__(5);
	var Utils = __webpack_require__(6);
	
	var app = app || {};
	
	/*-------------------Model------------------------*/
	app.Live = Backbone.Model.extend({
	    defaults: {
	        id: 'null',
	        caseInfoId: 'null',
	        caseInfoName: 'Unknown',
	        link: 'Unknown',
	        liveStatus: 'Unknown',
	        liveCount: 0,
	        cover: 'No_Live_Cover',
	        coverHash: 'Unknown',
	        caseTitle: 'No title',
	        courtBeginTime: '1900-01-01 00:00:00',
	        courtEndTime: '1900-01-01 00:00:00',
	        fileName: 'Unknown',
	        fileNameHash: 'Unknown',
	        status: 'null',
	        remark: 'No comment',
	        isPlayable: true,
	        logo: false,
	        uri: 'Unknown'
	    },
	    initialize: function(attrs) {
	        var error = [];
	        // if (error.length != 0) console.log(error);
	        this.attributes.link = '#container-case/case' + attrs.id;
	        this.attributes.courtBeginTime = new Date(attrs.courtBeginTime.time).format(Constants.TIME_FORMAT);
	        this.attributes.courtEndTime = new Date(attrs.courtEndTime.time).format(Constants.TIME_FORMAT);
	        this.attributes.uri = Utils.encodeParamURI({
	            host: Constants.HOST,
	            pathname: 'json/liveplay.html',
	            search: 'id=' + attrs.id
	        });
	        if (typeof attrs.liveStatus === 'number') {
	            switch (attrs.liveStatus) {
	                case 0:
	                    this.attributes.logo = true;
	                    this.attributes.liveStatus = '等待开庭';
	                    break;
	                case 1:
	                    this.attributes.logo = true;
	                    this.attributes.liveStatus = '正在庭审中';
	                    break;
	                case 2:
	                    this.attributes.liveStatus = '休庭';
	                    this.attributes.coverHash = '../assets/imgs/pic_video_02.png';
	                    this.attributes.isPlayable = false;
	                    break;
	                case 3:
	                    this.attributes.liveStatus = '闭庭';
	                    this.attributes.coverHash = '../assets/imgs/pic_video_03.png';
	                    this.attributes.isPlayable = false;
	                    break;
	                case 4:
	                    this.attributes.liveStatus = '归档';
	                    this.attributes.coverHash = '../assets/imgs/pic_video_04.png';
	                    this.attributes.isPlayable = false;
	                    break;
	            }
	        }
	    }
	});
	
	app.Video = Backbone.Model.extend({
	    defaults: {
	        id: 'null',
	        caseInfoId: 'null',
	        caseInfoName: 'Unknown',
	        link: 'Unknown',
	        courtTime: '1900-01-01 00:00:00',
	        cover: 'No_Video_Cover',
	        coverHash: 'Unknown',
	        remark: 'No comment',
	        status: 'No status',
	        videoConvertStatus: 'Unknown',
	        vodCount: 0
	    },
	    initialize: function(attrs) {
	        this.attributes.link = '#container-case/case' + attrs.id;
	        this.attributes.courtTime = new Date(attrs.courtTime.time).format(Constants.TIME_FORMAT);
	        this.attributes.uri = Utils.encodeParamURI({
	            host: Constants.HOST,
	            pathname: 'json/videoplay.html',
	            search: 'id=' + attrs.id
	        });
	    }
	});
	
	app.Album = Backbone.Model.extend({
	    defaults: {
	        id: 'null',
	        cover: 'No_Picture',
	        'name': 'Unknown',
	        'remark': 'No comment',
	        'status': 'No status',
	        'uri': 'Unknown'
	    },
	    initialize: function(listId, attrs) {
	        this.attributes.link = '#container-case/case' + attrs.id;
	        this.attributes.uri = Utils.encodeParamURI({
	            host: Constants.HOST,
	            pathname: 'json/albumplay.html',
	            search: 'id=' + attrs.id
	        });
	    }
	});
	
	/**
	 * [Case description 案件视频播放信息]
	 * @type {[type]}
	 */
	app.Case = Backbone.Model.extend({
	    defaults: {
	        id: 'null',
	        reason: 'Unknown',
	        plaintiff: 'Unknown',
	        defendant: 'Unknown',
	        chife_judge: 'Unknown',
	        acting_judge: 'Unknown',
	        clerk: 'Unknown',
	        time: 'Unknown',
	        location: 'Unknown',
	        data: 'Unknown'
	    }
	});
	
	/**
	 * [initialize description 公告信息]
	 * @return {[type]}
	 */
	app.Notice = Backbone.Model.extend({
	    defaults: {
	        id: 'Unknown',
	        title: 'No title',
	        time: 'Unknown',
	        caseInfoId: 'null',
	        title: 'No title',
	        noticeTypeName: 'Unknown',
	        content: 'Unknown',
	        uri: 'Unknown'
	    },
	    initialize: function(attrs) {
	        this.attributes.time = new Date(attrs.beginDate.time).format('yyyy-MM-dd hh:mm:ss');
	    }
	});
	
	
	
	/*-------------------Collection------------------------*/
	app.Lives = Backbone.Collection.extend({
	    model: app.Live
	})
	
	app.Videos = Backbone.Collection.extend({
	    model: app.Video
	});
	
	app.Albums = Backbone.Collection.extend({
	    model: app.Album
	});
	
	app.Notices = Backbone.Collection.extend({
	    model: app.Notice
	});
	
	
	
	
	
	/*-------------------Item View------------------------*/
	app.LiveView = Backbone.View.extend({
	    tagName: 'div',
	    className: 'col-xs-6 col-lg-4 f-fl',
	    template: function(model) {
	        var template = $('#live-template').html();
	        Mustache.parse(template);
	        return Mustache.render(template, model);
	    },
	    render: function() {
	        this.$el.html(this.template(this.model.attributes));
	        if (!this.model.attributes.isPlayable) {
	            this.$el.find('.picwrap').addClass('f-na');
	        }
	
	        return this;
	    }
	})
	
	app.VideoView = Backbone.View.extend({
	    tagName: 'div',
	    className: 'col-xs-6 col-lg-4 f-fl',
	    template: function(model) {
	        var template = $('#video-template').html();
	        Mustache.parse(template);
	        return Mustache.render(template, model);
	    },
	    render: function() {
	        this.$el.html(this.template(this.model.attributes));
	
	        return this;
	    }
	});
	
	app.AlbumView = Backbone.View.extend({
	    tagName: 'div',
	    className: 'col-xs-6 col-lg-4 f-fl',
	    template: function(model) {
	        var template = $('#album-template').html();
	        Mustache.parse(template);
	        return Mustache.render(template, model);
	    },
	    render: function() {
	        this.$el.html(this.template(this.model.attributes));
	        return this;
	    }
	});
	
	app.CaseView = Backbone.View.extend({
	    el: '#container-case',
	    initialize: function(initialCase) {
	        this.model = new app.Case(initialCase);
	        this.render();
	    },
	    template: function(model) {
	        var template = $('#case-template').html();
	        Mustache.parse(template);
	        return Mustache.render(template, model);
	    },
	    render: function() {
	        this.$el.html(this.template(this.model.attributes));
	
	        return this;
	    }
	});
	
	app.NoticeView = Backbone.View.extend({
	    tagName: 'li',
	    className: 'row item-case',
	    template: function(model) {
	        var template = $('#notice-template').html();
	        Mustache.parse(template);
	        return Mustache.render(template, model);
	    },
	    render: function() {
	        this.$el.html(this.template(this.model.attributes));
	
	        return this;
	    }
	});
	
	
	
	/*-------------------List View------------------------*/
	app.LiveListView = Backbone.View.extend({
	    el: '#live',
	    initialize: function(initialItems) {
	        this.collection = new app.Lives(initialItems);
	        this.render();
	    },
	    render: function() {
	        if (!Constants.IS_MOBILE) {
	            this.$el.html('');
	        }
	        this.collection.each(function(item) {
	            this.renderItem(item);
	        }, this);
	    },
	    renderItem: function(item) {
	        var itemView = new app.LiveView({ model: item });
	        this.$el.append(itemView.render().el);
	    }
	});
	
	app.VideoListView = Backbone.View.extend({
	    el: '#video',
	    initialize: function(initialItems) {
	        this.collection = new app.Videos(initialItems);
	        this.render();
	    },
	    render: function() {
	        if (!Constants.IS_MOBILE) {
	            this.$el.html('');
	        }
	        this.collection.each(function(item) {
	            this.renderItem(item);
	        }, this);
	    },
	    renderItem: function(item) {
	        var itemView = new app.VideoView({ model: item });
	        this.$el.append(itemView.render().el);
	    }
	});
	
	app.AlbumListView = Backbone.View.extend({
	    el: '#album',
	    initialize: function(initialItems) {
	        this.collection = new app.Albums(initialItems);
	        this.render();
	    },
	    render: function() {
	        if (!Constants.IS_MOBILE) {
	            this.$el.html('');
	        }
	        this.collection.each(function(item) {
	            this.renderItem(item);
	        }, this);
	    },
	    renderItem: function(item) {
	        var itemView = new app.AlbumView({ model: item });
	        this.$el.append(itemView.render().el);
	    }
	});
	
	app.NoticeListView = Backbone.View.extend({
	    el: '#noticelist',
	    initialize: function(initialNotices) {
	        this.collection = new app.Notices(initialNotices);
	        this.render();
	    },
	    render: function() {
	        this.$el.html('');
	        this.collection.each(function(item) {
	            this.renderNotice(item);
	        }, this);
	    },
	    renderNotice: function(item) {
	        var noticeView = new app.NoticeView({ model: item });
	        this.$el.append(noticeView.render().el);
	    }
	});
	
	var Workspace = Backbone.Router.extend({
	    routes: {
	        'container-case/case:id': 'showCase',
	        'video': 'videoList',
	        'live': 'liveList',
	        'album': 'albumList',
	        '*other': 'liveList'
	    },
	    showCase: function(id) {
	        $.cachedScript('./assets/jwplayer/jwplayer.js').done(function() {
	            if ($('#container-case').html() === '') {
	                $('.videolist').hide();
	                $('.pagination-sm').hide();
	                $(window).off('scroll');
	                $('#container-case').show();
	                var uri = $('#case' + id).data('uri');
	                Utils.loadCase(uri, function(data) {
	                    new app.CaseView(data);
	                });
	                // console.log('reload');
	            }
	        });
	    },
	    videoList: function() {
	        this.showMainList('#video', function(id, data){
	            new app.VideoListView(id, data);
	        });
	    },
	    liveList: function() {
	        this.showMainList('#live', function(id, data){
	            new app.LiveListView(id, data);
	        });
	    },
	    albumList: function() {
	        this.showMainList('#album', function(id, data){
	            new app.AlbumListView(id, data);
	        });
	    },
	    showMainList: function(id, callback) {
	        $('a[href="' + id + '"]').parent().addClass('active').siblings().removeClass('active');
	        $('#container-case').html('');
	        $('#container-case').hide();
	        $(id).show().siblings('.videolist').hide();
	        $(id).html('');
	        Utils.loadMainList(id, 1, callback);
	    }
	});
	
	var appRouter = new Workspace();
	
	
	Backbone.history.start();
	module.exports = app;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);
//# sourceMappingURL=index.js.map