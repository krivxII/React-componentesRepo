# Instalando Babel

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
         "presets": ['@babel/preset-env', "@babel/preset-react"],
         "plugins": ["@babel/plugin-transform-runtime"],
        }
      }
    }
  ]
}
```

---
[Back](<../readdme>)
