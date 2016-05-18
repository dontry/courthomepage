/*
* @Author: dontry
* @Date:   2016-04-29 12:16:47
* @Last Modified by:   dontry
* @Last Modified time: 2016-05-03 17:51:03
*/
var app = app || {};

VideoView = Backbone.View.extend({
    tagName: 'div',
    className: 'col-xs-6 col-lg-4 f-fl',
    template: function(model){
        var template = $('#video-template').html();
        Mustache.parse(template);
        return Mustache.render(template, model);
    },
    render: function() {
        this.$el.html(this.template(this.model.attributes));

        return this;
    }
});

module.exports = VideoView;
