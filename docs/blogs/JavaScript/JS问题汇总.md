---
title: JS问题汇总
date: 2022-03-23
tags:
 - JS
categories:
 - JavaScript
---

## 使用原生JS在指定元素之前添加元素

```js
  // 创建元素
  let divEle = document.createElement('div')
  divEle.innerText = '新节点'
  // 获取父节点
  let F = document.querySelector(".theme-default-content")
  console.log(D)
  // 获取指定节点
  let h = document.querySelector("h1")
  // 新节点添加在指定节点之前
  D.insertBefore(divEle, h)
```


## 使用原生JS 添加 / 删除 类

```js
// 添加
let somenode = document.querySelector("#demo").classList.add("class")

// 删除
let somenode = document.querySelector("#demo").classList.remove("class")
```