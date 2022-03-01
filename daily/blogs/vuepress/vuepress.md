---
title: vuepress构建步骤
date: 2022-3-1
sticky: 1
tags:
 - vuepress
categories:
 - vuepress
---

::: tip
想搭建一个属于自己的博客吗？这里应该有你需要的
:::

<!-- more -->

# vuepress构建步骤

::: tip
本篇笔记是基于vuepress的官方默认主题进行搭建，如果想搭建本博客正在使用的主题，请看另一篇笔记哦
:::

## 准备工作
1. github
2. nodejs
3. git
4. yarn (推荐使用)

## 在github中新建项目
<img :src="$withBase('/assets/img/other/vuepress/newproject.png')"   alt="新建项目">
这里选择Node
<br>
<img :src="$withBase('/assets/img/other/vuepress/pullproject.png')"   alt="拉取项目"/>
<br>
克隆项目到本地

<br><br>
## 构建项目
1. 打开git bash
创建并进入一个新目录

```
mkdir docs && cd docs
```

2. 初始化

```
yarn init # npm init
```

3. 将 VuePress 安装为本地依赖

```
yarn add -D vuepress # npm install -D vuepress
```

4. 创建博客
```
mkdir docs && echo '# Hello VuePress' > docs/README.md
```

5. 在package.json中添加配置
```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

**热更新配置:**
在package.json中的scripts中更改如下
```
vuepress dev docs
```
改为
```
vuepress dev docs --temp .temp
```

之后会生成.temp文件，可以在.gitignore上把它忽略，添加如下代码，就不会上传到github
```
# vuepress temp file
.temp
```

<br><br>
## 基本配置
在docs文件夹下创建.vuepress文件夹，在其下创建config.js，公共资源目录public，配置config.js
<img :src="$withBase('/assets/img/other/vuepress/创建config.png')" /><br>

### 配置config.js

```js
module.exports = {
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ]
  }
}
```

### 配置导航栏以及侧边栏

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ],
    sidebar: [
      '/',
      '/page-a',
      ['/page-b', 'Explicit link text']
    ]
  }
}
```


[详情请看官方文档.](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%AF%8C%E6%96%87%E6%9C%AC-footer)

可以使用插件自动生成导航栏
**[Vuepress Plugin Auto Sidebar.](https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/zh/)**

#### 安装
```
yarn add vuepress-plugin-auto-sidebar -D || npm i vuepress-plugin-auto-sidebar -D
```

#### 使用

```js
module.exports = {
  plugins: [
    ["vuepress-plugin-auto-sidebar", {
      // options
    }]
  ]
}
```


<br><br>

## 更新时间
使用插件`@vuepress/plugin-last-updated`,如果使用*默认主题*，无需安装该插件，因为 VuePress 的 core 中已经包含此插件，直接使用 themeConfig.lastUpdated 选项。

### 使用
```js
module.exports = {
  plugins: ['@vuepress/last-updated']
}
```


### 选项
#### transformer
- 类型: (timestamp: number, lang: string) => string
- 默认值: undefined
默认情况下，该插件为每个页面生成一个 13 位的时间戳，可以传入一个 transformer 将其转换为你想要的任何格式。

```js
const moment = require('moment');

module.exports = {
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).fromNow()
        }
      }
    ]
  ]
}
```


可以使用moment插件对时间格式进行更改，以及设置中文格式
```js
const moment = require('moment');
moment.locale("zh-cn")

module.exports = {
  plugins: [
    [
      '@vuepress/last-updated': {
        transformer: (timestamp) => moment(timestamp).format("LLLL")
      }
    ]
  ]
}
```

效果如下：<br>
<img :src="$withBase('/assets/img/other/vuepress/time.png')" /><br>
<br>
<br>

#### dateOptions
- 类型: object
- 默认值: undefined
你也可以传入一个对象作为选项，以自定义时间戳的输出格式。详细信息请参阅[Date.prototype.toLocaleString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)的选项参数。


<br><br>


## 发布
### 创建deploy.sh
在项目中创建**deploy.sh**文件
``` sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```


