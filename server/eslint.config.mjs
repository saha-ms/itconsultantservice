import globals from "globals";

export default [
  {
    ignores: ["node_modules/**"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node, // Add Node.js globals
        ...globals.jest, // Add Jest globals
      },
      ecmaVersion: "latest",
    },
  },
];
