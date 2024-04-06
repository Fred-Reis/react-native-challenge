module.exports = {
  root: true,
  extends: '@react-native',
  overrides: [
    {
      rules: {
        'react-native/no-inline-styles': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['app'],
      },
      'babel-module': {},
    },
  },
};
