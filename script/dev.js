/**
 * 调用 webpack 构建插件
 */

module.exports = async function() {
  const buildFn = this.getBuilderFn()
  const { webpackCustom = {} } = this.getConfigs()
  this.console('开始dev')
  buildFn({ env: 'development' }, webpackCustom)
}
