# 学习 webpack

> webpack - 创建库

## 暴露库

设置 `output.library.name` 的值，将编写的库对外暴露，用户在使用时候可以直接使用

```js
output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'webpack-numbers.js',
  library: {
    name: 'webpackNumbers',
    type: 'umd',
  },
},
```

```html
<script src="https://example.org/webpack-numbers.js"></script>

<script>
 window.webpackNumbers.xxx()
<script/>
```

设置 `output.library.type` 可以支持用户的导入方式 CommonJS、AMD 模块以及 script 标签使用

```js
output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'webpack-numbers.js',
  library: {
    name: 'webpackNumbers',
    type: 'umd',
  },
},
```


设置 `externals.lodash` 可以将 lodash 排除打包，意味着该三方库使用者是必须安装的

```js
externals: {
  lodash: {
    commonjs: 'lodash',
    commonjs2: 'lodash',
    amd: 'lodash',
    root: '_',
  },
},
```

## 最后

修改 `package.json`  `main` 的值为 打包后的文件位置，或设置 `main` 为工程目录的地址 
