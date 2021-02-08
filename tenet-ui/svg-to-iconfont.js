// 这是一个需要在node.js环境下运行的文件，用于将一个文件夹下的svg打包为iconfont的字体文件
// ！！注意文件名会直接作为css类名出现，所以不要有任何不合法的字符出现，比如空格
// thanks to: https://github.com/AiMe1991/svg-to-iconfont
const svgtoiconfont = require('svg-to-iconfont')
const path = require('path')
svgtoiconfont({
  src: path.resolve('./src/assets/svg-icon'),
  dist: path.resolve('./src/assets/iconfont'),
  fontName: 'iconfont', // font name （字体名称）
  classNamePrefix: 'icon', // class name prefix （class前缀）
  svgicons2svgfont: {
    fontHeight: 1000,
    normalize: true
  }
}).then(() => {
  console.log('done!')
})
