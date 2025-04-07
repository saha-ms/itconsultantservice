const globals = require("globals");

module.exports = [
  {
    ignores: ["node_modules/**"],
  },
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      parser: require("@babel/eslint-parser"), // Babel parser for modern JS and JSX
      parserOptions: {
        ecmaVersion: 2021, // Modern JavaScript
        sourceType: "module", // Support ES Modules
        requireConfigFile: false, // No need for a separate Babel config file
        ecmaFeatures: {
          jsx: true, // Enable JSX syntax
        },
      },
      globals: {
        ...globals.browser, // Browser-specific globals
      },
    },
    plugins: {
      react: require("eslint-plugin-react"), // React plugin
    },
    rules: {
      "react/react-in-jsx-scope": "off", // React 17+ doesn't require React in scope
      "react/prop-types": "off", // Disable prop-types rule if not using it
      "no-unused-vars": "warn", // Warn for unused variables
      "no-unused-vars": "off", // Turn off globally
    },
  },
];
