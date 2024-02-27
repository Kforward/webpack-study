# 学习 webpack

> webpack - 管理输出

`HtmlWebpackPlugin`
会修改 `index.html` 文件中内容
```js
 plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出'
    })
  ],
```
`clean: true`

每次构建时，清空dist目录内容

```js
output: {
    clean: true
  },
```