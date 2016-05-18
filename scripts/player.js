/*
 * @Author: dontry
 * @Date:   2016-04-25 16:28:12
 * @Last Modified by:   dontry
 * @Last Modified time: 2016-05-03 18:57:49
 */
// var jwplayer = require('jwplayer/jwplayer.js');

'use strict';
$(document).ready(function() {
    var mobileReg = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i; //判断是否移动客户端;

    $.ajax({
        type: 'GET',
        url: 'http://g.cn',
        dataType: 'json',
        success: function(data) {
            if (data.success) {
                console.log("请求成功!");
                if (mobileReg.test(navigator.userAgent)) {  //若是移动端则采用HLS格式播放
                    var resource = data.data.HLS;
                } else {
                    var resource = data.data.RTMP || data.data.RTSP;
                }
                if (!resource) {
                    alert("无法播放");
                    return false;
                }
                var myPlayer = jwplayer("OnlinePlayer").setup({
                    primary: "flash",
                    // flashplayer: "<%= Request.WebPath()+" / Tools / JWPlayer7player.flash.swf " %>",
                    flashplayer: "../assets/tools/jwplayer.flash.swf",
                    skin: {
                        name: "glow",
                        // url: "<%= Request.WebPath()+" / Tools / JWPlayer7 / skins / glow.css " %>"
                        url: "../assets/skins/glow.css"
                    },
                    file: resource,
                    autostart: true,
                    screencolor: '000000',
                    wmode: 'transparent',
                    height: 500,
                    width: 780,
                });
            } else {
                alert('出现错误:' + data.message);
            }
        },
        error: function(jqXHR) {
            alert('发生错误:' + jqXHR.status);
        },
    });
});
