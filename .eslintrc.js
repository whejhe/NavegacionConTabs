// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    quotes: [0, "single", { avoidEscape: true, allowTemplateLiterals: true }],
    "prettier/prettier": [
      "error",
      {
        singleQuote: false, // Permitir tanto comillas simples como dobles
        endOfLine: "auto",
      },
    ],
  },
};