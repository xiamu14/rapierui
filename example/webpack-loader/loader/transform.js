const fs = require("fs");
const { parseSync, transformFromAstSync } = require("@babel/core");
const loadOptions = require("./utils/loadOptions");

module.exports = function transform(code, options) {
  if (!/\b(styled|css)/.test(code)) {
    return {
      code,
      sourceMap: options.inputSourceMap,
    };
  }

  console.log(
    "transform",
    `${options.filename} to ${options.outputFilename}\n${code}`
  );

  const pluginOptions = loadOptions(options.pluginOptions);
  const babelOptions = pluginOptions?.babelOptions ?? null;

  const ast = parseSync(code, {
    ...babelOptions,
    filename: options.filename,
    caller: { name: "linaria" },
  });

  const { metadata, code, map } = transformFromAstSync(ast, code, {
    filename: options.filename,
    presets: [[babelPreset, pluginOptions]],
    babelrc: false,
    configFile: false,
    sourceMaps: true,
    sourceFileName: options.filename,
    inputSourceMap: options.inputSourceMap,
  });

  fs.writeFileSync("./logger.json", JSON.stringify(ast));
};
