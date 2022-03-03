
module.exports = {
  '@vuepress/pwa':  {
    serviceWorker: true,
    updatePopup: {
      message: "内容有更新啦~",
      buttonText: "我看看"
    }
  },
  "dynamic-title":
  {
     showIcon: "/favicon.ico",
     showText: "(/≧▽≦/)咦！又好了！",
     hideIcon: "/favicon.ico",
     hideText: "(●—●)喔哟，崩溃啦！",
     recoverTime: 2000
  },
  'meting':
  {
    //  metingApi,
     meting: {
      auto: 'https://music.163.com/#/playlist?id=7317453882'
     },
     aplayer: {
      fixed: true,
      lrcType: 3,
      autoplay: true,
      theme: '#ff9f6f',
      loop: 'one'
     },
     mobile: {
      lrc: true
     }
  },
  "go-top": {}
}