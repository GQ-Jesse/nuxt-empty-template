const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
 // 当前版本的element-ui不兼容nuxt.js，下一个版本会兼容element-ui@2.8.2 
    // 解决办法：
      // 1.卸载当前版本的element-ui,安装特定版本的element-ui@2.7.2(我用此方法)
      // 卸载
      // npm uninstall element-ui
      // 安装
      // npm install element-ui@2.7.2 -S
      
      // 2.在根目录下的nuxt.config.js，修改plugins
      // 替换原有的'@/plugins/element-ui'为{ src: '@/plugins/element-ui', ssr: false}
  plugins: [
    '@/plugins/element-ui'
    // { src: '@/plugins/element-ui', ssr: false} // 当前版本的element-ui不兼容nuxt.js 解决办法：1.卸载当前版本的element-ui,安装特定版本的element-ui@2.7.0
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
