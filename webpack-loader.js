export default function index(
    this: LoaderContext,
    sourceCodes: string,
    inputSourceMap: RawSourceMap | null
  ) {
  
    result = transform(sourceCodes, {
      filename: path.relative(process.cwd(), this.resourcePath),
      inputSourceMap: inputSourceMap ?? undefined,
      outputFilename,
      pluginOptions: rest,
      preprocessor,
    });
  
    if (result.cssText) {
      let { cssText } = result;
  
      if (sourceMap) {
        cssText += `/*# sourceMappingURL=data:application/json;base64,${Buffer.from(
          result.cssSourceMapText || ''
        ).toString('base64')}*/`;
      }
  
      if (result.dependencies?.length) {
        result.dependencies.forEach((dep) => {
          try {
            const f = resolveSync(path.dirname(this.resourcePath), dep);
  
            this.addDependency(f);
          } catch (e) {
            // eslint-disable-next-line no-console
            console.warn(`[linaria] failed to add dependency for: ${dep}`, e);
          }
        });
      }
  
      this.callback(
        null,
        `${result.code}\n\nrequire(${loaderUtils.stringifyRequest(
          this,
          outputFilename
        )});`,
        result.sourceMap ?? undefined
      );
      return;
    }


    export default function transform(code: string, options: Options): Result {
        // Check if the file contains `css` or `styled` words first
        // Otherwise we should skip transforming
        if (!/\b(styled|css)/.test(code)) {
          return {
            code,
            sourceMap: options.inputSourceMap,
          };
        }
        // ...  
        const ast = parseSync(code, {
          ...babelOptions,
          filename: options.filename,
          caller: { name: 'linaria' },
        });
      
        const { metadata, code: transformedCode, map } = transformFromAstSync(
          ast!,
          code,
          //.....
        )!;
      
        const {
          rules,
          replacements,
          dependencies,
        } = (metadata as babel.BabelFileMetadata & {
          linaria: LinariaMetadata;
        }).linaria;
        const mappings: Mapping[] = [];
      
        let cssText = '';
      
        Object.keys(rules).forEach((selector, index) => {
          mappings.push({
            generated: {
              line: index + 1,
              column: 0,
            },
            original: rules[selector].start!,
            name: selector,
            source: '',
          });
      
          // Run each rule through stylis to support nesting
          cssText += `${preprocessor(selector, rules[selector].cssText)}\n`;
        });
      
        return {
          code: transformedCode || '',
          cssText,
          rules,
          replacements,
          dependencies,
          sourceMap: map
        };
      }