const headConf = require("./config/headConf");
const nav = require("./config/nav");
const pluginsConf = require("./config/pluginsConf");

module.exports = {
  "title": "小橘不颂兮",
  "description": "欢迎来到小橘不颂兮的个人博客",
  // "dest": "public",
  base: "./",
  "head": headConf,
  plugins: pluginsConf,
  "theme": "reco",
  "themeConfig": {
    "nav": nav,
    valineConfig: {
      appId: 'DXFkz6H4Ht7b9lXaJfBdR5sv-gzGzoHsz',// your appId
      appKey: '5hqYKCfaazHurBbjUU2sAP1Y', // your appKey
    },
    // 密钥-全局加密
    /* keyPage: {
      keys: ['2d7cd5c74163fa45b5d7bdb458b7a5e4'], // 1.3.0 版本后需要设置为密文
      color: '#42b983', // 登录页动画球的颜色
      lineColor: '#42b983' // 登录页动画线的颜色
    }, */
    subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容,
    "sidebar": {
      "/blogs/计算机基础/": [
        "compositionPrinciple/",
        "computerNetwork/",
        "dataStructure/",
        "operatingSystem/"
      ],
      "/blogs/CSS/": [
        "CSS",
        "Bootstrap"
      ],
      "/blogs/JavaScript/": [
        "jQuery",
        "RegularExpression",
        "WebAPI",
        "ES6模块化",
        "选择器",
        "JS问题汇总",
        "ES6-11新特性"
      ],
      "/blogs/Vue/": [
        "Vue",
        "项目配置"
      ],
      "/blogs/前端/":[
        "Node.js",
        "Nginx",
        "vuepress",
        "webpack",
        "学习问题汇总",
        "在Vue中使用vue-cropper裁剪图片并向nodejs后台传入数据"
      ],
      "/blogs/后端/": [
        "MyBatis",
        "Spring",
        "SpringBoot",
        "SpringMVC"
      ],     
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    // 友情链接
    "friendLink": [
      /* {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.（主题的作者大佬）",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      } */
    ],
    "logo": "/小橘.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "更新时间",
    "author": "小橘不颂兮",
    "authorAvatar": "/assets/img/avatar/mmexport1639710400520.jpg",
    "record": `蜀ICP备2022003892号`,
    "recordLink": 'https://beian.miit.gov.cn/',
    "startYear": "2022 ",
    "footer": {
      "display": true
    }
  },
  "markdown": {
    "lineNumbers": true
  },
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  }
}