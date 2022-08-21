const path = require("path");

module.exports = {
  entry: ["@babel/polyfill", path.resolve(__dirname, "./src/main.js")],
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "bundle.js",
    sourceMapFilename: "bundle.js.map",
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
};
