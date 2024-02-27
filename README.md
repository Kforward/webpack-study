# 学习 webpack

> webpack - 生产环境

`mode: 'development',`
提示当前为生产环境


`clean: true`

每次构建时，清空dist目录内容

```js
output: {
    clean: true
  },
```

`watch: webpack --watch` 
开启 webpack 的观察者模式，当 webpack 追踪依赖的文件发生了改变后，会热更新代码，但是浏览器不会刷新 

```json
"scripts": {
    "watch": "webpack --watch",
  },
```

`webpack-dev-server`
开启 dev-server 监听 webpack 依赖的代码文件有所变动后，热更新代码以及浏览器 (建议配合模块热更新使用)
```js
 devServer: {
    static: './dist'
  },
```
