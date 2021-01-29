const { cosmiconfigSync } = require("cosmiconfig");

const explorer = cosmiconfigSync("rapier");

module.exports = function loadOptions(overrides = {}) {
  const { configFile, ignore, ...rest } = overrides;

  const result =
    configFile !== undefined
      ? explorer.load(configFile)
      : explorer.search();

  return {
    displayName: false,
    evaluate: true,
    rules: [
      {
        // FIXME: if `rule` is not specified in a config, `@linaria/shaker` should be added as a dependency
        // eslint-disable-next-line import/no-extraneous-dependencies
        action: require("../shaker").default,
      },
      {
        // The old `ignore` option is used as a default value for `ignore` rule.
        test: ignore ?? /[\\/]node_modules[\\/]/,
        action: "ignore",
      },
    ],
    ...(result ? result.config : null),
    ...rest,
  };
};
