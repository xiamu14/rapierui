export default function ({ types: t }) {
  return {
    visitor: {
      BinaryExpression(path) {
        if (path.node.operator !== "===") {
          return;
        }
        path.node.left = t.identifier("left"); // 替换值需要用封装
        path.node.right = t.identifier("right")
      },
    },
  };
}
