---
title: webpack
date: 2022-03-26
tags:
 - JS
 - 前端
categories:
 - 前端
---


# webpack

##  五个核心概念
###  1. Entry
入口（Entry）指示，Webpack以哪个文件为入口七点开始打包，分析构建内部依赖图

###  2.Output
输出（Output）指示Webpack打包后的资源bundles输出到哪里去，以及如何命名

###  3. Loader
Loader 让 Webpack 能够去处理那些非 JavaScript 文件（webpack本身只理解JavaScript）

###  4. Plugins
插件（Plugins）可用于执行范围更广的任务，插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等

###  5. Mode
模式（Mode）指示 Webpack 使用相应模式的配置

![在这里插入图片描述](https://img-blog.csdnimg.cn/39a456ca479c42d093c972f14886d3ac.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)
##  webpack使用
安装(全局)
```
npm i webpack webpack-cli -g
```


##  打包
###  css
需要引入：
```
cnpm i style-loadercss-loader -D
```

```js
use: [
	//创建style标签，将js中的样式资源插入进行，添加到head中生效
	'style-loader',
    // 将css文件变成commonjs模块加载js中，里面内容是样式字符串
    'css-loader'
]
```

###  Less
```
cnpm i less less-loader -D
```

```js
use: [
	'style-loader',
    'css-loader',
    // 将less文件编译成css文件, 需要下载 less-loader 和 less 的包
    'less-loader'
]
```

###  HTML
下载插件
```
cnpm i html-webpack-plugin -D
```

引入插件
```js
// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
```
调用
```js
plugins: [
	new HtmlWebpackPlugin()
],
```

打包生成的默认html文件里面只引入的打包之后的`JS`和`CSS`，没有`HTML`。可以`指定从目标html文件`复制内容到`build目录`下的`index.html`

```js
new HtmlWebpackPlugin({
      // 复制 './src/index.html' 文件内容到 './build/index.html'
      template: './src/index.html'
    })
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/2f68d57768094536a5ce89c0a90429d8.png)

###  图片
####  webpack4
处理CSS中的图片：

`url-loader`依赖于`file-loader`
```
cnpm i url-loader file-loader -D
```

```js
{
        // 处理图片资源
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          // 图片小于8kb，就会被base64处理
          // 优点：减少请求数量（减轻服务器压力）
          // 缺点：图片体积会更大（文件请求速度更慢）
          limit: 8 * 1024
        }
      }
```

####  webpack5
在`webpack5`中使用`assets-module`，因为在v5中url-loader已经被废弃
loader配置如下：

```js
    {
        test:/\.(jpg|png|gif)$/,
        type:"asset",
        //解析
        parser: {
          //转base64的条件
          dataUrlCondition: {
            maxSize: 25 * 1024, // 25kb
          }
        },
        generator:{ 
          //与output.assetModuleFilename是相同的,这个写法引入的时候也会添加好这个路径
          filename:'img/[name].[hash:6][ext]',
          //打包后对资源的引入，文件命名已经有/img了
          publicPath:'./'
        },
      },
```

#### 处理HTML中img引入的图片：

```
cnpm i html-loader -D
```

`html-loader`处理html文件中的img图片，而不是html文件本身,`'html-loader'`负责引入img，从而被url-loader处理

```js

{
        test: /\.html$/,
        // 处理html文件中的img图片，而不是html文件本身,'html-loader'负责引入img，从而被url-loader处理
        loader: 'html-loader'
      }
```

**此时html中img标签的src会出现[object Module] 问题，是因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs。所以需要`关闭url-loader的es6模块化，使用commonjs解析`**

```js
options: {
	limit: 8 * 1024,
	esModule: false
}
```

在`webpack5`中，`html-loader`也需要关系url-loader的es6模块化
```js

{
        test: /\.html$/,
        // 处理html文件中的img图片，而不是html文件本身,'html-loader'负责引入img，从而被url-loader处理
        loader: 'html-loader',
        options: {
          esModule: false
        }
      }
```


###  其他资源

```js
{
        // 排除css/js/html资源
        exclude: /\.(css|js|html)$/,
        loader: 'file-loader'
      }
```

###  devServer
```
 npm i webpack-dev-server -D
