const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
/*const ESLintPlugin = require('eslint-webpack-plugin'); Componentes para la correccion de codigo de react*/


module.exports = {
  /////////////////////////////////////////////////
  entry: {
    //index: './src/ejemplo/index.js',
    index: './src/index.js',


  },
  /////////////////////////////////////////////////
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: "./assets/index.html",
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin(),
	//new ESLintPlugin(), 
  ],
  /////////////////////////////////////////////////////
  mode: "development",
  //////////////////////////////////////////////////////
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "dist/"),
    hotOnly: true,
  },
  ///////////////////////////////////////////////////////
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,

    /*publicPath
    "./"   da un error en react router router 
    "/"   da un error con aplicaciones locales usar con webpack router
    */
 

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
            presets: ['@babel/preset-env', "@babel/preset-react"],
            plugins: ["@babel/plugin-transform-runtime"]
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