<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/common/namespace.jsp"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="screen-orientation" content="portrait">
    <meta name='x5-orientation' content="portrait">
    <title>法院外网直播平台</title>
<link href="css/index.css" rel="stylesheet"></head>

<body>
    <header>
        <div class="top-banner">
            <a href="index.html">
                <div class="bg-img"></div>
            </a>
        </div>
    </header>
    <div class="container-fluid">
        <div class="row row-offcanvas row-offcanvas-right">
            <div class="main col-xs-12 col-sm-9">
                <ul class="col-xs-12 nav nav-tabs tablist">
                    <li role="presentation" class="col-xs-4 tab active"><a href="#live">直播</a></li>
                    <li role="presentation" class="col-xs-4 tab"><a href="#video">点播</a></li>
                    <li role="presentation" class="col-xs-4 tab"><a href="#album">期刊</a></li>
                </ul>
                <div class="row videolist" id="live" style="display:block"></div>
                <div class="row videolist" id="video"></div>
                <div class="row videolist" id="album"></div>
                <div class="container-case" id="container-case"></div>
                <ul class="pagination-sm" id="videolist-pagination">
                </ul>
                <div id="loading-footer" class="wrap-loading">
                    <h4 id="tip-loading" class="tip-loading"></h4>
                    <i id="img-loading" class="ui-loading"></i>
                </div>
            </div>
            <div class="cols-xs-6 col-sm-3 sidebar sidebar-offcanvas" id="sidebar">
                <div class="visible-xs">
                    <button class="btn btn-primary btn-md" type="button" data-toggle="offcanvas">直播预告</button>
                </div>
                <div class="sidebar-container">
                    <div class="wrap-title">
                        <h4 class="title">直播预告</h4></div>
                    <ul class="list-case" id="noticelist">
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
    <footer>
        粤ICP备05092498号 备案编号： 4401040101420 @copyright2003 广州市中级人民法院
    </footer>
    <script type="x-tmpl-mustache" id="video-template">
        <div class="wrapper-item">
            <a class="picwrap" id={{id}} href={{link}} data-uri={{fileName}}>
                {{#isLive}}
                <div class="mask">
                    <div class="wrapper-tip">
                        {{#logo}}
                        <i class="icon iconfont">&#xe602;</i>
                        {{/logo}}
                        <h4>{{liveStatus}}</h4>
                    </div>
                </div>
                {{/isLive}}
                <img class="pic" src={{cover}} alt="video_cover">
            </a>
            <div class="content">
                <h4 class="title">{{caseTitle}}</h4>
                <h5 class="time">时间：{{time}}</h5>
            </div>
        </div>
    </script>
    <script type="x-tmpl-mustache" id="album-template">
        <div class="wrapper-item">
            <a href="" class="picwrap" id={{id}} href={{link}}>
                <img src={{cover}} alt="" class="pic" alt="album_cover">
            </a>
            <div class="content">
                <h4 class="title">{{name}}</h4>
            </div>
        </div>
    </script>
    <script type="x-tmpl-mustache" id="case-template">
        <div class="wrapper-case">
            <h3 class='case-title'>{{caseTitle}}</h3>
            <div class="wrapper-player">
                <video class="video-player jwplayer" id="OnlinePlayer" controls preload>
                </video>
            </div>
            <div class="case-info">
                <h5 class="id">案号：{{id}}</h5>
                <h5 class="reason">案由：{{reason}}</h5>
                <h5 class="plaintiff">原告：{{plaintiff}}</h5>
                <h5 class="defendant">被告：{{defendant}}</h5>
                <h5 class="chief-judge">审判长: {{chief_judge}}</h5>
                <h5 class="acting-judge">代理审判员：{{acting_judge}}</h5>
                <h5 class="clerk">书记员：{{cleark}}</h5>
                <h5 class="time">时间：{{time}}</h5>
                <h5 class="location">地点：{{location}}</h5>
            </div>
            <hr>
            <div class="case-intro">
                <h4 class="title">案情简介</h4>
                <article>
                    {{content}}
                </article>
            </div>
            <div class="btn btn-default back">返回</div>
        </div>
    </script>
    <script type="x-tmpl-mustache" id="notice-template">
        <h5 class="title"><span class="dot"></span>  <a href={{uri}}>{{title}}</a></h5>
        <h6 class="timestamp"> <i class="icon iconfont">&#xe600;</i>{{time}}</h6>
    </script>
<script src="js/vendor.js"></script><script src="js/index.js"></script></body>

</html>
