(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{586:function(s,v,t){s.exports=t.p+"assets/img/image-20210905160212190.6dab46fb.png"},587:function(s,v,t){s.exports=t.p+"assets/img/image-20210905224135389.c0c4258a.png"},588:function(s,v,t){s.exports=t.p+"assets/img/image-20210905224253086.59d869c3.png"},589:function(s,v,t){s.exports=t.p+"assets/img/image-20210905233141867.1e8eb35d.png"},654:function(s,v,t){"use strict";t.r(v);var r=t(17),a=Object(r.a)({},(function(){var s=this,v=s.$createElement,r=s._self._c||v;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"springmvc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#springmvc"}},[s._v("#")]),s._v(" SpringMVC")]),s._v(" "),r("h2",{attrs:{id:"_1、创建项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、创建项目"}},[s._v("#")]),s._v(" 1、创建项目")]),s._v(" "),r("h3",{attrs:{id:"实现步骤"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实现步骤"}},[s._v("#")]),s._v(" 实现步骤")]),s._v(" "),r("ol",[r("li",[s._v("新建web maven工程")]),s._v(" "),r("li",[s._v("加入依赖\n"),r("ol",[r("li",[s._v("spring-webmvc依赖")]),s._v(" "),r("li",[s._v("jsp，servlet依赖")])])]),s._v(" "),r("li",[r("strong",[s._v("在web.xml中注册springmvc框架的核心对象DispatchServlet")]),s._v(" "),r("ol",[r("li",[s._v("DispatchServlet叫中央调度器，是一个servlet，父类是继承HttpServlet")]),s._v(" "),r("li",[s._v("DispatchServlet页叫做前端控制器")]),s._v(" "),r("li",[s._v("DispatchServlet负责接收用户提交的请求，调用其他的控制器对象吗，请把请求的处理结果显示给用户")])])]),s._v(" "),r("li",[s._v("创建一个发起请求的页面，index.jsp")]),s._v(" "),r("li",[s._v("创建控制器类\n"),r("ol",[r("li",[s._v("在类的上面加入@Controller注解，创建对象，并放入到springmvc容器中")]),s._v(" "),r("li",[s._v("在类中的方法上面加入@RequestMapping注解")])])]),s._v(" "),r("li",[s._v("创建一个作为结果的jsp，显示请求的处理结果")]),s._v(" "),r("li",[s._v("创建springmvc的配置文件\n"),r("ol",[r("li",[s._v("声明组件扫描器，指定@Controller注解所在包名")]),s._v(" "),r("li",[s._v("声明视图解析器，帮助处理视图")])])])]),s._v(" "),r("h3",{attrs:{id:"springmvc请求的处理流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#springmvc请求的处理流程"}},[s._v("#")]),s._v(" springmvc请求的处理流程")]),s._v(" "),r("ol",[r("li",[s._v("发起some.do")]),s._v(" "),r("li",[s._v("tomcat（web.xml——url——pattern知道*.do的请求给DispatchServlet）")]),s._v(" "),r("li",[s._v("DispatchServlet（根据springmvc.xml配置知道some.do——doSome()）")]),s._v(" "),r("li",[s._v("DispatchServlet把some.do转发给了MyController.doSome()方法")]),s._v(" "),r("li",[s._v("框架执行doSome()把得到ModelAndView进行处理，转发到show.jsp")])]),s._v(" "),r("h3",{attrs:{id:"springmvc执行过程源代码分析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#springmvc执行过程源代码分析"}},[s._v("#")]),s._v(" springmvc执行过程源代码分析")]),s._v(" "),r("ol",[r("li",[r("p",[s._v("tomcat启动，创建容器的过程")]),s._v(" "),r("p",[s._v("通过load-on-startup标签指定的1，创建DispatchServlet对象")])])]),s._v(" "),r("h2",{attrs:{id:"_2、注解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、注解"}},[s._v("#")]),s._v(" 2、注解")]),s._v(" "),r("h3",{attrs:{id:"requestmapping"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requestmapping"}},[s._v("#")]),s._v(" @RequestMapping")]),s._v(" "),r("h3",{attrs:{id:"requestparam"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requestparam"}},[s._v("#")]),s._v(" @RequestParam")]),s._v(" "),r("h3",{attrs:{id:"responsebody"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#responsebody"}},[s._v("#")]),s._v(" @ResponseBody")]),s._v(" "),r("h2",{attrs:{id:"地址分类"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#地址分类"}},[s._v("#")]),s._v(" 地址分类：")]),s._v(" "),r("ol",[r("li",[r("p",[s._v("绝对地址，带有协议名称的是绝对地址，http:///www.baidu.com")])]),s._v(" "),r("li",[r("p",[s._v("相对地址，没有协议开头的，例如user/some.do。相对地址不能独立使用，必须有一个参考地址。通过参考地址+相对地址本身才能指定资源。")])]),s._v(" "),r("li",[r("p",[s._v("参考地址，在页面中，访问地址不加“/”")])])]),s._v(" "),r("h2",{attrs:{id:"ssm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssm"}},[s._v("#")]),s._v(" SSM")]),s._v(" "),r("p",[s._v("ssm整合：")]),s._v(" "),r("ol",[r("li",[s._v("第一个容器SpringMVC容器，管理Controller控制器对象的。")]),s._v(" "),r("li",[s._v("第二个容器Spring容器，管理Service，Dao，工具类对象的。")])]),s._v(" "),r("p",[s._v("把使用的对象交给合适的容器创建，管理。把Controller还有web开发的相关的对象交给SpringMVC容器，这些web用的对象写在springmvc配置文件中")]),s._v(" "),r("p",[s._v("service，doa对象定义在spring的配置文件中，让spring管理这些对象。")]),s._v(" "),r("p",[s._v("springmvc容器和spring容器的子容器，类似java中的继承。子可以访问父的内容")]),s._v(" "),r("h3",{attrs:{id:"步骤"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[s._v("#")]),s._v(" 步骤：")]),s._v(" "),r("ol",[r("li",[r("p",[s._v("创建数据库，id使用自增")])]),s._v(" "),r("li",[r("p",[s._v("新建maven web项目")]),s._v(" "),r("p",[s._v("加入依赖：springmvc，spring，mybatis三个框架的依赖，jackson依赖，mysql驱动，druid连接池，jsp，servlet依赖")])]),s._v(" "),r("li",[r("p",[s._v("写web.xml")]),s._v(" "),r("ol",[r("li",[r("p",[s._v("注册DispatchServlet：")]),s._v(" "),r("p",[s._v("目的：")]),s._v(" "),r("ol",[r("li",[s._v("创建springmvc容器对象，才能创建Controller类对象")]),s._v(" "),r("li",[s._v("创建的是Servlet，才能接收用户的请求")])])]),s._v(" "),r("li",[r("p",[s._v("注册spring的监听器：ContextLoaderListener，目的：创建spring的容器对象，才能创建service，dao等对象")])]),s._v(" "),r("li",[r("p",[s._v("注册字符集过滤器，解决post请求乱码问题")])])])]),s._v(" "),r("li",[r("p",[s._v("创建包，Controller包，service，dao，实体类包名创建好")])]),s._v(" "),r("li",[r("p",[s._v("写springmvc，spring，mybatis的配置文件")]),s._v(" "),r("ol",[r("li",[s._v("springmvc配置文件")]),s._v(" "),r("li",[s._v("spring配置文件")]),s._v(" "),r("li",[s._v("mybatis主配置文件")]),s._v(" "),r("li",[s._v("数据库的属性配置文件")])])]),s._v(" "),r("li",[r("p",[s._v("写代码，dao接口和mapper文件，service和实现类，controller，实体类")])]),s._v(" "),r("li",[r("p",[s._v("写jsp页面")])])]),s._v(" "),r("h2",{attrs:{id:"异常处理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#异常处理"}},[s._v("#")]),s._v(" 异常处理")]),s._v(" "),r("p",[s._v("步骤：")]),s._v(" "),r("p",[r("img",{attrs:{src:t(586),alt:"image-20210905160212190"}})]),s._v(" "),r("h2",{attrs:{id:"拦截器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#拦截器"}},[s._v("#")]),s._v(" 拦截器")]),s._v(" "),r("p",[r("img",{attrs:{src:t(587),alt:"image-20210905224135389"}})]),s._v(" "),r("p",[r("strong",[s._v("步骤：")])]),s._v(" "),r("p",[r("img",{attrs:{src:t(588),alt:"image-20210905224253086"}})]),s._v(" "),r("p",[s._v("过滤器和拦截器的区别：")]),s._v(" "),r("p",[r("img",{attrs:{src:t(589),alt:"image-20210905233141867"}})])])}),[],!1,null,null,null);v.default=a.exports}}]);