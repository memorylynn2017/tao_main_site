
##### 一、以下都在NODE.JS环境下搭建起来的，其中每一个site都是由自己独立的EXPRESS及其依赖启动起来的;
 ##### 1、主站会在express配置生成一个类static的静态资源文件夹及index.html出来，并根据业务需求调用taoyi_main_site_api分配的所有API接口;
 
 ##### 2、taoyi_main_site 主站目录，须按网站原型来组织其文件目录结构与界面生成;其根目录下有src（分controllers文件目录、router.js文件）、template（handlebar模板文件目录，先根据DEMO分layouts、partials、index.handlebars三个文件,以后再按页面扩展）;
 
 ##### 3、taoyi_main_site_api 配置微服务，须在这里定义一个service_define.json（生成业务需求）发送给控制中心(service_center)用来分配API接口;

##### 二、待续...
##### 首先刚开始写模板的时候觉得模板会很多，这是因为前端原型及业务需求不明确所造成的。通过模板+数据源首页的控制渲染后就会慢慢明白：很多公共组件都是通过路由请求渲染出来的，组件与组件之间是可以互相依赖及组合的等等。
##### 第一、handlebar自身有一套类JS逻辑的轻量极语法结构，比如当一定条件下该模板是显示还是隐藏、当标题是哪一个的时候遍历出什么内容等都可以通过自身内置helper或者自定义helper来决定。虽然简单，用起来灵活度要求较高;
##### 第二、当分好各个模板命名空间之后，各个公共的JS及CSS就可以分离出来了，之前是由于模板多不好分，到一定阶段就能根据界面功能组件化生产了。怎样分离它们，由于在此环境中还没有搭配构建前端环境的grunt或是WEBPACK等工具，静态资源先一律放在express static托管上面，注意是根据共用组件命名来分类js和css，会变成重要的初始化CSS这些又可以到后面可以提取到home.handlebars或是index.handlebar上面，因为是每个模板都要用到的。

