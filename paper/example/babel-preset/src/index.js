const { parseSync, transformFromAstSync } = require("@babel/core");

const code = `import { css, size } from '@rapierui/css';
import { modularScale, hiDPI } from 'polished';
import fonts from './fonts';

const header = css\`
  ${size("10px, 10px")}
  text-transform: uppercase;
  font-family: $\{fonts.heading};
  font-size: $\{modularScale(2)};

  $\{hiDPI(1.5)} {
    font-size: $\{modularScale(2.5)};
  }
\`;

// Then use it as a class name
<h1 className={header}>Hello world</h1>;`;

const ast = parseSync(code, {
  filename: "demo.js",
  caller: { name: "rapier" },
});

// console.log("测试看看", ast);

function isEnabled(caller) {
  return caller?.name !== "rapier" || !caller.evaluate;
}



function babelPreset(babel, options) {
//   console.log("检查看下啊", babel);
  if (!babel.caller(isEnabled)) {
    return {};
  }
  return {
      plugins: [require("./extract"), {}]
  }
}

const codeData = transformFromAstSync(ast, code, {
  filename: "demo.js",
  presets: [[babelPreset, {}]],
  babelrc: false,
  configFile: false,
  sourceMaps: true,
  sourceFileName: "demo.js",
  inputSourceMap: false,
});

console.log(codeData);