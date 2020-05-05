module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-filename-extension": [
      1,{ extensions: [".js", ".jsx"] },
    ],
    "react/forbid-prop-types": "off",
    "global-require": "off",
    "linebreak-style": "off",
    "react/no-array-index-key": "off",
    "jsx-a11y/label-has-associated-control":"off",
    "react/prop-types":"off",
  },
};
