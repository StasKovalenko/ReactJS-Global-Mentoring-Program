/* eslint-disable no-undef */
module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:cypress/recommended", "plugin:storybook/recommended"],
  "overrides": [],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "cypress"],
  "rules": {
    "react/prop-types": "off",
    "react/no-unknown-property": "off",
    "react/no-unescaped-entities": 0,
    "react/react-in-jsx-scope": "off"
  }
};