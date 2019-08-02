const { entry, output, plugins, rules } = require('./common');

module.exports = {
  mode: 'production',
  entry,
  output,
  module: {
    rules: [rules.js_jsx, rules.sass]
  },
  plugins: [
    plugins.compressionPlugin(),
    plugins.htmlWebpackPlugin(true),
    plugins.miniCssExtractPlugin()
  ]
};
