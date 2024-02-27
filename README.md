# 学习 webpack

> webpack - 代码分离


## 手动配置

配置 entry 的方式，可以使多个模块中的相同引用 提取出来，减少打包后的重复代码

此处在 `index.js` 与 `another-module.js` 中都引用了 `lodash` 通过配置，可以将 lodash 提取出一个单独的 `bundle` 

```js
entry: {
  index: {
    import: './src/index.js',
    dependOn: 'shared',
  },
  another: {
    import: './src/another-module.js',
    dependOn: 'shared',
  },
  shared: 'lodash',
},
```

## SplitChunksPlugin

`SplitChunksPlugin` 插件可以将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk。

```js
optimization: {
  splitChunks: {
    chunks: 'all',
  }
}
```

## other

// 当入口(entry)具有多文件的时候，如果不配置 optimization.runtimeChunk: 'single' 会出现问题
```js
optimization: {
  runtimeChunk: 'single'
}
```


