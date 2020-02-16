const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('styles', path.resolve('src/styles'))
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/styles/utilities/_functions.scss";
          @import "@/styles/utilities/_mixins.scss";
          @import "@/styles/utilities/_variables.scss";
        `
      }
    }
  }
}
