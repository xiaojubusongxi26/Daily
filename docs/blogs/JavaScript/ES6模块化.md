---
title: ES6模块化
date: 2022-3-06
tags:
 - ES6
 - JavaScript
categories:
 - JavaScript
---

:::tip

配置基于node.js的ES6的模块化语法步骤

1. node.js的版本要高于v14.15.1
2. 在package.json的根节点中添加`“type“:module””`
:::

<!-- more -->

## 使用

### 导出
```
export default 默认导出的成员
```

`注意事项：`

- 每个模块只能导出一次，否则会报错
### 导入
默认导入语法：
```
import 接收名称 from '模块标识符'
```

### 直接导入并执行模块中的代码
![直接导入并执行模块中的代码](https://img-blog.csdnimg.cn/f280d84201fc4867aa6022afde30f26f.png)


`注意事项：`

- 不能以数字开头


### 按需导入和按需导出的注意事项

1. 每个模块中可以使用`多次`按需导出
2. 按需`导入的成员名称`必须和`按需导出的名称`保持一致
3. 按需导入时，可以使用`as关键字`进行重命名
4. 按需导入可以和默认导入一起使用


## Promise
解决回调地狱

### 基本概念
1. Promise是一个构造函数
	- 我们可以创建Promise的实例`const p = new Promise()`
	- new 出来的Promise实例对象，`代表一个异步操作`
2. Promise.prototype 上包含一个.then()方法
	- 每一次 new Promise() 构造函数得到的实例对象，都可以通过`原型链的方式`访问到.then()方法，例如p.then()
3. .then() 方法用来预先指定成功和失败的回调函数
	- p.then(成功的回调函数——必选，失败的回调函数——可选)。
	- p.then(`result => {}` , `error => {}`)

### 基于then-fs读取文件内容
![在这里插入图片描述](https://img-blog.csdnimg.cn/3f927934e69a4264832adeb4db675389.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
```
npm i then-fs
```

### then-fs的基本使用
![在这里插入图片描述](https://img-blog.csdnimg.cn/d99242ee250d465381646af68617d6af.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

### 通过.catch方法捕获错误
![在这里插入图片描述](https://img-blog.csdnimg.cn/976a76f593be4c2ea5026bd6ef571747.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

### Promise.all() 方法
![在这里插入图片描述](https://img-blog.csdnimg.cn/3a3283124bd24510a7ef032aefd74f9e.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

### Promise.race() 方法
![在这里插入图片描述](https://img-blog.csdnimg.cn/3a434b18fa1f43a29e9a3e82dbd572c8.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

### 基于Promise封装读文件的方法

![在这里插入图片描述](https://img-blog.csdnimg.cn/6e286176160b42e78afdd365e1abd02a.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

1. ![在这里插入图片描述](https://img-blog.csdnimg.cn/af3cc55bf9214623a729eaf21230d30e.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
==注：==第五行代码中的 `new Promise()`只是创建了一个`形式上的异步操作`

2. **创建具体的异步操作**
	![在这里插入图片描述](https://img-blog.csdnimg.cn/e5905fb62913419baa6b8e5a99478620.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
3. **调用resolve和reject回调函数**
	Promise`异步操作的结果`，可以调用`resolve`和`reject`回调函数进行处理.
	![在这里插入图片描述](https://img-blog.csdnimg.cn/2eceed325f574bb09be93ed6e8f0ac5b.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

## async/await
### 基本概念
![在这里插入图片描述](https://img-blog.csdnimg.cn/3addac193ad2422aa41dac6bcfd842c6.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
**虽然解决了回调地狱问题，但是代码冗余，可读性差**

使用方法：
![在这里插入图片描述](https://img-blog.csdnimg.cn/110700901923487da0e1ea41050c6742.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
**async和await成对出现**


`注意事项:`
![在这里插入图片描述](https://img-blog.csdnimg.cn/71961c55ea5345609c8bf420c8756744.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)



## EventLoop
![在这里插入图片描述](https://img-blog.csdnimg.cn/a94e974540104bfb80a3334c37cea066.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/31998e4f15a04e2dac891e7614a2ea23.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/01e9ca60301944af8ea84bc3b117a715.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/1bbefc363eee4155a4fa5783379cbd34.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

## 宏任务和微任务
![在这里插入图片描述](https://img-blog.csdnimg.cn/9fa7faf721cd480f817265bc12a0aaf7.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
### 宏任务和微任务执行顺序
![在这里插入图片描述](https://img-blog.csdnimg.cn/72c98a456aad4059885660f9a710436c.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
