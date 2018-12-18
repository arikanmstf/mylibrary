/* eslint-disable */
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage'
      }
    ],
    '@babel/preset-react',
    '@babel/preset-flow'
  ],
  plugins: [
    '@babel/proposal-export-default-from',
    '@babel/proposal-optional-chaining',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread'
  ],
  sourceMaps: true
};
/* eslint-enable */
