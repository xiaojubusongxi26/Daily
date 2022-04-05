---
title: Vue2.x学习笔记
date: 2022-3-06
tags:
 - Vue
categories:
 -  Vue
---

::: tip
Vue学习笔记，从`创建项目`到`项目开发`
:::

<!-- more -->
## Vue项目的搭建

打开终端，在当前目录下输入

```
vue create [要创建的项目名称]
```

你会被提示选取一个 preset。你可以选默认的包含了基本的 Babel + ESLint 设置的 preset，也可以选“手动选择特性”来选取需要的特性。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210705165859479.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3RjaF9seW0=,size_16,color_FFFFFF,t_70)

这个默认的设置非常适合快速创建一个新项目的原型，而手动设置则提供了更多的选项，它们是面向生产的项目更加需要的。（空格决定是否选中，enter进入下一步）

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210705165934570.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3RjaF9seW0=,size_16,color_FFFFFF,t_70)
其他选择项：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210705170413107.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3RjaF9seW0=,size_16,color_FFFFFF,t_70)



创建成功后，输入一下指令启动项目

```
npm run serve
```

终止一个Vue项目在终端输入`ctrl`+`c`

## 项目结构

资源assets：存放图片和样式
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021070911452170.png)

组件components：存放公共组件，common存放多项目共同组件，content存放该项目公共组件
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210709114857636.png)

路由router：

状态管理store：

网络封装network：

公共js文件common：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210709115141494.png)



## MVVM（Model View ViewModel）
- Model表示当前页面渲染时做依赖的数据源
- View表示当前页面所渲染的DOM结构
- ViewModel表示vue实例，是MVVM的核心



## $event
vue提供的内置变量，名字叫做$event，它就是原生 DOM 的事件对象 e
```
//当方法不带参数，默认里面有$event变量
<button @click="add">点击</button>


//方法可以带多个参数，只需要在传参时加入$event
<button @click="add(1,$event)">点击</button>
```

