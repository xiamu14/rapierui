module.exports = function DetectStyledImportName(babel, path, state) {
  const t = babel.types;
  // 判断导入的模块是否是 '@rapierui/css'

  if (!t.isLiteral(path.node.source, { value: "@rapierui/css" })) {
    return;
  }

  path.node.specifiers.forEach((specifier) => {
    if (!t.isImportSpecifier(specifier)) {
      return;
    }
    // TODO: 啥意思？
    if (specifier.local.name !== specifier.imported.name) {
      state.file.metadata.localName = specifier.local.name;
    }
  });
};
