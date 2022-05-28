const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const MiniCssExtrctPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtrctPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtrctPlugin({
      filename: "[name].[hash:4].css",
    }),
  ],
});
