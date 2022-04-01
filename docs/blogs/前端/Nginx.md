---
title: Nginx
date: 2022-04-01
tags:
 - Nginx
 - 前端
categories:
 - 前端
---

## Nginx反向代理配置

```conf
server
{ 
  charset utf-8;
  listen 8089;
  server_name localhost;
  autoindex on;
  add_header Cache-Control "no-cache, must-revalidate";
  location / { 
      root D:/MyData/bookNode;
	  add_header Access-Control-Allow-Origin *;
  }
}
```

## 启动

在nginx.exe目录，打开命令行工具，用命令 启动/关闭/重启nginx 
 
```
start nginx : 启动nginx
nginx -s reload  ：修改配置后重新加载生效
nginx -s reopen  ：重新打开日志文件
nginx -t -c /Tools/ProgrammingTools/nginx/nginx-1.20.2/conf/nginx.conf 测试nginx配置文件是否正确
```

关闭nginx：
```
nginx -s stop  :快速停止nginx
nginx -s quit  ：完整有序的停止nginx
```