## 事件修饰符
![在这里插入图片描述](https://img-blog.csdnimg.cn/e03b08a4ef2d41ee8e301cd641f8dcba.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)


<br><br><br><br>

## v-for
v-for用于遍历。

	使用方法：
	1.v-for="value in info" //value为值
	2.v-for="(value ,key) in info" //key为属性
	3.v-for="(value,key,index) in info" //index索引

*使用v-for时，最好给元素或者组件添加一个key属性（提高性能）*

响应式方法：

	1.push()//数组末尾添加,可以一次性加多个
	2.pop()//删除数组最后一个元素
	3.shift()//删除数组第一个元素
	4.unshift()//在数组最前面添加元素,可以一次性加多个
	5.splice()
	//插入、插入、替换元素
	//第一个参数代表其实位置
	//删除元素，第二个参数传入就删除几个元素（如果没有传就删除后面所有元素）
	//替换元素：第二个参数，表示要替换元素的数量，后面是用于替换前面的元素
	例如：splice(1,3,'m','m','r','y')
	//插入元素：第二个参数，传入0，并且后面跟上要插入的元素
	6.sort()//排序
	7.reverse()//反转


## v-model
用于双向绑定表单。

<br>

### 修饰符
#### 1.lazy

- 默认情况下,v-model默认是在input事件中同步输入框的数据，一旦数据发生改变，对应data中的数据自动发生改变。
- lazy修饰符可以让数据在`失去焦点`或者`回车`时才会更新


		v-model.lazy="message"

#### 2.number
将绑定类型转换为number。

#### 3.trim
可以过滤内容左右两边的空格。
例如：

	'       aaaaaa       ' ----> 'aaaaaa'



##  v-key

注意事项：

![在这里插入图片描述](https://img-blog.csdnimg.cn/3ea0f739921c4b93acb0111e5c87141c.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

##  过滤器

![过滤器](https://img-blog.csdnimg.cn/1a5f037b103c4c768035b548910a9e56.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

**注意事项:**

![在这里插入图片描述](https://img-blog.csdnimg.cn/3432f5fe4b71478384dcce96c5805698.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/8beb50fe531244c592eb708b207ac80d.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

##  侦听器

![侦听器](https://img-blog.csdnimg.cn/3c76f0254ed94951a7284087ef2bb955.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

**对象格式的侦听器，动态判断username是否改变，如果改变，则会触发侦听器的处理函数handler**
**immediate默认为false，刚进入页面不触发侦听器，true为进入页面就触发一次侦听器**

![在这里插入图片描述](https://img-blog.csdnimg.cn/827400bdfcdd4feab9c9d6a647197c9a.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

**deep为true，开启深度侦听，对象中任何一个属性变化了，都会触发对象的侦听器**

![在这里插入图片描述](https://img-blog.csdnimg.cn/cade428b3bce4df5af097b134045dc18.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)



##  计算属性
![在这里插入图片描述](https://img-blog.csdnimg.cn/26213d1bfa3d4bdbb2fec0bc6a7cfbd3.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

## axios

> axios 是一个专注于网络请求的库！



### axios 的基本使用

1. 发起 GET 请求：

```js
   axios({
     // 请求方式
     method: 'GET',
     // 请求的地址
     url: 'http://www.liulongbin.top:3006/api/getbooks',
     // URL 中的查询参数
     params: {
       id: 1
     }
   }).then(function (result) {
     console.log(result)
   })
```

2. 发起 POST 请求：

```js
   document.querySelector('#btnPost').addEventListener('click', async function () {
     // 如果调用某个方法的返回值是 Promise 实例，则前面可以添加 await！
     // await 只能用在被 async “修饰”的方法中
     const { data: res } = await axios({
       method: 'POST', 
       url: 'http://www.liulongbin.top:3006/api/post',
       data: {
         name: 'zs',
         age: 20
       }
     })
   
     console.log(res)
   })
```


## 组件化
	//1.创建组件构造器对象
  	const cpnC = Vue.extend({
    template: `
    <div>
      <h2>王谢棠</h2>
      <p>我自人间洒清辉</p>
     </div>`
  	})
  	//2.注册组件
  	Vue.component('my-cpn',cpnC)


  	//使用：
  	<div id="app">
  		<my-cpn></my-cpn>
	</div>


#### 1.Vue.extend()
- 调用Vue.extend()创建一个组件构造器
- 通常在创建组件构造器时，传入template代表我们自定义组件的模板
- 该模板就是在使用到组件的地阿芳，要显示的HTML代码
- `当下很少使用，更多使用语法糖`

#### 2.Vue.component()
- 调用Vue.component()将刚才的组件构造器注册为一个组件，并给它起一个组件的标签名称
- 需要传递两个参数：1.注册组件的标签名 2.组件构造器

``` vue
Vue.component('blog-post', {
  		props: ['title'],
 		 template: '<h3>{{ title }}</h3>'
		})
```

#### 3.组件必须挂载在某个Vue实例下，否则不会生效

<br>


##  组件传值
###  父传子
![在这里插入图片描述](https://img-blog.csdnimg.cn/29f18058a1054b97849330af40f7c4e7.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

###  子传父
![在这里插入图片描述](https://img-blog.csdnimg.cn/cb1a1d5c54bd428dbe2a0b6c1b48f97c.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

###  兄弟互传
![在这里插入图片描述](https://img-blog.csdnimg.cn/de4eab5f677341eb910259bb3fc28508.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/85f2c1e9f0d3451eaf4f15e14dde03c7.png)

##  ref引用
![在这里插入图片描述](https://img-blog.csdnimg.cn/15c1edc01a1241d2b38228d15c0496ba.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/9e532975940d4a2fb0a60e504f37c0b2.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/33ba3be85b5346ebb53645682771cb54.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)



###  this.$nextTick(cb) 方法

![在这里插入图片描述](https://img-blog.csdnimg.cn/7ccb73681bbe4b739678a3bb6c6ac7f8.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

![在这里插入图片描述](https://img-blog.csdnimg.cn/90b5429f91ce48fa803f88795161f489.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

## 插槽

在 2.6.0 中，我们为具名插槽和作用域插槽引入了一个新的统一的语法 (即 v-slot 指令)。它取代了 slot 和 slot-scope 这两个目前已被废弃但未被移除且仍在文档中的 attribute。


###  具名插槽
在向具名插槽提供内容的时候，我们可以在一个 `<template>` 元素上使用 v-slot 指令，并以 v-slot 的参数的形式提供其名称：
``` vue

	<base-layout>
  	<template v-slot:header>
    	<h1>Here might be a page title</h1>
  	</template>

  	<template v-slot:default>
    	<p>A paragraph for the main content.</p>
   		<p>And another one.</p>
  	</template>

  	<template v-slot:footer>
    	<p>Here's some contact info</p>
  	</template>
	</base-layout>
```



###  作用域插槽
有时让插槽内容能够访问子组件中才有的数据是很有用的。
为了让 user 在父级的插槽内容中可用，我们可以将 user 作为 `<slot>` 元素的一个 attribute 绑定上去：

``` vue

  <span>
    <slot v-bind:user="user">
    	{{ user.lastName }}
    </slot>
  </span>
```

绑定在 `<slot>` 元素上的 attribute 被称为插槽 prop。现在在父级作用域中，我们可以使用带值的 v-slot 来定义我们提供的插槽 prop 的名字：
``` vue
	<current-user>
  	<template v-slot:default="slotProps">
    	{{ slotProps.user.firstName }}
  	</template>
	</current-user>
```

<br><br>




##	生命周期

![在这里插入图片描述](https://img-blog.csdnimg.cn/95ae50dca90b4a368e5b7ba9d5ea5d13.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

![请添加图片描述](https://img-blog.csdnimg.cn/ac309d901e064562b64dbb845b3a5665.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)


##  Vuex
Vuex是一个专为Vue.js应用程序开发的状态管理模式。

- 采用`集中式存储管理`应用的所有组件的状态，并以相应的规则保证状态以一种课预测的方式发生变化。

使用方法：

- 在App的methods中调用$store的commit方法，并传入想调用的方法名称

![在App的methods中调用$store的commit方法，并传入想调用的方法名称](https://img-blog.csdnimg.cn/20210706202552844.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3RjaF9seW0=,size_16,color_FFFFFF,t_70)

- 建议创立专门的store文件夹，并创建index.js文件，在该文件中进行store的使用

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210706203117382.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3RjaF9seW0=,size_16,color_FFFFFF,t_70)
*需要在main.js中进行挂载*

- 在任意组件中调用$store即可使用。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210706203214746.png)

###  State单一状态树(Single Source of Truth)
Vuex使用单一状态树来管理应用层级的全部状态。只使用一个store方便日后维护。

###  Getters
相当于计算属性computed。
*下图中传入的第二个参数必须为getter本身（可以重命名，但没必要）*

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210706211106370.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3RjaF9seW0=,size_16,color_FFFFFF,t_70)
###  Mutation状态更新
Vuex的store状态更新的唯一方式：提交Mutation。

Mutation主要包括两部分：

- 字符串的事件类型(type)
- 一个回调函数(handler),该回调函数的第一个参数就是state。

#### Mutation的定义方式：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210706211503709.png)
传参：

![App.Vue中](https://img-blog.csdnimg.cn/2021070621251590.png)
通过传入负载（第二参数），进行更多的操作
![store目录下的index.js文件的mutations中的方法](https://img-blog.csdnimg.cn/20210706212549456.png)
#### Mutation响应规则：

- 提前在store中初始化所需属性
- 当给state中的对象添加新属性时，使用下面的方式：
- 1.使用Vue.set(obj,'newProp',123)
- 2.用新的对象给旧对象重新赋值

1.Vue.set()：
*修改的时候页面同时进行响应*
![ng)](https://img-blog.csdnimg.cn/20210706223016704.png)


####  Mutation同步函数
通常情况下，Vuex要求Mutation中的方法必须是同步方法。

- 主要原因是当我们使用devtools时，devtools可以帮助我们捕捉mutation的快照
- 如果是异步操作，那么devtools将不能很好的追踪该操作什么时候会被完成


### Action（异步操作）
![index.js](https://img-blog.csdnimg.cn/20210706233325102.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3RjaF9seW0=,size_16,color_FFFFFF,t_70)
 调用方式：
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210706233358386.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3RjaF9seW0=,size_16,color_FFFFFF,t_70)



<br><br><br>



##	  自定义指令
###  私有自定义指令
![在这里插入图片描述](https://img-blog.csdnimg.cn/0fd81a1210b348f987750ba22b0e9385.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

**注意：color是自定义指令的名字**

####  update 函数
![在这里插入图片描述](https://img-blog.csdnimg.cn/52cc69e09ce54b18a9d90b1bf027973f.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

####  函数简写
![在这里插入图片描述](https://img-blog.csdnimg.cn/7aecabe302af4d91a0b7114a29e19f20.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
###  全局自定义指令
![在这里插入图片描述](https://img-blog.csdnimg.cn/202eb91b4a9b42e68a57cf59520504d3.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

##  axios配置
![在这里插入图片描述](https://img-blog.csdnimg.cn/ee2ed50c853748ac8cde01577278b894.png)
缺点：无法实现API接口的复用

##  前端路由
![在这里插入图片描述](https://img-blog.csdnimg.cn/0b1eb0245df846368e4eee792e504cac.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
###  vue-router的安装和配置步骤
![在这里插入图片描述](https://img-blog.csdnimg.cn/54f213b1f5504bbdb76ab20fcc003b48.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_16,color_FFFFFF,t_70,g_se,x_16)

####  创建路由模块
![在这里插入图片描述](https://img-blog.csdnimg.cn/30f2234b898c4afd967a8f56dcd4c7b6.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
####  导入并挂载路由模块
![在这里插入图片描述](https://img-blog.csdnimg.cn/267ac08985284daba3849b4b3f311dc3.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
####  声明`路由链接`和`占位符`

![在这里插入图片描述](https://img-blog.csdnimg.cn/5a8f84332dbf4a0493edcf8619f5d670.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)


###  路由重定向
![在这里插入图片描述](https://img-blog.csdnimg.cn/05d456a80e9b4eb29cb82acdc086e8a4.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

###  嵌套路由
![在这里插入图片描述](https://img-blog.csdnimg.cn/c429c8a50960460d85b2ecbe461ac64e.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

![在这里插入图片描述](https://img-blog.csdnimg.cn/97c29d19429344399680a19b637e6b55.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/e0ef3081ce384dec86808b9079584f9d.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

**子路由路由不加斜线**

**默认子路由：**

默认子路由:如果children 数组中，某个路由规则的 path值为空字符串，则这条路由规则，叫做“默认子路由”

###  动态路由
![在这里插入图片描述](https://img-blog.csdnimg.cn/51ca4ff3be804cc3b92b12fb9b09c6f5.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
####  $route.params参数对象
![在这里插入图片描述](https://img-blog.csdnimg.cn/fc4d4880e1b74c08a1b5c027a2184cf1.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
####  使用props接收路由参数
![在这里插入图片描述](https://img-blog.csdnimg.cn/01e786f3e1304f979c0b9cb604bd1ff2.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

###  query和fullPath
![在这里插入图片描述](https://img-blog.csdnimg.cn/5b9b16afe3f946968ece45209bd1c7cf.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
###  编程式导航
![在这里插入图片描述](https://img-blog.csdnimg.cn/d639b9d8823d4e8cb195d596dfb39e3d.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
####  this.$router.go()方法
![在这里插入图片描述](https://img-blog.csdnimg.cn/880d5b1d8aa24c5ebf574662c4c99c7f.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
**如果后退的层数超过上限则原地不动**
![在这里插入图片描述](https://img-blog.csdnimg.cn/e03251bb0af749bd8518153d4aab00a2.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_10,color_FFFFFF,t_70,g_se,x_16)
###  导航守卫
####  全局前置守卫——router.beforeEach()
![在这里插入图片描述](https://img-blog.csdnimg.cn/16809e39fdd341bdb8db135d4797b57d.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/e9dc50a49c504d60ba402a8895773b48.png)
####  next函数的3种调用方式
![在这里插入图片描述](https://img-blog.csdnimg.cn/6f214ac817b048b4a612f2c519f9086e.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
####  导航守卫实例：
![在这里插入图片描述](https://img-blog.csdnimg.cn/d7f8bb47387a437f9c1907590f90653f.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_18,color_FFFFFF,t_70,g_se,x_16)


## Storage封装
学习网站：[Storage](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage).

**Cookie，localStorage，sessionStorage三者区别：**


 - 存储大小：Cookie4K，Storage5M
 - 有效期：Cookie拥有有效期，Storage永久存储
 - Cookie会发送到服务器端，存储在内存中，Storage只存储在浏览器端
 - 路径：Cookie有路径限制，Storage只存储在域名下
 - API：Cookie没有特定的API，Storage有对应的API




**为什么要封装Storage ？**

- Storage本身有API，但是只是简单的key/value形式
- Storage只存储字符创，需要手动转换成json对象
- Storage只能一次性清空，不能单个清空


<br><br><br>

## 接口代理

通过修改nginx服务器配置来实现 , 前端修改，后台不动

创建vue.config.js文件进行代理跨域的配置

``` js
module.exports = {
  devServer:{
    host:'localhost',
    post: 8080,
    proxy:{
      '/activity':{
        target: 'https://www.imooc.com',
        changeOrigin: true,
        pathRewrite:{
          '/activity': '/activity'
        }
      }
    }
  }
}
```

## 注意事项

1.  **通过数组形式为当前属性定义多个可能的类型**
![在这里插入图片描述](https://img-blog.csdnimg.cn/b42fe55ee1e34c288fbcca20840c18ad.png)

2. **使用组件的时候，如果某个属性名是“小驼峰”形式，则绑定属性的时候，建议改写成“连字符”格式，例如：**
```vue
// :cmtCount="item.comm_count"
:cmt-count="item.comm_count"
```

3. **当定义一个对象属性时，需要通过函数返回属性的默认值：**
```vue
cover: {
      type: Object,
      // 通过 default 函数，返回 cover 属性的默认值
      default: function() {
        return { cover: 0 }
      }
    }
```

4. **使用setTimeout时，里面的 this 会指向window，导致无法通过this.xxx操作属性值，使用箭头函数则可以解决。 `因为箭头函数中的this指向的定义它的时候的对象，也就是this指向了data内中对应的变量。`**

```vue
// 无效
setTimeout(function() {
        this.isLoading = false
      }, 3000)
// 有效
setTimeout(() => {
        this.isLoading = false
      }, 3000)
```