```

```js
// webpack.config.js
// 启动指令：npx webpack-dev-server
  devServer: {
    static: resolve(__dirname, 'build'),
    // 启动gzip压缩
    compress: true,
    port: 3002,
    open: true
  }
```

##  开发环境
```js
// webpack.config.js
/*
  开发环境配置：能让代码运行
    运行项目指令：
      webpack 会将打包结果输出出去
      npx webpack-dev-server 只会在内存中编译打包，没有输出
*/

const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      // loader的配置
      {
        // 处理less资源
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        // 处理css资源
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        // 处理图片资源
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]',
          // 关闭es6模块化
          esModule: false,
          outputPath: 'imgs'
        }
      },
      {
        // 处理html中img资源
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        // 处理其他资源
        exclude: /\.(html|js|css|less|jpg|png|gif)/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'media'
        }
      }
    ]
  },
  plugins: [
    // plugins的配置
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development',
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true
  }
};

```

##  处理

###  提取css文件
插件安装
```
npm i mini-css-extract-plugin -D
```

使用
```js
const miniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
	module: {
		rules: [
				{
        		// 处理css资源
        		test: /\.css$/,
        		use: [miniCssExtractPlugin.loader, 'css-loader']
      		}
		]
	},
	plugins: [new miniCssExtractPlugin({
      // 对输出的css文件进行重命名
      filename: 'css/build.css'
    })]
	
}

```
还需要在`package.json`文件中添加
```json
"browserslist": {
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ],
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ]
  }
```

**miniCssExtractPlugin.loader取代style-loader，用于提取js中的css单独成文件**

###  css兼容性处理
####  使用loader的默认配置
```
npm i postcss-loader@3.0.0 postcss-preset-env@6.7.0  -D
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/83e6a6fb1f4c432e9ed17e09c8c56119.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_20,color_FFFFFF,t_70,g_se,x_16)

