/*
 * @Author: dontry
 * @Date:   2016-05-03 10:41:52
 * @Last Modified by:   dontry
 * @Last Modified time: 2016-05-18 16:14:50
 */

'use strict';
var Mock = require('mockjs');
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