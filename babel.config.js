module.exports = {
  presets: ['@quasar/babel-preset-app'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src'
      }
    ]
  ]
}
