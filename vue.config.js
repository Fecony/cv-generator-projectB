const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('styles', path.resolve('src/styles'))
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/styles/utilities/_functions";
          @import "@/styles/utilities/_mixins";
          @import "@/styles/utilities/_variables";
        `
      }
    }
  }
}
