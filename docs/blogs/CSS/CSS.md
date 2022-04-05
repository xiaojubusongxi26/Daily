---
title: CSS学习笔记
date: 2021-10-28
sidebar: 'auto'
tags:
 - css
categories:
 - CSS
---



# CSS


## 1.视口
### meta视口标签
![在这里插入图片描述](https://img-blog.csdnimg.cn/5b70d0d798bd42a9b4d85a2db369dc0f.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
### 标准的viewport设置
![在这里插入图片描述](https://img-blog.csdnimg.cn/e37da02e78d84565beabb2a93afa04f3.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_18,color_FFFFFF,t_70,g_se,x_16)
```
<meta name="viewport" content="width=device-width, initial-scale=1.0,
 maximum-scale=1.0 , minimum-scale=1.0, user-scalable=no">
 ```



## 2.二倍图
### 2.1	物理像素&物理像素比
![在这里插入图片描述](https://img-blog.csdnimg.cn/b22c668a56a848fc8a72b69f25913f43.png)

**物理像素比：**
例如：iPhone 8 物理像素为750   一开发像素 1px = 2 物理像素
![在这里插入图片描述](https://img-blog.csdnimg.cn/7ee9f7ddfda041eaaff756d003737a33.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

### 2.2	多倍图
![在这里插入图片描述](https://img-blog.csdnimg.cn/a6be910fac204bf6a2f03cac8be01c63.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)


### 2.3	背景缩放 background-size


![在这里插入图片描述](https://img-blog.csdnimg.cn/3c49f45d7eda44888d4cad4ae1177482.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

## 3.	移动端技术解决方案
### 3.1	移动端浏览器
![在这里插入图片描述](https://img-blog.csdnimg.cn/fb578a1a17e343fea66f7a4954bd40ee.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
### 3.2	CSS初始化 normalize.css
![在这里插入图片描述](https://img-blog.csdnimg.cn/10268ab74d3a4b01b0b6f3f327470d0d.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

### 3.3	CSS3 盒子模型 box-sizing
![在这里插入图片描述](https://img-blog.csdnimg.cn/2c7155dddf2b4b63b5e36406eba6ef73.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

### 3.4	特殊样式
![在这里插入图片描述](https://img-blog.csdnimg.cn/c9f01f30f9aa43769b7199d44dda1161.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)


## 4.	2D转换

### 4.1	2D转换之移动 translate
![在这里插入图片描述](https://img-blog.csdnimg.cn/550c2914021a457ebb0a9222297cc017.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

### 4.2	2D转换之旋转 rotate
![在这里插入图片描述](https://img-blog.csdnimg.cn/9df591f843984995a733d29d1a77ebc9.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
### 4.3	2D转换中心点 transform-origin
![在这里插入图片描述](https://img-blog.csdnimg.cn/104d570447ee49ca9d6b1acb1d74ffb6.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
### 4.4	2D转换之缩放	 scale

`注：括号里面只写数字，没有单位`
![在这里插入图片描述](https://img-blog.csdnimg.cn/e93d8aa1eb144e1eacbc8f8fc5569c8f.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

## 5. 	动画
![在这里插入图片描述](https://img-blog.csdnimg.cn/da357a0b816b4530b7d0334ae5a7a03d.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

### 简写属性

**animation :动画名称 持续时间 运动曲线 何时开始 播放次数 是否反方向 动画起始或者结束的状态**

<br><br><br>
### 速度曲线细节
![在这里插入图片描述](https://img-blog.csdnimg.cn/0fb08855d80d4485925bff7a55b784f3.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
 <br><br><br>
 
 ## 6.	3D转换
 
 ### 透视
 
![在这里插入图片描述](https://img-blog.csdnimg.cn/ac23d5b81a674dd996441064fa7fd4c8.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

### 3D旋转	rotate3d
![在这里插入图片描述](https://img-blog.csdnimg.cn/53581c87a1494a168e9593bef1b33849.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

### 3D呈现 transfrom-style
![在这里插入图片描述](https://img-blog.csdnimg.cn/1a767d8ab48f430f848bcf891d17e63f.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

<br>
## Flex布局

[flex讲解](https://www.w3school.com.cn/css/css3_flexbox.asp).


<br><br>
## 移动web开发
### rem基础
- em相对于父元素的字体大小
- rem相对于html元素的字体大小
- rem的优点就是可以通过修改html里面的文字大小来改变页面中元素的大小，可以整体控制

### 媒体查询
- 使用@media查询，可以针对不同的媒体类型定义不同的样式
- @media 可以针对不同的屏幕尺寸设置不同的样式
- 当你重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面

#### 语法规范
![在这里插入图片描述](https://img-blog.csdnimg.cn/6c826ac3d3d643b9ad344f1808a909f1.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
1. **mediatype**查询类型
![在这里插入图片描述](https://img-blog.csdnimg.cn/24dd1c342c5c42dd8c41b15cac5e43c5.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

2. **关键字**
![在这里插入图片描述](https://img-blog.csdnimg.cn/7ed6c1e44f4f466a9745528326bbf498.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
3. **媒体特性**
![在这里插入图片描述](https://img-blog.csdnimg.cn/08d55af3fc0e4811b9c49dc204a552dc.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

4. **引入资源**
![在这里插入图片描述](https://img-blog.csdnimg.cn/ab21bfdaa6ca47b5b2b79c1e6d58c5cb.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

### Less基础
#### Less变量
![在这里插入图片描述](https://img-blog.csdnimg.cn/306cc349f98746a3a813df3f3e3003ad.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
#### Less编译
**编写.less文件，保存后会自动生成对应的css文件，然后在对应的html文件中引入css文件即可**

#### Less嵌套
![在这里插入图片描述](https://img-blog.csdnimg.cn/dd27525e07d6408594cff38b9792ec39.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

<br>

### rem适配方案
![在这里插入图片描述](https://img-blog.csdnimg.cn/73dabba195c44587a6757a173354f25f.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

![在这里插入图片描述](https://img-blog.csdnimg.cn/c4d1f6eadede439ca529f1b39b0f76d5.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)


## Bootstarp使用
外部引入：

```
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
```
### 布局容器

![在这里插入图片描述](https://img-blog.csdnimg.cn/d1d1583418944d3db350d8b318b08495.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
### 栅格布局
![在这里插入图片描述](https://img-blog.csdnimg.cn/64bcaf9152fa4980a86b660887504daa.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
### 响应式工具
![在这里插入图片描述](https://img-blog.csdnimg.cn/24c2d2c95cdc4c429b835b64efc3e11a.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)



<br><br>
# 注意事项：
- 背景渐变色必须添加浏览器前缀
- 使用媒体查询建议由小到大进行修改，这样后面大的部分的代码可以冲突掉前面中间部分的代码
- less文件中进行计算时，运算符左右必须为空格。
- less文件中：两个数参与运算 如果只有一个数有单位，则最后的结果就以这个单位为准。		两个数参与运算 如果两个数单位不同，则最后的结果就以第一个单位为准。







# 样式小记
1. `text-indent` 属性规定文本块中首行文本的缩进。
2. `overflow `属性规定当内容溢出元素框时发生的事情。
	- visible	默认值。内容不会被修剪，会呈现在元素框之外。
	- hidden	内容会被修剪，并且其余内容是不可见的。
	- scroll	内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。
	- auto	如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。
	- inherit	规定应该从父元素继承 overflow 属性的值。
3. `background-repeat` 属性设置是否及如何重复背景图像。
	- repeat	默认。背景图像将在垂直方向和水平方向重复。
	- repeat-x	背景图像将在水平方向重复。
	- repeat-y	背景图像将在垂直方向重复。
	- no-repeat	背景图像将仅显示一次。
	- inherit	规定应该从父元素继承 background-repeat 属性的设置。

4. background-position 属性设置背景图像的起始位置。
	![在这里插入图片描述](https://img-blog.csdnimg.cn/27c87e0d4e47417497c96c25d89096bd.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

6. 设计稿常见尺寸：
	![-](https://img-blog.csdnimg.cn/4f7ad62d56884f21b9413c67e00f4b96.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
 页面设计思路：
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/ecb706e37c1a46599c60a0e077810c70.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
7. `!important`是CSS的一个规则，用于提高指定CSS样式规则的应用优先权
8. `user-select: none`;
	user-select有2个值（none表示不能选中文本，text表示可以选择文本）
9. calc() 函数用于动态计算长度值。