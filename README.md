# tao_main_site

1、建立主站的第一个工作是懂得怎样利用NODE环境中Express服务器来渲染页面。请借鉴网上的教程用WEBPACK构建工具搭建出一个基本网站架构；
2、可以先参考如下文章：http://blog.csdn.net/molong421/article/details/51647454;
3、或者你有更好的建议文章也请把链接放在这里:
(1)https://fraserxu.me/2013/09/12/Using-Handlebarsjs-with-Expressjs/
(2)https://www.cnblogs.com/qieguo/p/5811988.html（Handlebars 模板引擎之前后端用法）
4、第四步进入正式开发阶段，如果懂得Hanldle.bar渲染界面原理，先暂时不考虑中间内容区域的渲染，中间内容先由HMTL5界面设计师设计出来响应式先。。
主要进行公共组件部分渲染，把index.html共有的头部及尾部写出来。。以及全部商品的菜单导航！

|-app.js
|-node_modules
| |--express
| |--handlebars
| |--hbs
| |--less-middleware
| |--nodemon
| |--request
|-package.json
|-public
| |--images
| |--javascripts
| |   --app.js
| |--lib
| |   --font
| |   --js
| |   --stylesheets
| |--routes
| |   --github.js
| |   --index.js
| |--views
  |   --index.hbs
  |   --orgs.hbs
  |   --partials
    |--footer.hbs
    |--header.hbs
