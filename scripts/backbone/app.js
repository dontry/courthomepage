/*
 * @Author: dontry
 * @Date:   2016-04-25 11:07:10
 * @Last Modified by:   dontry
 * @Last Modified time: 2016-05-05 09:03:37
 */
// var app = app || {};



$(document).ready(function() {
    var videos = {
        '#livelist' : [
            { status: '正在庭审中', title: '租赁合同纠纷', time: '2016-1-25', location: '广州', plaintiff: '陈某', defendant: '李某' },
            { status: '闭庭中', title: '租赁合同纠纷', time: '2016-1-25', location: '广州', plaintiff: '陈某', defendant: '李某' },
            { status: '等待开庭', title: '租赁合同纠纷', time: '2016-1-25', location: '广州', plaintiff: '陈某', defendant: '李某' },
            { status: '闭庭中', title: '租赁合同纠纷', time: '2016-1-25', location: '广州', plaintiff: '陈某', defendant: '李某' },
            { status: '闭庭中', title: '租赁合同纠纷', time: '2016-1-25', location: '广州', plaintiff: '陈某', defendant: '李某' },
            { status: '归档', title: '租赁合同纠纷', time: '2016-1-25', location: '广州', plaintiff: '陈某', defendant: '李某' }
        ],

        '#vodlist': [
            { status: '闭庭中', title: '重大经济诈骗罪', time: '2016-1-25', location: '广州', plaintiff: '周某', defendant: '李某' },
            { status: '闭庭中', title: '重大经济诈骗罪', time: '2016-1-25', location: '广州', plaintiff: '陈某', defendant: '李某' },
            { status: '闭庭中', title: '重大经济诈骗罪', time: '2016-1-25', location: '广州', plaintiff: '陈某', defendant: '李某' },
            { status: '闭庭中', title: '重大经济诈骗罪', time: '2016-1-25', location: '广州', plaintiff: '陈某', defendant: '李某' },
            { status: '闭庭中', title: '租赁合同纠纷', time: '2016-1-25', location: '广州', plaintiff: '陈某', defendant: '李某' },
            { status: '归档', title: '租赁合同纠纷', time: '2016-1-25', location: '广州', plaintiff: '陈某', defendant: '李某' }
        ],

        '#journallist': [
            { status: '等待开庭', title: '重大经济诈骗罪', time: '2016-1-25', location: '广州', plaintiff: '周某', defendant: '李某' },
            { status: '等待开庭', title: '重大经济诈骗罪', time: '2016-1-25', location: '广州', plaintiff: '陈某', defendant: '李某' },
            { status: '闭庭中', title: '重大经济诈骗罪', time: '2016-1-25', location: '广州', plaintiff: '陈某', defendant: '李某' },
            { status: '闭庭中', title: '重大经济诈骗罪', time: '2016-1-25', location: '广州', plaintiff: '陈某', defendant: '李某' },
            { status: '等待开庭', title: '租赁合同纠纷', time: '2016-1-25', location: '广州', plaintiff: '陈某', defendant: '李某' },
            { status: '归档', title: '租赁合同纠纷', time: '2016-1-25', location: '广州', plaintiff: '陈某', defendant: '李某' }
        ]
    };



    new app.VideoListView('#livelist', videos['#livelist']);
    $('[data-toggle=offcanvas]').click(function() {
        $('.row-offcanvas').toggleClass('active');
    });
    $('.tab').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        var id = $(this).find('a').attr('href');
        $(id).show().siblings('.videolist').hide();
        new app.VideoListView(id, videos[id]);
    });
});