根据需要对文件进行修改，如：
``` sh
# 如果是发布到自定义域名
echo 'daily.xiaojubusongxi26.love' > CNAME

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:xiaojubusongxi26/mydaily.git master:gh-pages
```

在`package.json`中添加
```json
"scripts": {
    "deploy": "bash deploy.sh"
  }
```


### Github Pages部署

执行指令
```
yarn deploy
```
打开github即可看到生成了新的分支
<img :src="$withBase('/assets/img/other/vuepress/deploy.png')" /><br>

<br>

**查看是否部署成功:**
<img :src="$withBase('/assets/img/other/vuepress/settings.png')" /><br>
<img :src="$withBase('/assets/img/other/vuepress/githubpages.png')" /><br>
<img :src="$withBase('/assets/img/other/vuepress/查看域名.png')" /><br>

<br><br>


## 配置PWA
::: tip
PWA可以让网站的体验变得更好，能够模拟一些原生功能，比如通知推送。
:::

### 安装

```
yarn add -D @vuepress/plugin-pwa
# OR npm install -D @vuepress/plugin-pwa
```


### 使用
```js
module.exports = {
  plugins: [
    '@vuepress/pwa':  {
      serviceWorker: true,
      updatePopup: { // 更改刷新内容的弹窗的显示文字
        message: "内容有更新啦~",
        buttonText: "我看看"
      }
    }
  ]
}
```

:::tip
为了让你的网站完全地兼容 PWA，你需要:

