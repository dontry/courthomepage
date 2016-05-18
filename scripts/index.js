/*
 * @Author: dontry
 * @Date:   2016-05-05 09:02:52
 * @Last Modified by:   dontry
 * @Last Modified time: 2016-05-12 17:11:30
 */

'use strict';
var Utils = require('./utils');

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
