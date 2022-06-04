const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = {
  entry: "./src/script.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.[contenthash].js",
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|gif|jpe?g)$/,
        type: "asset/resource",
      },
    ],
  },
};
module.exports = (env, { mode }) => {
  if (mode === "production") {
    config.plugins.push(new CleanWebpackPlugin());
    config.stats = "detailed";
  } else {
    config.stats = "minimal";
    config.devServer = {
      static: {
        directory: path.join(__dirname, "public"),
      },
      compress: true,
      port: 3000,
      open: true,
      client: {
        overlay: false,
      },
    };
  }
  return config;
};
