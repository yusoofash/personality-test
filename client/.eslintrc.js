module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended",
    "airbnb",
    "airbnb-typescript",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module",
    "tsconfigRootDir": __dirname,
    "project": ["./tsconfig.json"]
  },
  "ignorePatterns": ['.eslintrc.js'],
  "plugins": ["react", "@typescript-eslint"],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],
    "react/jsx-one-expression-per-line": "off",
    "react/react-in-jsx-scope": "off",
    "react/function-component-definition": [2, { "namedComponents": "arrow-function" }],
    "no-restricted-syntax": ["error", "ForInStatement", "LabeledStatement", "WithStatement"]
  }
}
