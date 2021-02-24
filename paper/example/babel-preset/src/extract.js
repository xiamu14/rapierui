module.exports = function extract(
    babel,
    options
  ) {
    // const process = getTemplateProcessor(babel, options); // TODO: 解读这个函数作用
  
    return {
      visitor: {
        Program: {
          enter(path, state) {
            // Collect all the style rules from the styles we encounter
            state.queue = [];
            state.rules = {};
            state.index = -1;
            state.dependencies = [];
            state.replacements = [];
            console.log('extraction:start', state.file.opts.filename);
  
            // Invalidate cache for module evaluation to get fresh modules
            // Module.invalidate();
  
            // We need our transforms to run before anything else
            // So we traverse here instead of a in a visitor
            path.traverse({ // 调用访问者
              ImportDeclaration: (p) => DetectStyledImportName(babel, p, state),
              TaggedTemplateExpression: (p) => {
                GenerateClassNames(babel, p, state, options);
                CollectDependencies(babel, p, state, options);
              },
            });
  
            // const lazyDeps = state.queue.reduce(
            //   (acc, { expressionValues: values }) => {
            //     acc.push(...values.filter(isLazyValue));
            //     return acc;
            //   },
            //   [] as LazyValue[]
            // );
  
            // const expressionsToEvaluate = lazyDeps.map((v) => unwrapNode(v.ex));
            // const originalLazyExpressions = lazyDeps.map((v) =>
            //   unwrapNode(v.originalEx)
            // );
  
            // console.log('lazy-deps:count', lazyDeps.length);
  
            // let lazyValues: any[] = [];
  
            // if (expressionsToEvaluate.length > 0) {
            //   console.log(
            //     'lazy-deps:original-expressions-list',
            //     originalLazyExpressions.map((node) =>
            //       typeof node !== 'string' ? generator(node).code : node
            //     )
            //   );
            //   console.log(
            //     'lazy-deps:expressions-to-eval-list',
            //     expressionsToEvaluate.map((node) =>
            //       typeof node !== 'string' ? generator(node).code : node
            //     )
            //   );
  
            //   const program = addLinariaPreval(
            //     babel,
            //     path,
            //     expressionsToEvaluate
            //   );
            //   const { code } = generator(program);
            //   console.log('lazy-deps:evaluate', '');
            //   try {
            //     const evaluation = evaluate(
            //       code,
            //       state.file.opts.filename,
            //       options
            //     );
            //     console.log('lazy-deps:sub-files', evaluation.dependencies);
  
            //     state.dependencies.push(...evaluation.dependencies);
            //     lazyValues = evaluation.value.__linariaPreval || [];
            //     console.log('lazy-deps:values', evaluation.value.__linariaPreval);
            //   } catch (e) {
            //     throw new Error(
            //       'An unexpected runtime error occurred during dependencies evaluation: \n' +
            //         e.stack +
            //         '\n\nIt may happen when your code or third party module is invalid or uses identifiers not available in Node environment, eg. window. \n' +
            //         'Note that line numbers in above stack trace will most likely not match, because Linaria needed to transform your code a bit.\n'
            //     );
            //   }
            // }
  
            // const valueCache: ValueCache = new Map();
            // originalLazyExpressions.forEach((key, idx) =>
            //   valueCache.set(key, lazyValues[idx])
            // );
            // state.queue.forEach((item) => process(item, state, valueCache));
          },
          exit(_, state) {
            if (Object.keys(state.rules).length) {
              // Store the result as the file metadata under linaria key
              state.file.metadata.rapier = {
                rules: state.rules,
                replacements: state.replacements,
                dependencies: state.dependencies,
              };
            }
  
            // Invalidate cache for module evaluation when we're done
            // Module.invalidate();
  
            console.log('extraction:end', state.file.opts.filename);
          },
        },
      },
    };
  }