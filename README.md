# nuxt empty template

> My kryptonian Nuxt.js project

Use:
    nuxt2.4.0
    nuxtjs/axios5.3.6
    cross-env5.2.0
    element-ui^2.4.1 注意: 此版本与nuxt.js不兼容，启动项目时会报错

    // 当前版本的element-ui不兼容nuxt.js，下一个版本会兼容element-ui@2.8.2 
    // 解决办法：
      // 1.卸载当前版本的element-ui,安装特定版本的element-ui@2.7.2(我用此方法)
      // 卸载
      // npm uninstall element-ui
      // 安装
      // npm install element-ui@2.7.2 -S
      
      // 2.在根目录下的nuxt.config.js，修改plugins
      // 替换原有的'@/plugins/element-ui'为{ src: '@/plugins/element-ui', ssr: false}



## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
