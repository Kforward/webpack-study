const path = require("path");

module.exports = (env) => {
  // Use env.<YOUR VARIABLE> here:
  console.log('Goal: ', env.goal); // 'local'
  console.log('development: ', env.development); // true

  return {
    mode: 'development',
    entry: {
      main: './src/index.js',
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      clean: true
    }
  }
}