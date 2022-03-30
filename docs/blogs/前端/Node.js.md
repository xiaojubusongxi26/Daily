---
title: Node.js
date: 2021-10-28
tags:
 - JS
 - Node
 - 前端
categories:
 - 前端
---


nodejs是一个基于Chrome V8引擎的js的运行时环境

Nodejs可以解析和运行js

以前只有浏览器可以解析执行js代码


 Nodejs中没有DOM和BOM 等浏览器内置API

Nodejs提供了一些服务器级别的操作API：

- [ ] 文件读写
- [ ] 网络服务编程
- [ ] 网络通信
- [ ] http服务器


## fs文件系统模块


## http 模块

### 创建web服务器的基本步骤

1. 导入http模块
2. 创建web服务器实例
3. 为服务器实例绑定request事件，监听客户端请求
4. 启动服务器


#### 导入http模块

```js
Const http = require(‘http’)
```

#### 创建web服务器实例

调用`http.createServer()`方法

```js
Const server = http.createServer()
```


#### 为服务器实例绑定request事件

使用服务器实例（.on方法）绑定request事件，即可监听客户端发送过来的网络请求

```js
Server.on(‘request’, (req, res) => {
	// 只要有客户端来请求服务器，就会触发request事件，从而调用这个事件处理函数
}
```


#### 启动服务器

调用服务器实例的`.listen()`方法

```js
// .listen(端口号，cb回调)
Server.listen(80, () => {}
```


### Res.end()

向客户端发送指定的内容，并结束这次请求的处理过程


### 根据不同的url响应不同的html内容

1. 获取请求的url地址
2. 设置默认的响应内容为404 Not Found
3. 判断用户请求的url地址
4. 设置Content-Type响应头，防止中文乱码
5. 使用res.end()把内容响应给客户端



## 模块化

### module.exports

使用module.exports对象，将模块内的成员共享出去，供外接使用。
外界使用require()方法导入自定义模块时，得到的就是module.exports所指的对象



Node.js提供了`exports`对象，默认情况下，`exports`和`module.exports`指向同一个对象。最终共享的结果，还是以module.exports指向的对象为准。


### module.exports和exports使用误区

使用`require()`模块时，得到的永远是`module.exports`指向的对象



## Express

### 安装

```
npm i express@4.17.1
```


### 创建基本的web服务器

``` js
// 1. 导入express
const express = require(‘express’)

// 2. 创建web服务器
const app = express()

// 3. 调用app.listen(端口号,回调函数)，启动服务器
app.listen(80, () => {
	
})

```


### Express基本使用

#### Get请求

```js
app.get(‘请求url’, function(req, res) {})
```


#### Post请求

```js
app.post(‘请求url’, function(req, res) {})
```

#### 响应客户端

使用`res.send()`方法,把处理好的内容发送给客户端

```js
res.send(‘请求成功’)
```


#### 获取URL中携带的查询参数

通过`req.query`对象，访问到客户端通过`查询字符串`的形式，发送到服务器的参数

#### 获取URL的动态参数

`req.params`


```js
app.get(‘/user/:id/:username’, (req, res)
=> {
	console.log(req.params)
})
```


### 托管静态资源

#### express.static()

创建静态资源服务器

```js
// 设置public为静态资源服务器根目录，访问资源时无/pinlic前缀
app.use(express.static(‘public’))
```

托管多个静态资源文件就多次调用app.use()，按调用顺序访问资源文件目录


#### 挂载路径前缀

```js
app.use( ‘/public’, express.static(‘public’))
```


### nodemon热更新


```
npm i -g nodemon
```


![](Node.js/IMG_1084.jpeg)




### Express路由

在express中，路由是指`客户端的请求`与`服务器处理函数`之间的映射关系

组成：`请求的类型`,`请求的URL地址`,`处理函数`

```js
app.METHOD(PATH,HANDLER)
```


#### 模块化路由

1. 创建路由模块对应的.js文件
2. 调用`express.Router()`函数创建路由对象
3. 向路由对象挂在具体的路由
4. 使用`module.exports`向外共享路由对象
5. 使用`app.use()`函数注册路由


## 中间件

中间件函数含有`next()`，且中间件函数处理完毕必须调用`next()`，调用下一个中间件函数。

### 注册全局中间件

```js
app.use(中间件名称)
```


### 局部中间件

```js
app.get(‘/user’, 中间件1, 中间件2, () => {})
```


### 注意事项

