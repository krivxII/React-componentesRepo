const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

  entry: {/// Configuracion de entrada de archivos
   index: './src/index.js',
 },

 plugins: [//pluggins instalados
  new HtmlWebpackPlugin({
    title: 'Output Management',
  //  template: "./assets/index.html",
  //  inject: 'body',
  }),
],
mode: "development",

devServer: {
  historyApiFallback: true,
  contentBase: path.join(__dirname, "dist/"),
  hotOnly: true,
},

module: {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
   {
     test: /\.(png|svg|jpg|jpeg|gif)$/i,
     type: 'asset/resource',
   },
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
  }
  ],
},

output: {///Configuracion de salida de archivos 
   filename: '[name].bundle.js',
   path: path.resolve(__dirname, 'dist'),
   clean: true,
  },
};