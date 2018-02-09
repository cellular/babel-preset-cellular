# babel-preset-cellular

[![Greenkeeper badge](https://badges.greenkeeper.io/fgnass/babel-preset-cellular.svg)](https://greenkeeper.io/)

This package includes the Babel preset used at [CELLULAR](https://www.cellular.de).

## Usage in cellular-scripts Projects

The easiest way to use this configuration is with [cellular-scripts](https://www.npmjs.com/package/cellular-scripts), which includes it by default. **You don’t need to install it separately.**

## Usage Outside of cellular-scripts

If you want to use this Babel preset in a project not built with cellular-scripts, you can install it with following steps:

First, [install Babel](https://babeljs.io/docs/setup/).

Then install babel-preset-cellular.

```sh
npm install babel-preset-react-app --save-dev
```

Then create a file named `.babelrc` with following contents in the root folder of your project:

```js
{
  "presets": ["cellular"]
}
```