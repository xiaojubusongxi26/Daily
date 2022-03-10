---
home: true
heroText: 嗨！好久不见
tagline: 小橘不颂兮
# heroImage: /hero.png
# heroImageStyle: {
#   maxWidth: '600px',
#   width: '100%',
#   display: block,
#   margin: '9rem auto 2rem',
#   background: '#fff',
#   borderRadius: '1rem',
# }
bgImage: '/assets/img/bg/晚霞.jpg'
bgImageStyle: {
  # height: '450px'
}
isShowTitleInHome: false
# actionText: Guide
# actionLink: /views/other/guide
features:
- title: Yesterday
  details: 逝者如斯
- title: Today
  details: 活于此刻
- title: Tomorrow
  details: 孤独前行
---

<style>
  .hero {
    color: #FFF
  }
  @import url('https://fonts.googleapis.com/css2?family=Wendy+One&display=swap');

.hero > .box {
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-50%,-50%);
  font-family: 'Wendy One', sans-serif;
}

.box > p {
  font-size:4vw;
  white-space: nowrap;
  overflow: hidden;
  line-height: 40px;
  /* color: #f7630c; */
  /* text-shadow: 0 10px 7px rgba(0,0,0,0.4),0 -10px 1px #fff; */
  /* letter-spacing: -3px; */
}

.box > p:hover {
  animation: glitch .3s linear infinite;
  cursor: pointer;
}

@keyframes glitch {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
}
</style>

<script>
export default {
  mounted () {
    const h = document.querySelector(".hero").firstElementChild.classList;
    h.add("box");
    console.log(h);
  }
  
}
</script>