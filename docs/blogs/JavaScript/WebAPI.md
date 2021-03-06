---
title: WebAPI
date: 2021-10-28
tags:
 - JS
 - DOM
 - BOM
categories:
 -  JavaScript
---

::: tip
有关js原生DOM和BOM的知识点
:::

<!-- more -->

# WebAPI



# 前言
**JS基础阶段和Web API阶段**
![在这里插入图片描述](https://img-blog.csdnimg.cn/27a2899fc9194f8ead8754273a1bd916.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

# 一、API 和 WebAPI
![在这里插入图片描述](https://img-blog.csdnimg.cn/13a72d8a101646d890eb90ca04479d6a.png)
**WebAPI**
![在这里插入图片描述](https://img-blog.csdnimg.cn/0f9e4e74cce14611b9f02d8bcbcf2826.png)


**总结**：
![在这里插入图片描述](https://img-blog.csdnimg.cn/8167ba9f464c47098fef0e0161c6a3fe.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)




# 二、DOM

**DOM（文档对象模型）**

## 1.事件
事件分为：

1. 事件源
2. 事件类型
3. 事件处理程序 




<hr>


## 三种创建元素的区别
1. document.write()创建元素，`如果页面文档流加载完毕，再调用这句话会导致页面重绘`
2. innerHTML	创建元素
3. document.createElement() 创建元素

![在这里插入图片描述](https://img-blog.csdnimg.cn/f859582cfa704d8db327784c7ebfcdca.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)


### 改
![在这里插入图片描述](https://img-blog.csdnimg.cn/118ed83f16464f4e8482b2ca035f56fe.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
### 查
![在这里插入图片描述](https://img-blog.csdnimg.cn/1316869ad255400da4b7169362ecba9a.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)


## 注册事件
![在这里插入图片描述](https://img-blog.csdnimg.cn/2353678365464bf8ae2f9b51b18a3d16.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
**使用方法：**
![在这里插入图片描述](https://img-blog.csdnimg.cn/fbbddba23eff444ba143d033ca28d37b.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
### DOM事件流
![在这里插入图片描述](https://img-blog.csdnimg.cn/c2ff0f3d634d44328e9a28246d4eee35.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/67e735a33c5545fca384c6216b30c5f4.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
### 事件对象常见的属性和方法
![在这里插入图片描述](https://img-blog.csdnimg.cn/ed838c3ecdc041c0952802c320bff064.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
### 事件委托
![在这里插入图片描述](https://img-blog.csdnimg.cn/1be8e41eda9c4f9facac19808889b4a3.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

### 鼠标事件
![在这里插入图片描述](https://img-blog.csdnimg.cn/1c21b15c8cad4c73bab5a3a40b864490.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2780a89405d244bd9c66c541f88b7161.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)


### 鼠标事件对象
![在这里插入图片描述](https://img-blog.csdnimg.cn/add3f32ff94e44588caf06763849190f.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

### 键盘事件
![在这里插入图片描述](https://img-blog.csdnimg.cn/62100ebce4024d3c9771a07600549676.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

**执行顺序：keydown-keypress-keyup**

* ` keyup,keydown事件不区分字母大小写`

<br><br><br>

# 三、BOM

![在这里插入图片描述](https://img-blog.csdnimg.cn/1aeb8a23136b4b0ea312d500027f42d8.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

**DOM 和 BOM 的区别：**


![在这里插入图片描述](https://img-blog.csdnimg.cn/7f657de119d344aca4cf931a758bc736.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

**BOM的构成：**
![在这里插入图片描述](https://img-blog.csdnimg.cn/66e16307370b4f17804f3a47086225dc.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
`window对象是浏览器的顶级对象。`

### 窗口加载事件
![在这里插入图片描述](https://img-blog.csdnimg.cn/118fdb068d3746f1b2f40c1e36aa71b3.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
### 调整窗口大小事件

![在这里插入图片描述](https://img-blog.csdnimg.cn/661fc3a081894e0085cc06355f76fe21.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
### 定时器
#### setTimeout() 
![在这里插入图片描述](https://img-blog.csdnimg.cn/fcb26db1e395463cb2d63c8d953edcd9.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/f591a33e310443a48d2a2cae358affb2.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
#### setInterval()——反复调用
![在这里插入图片描述](https://img-blog.csdnimg.cn/861f2b237f744599ba39ab50638f76da.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

## 同步和异步
![在这里插入图片描述](https://img-blog.csdnimg.cn/acae03ff86494e0190208646f15bd319.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

### 执行机制
![在这里插入图片描述](https://img-blog.csdnimg.cn/c6cf518a1bb847a18dec8a0fd698556f.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/43f3a6dbbf904f6c90433acac223eb77.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
### location
#### URL
![在这里插入图片描述](https://img-blog.csdnimg.cn/942250c16787440983c31dafbb61207c.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

#### location属性
![在这里插入图片描述](https://img-blog.csdnimg.cn/a34ebba024784762856c3062e1173e94.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
#### location 对象
![在这里插入图片描述](https://img-blog.csdnimg.cn/1eb5fa3065254b1abfe1a57bd50bf607.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

#### navigator 对象
![在这里插入图片描述](https://img-blog.csdnimg.cn/bdc167fc71104eeebaccd7e868ad6eb9.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
#### history 对象
![在这里插入图片描述](https://img-blog.csdnimg.cn/63411723b873440c8a0ffd40916b1270.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)


## 元素偏移
### offset
![在这里插入图片描述](https://img-blog.csdnimg.cn/c6249d9ff23e49f8ba1704be7575aaf7.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
#### offset  和  style 的区别
![在这里插入图片描述](https://img-blog.csdnimg.cn/864e94765e2d4e99b545b584acaccfc9.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

### client
![在这里插入图片描述](https://img-blog.csdnimg.cn/b4187135f77c48d89fe64b31405169e3.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

### scroll
![在这里插入图片描述](https://img-blog.csdnimg.cn/aeadbd06c8094b6a9b09d2091618a938.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

### 三大系列对比
![在这里插入图片描述](https://img-blog.csdnimg.cn/13471905178b482ab2991b7ed22a53e8.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

![在这里插入图片描述](https://img-blog.csdnimg.cn/b1774d6d3e7f4040b5c29de5a9f751f6.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)


### mouseenter 和 mouseover的区别
![在这里插入图片描述](https://img-blog.csdnimg.cn/45ccac367ef6480e8231cbc73e24017f.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)


## 触屏事件

![在这里插入图片描述](https://img-blog.csdnimg.cn/b14140f559844c2ab00eb0de5e455ae5.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)


### 触摸事件对象
![在这里插入图片描述](https://img-blog.csdnimg.cn/71055a0d50c840fa892ed10df9fd3c14.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

![在这里插入图片描述](https://img-blog.csdnimg.cn/fa1d40a64d8e451e99e47054d3452481.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
### classList
![在这里插入图片描述](https://img-blog.csdnimg.cn/9ede6101a27249bfa197571c461045db.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

### click事件延时问题解决
![在这里插入图片描述](https://img-blog.csdnimg.cn/e28693532671401bb1707067985fcfa4.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/764658a89f654b6b9499273ffc07f1d3.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
**第三种方法：使用 `fastclick.js`插件解决延时问题**


```javascript
if ('addEventListener' in document) {
            document.addEventListener('DOMContentLoaded', function() {
                FastClick.attach(document.body);
            }, false);
        }
```


## 本地存储
![在这里插入图片描述](https://img-blog.csdnimg.cn/9a0f5e1d62c541809ddf9cb232f86973.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

### window.sessionStorage
![在这里插入图片描述](https://img-blog.csdnimg.cn/36500553e4f14104937caa8ce6ef2795.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

### window.localStorage

![在这里插入图片描述](https://img-blog.csdnimg.cn/ab7811b7e8614e6bb9ba6e085808132f.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)



<br><br><br>
# 注意事项
- `client `得到的结果是鼠标在可视区的x和y坐标
- `keydown` 和 `keypress`在文本框里的特点：他们两个事件触发的时候文字还没有落入文本框中。	`keyup`事件触发的时候，文字已经落入文本框中了。
- `console.log()`可以取代alert()或document.write()，在网页脚本中使用console.log()时，会在浏览器控制台打印出信息。
- `console.dir()`可以显示一个对象所有的属性和方法。
- `load`等页面内容全部加载完毕，包含页面dom元素 图片 flash scc等等。	`DOMContentLoaded`是等DOM加载完毕，不包含 falsh css 等就可以执行，加载速度比 load更快一些。
- 给缓动动画添加回调函数，回调函数要写在定时器结束之后
- `transitionend`	事件可以监听过渡效果是否结束
- 移动端	`click`	事件会有300ms的延时，原因是移动端屏幕双击会缩放页面。
- [js位置大全](https://www.cnblogs.com/nbwsj/p/12124882.html).