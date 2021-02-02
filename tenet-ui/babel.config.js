module.exports = {
  presets: [
    //https://juejin.im/post/5b56909a518825195f499806
    //这篇文章最后的配置项，modules:false，在@vue/babel-preset-app中已经配置好了，所以webpack可以进行摇树优化
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    'babel-plugin-transform-class-properties',
    'babel-plugin-syntax-flow',
    'babel-plugin-transform-flow-strip-types'
  ]
}
