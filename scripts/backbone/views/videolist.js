/*
 * @Author: dontry
 * @Date:   2016-04-29 13:39:45
 * @Last Modified by:   dontry
 * @Last Modified time: 2016-05-03 17:51:06
 */

var app = app || {};

VideoListView = Backbone.View.extend({
    // el: '#livelist',
    initialize: function(selector, initialVideos) {
        this.setElement(selector);
        this.collection = new app.Videos(initialVideos);
        this.render();
    },
    render: function() {
        this.$el.html('');
        this.collection.each(function(item) {
            this.renderVideo(item);
        }, this);
    },
    renderVideo: function(item) {
        var videoView = new app.VideoView({model: item});
        this.$el.append(videoView.render().el);
    }
});

module.exports = VideoListView;