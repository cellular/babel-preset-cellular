# babel-preset-cellular

[![Build Status](https://travis-ci.org/cellular/babel-preset-cellular.svg?branch=master)](https://travis-ci.org/cellular/babel-preset-cellular)
[![Greenkeeper badge](https://badges.greenkeeper.io/cellular/babel-preset-cellular.svg)](https://greenkeeper.io/)
[![version](https://img.shields.io/npm/v/babel-preset-cellular.svg)](http://npm.im/babel-preset-cellular)

This package includes the Babel preset used at [CELLULAR](https://www.cellular.de).

Presets:
* [env](https://www.npmjs.com/package/babel-preset-env)
* [flow](https://www.npmjs.com/package/babel-preset-flow)
* [react](https://www.npmjs.com/package/babel-preset-react)

Plugins:

* [add-react-displayname](https://www.npmjs.com/package/babel-plugin-add-react-displayname)
* [glamorous-displayname](https://www.npmjs.com/package/babel-plugin-glamorous-displayname) 
* [syntax-dynamic-import](https://www.npmjs.com/package/babel-plugin-syntax-dynamic-import)
* [transform-decorators-legacy](https://www.npmjs.com/package/babel-plugin-transform-decorators-legacy)
* [transform-class-properties](https://www.npmjs.com/package/babel-plugin-transform-class-properties)
* [transform-object-rest-spread](https://www.npmjs.com/package/babel-plugin-transform-object-rest-spread)
* [minify-dead-code-elimination](https://www.npmjs.com/package/babel-plugin-minify-dead-code-elimination)

When NODE_ENV or BABEL_ENV is `test`:
* [dynamic-import-node](https://www.npmjs.com/package/babel-plugin-dynamic-import-node)

## Usage in cellular-scripts projects

The easiest way to use this configuration is with [cellular-scripts](https://www.npmjs.com/package/cellular-scripts), which includes it by default. **You don’t need to install it separately.**

## Usage outside of cellular-scripts

If you want to use this Babel preset in a project not built with cellular-scripts, you can install it with following steps:

First, [install Babel](https://babeljs.io/docs/setup/).

Then install babel-preset-cellular.

```sh
npm install babel-preset-react-app --save-dev
```

Then create a file named `.babelrc` with following contents in the root folder of your project:

```js
{
  presets: ["cellular"]
}
```

## Options

If your project doesn't use flow, react or glamorous you can turn off these plugins to speed up the processing:

```js
{
  presets: [
    [
      "cellular",
      {
        flow: false,
        react: false,
        displayname: false,
        glamorous: false,
      }
    ]
  ]
}
```

__NOTE:__ If you use this preset with [cellular-scripts](https://www.npmjs.com/package/cellular-scripts) this will be done automatically.

# License

MIT