1. 要在路由之前注册中间件
2. 客户端发送的请求，可以连续调用多个中间件进行处理
3. 执行完中间件的业务代码之后，要调用next()函数进行流转
4. 为了防止代码混淆，在next()之后不要再写代码
5. 连续调用多个中间件时，多个中间件之间，共享req和res对象

### 中间件的分类

1. 应用级别
2. 路由级别
3. 错误级别
4. Express内置
5. 第三方

#### 应用级别中间件

通过app.use()或app.get()或app.post()，绑定到app实例上的中间件

#### 路由级别中间件

express.Router()


#### 错误级别的中间件

格式：四个形参，(err, req, res, next)

错误级别的中间件，`必须注册在所有路由之后`


#### Express内置的中间件

1. express.static:快速托管静态资源内置的中间件
2. express.json:解析JSON格式的请求体数据
3. express.urlencoded:解析URL-encoded格式的请求体数据

```js
app.use(express.json())

app.use(express.urlencoded({  extended: false}))
```


#### 第三方中间件


## 跨域

1. CORS
2. JSONP（只支持GET请求）

### 使用CORS中间件

步骤：


1. 安装

```
npm i cors
```

2. 导入中间件

```js
const cors = require('cors')
```

3. 配置中间件

```js
// 在路由之前
app.use(cors())
```

### CORS响应头

1. Access-Control-Allow-Origin

```
Access-Control-Allow-Origin: <origin> | *
```

`origin`参数的值指定了`允许访问该资源的外域URL`，`*`允许所有
```
res.setHeader('Access-Control-Allow-Origin', 'http://daily.xiaojubusongxi26.love')
```


2. Access-Control-Allow-Headers

对额外（默认9个）的请求头进行声明

```
res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Custom-Header')
```


3. Access-Control-Allow-Methods

指明实际请求所允许使用的HTTP方法

```
// 只允许POST、GET、DELETE、HEAD请求方法
res.setHeader ( ' Access-Control-Allow-Methods ', 'POST，GET，DELETE，HEAD')
// 允许所有的 HTTP请求方法
res.setHeader( ' Access-Control-Allow-Methods ' , "*')
```

### CORS请求分类

1. 简单请求
2. 预检请求

#### 简单请求(一次请求)

1. 请求方式：GET, POST, HEAD
2. HTTP头部信息不超过以下几种字段:无自定义头部字段、Accept、Accept-Language、Content-Language、DPR.Downlink、Save-Data、Viewport-Width、Width 、Content-Type(只有三个值application/x-www-form-urlencoded、multipart/form-data、text/plain)


#### 预检请求(两次请求)

在浏览器与服务器正式通信之前，浏览器会`先发送OPTION请求进行预检，以获知服务器是否允许该实际请求`，所以这一次的OPTION请求称为“预检请求”。`服务器成功响应预检请求后，才会发送真正的请求，并且携带真实数据。`


1. 请求方式为GET、POST、HEAD之外的请求Method类型
2. 请求头中包含自定义头部字段
3. 向服务器发送了application/json格式的数据




## 操作数据库


1. 安装mysql模块
2. 通过mysql模块连接到mysql数据库
3. 通过mysql模块执行sql语句


### 安装与配置

```
npm i mysql
```

配置步骤:

```js
// 1. 导入 mysql 模块
const mysql = require('mysql')

// 2. 建立与 MySQL 数据库的连接
const db = mysql.createPool({
	host: '127.0.0.1',
	user: 'root',
	password: 'tan187734304'
	database: 'node',
})
```

### 使用

#### 查

```js
// select 语句，返回数据 res 是一个数组
const strSql = 'select * from buliangren'
db.query(strSql, (err, res) => {
  // 打印错误
  if (err) return console.log(err);
  
  // 打印数据
  console.log(res);
  
})
```

### 增

```js
// 要插入的数据
const buliangren = { name: '段成天', identity: '天速星'}
// 待执行 SQL 语句，  insert into 语句，返回数据 res 是一个对象
const sqlStr = 'insert into buliangren ( name, identity ) values (?, ?)'
// 便捷语句：const sqlStr = 'insert into buliangren set ?'
// 用数组的形式，依次为 ？ 占位符指定具体的值
db.query(sqlStr, [buliangren.name, buliangren.identity], (err, res) => {
  if (err) return console.log(err);
  if (res.affectedRows === 1) { console.log('插入成功') }
})
```

### 改

