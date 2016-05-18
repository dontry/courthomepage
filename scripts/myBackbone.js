/*
 * @Author: dontry
 * @Date:   2016-05-04 09:10:54
 * @Last Modified by:   dontry
 * @Last Modified time: 2016-05-12 17:22:46
 */

'use strict';
var Backbone = require('backbone');
var Mustache = require('mustache');
var Utils = require('./utils');

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
