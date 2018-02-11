const path = require("path");
module.exports = {
  entry: {
    app: "./src/index.ts"
  },
  output: {
    path: path.resolve(__dirname, "..", "build"),
    filename: "index.js"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  target: "node",
  externals: "node_modules",
  module: {
    loaders: [
      {
        test: /\.ts/,
        loader: "ts-loader"
      },
      {
        test: /\.js/,
        loader: "babel-loader"
      }
    ]
  }
};