```js
const buliangren = { name: '李星云', identity: '新不良帅' }
// 便捷语句 update buliangren set ? where name=?
const sqlStr = 'update buliangren set identity=? where name=?'
db.query(sqlStr, [ buliangren.identity, buliangren.name ], (err, res) => {
  // 打印错误
  if (err) return console.log(err);
  
  // 打印数据
  if (res.affectedRows === 1) { console.log(res) }
  
})
```

### 删

```js
const sqlStr = 'delete from buliangren where id=?'
db.query(sqlStr, 1, (err, res) => {
  // 打印错误
  if (err) return console.log(err);
  
  // 打印数据
  if (res.affectedRows === 1) { console.log(res) }
  
})
```


## Session认证

### 安装express-session

```
npm i express-session
```

### 配置 express-session 中间件

```js
const session = require('express-session')

app.use(session({
	secret: 'keyboard cat', // 可以为任意字符串
	resave: false, // 固定写法
	saveUninitialized: true	// 固定写法
}))
```

### 向 session 中存数据

调用 req.session 来访问和使用session对象


```js
const session = require('express-session')

app.use(session({
	secret: 'wangxietang', // 可以为任意字符串
	resave: false, // 固定写法
	saveUninitialized: true	// 固定写法
}))
```

## JWT 认证

组成部分：
1. Header（头部）
2. Payload（有效荷载）
3. Signature（签名）

三者之间使用 `.` 隔开

```js
Header.Payload.Signature
```

 - Payload 部分代表真正的用户信息，是用户信息经过加密后生成的字符串
 - Header 和 signature 是 `安全性相关` 的部分，只是为了保证token的安全性


### 在 Express 中 使用 JWT

#### 安装：

```
npm i jsonwebtoken@8.5.1 express-jwt@5.3.3
```

 - jsonwebtoken 用于生成 JWT 字符串
 - express-jwt 用于将 JWT 字符串解析还原为JSON对象

#### 导入：

```js
const jwt = require('jsonwebtoken')

const expressJWT = require('express-jwt')
```

#### 定义 secret 密钥

为了`保证JWT字符串的安全性`，防止JWT字符串在网络传输过程中被别人破解，我们需要专门定义一个用于`加密`和`解密`的secret密钥:

1. 当生成JWT字符串的时候，需要使用secret密钥对用户的信息进行加密，最终得到加密好的JWT字符串
2. 当把JWT字符串解析还原成JSON对象的时候，需要使用secret密钥进行解密

```js
const secretKey = 'wangxietang ❀' // 越复杂越好
```

#### 生成 JWT 字符串

调用 jsonwebtoken 的 sign() 方法

```js
// 参数1：用户的信息对象， 参数2：加密的密钥， 参数3：配置对象，可以配置当前token的有效期
  const tokenStr = jwt.sign({ username: userinfo.username }, secretKey, { expiresIn: '30m' })

  res.send({
    status: 200,
    message: '登录成功',
    token: 'Bearar ' + tokenStr // 要发送给客户端的 token 字符串
  })
```

**注意：express只接受请求头是authorization格式的token。authorization格式是这样的 Authorization:Bearer token。所以最后响应给客户端的token值前面需要加上 `Bearer `（有空格）**

#### 将 JWT 字符串还原为 JSON 对象

```js
// 注册将 JWT 字符串解析还原成 JSON 对象的中间件
// .unless({ path: [/^\/api\//] }) 指定哪些接口不需要访问权限
app.use(expressJWT({ secret: secretKey }).unless({ path: [/^\/api\//] }))
```
**配置成功 express-jwt 中间件之后，就可以把解析出来的用户信息，挂载到 req.user 属性上**


#### 捕获解析 JWT 失败后产生的错误

当 express-jwt 解析 Token 字符串是，如果客户端发送的Token字符串获取或不合法， 会产生解析失败的错误。
可以通过 Express 的错误中间件进行捕获

```js
app.use(err, req, res, next) => {
	if (err.name === 'UnauthorizedError') {}
	return res.send({
		status: 401,
		message: '无效的token'
	})

	// 其他原因导致的错误
	res.send({
		status: 500,
		message: '位置错误
	})
	
})


## 对密码进行加密

```cmd
npm i bcryptjs
```

使用方法：

```js
// 导入 bcryptjs 包 进行加密
const bcrypt = require('bcryptjs')

//  调用 bcrypt.hashSync() 对密码进行加密
userinfo.password = bcrypt.hashSync(userinfo.password, 10)
```

## 数据验证

为表单中携带的每个数据项，定义验证规则
```
npm i joi
```

实现自动对表单数据进行验证的功能

```
npm i @escook/express-joi
```