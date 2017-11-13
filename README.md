
#### 一、以下都在NODE.JS环境下搭建起来的，其中每一个site都是由自己独立的EXPRESS及其依赖启动起来的;
 1、主站会在express配置生成一个类static的静态资源文件夹及index.html出来，并根据业务需求调用taoyi_main_site_api分配的所有API接口;
 
 2、taoyi_main_site 主站目录，须按网站原型来组织其文件目录结构与界面生成;其根目录下有src（分controllers文件目录、router.js文件）、template（handlebar模板文件目录，先根据DEMO分layouts、partials、index.handlebars三个文件,以后再按页面扩展）;
 
 3、taoyi_main_site_api 配置微服务，须在这里定义一个service_define.json（生成业务需求）发送给控制中心(service_center)用来分配API接口;

#### 二、待续...

