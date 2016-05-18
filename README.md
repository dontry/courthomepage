# 法院视频直播首页

---
### 所需主要框架插件
- **npm**   下载依赖安装包工具
- **Webpack** 自动化打包配置工具
- **Backbone** MVC框架
- **Underscore** Backbone用到的javascript基础库
- **Mustache** 动态模板
- **Mockjs** 可以模拟Ajax通讯


#### npm
通过命令
> npm install --save-dev package_name

下载依赖包

---

#### (Webpack)[http://webpack.github.io/]
通过Webpack完成自动化打包配置工作，可分别开发模式和发布模式，开发模式可在本机启动服务器运行。

##### devtool
由于webpack打包js压缩后，无法通过源文件调试，通过source－map可以将打包后的js文件还原为原来的排版格式，方便调试
- 发布版: source-map
- 开发版: cheap-eval-source-map

##### entry
将指定的入口文件如 *entry.js*内的文件进行打包，遵循Commonjs规范

##### output
打包及入口文件最终输出的路径配置
- **path** 配置路径
- **filename** 文件名， 可选参数： id, hash, name

##### plugins：
- **html-webpack-plugin**  可以为html静态文件各自配置相应的js、css文件
- **extract-text-webpack-plugin** 将指定引入的js、css打包加入到html中
- **webpack-optimize-CommonsChunkPlugin**  将入口文件相同的js文件进行打包
- **webpack.ProvidePlugin**  可以将依赖包用变量代替， 例如： *$: 'jquery'*

##### module：
module用于处理非js类型的文件或资源
- **css-loader** css的加载器
- **style-loader** 样式加载器，一般和css-loader同时引入
- **url-loader** 可以将一些小型图片、文字样式转换为base64的data-url，减少网络请求次数
- **expose** 可以将依赖包配置到全局环境

---

#### [Backbone](http://caibaojian.com/backbone/)
Backbone是一个典型的MVC框架，主要分为4个主要的模块：model, collection, view, router.

[Backbone教程](https://addyosmani.com/backbone-fundamentals/):一个很全面的实用backbone开发教程

##### Model
model模块用来处理从服务器接收的数据。例如可以处理JSON格式的数据，构造成所需的Model。
- defaults
- initialize
- validate

##### Collection
collection模块将相同的model变为一个集合，方便批量处理相同的model

##### View
View可以将model的数据通过模板渲染为制定的视图
- tagName
- className
- el
- template
- render

##### Router
Router可以根据指定的链接运行相应的函数
- routes

---


#### (Mustache)[https://github.com/janl/mustache.js]
Mustache是一个动态模板框架，变量用{{ param }}表示：
eg： 
```html 
<script type="x-tmpl-mustache" id="live-template">
        <div class="wrapper-item">
            <a class="picwrap" id={{id}} href={{link}} data-uri={{uri}}>
                <div class="mask">
                    <div class="wrapper-tip">
                        {{#logo}}
                        <i class="icon iconfont">&#xe602;</i>
                        {{/logo}}
                        <h4>{{liveStatus}}</h4>
                    </div>
                </div>
                <img class="pic" src={{coverHash}} alt={{cover}}>
            </a>
            <div class="content">
                <h4 class="title">{{caseInfoName}}</h4>
                <h5 class="time">开庭时间：{{courtBeginTime}}</h5>
                <h5 class="time">闭庭时间：{{courtEndTime}}</h5>
            </div>
        </div>
    </script>

```

>{{#param}} {{/param}}  当param为true时显示， param为false时不显示

---

#### [Mockjs](http://mockjs.com/)
Mockjs可以用来模拟Ajax的通讯

eg:
```javascript
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
```

