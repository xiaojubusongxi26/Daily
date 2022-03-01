const nav = require("./config/nav")

module.exports = {
  "title": "小橘不颂兮",
  "description": "欢迎来到小橘不颂兮的个人博客",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    [
      'link',
      {
        "rel": 'stylesheet',
        "href": 'https://at.alicdn.com/t/font_3211877_r75u9wkbvh.css',
        "type": 'text/css'
      }
    ],
    ['meta', { name: 'keywords', content: '小橘不颂兮的个人博客，前端，计算机，摄影，学习，向前走吧' }],
    ['meta', { name: 'author', content: '小橘不颂兮' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }  ],
    ['link', { rel: 'apple-touch-icon', href: '/icons/144.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/144.png', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    // [
    //   'link',
    //   { rel: 'stylesheet', href: './public/assets/css/fontawesome.css' }
    // ]
  ],
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
        "CSS"
      ],
      "/blogs/JavaScript/": [
        "jQuery",
        "RegularExpression",
        "WebAPI"
      ],
      "/blogs/Vue/": [
        "Vue"
      ],
      "/blogs/后端/": [
        "MyBatis",
        "Spring",
        "SpringBoot",
        "SpringMVC"
      ],
      "/blogs/vuepress/": [
        "vuepress"
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
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.（主题的作者大佬）",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "小李浩",
        "desc": "小李浩虽然很可爱，但是他那里现在什么都没有",
        "avatar": "https://daily.keylargo.top/icon_vuepress_reco.png",
        "link": "https://daily.keylargo.top/"
      }
    ],
    "logo": "/小橘.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "更新时间",
    "author": "小橘",
    "authorAvatar": "/avatar1.jpg",
    "record": "xxxx",
    "startYear": "2022 "
  },
  "markdown": {
    "lineNumbers": true
  },
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  plugins: [
    '@vuepress/pwa',  {
      serviceWorker: true,
      updatePopup: { // 更改刷新内容的弹窗的显示文字
        message: "内容有更新啦~",
        buttonText: "我看看"
      }
    }
  ]
}