module.exports = {
  "env": {
    "commonjs": true,
    "es2021": true,
    "node": true
  },
  "extends": ["prettier", "airbnb-base", "airbnb-typescript/base"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "tsconfigRootDir": __dirname,
    "project": ["./tsconfig.json"]
  },
  "ignorePatterns": ['.eslintrc.js', 'db/*', 'jestGlobalSetup.js'],
  "plugins": ["@typescript-eslint", "prettier"],
  "rules": {
    "prettier/prettier": "error",
    "@typescript-eslint/comma-dangle": ["error", "never"],
    "@typescript-eslint/indent": "off"
  }
}
