import hasImport from './hasImport';
const cache = new WeakMap();

export default function isStyledOrCss(
  babel,
  path,
  state
): Result {
  const t = babel.types;
  if (!cache.has(path)) {
    const { tag } = path.node;

    const localName = state.file.metadata.localName || 'styled';

    if (
      t.isCallExpression(tag) &&
      t.isIdentifier(tag.callee) &&
      tag.arguments.length === 1 &&
      tag.callee.name === localName &&
      hasImport(t, path.scope, state.file.opts.filename, localName, [
        '@linaria/react',
        'linaria/react',
      ])
    ) {
      const tagPath = path.get('tag') as NodePath<CallExpression>;
      cache.set(path, {
        component: tagPath.get('arguments')[0] as NodePath<Expression>,
      });
    } else if (
      t.isMemberExpression(tag) &&
      t.isIdentifier(tag.object) &&
      t.isIdentifier(tag.property) &&
      tag.object.name === localName &&
      hasImport(t, path.scope, state.file.opts.filename, localName, [
        '@linaria/react',
        'linaria/react',
      ])
    ) {
      cache.set(path, {
        component: { node: t.stringLiteral(tag.property.name) },
      });
    } else if (
      hasImport(t, path.scope, state.file.opts.filename, 'css', [
        '@linaria/core',
        'linaria',
      ]) &&
      t.isIdentifier(tag) &&
      tag.name === 'css'
    ) {
      cache.set(path, 'css');
    } else {
      cache.set(path, null);
    }
  }

  return cache.get(path) ?? null;
}
