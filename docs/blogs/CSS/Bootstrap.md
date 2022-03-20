---
title: Bootstrap学习笔记
date: 2022-03-20
sidebar: 'auto'
tags:
 - css
 - Bootstrap
categories:
 - CSS
---


# Bootstrap学习笔记

## 快速上手
<br>

**CSS：**
```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
```
<br>

**JS:**
```html
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
```
<br>

**基础模板：**
```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>
```

<br><br>

**响应式meta标签:**

移动设备优先

```html
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```

<br>
<br>

## 栅格布局

### 基础格式

```html
<div class="container">
  <div class="row">
    <div class="col-sm">
      三分之一空间占位
    </div>
    <div class="col-sm">
      三分之一空间占位
    </div>
    <div class="col-sm">
      三分之一空间占位
    </div>
  </div>
</div>
```

::: tip
`.container`实现固定的宽度并居中呈现，`.container-fluid`实现全宽度(100%)，并和其它网格实现对齐
:::

<br>

### 栅格选项

![在这里插入图片描述](https://img-blog.csdnimg.cn/19b9d4d1dda24d0cbcba77d90d285bf4.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
**栅格布局中，默认将容器切分为12格**


### 可变宽度的弹性空间

使用 `col-{breakpoint}-auto` 断点方法，可以实现根据其内容的自然宽度来对列进行大小调整

![弹性空间](https://img-blog.csdnimg.cn/e35a748fe5f34e7cbd80ff0f92a304fd.png)


```html
<div class="container">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2">
      1 of 3
    </div>
    <div class="col-md-auto">
      Variable width content
    </div>
    <div class="col col-lg-2">
      3 of 3
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col-md-auto">
      Variable width content
    </div>
    <div class="col col-lg-2">
      3 of 3
    </div>
  </div>
</div>
```

<br>

###  等宽多行

可以使用`.w100`来进行拆分新行

![在这里插入图片描述](https://img-blog.csdnimg.cn/bbc4c692918c4cf8bdd6d1623ee404e9.png)

```html
<div class="row">
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="w-100"></div>
  <div class="col">col</div>
  <div class="col">col</div>
</div>
```

<br>

### 覆盖所有设备

如果要一次性定义从最小设备到最大设备相同的网格系统布局表现，请使用 `.col` 和 `.col-*` 类。后者是用于指定特定大小的(如`.col-6`)，否则使用`.col`就可以了。



<br><br>

###  沟槽 (★ 没太懂)

可以通过特定于断点的填充和负边距实用程序类来响应地调整装订线。 要更改给定行中的装订线，请在 `.row`  上配置负边距实用程序，并在 `.col` 上配对匹配填充实用程序。 可能需要调整 `.container` 或 `.container-fluid` 父级以避免不必要的溢出，再次使用匹配的填充实用程序.

这是一个在大(lg) 断点及以上定制Bootstrap网格的示例。 我们使用`.px-lg-5`增加了`.col`填充, 在父 `.row` 上使用`.mx-lg-n5`进行了抵消，然后使用`.px-lg-5 `调整了.container包装.

![在这里插入图片描述](https://img-blog.csdnimg.cn/4610acd8da654931b2be3accb5505682.png)




```html
<div class="container px-lg-5">
  <div class="row mx-lg-n5">
    <div class="col py-3 px-lg-5 border bg-light">Custom column padding</div>
    <div class="col py-3 px-lg-5 border bg-light">Custom column padding</div>
  </div>
</div>
```

<br><br>

###  行列布局

使用 ` .row-cols-*  `类能够定义一个row空间中可放的列数，并支持不同的断点如 `.col-*` 、 `.col-md-4`，注意需要要写在` .row`空间之中。

![在这里插入图片描述](https://img-blog.csdnimg.cn/92faed15759b48bb8f286fc9baf11a6a.png)



```html
<div class="container">
  <div class="row row-cols-4">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col-6">Column</div>
    <div class="col">Column</div>
  </div>
</div>
```

<br><br>

###  垂直对齐
![在这里插入图片描述](https://img-blog.csdnimg.cn/19d8f11a06a54647b371526f31360375.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

```html
<div class="container">
  <div class="row">
    <div class="col align-self-start">
      One of three columns
    </div>
    <div class="col align-self-center">
      One of three columns
    </div>
    <div class="col align-self-end">
      One of three columns
    </div>
  </div>
</div>
```

<br>

###  水平对齐

![在这里插入图片描述](https://img-blog.csdnimg.cn/605f73496b084b2da28ab636e83cc104.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

```html
<div class="container">
  <div class="row justify-content-start">
    <div class="col-4">
      左对齐
    </div>
    <div class="col-4">
      左对齐
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-4">
      居中对齐
    </div>
    <div class="col-4">
      居中对齐
    </div>
  </div>
  <div class="row justify-content-end">
    <div class="col-4">
      右对齐
    </div>
    <div class="col-4">
      右对齐
    </div>
  </div>
  <div class="row justify-content-around">
    <div class="col-4">
      间隔相等对齐
    </div>
    <div class="col-4">
      间隔相等对齐
    </div>
  </div>
  <div class="row justify-content-between">
    <div class="col-4">
      两端对齐
    </div>
    <div class="col-4">
      两端对齐
    </div>
  </div>
</div>
```

<br>

###  间隙沟槽(gutters)清除
使用`.no-gutters`类来消除沟槽

```html
<div class="row no-gutters">
  <div class="col-12 col-sm-6 col-md-8">.col-12 .col-sm-6 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>
```


###  换行
如果在一行内子DIV定义的栅格总数超过`12`列，BootStrap会在保留列完整的前提下，将无法平行布局的多余列，重置到下一行，并占用一个完整的新行。

![在这里插入图片描述](https://img-blog.csdnimg.cn/0dfdb53c7d4340c0a0219fe505ea0192.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

*容易造成栅格不齐的现象*

<br>

一般换行推荐使用添加`多个.row` 或 `.w-100` 方法处理


```html
<div class="row">
  <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
  <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>

  <!-- Force next columns to break to new line -->
  <div class="w-100"></div>

  <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
  <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
</div>


```


###  重排序
####  Class顺序重定义
使用` .order-* class`选择符，可以对DIV空间进行 可视化排序,系统提供了.order-1到.order-12，12个级别的顺序
![在这里插入图片描述](https://img-blog.csdnimg.cn/e54cf03680504f1d814358a062fff115.png)


```html
<div class="container">
  <div class="row">
    <div class="col">
      1号空间-未定义序号，位置不变。
    </div>
    <div class="col order-12">
      2号空间-排最后。
    </div>
    <div class="col order-1">
      3号空间-放第1但受1号空间不变影响居第2位。 
    </div>
  </div>
</div>
```

<br>

还可以使用`.order-first`，快速更改一个顺序到最前面，同时其它元素也相应的获得了`order:-1`的属性，这个属性也可以与`.order-*`混合使用。

![在这里插入图片描述](https://img-blog.csdnimg.cn/66f9b058a7d2438a9e740a9ca3b8d7b4.png)
```html
<div class="container">
  <div class="row">
    <div class="col">
       1号空间-未定义顺序。
    </div>
    <div class="col">
       2号空间-未定义顺序。
    </div>
    <div class="col order-first">
      3号空间-优先排序，占第1位。
    </div>
  </div>
</div>
```


####  列偏移

可以使用两种方式进行列偏应：
1、使用响应式的`.offset-*`栅格偏移方法。
2、使用边界处理实用程序，它内置了诸如`.ml-*、.p-*、.pt-*`等实用排工具。

#####  class偏移选择器
使用`.offset-md-*`类可以使列向右偏移，通过定义*的数字，则可以实现列偏移，如`.offset-md-4`则是向右偏移四列。
![在这里插入图片描述](https://img-blog.csdnimg.cn/deede6de1bb942bd96371a90b22b0047.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)


```html
<div class="row">
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
</div>
<div class="row">
  <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
  <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
</div>
<div class="row">
  <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
</div>
```


<br>

#####  Margin移动布局
在BootStrap V4中，可以使用`.ml-auto`与`.mr-auto`来强制隔离两边的距离，实现类水平隔离的效果。

![在这里插入图片描述](https://img-blog.csdnimg.cn/a1c38b7c245341c98d34fd8be6eb5df7.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

```html
<div class="row">
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
</div>
<div class="row">
  <div class="col-md-3 ml-md-auto">.col-md-3 .ml-md-auto</div>
  <div class="col-md-3 ml-md-auto">.col-md-3 .ml-md-auto</div>
</div>
<div class="row">
  <div class="col-auto mr-auto">.col-auto .mr-auto</div>
  <div class="col-auto">.col-auto</div>
</div>
```


###  列嵌套
![在这里插入图片描述](https://img-blog.csdnimg.cn/9f0f389ba8c543ab85a218e4a036f233.png)

```html
<div class="row">
  <div class="col-sm-9">
    Level 1: .col-sm-9
    <div class="row">
      <div class="col-8 col-sm-6">
        Level 2: .col-8 .col-sm-6
      </div>
      <div class="col-4 col-sm-6">
        Level 2: .col-4 .col-sm-6
      </div>
    </div>
  </div>
</div>
```