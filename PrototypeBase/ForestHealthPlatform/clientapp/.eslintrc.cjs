module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true, // Add this line!
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react/react-in-jsx-scope": "off",
    camelcase: "error",
    "spaced-comment": "error",
    quotes: ["error", "single"],
    "no-duplicate-imports": "error",
  },
};
