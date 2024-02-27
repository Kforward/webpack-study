# 学习 webpack

> webpack - 缓存

修改 `output.filename` 命名规则，借用 webpack 的内置方法使打包后的文件名中生成一个 hash 值，通过下方的配置优化后，实现浏览器缓存

```js
output: {
  filename: '[name].[contenthash].js',
},
```

设置 `optimization.runtimeChunk` 为 `single`  可以将运行时代码抽离成一个单独的 chunk； `single` 值可以为每一个单独的chunk创建一个  运行时 的 bundle (打包时，webpack可以根据判断是否修改文件名中  hash 值以达到浏览器数据缓存的变更)

```js
optimization: {
  runtimeChunk: 'single',
},
```

设置 `optimization.splitChunks.cacheGroups.vendor` 可以将不会频繁修改的第三方库代码抽离成一个单独的 chunk 可以进一步减少客户端对服务器的请求，同时保证自身代码与服务器一致；

```js
optimization: {
  splitChunks: {
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all',
      }
    }
  }
}

```
设置 `optimization.moduleIds` 为 `deterministic`  可以实现长期缓存效果，在项目代码变动时，第三方依赖的 hash 不会发生变化

```js
optimization: {
  moduleIds: 'deterministic',
}
```
