/*
* @Author: dontry
* @Date:   2016-04-29 12:15:55
* @Last Modified by:   dontry
* @Last Modified time: 2016-05-03 17:50:17
*/

var app = app || {};

Videos = Backbone.Collection.extend({
    model: app.Video
});

module.exports = Videos;