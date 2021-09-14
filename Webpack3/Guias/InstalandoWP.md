# Instalacion de WebPack

En esta Guia instalaremos y configuraremos lo basico de esta aplicacion

---

## 1. Instalando las dependencias de Webpack

- Primero Creamos una carpeta con la siguiente arquitectura

```bash
│ webpack.config.js
│
├───/src
│   │   index.js
│   └─────────
├───/assets
│   │   index.html ## Plantilla html a usar 
│   └─────────
├───/dist
│   │
│   └─────────
└─────────────────────
```

- Luego Dentro de la carpeta ejecutamos

```bash
npm init -y
```

Creando el archivo package.json

```diff
 │ webpack.config.js
+│ package.json
 │
 ├───/src
 │   │   index.js
 │   └─────────
 ├───/assets
 │   │   index.html ## Plantilla html a usar 
 │   └─────────
 ├───/dist
 │   │
 │   └─────────
 └─────────────────────
```

- Luego instalamos las dependencias de Webpack

```bash
npm install webpack webpack-cli --save-dev
npm install webpack-cli --save-dev
```

- Ahora modificamos el package.json para agregar los scrips

```json
 "scripts": {
     ...
   "build": "webpack --config webpack.config.js"
    ...
  },
```

Luego configuraremos el archivo webpack.config.js

---

## 2. webpack.config.js

Este archivo tiene la configuracion que webpack usara al momento de trabajar.

```js
const path = require('path');

module.exports = {
  entry: { 
    index: './src/index.js',
  },
  mode: "development",
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/'), 
    clean: true, 
  },
};
```

---

## 3. Instalando HtmlWebpackPlugin

Esto nos permitira tener un mejor manejo de los recursos html que se utilizan

- Ejecutamos el comando

```bash
npm install html-webpack-plugin --save-dev
```

- En el archivo de webpack.config.js
 
```js
const path = require('path');
module.exports = {
  entry: { 
    index: './src/index.js',
  }, 
  mode: "development",
  //-------------------
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: "./assets/index.html",
      inject: 'body',
    }),
  ],
  //------
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/'), 
    clean: true, 
  },
};
```

Aca dejare una platilla basica:

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>title</title>
</head>

<body>
  <div id="root"></div>
  <noscript>
    You need to enable JavaScript to run this app.
  </noscript>

</body>

</html>
```

---

## 4. Agregando y configurando devServer

Esto nos permitira iniciar un servidor donde nuestra pagina se muestre

- Ejecuta

```bash
npm install  webpack-dev-server --save-dev
```

- Agrega en webpack.config.json


```js
const path = require('path');
module.exports = {
  entry: { 
    index: './src/index.js',
  }, 
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: "./assets/index.html", 
      inject: 'body', 
    }),
  ],
  //-----------------------
  devtool: 'inline-source-map'
  devServer: {
    historyApiFallback: true,
    static: './dist',
  },
  //---------------
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/'), 
    clean: true, 
  },
};
```

- Ahora en el archivo package.json agregamos

```json
 "scripts": {
     ...
    "start": "webpack serve --open --config webpack.config.js",
    ...
  },
```

---

[Back](<../readdme>)