- 在 .vuepress/public 提供 Manifest 和 icons
- 在 .vuepress/config.js 添加正確的 [head links](https://vuepress.vuejs.org/config/#head).

更多细节，请参见 [MDN docs about the Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest).
:::



我的配置如下：
```js
module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: '小橘不颂兮的个人博客，前端，计算机， 数学，英语，数据结构，操作系统' }],
    ['meta', { name: 'author', content: '小橘不颂兮' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }  ],
    ['link', { rel: 'apple-touch-icon', href: '/icons/144.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/144.png', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: [
    '@vuepress/pwa':  {
      serviceWorker: true,
      updatePopup: { // 更改刷新内容的弹窗的显示文字
        message: "内容有更新啦~",
        buttonText: "我看看"
      }
    }
  ]
}
```


`Manifest.json`文件可以参考如下：

```json
{
  "name": "小橘不颂兮",
  "short_name": "小橘",
  "icons": [
    {
      "src": "/icons/144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "/icons/192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/256.png",
      "sizes": "256x256",
      "type": "image/png"
    },
    {
      "src": "/icons/512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "#fff",
  "theme_color": "#3eaf7c"
}
```


`icons图标`可以在这个网站进行生成（尺寸必须为1：1）:point_right:[Manifest 图标生成工具](https://lecepin.github.io/pwa-genico/)

<br>

执行`yarn deploy`指令后，按`F12`打开浏览器开发者调试工具进行查看
<br>
<img :src="$withBase('/assets/img/other/vuepress/pwa.png')">

<br>
每次打包提交之后这边都会进行更新，安装成功后会提示页面刷新
<br>
<img :src="$withBase('/assets/img/other/vuepress/pwarenew.png')">


<br><br>


## vssue评论

Vssue是Vue 驱动的、基于 Issue 的评论插件.[官网地址](https://vssue.js.org/zh/)

### 安装
```
yarn add @vssue/vuepress-plugin-vssue
yarn add @vssue/api-github-v4
```

::: tip
v3版本不需要登录之后就可以评论，v4版本需要登录后才能进行评论。
:::


### 使用插件

```js
// .vuepress/config.js

module.exports = {
  plugins: {
    '@vssue/vuepress-plugin-vssue': {
      // 设置 `platform` 而不是 `api`,安装自己安装的版本来填写
      platform: 'github',

      // 其他的 Vssue 配置，以我的使用的github为例
      owner: 'OWNER_OF_REPO', // github用户名
      repo: 'NAME_OF_REPO', // 项目名称
      clientId: 'YOUR_CLIENT_ID', // 生成的CLIENT_ID
      clientSecret: 'YOUR_CLIENT_SECRET', // 生成的CLIENT_SECRET
    },
  },
};
```


::: tip
`@vssue/vuepress-plugin-vssue` 会自动根据你设置的 `platform` 为你解析对应的 `api` 包：

`platform github` - api 包 `@vssue/api-github-v3`<br>
`platform github-v4` - api 包 `@vssue/api-github-v4`<br>
`platform gitlab` - api 包 `@vssue/api-gitlab-v4`<br>
`platform bitbucket` - api `包 @vssue/api-bitbucket-v2`<br>
`platform gitee` - api 包 `@vssue/api-gitee-v5`<br>
`platform gitea` - api 包 `@vssue/api-gitea-v1`<br>


`owner`: 对应 repository 的拥有者帐号或者团队<br>
`repo`: 用来存储评论的 repository<br>
`clientId`: OAuth App 的 `client id`<br>
`clientSecret`: OAuth App 的 `client secret` （只有在使用某些平台时需要）<br>
:::


### clientId和clientSecret 生成

在`GitHub`的`Settings >  Developer settings`下，选择`Oauth Apps`，点击右侧进行创建。
<br>
<img :src="$withBase('/assets/img/other/vuepress/OauthApps.png')">
<br>
<img :src="$withBase('/assets/img/other/vuepress/createOAuth.png')">
<br>

**创建之后可以看到**
<br>
<img :src="$withBase('/assets/img/other/vuepress/createsecrets.png')">
<br>



将生成的`clientId`和`clientSecret`复制到项目中即可

### 使用 Vssue 组件
在需要生成评论的Markdown文件中添加如下代码即可使用

```md
<!-- README.md -->

# Vssue Demo

<Vssue :title="$title" />
```
效果如下，如果是第一次则需要登录后才能评论
<br>
<img :src="$withBase('/assets/img/other/vuepress/vssueEffect.png')">
<br>


### 全局配置Vssue
在`config.js`中添加

```js
module.exports = {
  plugins: {
    '@vssue/vuepress-plugin-vssue': {
      autoCreateIssue: true
    },
  },
};
```
::: tip
如果 `autoCreateIssue` 设置为 `true`，在对应的 `Issue` 不存在时，Vssue 会自动尝试为你创建 Issue。注意，若你当前没有登录，则 Vssue 会自动跳转到平台的认证页面。

如果 `autoCreateIssue` 设置为 `false`，你必须手动创建 `Issue`。
:::


<br>

**这里使用了一下vuepress官方文件，主要需要用到[主题的继承](https://vuepress.vuejs.org/zh/theme/inheritance.html#%E5%8A%A8%E6%9C%BA)**

在`.vuepress`文件下创建文件`/theme/layouts/Layout.vue`,`/theme/util/index.js`和`/theme/index.js`。
<br>
<img :src="$withBase('/assets/img/other/vuepress/Inheritance.png')">
<br>


三个文件代码如下：
::: details theme/index.js
```js
// theme/index.js
module.exports = {
  extend: '@vuepress/theme-default'
}
```

:::
::: details theme/util/index.js
``` js
export const hashRE = /#.*$/
export const extRE = /\.(md|html)$/
export const endingSlashRE = /\/$/
export const outboundRE = /^[a-z]+:/i

export function normalize (path) {
  return decodeURI(path)
    .replace(hashRE, '')
    .replace(extRE, '')
}

export function getHash (path) {
  const match = path.match(hashRE)
  if (match) {
    return match[0]
  }
}

export function isExternal (path) {
  return outboundRE.test(path)
}

export function isMailto (path) {
  return /^mailto:/.test(path)
}

export function isTel (path) {
  return /^tel:/.test(path)
}

export function ensureExt (path) {
  if (isExternal(path)) {
    return path
  }
  const hashMatch = path.match(hashRE)
  const hash = hashMatch ? hashMatch[0] : ''
  const normalized = normalize(path)

  if (endingSlashRE.test(normalized)) {
    return path
  }
  return normalized + '.html' + hash
}

export function isActive (route, path) {
  const routeHash = decodeURIComponent(route.hash)
  const linkHash = getHash(path)
  if (linkHash && routeHash !== linkHash) {
    return false
  }
  const routePath = normalize(route.path)
  const pagePath = normalize(path)
  return routePath === pagePath
}

export function resolvePage (pages, rawPath, base) {
  if (isExternal(rawPath)) {
    return {
      type: 'external',
      path: rawPath
    }
  }
  if (base) {
    rawPath = resolvePath(rawPath, base)
  }
  const path = normalize(rawPath)
  for (let i = 0; i < pages.length; i++) {
    if (normalize(pages[i].regularPath) === path) {
      return Object.assign({}, pages[i], {
        type: 'page',
        path: ensureExt(pages[i].path)
      })
    }
  }
  console.error(`[vuepress] No matching page found for sidebar item "${rawPath}"`)
  return {}
}

function resolvePath (relative, base, append) {
  const firstChar = relative.charAt(0)
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  const stack = base.split('/')

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop()
  }

  // resolve relative path
  const segments = relative.replace(/^\//, '').split('/')
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i]
    if (segment === '..') {
      stack.pop()
    } else if (segment !== '.') {
      stack.push(segment)
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('')
  }

  return stack.join('/')
}

/**
 * @param { Page } page
 * @param { string } regularPath
 * @param { SiteData } site
 * @param { string } localePath
 * @returns { SidebarGroup }
 */
export function resolveSidebarItems (page, regularPath, site, localePath) {
  const { pages, themeConfig } = site

  const localeConfig = localePath && themeConfig.locales
    ? themeConfig.locales[localePath] || themeConfig
    : themeConfig

  const pageSidebarConfig = page.frontmatter.sidebar || localeConfig.sidebar || themeConfig.sidebar
  if (pageSidebarConfig === 'auto') {
    return resolveHeaders(page)
  }

  const sidebarConfig = localeConfig.sidebar || themeConfig.sidebar
  if (!sidebarConfig) {
    return []
  } else {
    const { base, config } = resolveMatchingConfig(regularPath, sidebarConfig)
    if (config === 'auto') {
      return resolveHeaders(page)
    }
    return config
      ? config.map(item => resolveItem(item, pages, base))
      : []
  }
}

/**
 * @param { Page } page
 * @returns { SidebarGroup }
 */
function resolveHeaders (page) {
  const headers = groupHeaders(page.headers || [])
  return [{
    type: 'group',
    collapsable: false,
    title: page.title,
    path: null,
    children: headers.map(h => ({
      type: 'auto',
      title: h.title,
      basePath: page.path,
      path: page.path + '#' + h.slug,
      children: h.children || []
    }))
  }]
}

export function groupHeaders (headers) {
  // group h3s under h2
  headers = headers.map(h => Object.assign({}, h))
  let lastH2
  headers.forEach(h => {
    if (h.level === 2) {
      lastH2 = h
    } else if (lastH2) {
      (lastH2.children || (lastH2.children = [])).push(h)
    }
  })
  return headers.filter(h => h.level === 2)
}

export function resolveNavLinkItem (linkItem) {
  return Object.assign(linkItem, {
    type: linkItem.items && linkItem.items.length ? 'links' : 'link'
  })
}

/**
 * @param { Route } route
 * @param { Array<string|string[]> | Array<SidebarGroup> | [link: string]: SidebarConfig } config
 * @returns { base: string, config: SidebarConfig }
 */
export function resolveMatchingConfig (regularPath, config) {
  if (Array.isArray(config)) {
    return {
      base: '/',
      config: config
    }
  }
  for (const base in config) {
    if (ensureEndingSlash(regularPath).indexOf(encodeURI(base)) === 0) {
      return {
        base,
        config: config[base]
      }
    }
  }
  return {}
}

function ensureEndingSlash (path) {
  return /(\.html|\/)$/.test(path)
    ? path
    : path + '/'
}

function resolveItem (item, pages, base, groupDepth = 1) {
  if (typeof item === 'string') {
    return resolvePage(pages, item, base)
  } else if (Array.isArray(item)) {
    return Object.assign(resolvePage(pages, item[0], base), {
      title: item[1]
    })
  } else {
    const children = item.children || []
    if (children.length === 0 && item.path) {
      return Object.assign(resolvePage(pages, item.path, base), {
        title: item.title
      })
    }
    return {
      type: 'group',
      path: item.path,
      title: item.title,
      sidebarDepth: item.sidebarDepth,
      initialOpenGroupIndex: item.initialOpenGroupIndex,
      children: children.map(child => resolveItem(child, pages, base, groupDepth + 1)),
      collapsable: item.collapsable !== false
    }
  }
}
```
:::

::: details theme/layouts/Layout.vue
``` vue
<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar
      v-if="shouldShowNavbar"
      @toggle-sidebar="toggleSidebar"
    />

    <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"
    />

    <Sidebar
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar"
    >
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </Sidebar>

    <Home v-if="$page.frontmatter.home" />

    <Page
      v-else
      :sidebar-items="sidebarItems"
    >
      <template #top>
        <slot name="page-top" />
      </template>
      <template #bottom>
        <slot name="page-bottom" />
        <!-- 更改位置 -->
        <Vssue class="theme-default-content content__default" :options="{ locale: 'zh' }"/>
      </template>
    </Page>
  </div>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Navbar from '@theme/components/Navbar.vue'
import Page from '@theme/components/Page.vue'
import Sidebar from '@theme/components/Sidebar.vue'
import { resolveSidebarItems } from '../util'
export default {
  name: 'Layout',
  components: {
    Home,
    Page,
    Sidebar,
    Navbar
  },
  data () {
    return {
      isSidebarOpen: false
    }
  },
  computed: {
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
    },
    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return (
        !frontmatter.home
        && frontmatter.sidebar !== false
        && this.sidebarItems.length
      )
    },
    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },
    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  },
  mounted () {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
  },
  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.$emit('toggle-sidebar', this.isSidebarOpen)
    },
    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },
    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}
</script>
```
:::


在`Layout.vue`文件中添加了这行代码实现全局配置
```vue
<Vssue class="theme-default-content content__default" :options="{ locale: 'zh' }"/>
```


<br><br>

## back-to-top
### 安装
```
yarn add -D @vuepress/plugin-back-to-top
# OR npm install -D @vuepress/plugin-back-to-top
```
### 使用
```
module.exports = {
  plugins: ['@vuepress/back-to-top']
}
```

<br><br>

## 图片缩放
### 安装
```
yarn add -D @vuepress/plugin-medium-zoom
# OR npm install -D @vuepress/plugin-medium-zoom
```
### 使用
#### 简单使用
```js
module.exports = {
  plugins: [
      '@vuepress/medium-zoom': {
    }
  ]
}
```

#### 自定义使用
```js
module.exports = {
  plugins: {
    '@vuepress/medium-zoom': {
      selector: 'img.zoom-custom-imgs',
      // medium-zoom options here
      // See: https://github.com/francoischalifour/medium-zoom#options
      options: {
        margin: 16
      }
    }
  }
}
```

[选项配置](https://github.com/francoischalifour/medium-zoom#options)



<br><br>

## Github Actions自动部署
::: tip
配置`Github Actions自动部署`之后就不需要再执行`yarn deploy`手动部署项目了，每次项目提交到github之后，会自动部署到网站上
:::
### 创建deploy.yml
在项目根目录下创建`.github/workflows/deploy.yml`
<br>
<img :src="$withBase('/assets/img/other/vuepress/createdeploy.png')">
<br>

<<< @/.github/workflows/deploy.yml

### 生成令牌
<br>
<img :src="$withBase('/assets/img/other/vuepress/createtoken.png')">
<br>
<img :src="$withBase('/assets/img/other/vuepress/tokensetting.png')">
<br>
<img :src="$withBase('/assets/img/other/vuepress/key.png')">
<br>

**然后回到项目仓库中，点击仓库中的`Settings`**
<br>
<img :src="$withBase('/assets/img/other/vuepress/createsecrets.png')">
<br>
<img :src="$withBase('/assets/img/other/vuepress/secrets.png')">
<br>

**每次提交项目之后，可以在仓库的`Actions`中看到自动部署过程**
<br>
<img :src="$withBase('/assets/img/other/vuepress/actions.png')">
<br>
<img :src="$withBase('/assets/img/other/vuepress/actionssuccess.png')">
<br>
<br>
<br>
<br>


**本篇笔记到此结束了，如果遇到问题，欢迎评论留言~**