module.exports = function(api, options) {
  const isTestEnv = (process.env.BABEL_ENV || process.env.NODE_ENV) === 'test';
  const opts = Object.assign(
    {
      react: true,
      flow: true,
      glamorous: true,
      displayname: true,
      builtIns: true, // switch to 'usage' in Babel 7,
      modules: isTestEnv ? 'commonjs' : false,
    },
    options
  );

  const envOptions = {
    modules: opts.modules,
    useBuiltIns: opts.builtIns,
  };

  if (isTestEnv) {
    envOptions.targets = {
      node: 'current',
    };
  }

  const presets = [
    [require.resolve('babel-preset-env'), envOptions],
    opts.flow && require.resolve('babel-preset-flow'),
    opts.react && require.resolve('babel-preset-react'),
  ].filter(Boolean);

  const plugins = [
    opts.react &&
      opts.displayname &&
      require.resolve('babel-plugin-add-react-displayname'),
    require.resolve('babel-plugin-syntax-dynamic-import'),
    require.resolve('babel-plugin-transform-decorators-legacy'),
    require.resolve('babel-plugin-transform-class-properties'),
    require.resolve('babel-plugin-transform-object-rest-spread', {
      useBuiltIns: true,
    }),
    require.resolve('babel-plugin-transform-react-jsx', {
      useBuiltIns: true,
    }),
    require.resolve('babel-plugin-minify-dead-code-elimination'),
    opts.glamorous && require.resolve('babel-plugin-glamorous-displayname'),
    opts.modules && require.resolve('babel-plugin-dynamic-import-node'),
  ].filter(Boolean);

  return {
    presets,
    plugins,
  };
};
