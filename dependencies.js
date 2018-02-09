module.exports = function() {
  const isTestEnv = (process.env.BABEL_ENV || process.env.NODE_ENV) === 'test';

  const envOptions = {
    modules: false,
    // Babel 7:
    //builtIns: 'usage',
  };

  if (isTestEnv) {
    envOptions.targets = {
      node: 'current',
    };
  }

  return {
    presets: [[require.resolve('babel-preset-env'), envOptions]],
  };
};
