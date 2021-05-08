const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
  /////////////////////////////////////////////////
  entry: {
  //index: './src/0ejemplo/index.js',
  index: './src/1componente/index.js',
   
  
  },
  /////////////////////////////////////////////////
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: "./src/index.html",
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  /////////////////////////////////////////////////////
  mode: "development",
  //////////////////////////////////////////////////////
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "dist/"),
    hotOnly: true,
   // port: 3000,
   //publicPath: "http://localhost:3000/dist/",
  },
  ///////////////////////////////////////////////////////
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/'),
    clean: true,
   /*  publicPath: "./",da un error en router
   *   publicPath: "/",  da un erro en local
   */
   // 
  
  },

  /////////////////////////////////////////////////////// 
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', "@babel/preset-react"]
          }
        }
      },

      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  ///////////////////////////

};