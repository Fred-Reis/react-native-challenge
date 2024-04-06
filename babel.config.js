module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['app'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.tsx',
          '.android.tsx',
          '.js',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '@app/components': './app/components/*',
          '@app/screens': './app/screens',
          '@app/utils': './app/utils',
        },
      },
    ],
  ],
};
