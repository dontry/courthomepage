/*
 * @Author: dontry
 * @Date:   2016-04-29 12:00:57
 * @Last Modified by:   dontry
 * @Last Modified time: 2016-05-05 16:05:38
 */
var app = app || {};

Video = Backbone.Model.extend({
    defaults: {
        status: 'Unknown',
        pic: 'No Picture',
        logo: false,
        title: 'No title',
        time: 'Unknown',
        location: 'Unknown',
        defendant: 'Unknown',
        plaintiff: 'Unknown'
    },
    initialize: function(attributes) {
        var error = [];
        if (!attrs.status) {
            error.push('Video status not available');
        }
        if (!attrs.pic) {
            error.push('Video picture not available');
        }
        if (!attrs.title) {
            error.push('Video title not available');
        }
        if (!attrs.time) {
            error.push('Video time not available');
        }
        if (!attrs.location) {
            error.push('Video location not available');
        }
        if (!attrs.defendant) {
            error.push('defendant not available');
        }
        if (!attrs.plaintiff) {
            error.push('plaintiff not available');
        }
        console.log(error);
        
        switch(attributes.status){
            case "正在庭审中":
                this.attributes.logo = attributes.status === "正在庭审中" ? true : false;
                break;
            case "等待开庭":
                this.attributes.pic = "../assets/imgs/pic_video_02.png";
                break;
            case "闭庭中":
                this.attributes.pic = "../assets/imgs/pic_video_03.png";
                break;
            case "归档":
                this.attributes.pic = "../assets/imgs/pic_video_04.png";
                break;
        }
    },
    validate: function(attrs) {
        var error = [];
        if (!attrs.status) {
            error.push('Video status not available');
        }
        if (!attrs.pic) {
            error.push('Video picture not available');
        }
        if (!attrs.title) {
            error.push('Video title not available');
        }
        if (!attrs.time) {
            error.push('Video time not available');
        }
        if (!attrs.location) {
            error.push('Video location not available');
        }
        if (!attrs.defendant) {
            error.push('defendant not available');
        }
        if (!attrs.plaintiff) {
            error.push('plaintiff not available');
        }

        return error;
    }
});

module.exports = Video;