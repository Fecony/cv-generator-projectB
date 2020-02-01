const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('styles', path.resolve('src/styles'))
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/styles/setup/_mixins.scss";
          @import "@/styles/setup/_variables.scss";
        `
      }
    }
  }
}
