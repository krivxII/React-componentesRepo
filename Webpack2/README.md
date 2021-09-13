# Webpack-Babel-React

WebPack configurado para React con el transpilador Babel

## Webpack pakages

- webpack-cli
- webpack-dev-server

## Webpack Loaders

- style-loader
- css-loader
- babel-loader

## webpack Plugins

html-webpack-plugin

## Babel pakages

- babel/core
- babel/cli
- babel/preset-env
- babel/preset-react
- @babel/runtime
- @babel/plugin-transform-runtime


## React pakages

- react
- react-dom
- react-hot-loader
- react-router-dom

//////////////////////////////////////////////////////////////////////

## Iniciar

### Agregar manejadores de estilos:

1. ejecuta npm install --save-dev style-loader css-loader
2. Agrega en webpack.config.js:

 ```bash
module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
```
Ahora se pueden aplicar estilos desde un js

```js
///file app.css
.hello {
  color: red;
}
///file index.js
import './style.css';
element.classList.add('hello');
```

----

### Agregar manejadores de imagenes

- Agrega en Webpack.config.json

```bash
module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
```

```bash
///file index.js

import Icon from './icon.png';
myIcon.src = Icon;
```

---

## html-webpack-plugin

Crea su propio index.html cada ves que se hace build.

1. Ejecuta npm install --save-dev html-webpack-plugin

2. En Webpack.config.json agrega

```bash
const HtmlWebpackPlugin = require('html-webpack-plugin');
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: "./src/index.html",
      inject: 'body',
    }),
  ],
output: {
    clean: true,
   },
```

----

## Agregando y configurando devServer

1. Ejecuta npm install --save-dev webpack-dev-server
2. Agrega en webpack.config.json

```bash
devServer: {
    contentBase: './dist',
  },
```

----

Agregando Babel

1- Ejecuta npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react
2- En webpack.config.json agrega 
module: {
  rules: [
    {
      test: /\.(js|jsx|mjs)$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', "@babel/preset-react"],
         not// plugins: []
        }
      }
    }
  ]
}


----

### Agregando React
1- Ejecutamos npm install --save react react-dom


----

### HRM

1. Ejecutamos npm install --save react-hot-loader

2. En webpack.config.js agregamos
```bash
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    hotOnly: true
  },
```

----
### instalar react router

-1 Ejecutamos npm install --save react-router-dom
2- En webpack.config.json agregamos
  devServer: {
    historyApiFallback: true,
  },

---

### Arreglar Async

1. Ejecuta el comando 
```bash
npm install --save-dev @babel/plugin-transform-runtime
```

2. Ejecuta el comando

```bash
npm install --save @babel/runtime
```

3. Agrega en webpack.config.json

```bash
module: {
  rules: [
    {
      use: {
        loader: 'babel-loader',
        options: {
         "plugins": ["@babel/plugin-transform-runtime"],
        }
      }
    }
  ]
}
```
