const { entry, output, devServer, plugins, rules } = require('./common');

module.exports = {
  mode: 'development',
  entry,
  output,
  devServer,
  module: {
    rules: [rules.js_jsx, rules.sass]
  },
  plugins: [
    plugins.compressionPlugin(),
    plugins.htmlWebpackPlugin(),
    plugins.miniCssExtractPlugin()
  ]
};
