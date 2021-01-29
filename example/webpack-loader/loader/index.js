const path = require("path");
const loaderUtils = require("loader-utils");
const findYarnWorkspaceRoot = require("find-yarn-workspace-root");
const { cosmiconfigSync } = require("cosmiconfig");
const normalize = require("normalize-path");
const transform = require("./transform");

const workspaceRoot = findYarnWorkspaceRoot();

const lernaConfig = cosmiconfigSync("lerna", {
  searchPlaces: ["lerna.json"],
}).search();

const lernaRoot =
  lernaConfig !== null ? path.dirname(lernaConfig.filepath) : null;

module.exports = function (source) {
  // NOTE: print resourcePath
  console.log("loader", this.resourcePath);
  // RESULT:  /Users/ben/Documents/w/code/project/library/repierui/example/webpack-loader/src/index.js

  const {
    sourceMap = undefined,
    cacheDirectory = ".rapier-cache",
    preprocessor = undefined,
    extension = ".rapier.css",
    ...rest
  } = this.getOptions() || {}; // 初始化配置

  const root = workspaceRoot || lernaRoot || process.cwd(); // 获取根目录

  const baseOutputFileName = this.resourcePath.replace(/\.[^.]+$/, extension); // /src/index

  const outputFilename = normalize(
    path.join(
      path.isAbsolute(cacheDirectory)
        ? cacheDirectory
        : path.join(process.cwd(), cacheDirectory),
      this.resourcePath.includes(root)
        ? path.relative(root, baseOutputFileName)
        : baseOutputFileName
    )
  ); // 输出文件名，要写到 /src/index.tsx 里的

  console.log("outputFilename", outputFilename);
  // RESULT: /Users/ben/Documents/w/code/project/library/repierui/example/webpack-loader/.rapier-cache/src/index.rapier.css
  console.log("source", source);

  const result = transform(source, {
    filename: path.relative(process.cwd(), this.resourcePath),
    inputSourceMap: undefined,
    outputFilename,
    pluginOptions: rest,
    preprocessor,
  });

  console.log("result", result);

  return `export default ${JSON.stringify(source)}`;
};
