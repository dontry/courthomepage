/*
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