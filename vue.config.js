const path = require('path')
module.exports = {
  // 配置less全局变量
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, "./src/assets/css/Variables.less")]
    }
  }
}
