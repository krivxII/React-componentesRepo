# Guia de instalacion

Esta guia esta complementada por lo leido en:

## Dependencias instaladas

### Webpack pakages

- webpack-cli
- webpack-dev-server

### Webpack Loaders

- style-loader
- css-loader
- babel-loader

### webpack Plugins

html-webpack-plugin

### Babel pakages

- babel/core
- babel/cli
- babel/preset-env
- babel/preset-react
- @babel/runtime
- @babel/plugin-transform-runtime


### React pakages

- react
- react-dom
- react-hot-loader
- react-router-dom


## Instalando webpack

Ejecutamos 

```bash
npm init -y
npm install webpack webpack-cli --save-dev
npm install webpack-cli --save-dev
```

- Creamos la carpeta src y dentro el archivo index.js
- Creamos la carpeta dist
- Creamos la carpeta assets

---

## Archivo de configuracion

- Creamos el archivo webpack.config.js

```bash
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

---

## NPM SCRIPS

``` bash
 "scripts": {
    "build": "webpack --config webpack.config.js"
   },
```

## Configurando assets

Para poder importar ccs e imagenes dentro de un archivo instalamos las siguientes dependencias

```bash
npm install  css-loader --save-dev
npm install  style-loader --save-dev
```

Luego modificamos el archivo webpack.config.js

```bash
  const path = require('path');

 module.exports = {
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
     ],
   },
 };
```

Ahora se pueden exportar imagenes desde .js

---

## Instalando HtmlWebpackPlugin

Esto nos permitira crearde manera dinamica los archivos html

```bash
npm install --save-dev html-webpack-plugin
```

ahora modificamos webpack.config.js para agregar el plugging

```bash
 plugins: [
  new HtmlWebpackPlugin({
    title: 'Output Management',
    template: "./assets/index.html",
    inject: 'body',
  }),
],
```

Ahora se crea la carpeta llamada assets y desde ahi se puede poner la plantilla de html que puede usar este plugging

El html que se usara de plantilla va en la carpeta assets

---

## Agregando React

Ejecutamos

```bash
npm install  react --save
npm install  react-dom --save
```

---

## Agregando y configurando devServer

1. Ejecuta

```bash
npm install --save-dev webpack-dev-server 
```

2. Agrega en webpack.config.json

```bash
devServer: {
    contentBase: './dist',
  },
```

---

## Agregando HMR

1. Ejecutamos

```bash
npm install --save react-hot-loader
```

2. En webpack.config.js agregamos

```bash
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    hotOnly: true
  },
```

---

## Agregando Babel

1. Ejecuta

```bash
npm install  babel-loader --save-dev
npm install  @babel/core --save-dev
npm install  @babel/preset-env --save-dev
npm install  @babel/preset-react --save-dev
npm install  @babel/cli --save-dev
```

2. En webpack.config.json agrega

```bash
module: {
  rules: [
    {
      test: /\.(js|jsx|mjs)$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', "@babel/preset-react"],
          plugins: []
        }
      }
    }
  ]
}
```

3. Luego para arreglar el async se utiliza el siguiente plugging.

```bash
npm install  @babel/runtime --save
npm install  @babel/plugin-transform-runtime --save
```

4. Agrega en webpack.config.json

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