```js
{
        // 处理css资源
        test: /\.css$/,
        use: [miniCssExtractPlugin.loader, 'css-loader']
      }
```
在`use`中添加以下代码
![在这里插入图片描述](https://img-blog.csdnimg.cn/80be2123507c407d854f3a206d78354e.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5r2H5b-Y56yZ,size_14,color_FFFFFF,t_70,g_se,x_16)
默认为生产环境，开发环境切换方法：
```js
// webpack.config.js
process.env.NODE_ENV = 'development
```

###  压缩CSS
安装插件
```
npm i optimize-css-assets-webpack-plugin@5.0.3 -D
```

###  eslint
```
npm i eslint@6.8.0 eslint-loader@3.0.3 -D
```

引入：
```js
{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {}
      }

```


使用 airbnb 规则：

```
npm i eslint-config-airbnb-base@14.0.0 eslint-plugin-import@2.20.1 -D
```

在`package.json`中添加
```json
"eslintConfig": {
    "extends": "airbnb-base",
    "env": {
      "browser": true
    }
  }

```

###  js兼容性
js兼容性处理：babel-loader @babel/core 

1. 基本js兼容性处理 --> `@babel/preset-env`
            问题：只能转换`基本语法`，如promise高级语法不能转换
2. 全部js兼容性处理 --> `@babel/polyfill  `
            问题：我只要解决部分兼容性问题，但是将所有兼容性代码全部引入，体积太大了~
3. 需要做兼容性处理的就做：按需加载  --> `core-js`

```
npm i @babel/preset-env@7.8.4 @babel/polyfill@7.8.3 @babel/core@7.8.4 babel@6.23.0
```

`webpack.config.js`配置

```js
{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          // 预设：指示babel做怎么样的兼容性处理
          presets: [
            [
              '@babel/preset-env',
              {
                // 按需加载
                useBuiltIns: 'usage',
                // 指定core-js版本
                corejs: {
                  version: 3
                },
                // 指定兼容性做到哪个版本浏览器
                targets: {
                  chrome: '60',
                  firefox: '60',
                  ie: '9',
                  safari: '10',
                  edge: '17'
                }
              }
            ]
          ]
        }
      }
```

###  js压缩
在生产环境下，会自动压缩html代码，切换`mode`

```js
// webpack.config.json
// 生产环境下会自动压缩js代码
  mode: 'production'
```

###  html压缩
配置`html-webpack-plugin`插件：
```js
// ebapck.config.js
plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // 压缩html代码
      minify: {
        // 移除空格
        collapseWhitespace: true,
        // 移除注释
        removeComments: true
      }
    })
  ]
```

<br><br>

##  生产环境

```js
// webpack.config.js
const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 定义nodejs环境变量：决定使用browserslist的哪个环境
process.env.NODE_ENV = 'production';

// 复用loader
const commonCssLoader = [
  MiniCssExtractPlugin.loader,
  'css-loader',
  {
    // 还需要在package.json中定义browserslist
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: () => [require('postcss-preset-env')()]
    }
  }
];

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [...commonCssLoader]
      },
      {
        test: /\.less$/,
        use: [...commonCssLoader, 'less-loader']
      },
      /*
        正常来讲，一个文件只能被一个loader处理。
        当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：
          先执行eslint 在执行babel
      */
      {
        // 在package.json中eslintConfig --> airbnb
        test: /\.js$/,
        exclude: /node_modules/,
        // 优先执行
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage',
                corejs: {version: 3},
                targets: {
                  chrome: '60',
                  firefox: '50'
                }
              }
            ]
          ]
        }
      },
      {
        test: /\.(jpg|png|gif)/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]',
          outputPath: 'imgs',
          esModule: false
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        exclude: /\.(js|css|less|html|jpg|png|gif)/,
        loader: 'file-loader',
        options: {
          outputPath: 'media'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/built.css'
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  mode: 'production'
};

```


##  优化配置

### 开发环境性能优化
* 优化打包构建速度
 	 * HMR
* 优化代码调试
	* source-map

### 生产环境性能优化
* 优化打包构建速度
  * oneOf
  * babel缓存
  * 多进程打包
  * externals
  * dll
* 优化代码运行的性能
  * 缓存(hash-chunkhash-contenthash)
  * tree shaking
  * code split
  * 懒加载/预加载
  * pwa
  

###  HMK
HMR: hot module replacement 热模块替换 / 模块热替换
作用：一个模块发生变化，只会重新打包这一个模块（而不是打包所有模块），极大提升构建速度

**使用**：
1. **样式文件**：可以使用HMR功能：因为`style-loader`内部实现了
2. **js文件**：默认不能使用HMR功能 ，需要修改js代码，添加支持HMR功能的代码。（*注意：HMR功能对js的处理，只能处理非入口js文件的其他文件。*）
3. **html文件**: 默认不能使用HMR功能.同时会导致问题：html文件不能热更新了~ （不用做HMR功能）。
解决方法：**修改entry入口，将html文件引入**


loader配置：
```js
module: {
    rules: [
      // loader的配置
      {
        // 处理less资源
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        // 处理css资源
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        // 处理图片资源
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]',
          // 关闭es6模块化
          esModule: false,
          outputPath: 'imgs'
        }
      },
      {
        // 处理html中img资源
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        // 处理其他资源
        exclude: /\.(html|js|css|less|jpg|png|gif)/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'media'
        }
      }
    ]
  }
```

修改入口：
```js
entry: ['./src/js/index.js', './src/index.html']
```

开启热更新：
```js
devServer: {
    contentBase: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true,
    // 开启HMR功能
    // 当修改了webpack配置，新配置要想生效，必须重新webpack服务
    hot: true
  }
```

###  source-map
**source-map**: 一种 提供`源代码`到`构建后代码`**映射**技术 （如果构建后代码出错了，通过映射可以追踪源代码错误）

引入：
```js
// webpack.config.js
module.exports = {
	devtool: 'eval-source-map'	
}
```

参数：
- **source-map**：外部
      错误代码准确信息 和 源代码的错误位置
- **inline-source-map**：内联
      只生成一个内联source-map
      错误代码准确信息 和 源代码的错误位置
- **hidden-source-map**：外部
      错误代码错误原因，但是没有错误位置
      不能追踪源代码错误，只能提示到构建后代码的错误位置
- **eval-source-map**：内联
      每一个文件都生成对应的source-map，都在eval
      错误代码准确信息 和 源代码的错误位置
- **nosources-source-map**：外部
      错误代码准确信息, 但是没有任何源代码信息
- **cheap-source-map**：外部
      错误代码准确信息 和 源代码的错误位置 
      只能精确的行
- **cheap-module-source-map**：外部
      错误代码准确信息 和 源代码的错误位置 
      module会将loader的source map加入

`内联` 和 `外部` 的区别：
1. 外部生成了文件，内联没有 
2. 内联构建速度更快

**使用情况：**

开发环境：速度快，调试更友好

速度：eval > inline > cheap > ...
- eval-cheap-souce-map
- eval-source-map

调试更友好 ：
- souce-map
- cheap-module-souce-map
- cheap-souce-map


`推荐`：**eval-source-map  / eval-cheap-module-souce-map**

生产环境：内联会让代码体积变大，所以在生产环境不用内联
- nosources-source-map 全部隐藏
- hidden-source-map 只隐藏源代码，会提示构建后代码错误信息

`推荐`：**source-map / cheap-module-souce-map**


<br><br>
###  oneOf
限定范围内的 `loader `只有一个会被处理，但不能有两个配置处理同一类型文件

```
npm i optimize-css-assets-webpack-plugin@5.0.3 -D
```

```js

{
        // 以下loader只会匹配一个
        // 注意：不能有两个配置处理同一种类型文件
        oneOf: [
          {
            test: /\.css$/,
            use: [...commonCssLoader]
          },
          {
            test: /\.less$/,
            use: [...commonCssLoader, 'less-loader']
          },
          /*
            正常来讲，一个文件只能被一个loader处理。
            当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：
              先执行eslint 在执行babel
          */
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    corejs: {version: 3},
                    targets: {
                      chrome: '60',
                      firefox: '50'
                    }
                  }
                ]
              ]
            }
          },
          {
            test: /\.(jpg|png|gif)/,
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              name: '[hash:10].[ext]',
              outputPath: 'imgs',
              esModule: false
            }
          },
          {
            test: /\.html$/,
            loader: 'html-loader'
          },
          {
            exclude: /\.(js|css|less|html|jpg|png|gif)/,
            loader: 'file-loader',
            options: {
              outputPath: 'media'
            }
          }
        ]
      }

```


###  缓存
babel缓存
- **cacheDirectory**: true 让第二次打包构建速度更快


文件资源缓存
- **hash**: 每次wepack构建时会生成一个唯一的hash值。
  问题: 因为js和css同时使用一个hash值。
  如果重新打包，会导致所有缓存失效。（可能我却只改动一个文件）
- **chunkhash**：根据chunk生成的hash值。如果打包来源于同一个chunk，那么hash值就一样
  问题: js和css的hash值还是一样的
  因为css是在js中被引入的，所以同属于一个chunk
- **contenthash**: 根据文件的内容生成hash值。不同文件hash值一定不一样    
  让代码上线运行缓存更好使用

babel缓存：
```js
{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    corejs: { version: 3 },
                    targets: {
                      chrome: '60',
                      firefox: '50'
                    }
                  }
                ]
              ],
              // 开启babel缓存
              // 第二次构建时，会读取之前的缓存
              cacheDirectory: true
            }
          }
```

文件资源缓存：

```js
output: {
    filename: 'js/built.[contenthash:10].js',
    path: resolve(__dirname, 'build')
  }
```


###  tree shaking
**tree shaking**：去除无用代码，减少代码体积

前提：
1. 必须使用ES6模块化  
2. 开启production环境


使用方法：在`package.json`中配置
```json
"sideEffects": false
```

注意：所有代码都没有副作用（都可以进行tree shaking
问题：可能会把css / @babel/polyfill （副作用）文件干掉

解决方法：

```json
"sideEffects": ["*.css", "*.less"]
```


###  代码分割
**方法一：**

多入口：有一个入口，最终输出就有一个bundle
```js
// webpack.config.js
entry: {
    // 多入口：有一个入口，最终输出就有一个bundle
    index: './src/js/index.js',
    test: './src/js/test.js'
  }
```

**方法二：**

自动分析多入口chunk中，有没有公共的文件。如果有会打包成单独一个chunk
```js
module.exports = {
	entry: {
    index: './src/js/index.js',
    test: './src/js/test.js'
  },
  /*
    1. 可以将node_modules中代码单独打包一个chunk最终输出
    2. 自动分析多入口chunk中，有没有公共的文件。如果有会打包成单独一个chunk
  */
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
```

**方法三：**

通过js代码，让某个文件被单独打包成一个chunk
```js
// ./src/js/index.js
/*
  通过js代码，让某个文件被单独打包成一个chunk
  import动态导入语法：能将某个文件单独打包
*/
import(/* webpackChunkName: 'test' */'./test')
  .then(({ mul, count }) => {
    // 文件加载成功~
    // eslint-disable-next-line
    console.log(mul(2, 5));
  })
  .catch(() => {
    // eslint-disable-next-line
    console.log('文件加载失败~');
  });
```

###  PWA
PWA: 渐进式网络开发应用程序(离线可访问)
```
npm i workbox-webpack-plugin@5.0.0
```

引入插件：
```
// webpack.config.js
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
	plugins: [
		new WorkboxWebpackPlugin.GenerateSW({
      /*
        1. 帮助serviceworker快速启动
        2. 删除旧的 serviceworker

        生成一个 serviceworker 配置文件~
      */
      clientsClaim: true,
      skipWaiting: true
    })
	]
}
```

1. eslint不认识 window、navigator全局变量
解决：需要修改`package.json`中`eslintConfig`配置
```
"eslintConfig": {
    "extends": "airbnb-base",
    "env": {
      "browser": true  // 支持浏览器端全局变量
    }
  }
```

2. sw代码必须运行在服务器上

```
npm i serve -g
```
`serve -s build` 启动服务器，将build目录下所有资源作为静态资源暴露出去

<br>
**注册**

```js
// ./src/js/index.js
// 注册serviceWorker
// 处理兼容性问题
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(() => {
        console.log('sw注册成功了~');
      })
      .catch(() => {
        console.log('sw注册失败了~');
      });
  });
}

```

###  多线程打包

```
npm i thread-loader@2.1.3 -D
```

开启多线程打包
```js
{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
              /* 
                开启多进程打包。 
                进程启动大概为600ms，进程通信也有开销。
                只有工作消耗时间比较长，才需要多进程打包
              */
              {
                loader: 'thread-loader',
                options: {
                  workers: 2 // 进程2个
                }
              },
              {
                loader: 'babel-loader',
                options: {
                  presets: [
                    [
                      '@babel/preset-env',
                      {
                        useBuiltIns: 'usage',
                        corejs: { version: 3 },
                        targets: {
                          chrome: '60',
                          firefox: '50'
                        }
                      }
                    ]
                  ],
                  // 开启babel缓存
                  // 第二次构建时，会读取之前的缓存
                  cacheDirectory: true
                }
              }
            ]
          }
```


###  externals
拒绝打包文件

```js
// webpack.config.js
externals: {
    // 拒绝jQuery被打包进来
    jquery: 'jQuery'
  }
```


###  dll
使用dll技术，对某些库（第三方库：jquery、react、vue...）进行单独打包，当你运行 webpack 时，默认查找 webpack.config.js 配置文件
需求：需要运行 `webpack.dll.js` 文件

在`webpack.config.js`同级目录创建`webpack.dll.js`文件

**运行指令**
```
webpack --config webpack.dll.js
```

```js
/*
  使用dll技术，对某些库（第三方库：jquery、react、vue...）进行单独打包
    当你运行 webpack 时，默认查找 webpack.config.js 配置文件
    需求：需要运行 webpack.dll.js 文件
      --> webpack --config webpack.dll.js
*/

const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    // 最终打包生成的[name] --> jquery
    // ['jquery'] --> 要打包的库是jquery
    jquery: ['jquery'],
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dll'),
    library: '[name]_[hash]' // 打包的库里面向外暴露出去的内容叫什么名字
  },
  plugins: [
    // 打包生成一个 manifest.json --> 提供和jquery映射
    new webpack.DllPlugin({
      name: '[name]_[hash]', // 映射库的暴露的内容名称
      path: resolve(__dirname, 'dll/manifest.json') // 输出文件路径
    })
  ],
  mode: 'production'
};

```

**webpack.config.js**相关配置：
```js
// webpack.config.js
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    // 告诉webpack哪些库不参与打包，同时使用时的名称也得变~
    new webpack.DllReferencePlugin({
      manifest: resolve(__dirname, 'dll/manifest.json')
    }),
    // 将某个文件打包输出去，并在html中自动引入该资源
    new AddAssetHtmlWebpackPlugin({
      filepath: resolve(__dirname, 'dll/jquery.js')
    })
  ],
  mode: 'production'
};

```