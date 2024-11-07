module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
  ],
  rules: {
    "block-scoped-var": "error",
    "capitalized-comments": [
      "error",
      "always",
      { ignoreConsecutiveComments: true },
    ],
    "class-methods-use-this": "error",
    "default-case": "error",
    "default-case-last": "error",
    eqeqeq: "error",
    "func-names": "error",
    "func-style": "error",
    "no-confusing-arrow": "error",
    "no-constructor-return": "error",
    "no-empty-function": "error",
    "no-eq-null": "error",
    "no-floating-decimal": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-nested-ternary": "error",
    "no-octal-escape": "error",
    "no-plusplus": "error",
    "no-restricted-syntax": "error",
    "no-return-assign": "error",
    "no-self-compare": "error",
    "no-undef-init": "error",
    "no-unmodified-loop-condition": "error",
    "no-unreachable-loop": "error",
    "no-unused-private-class-members": "error",
    "no-useless-concat": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "prefer-const": "error",
    "prefer-template": "error",
    "require-atomic-updates": "error",
    yoda: "error",
    "@typescript-eslint/default-param-last": "error",
    "@typescript-eslint/dot-notation": "error",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/naming-convention": "error",
    "@typescript-eslint/no-confusing-void-expression": "error",
    "@typescript-eslint/no-dupe-class-members": "error",
    "@typescript-eslint/no-duplicate-imports": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-invalid-this": "error",
    "@typescript-eslint/no-loop-func": "error",
    "@typescript-eslint/no-magic-numbers": [
      "error",
      { ignoreArrayIndexes: true, ignore: [0, 1] },
    ],
    "@typescript-eslint/no-redeclare": "error",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-restricted-imports": "error",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-throw-literal": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/non-nullable-type-assertion-style": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-readonly": "error",
    "@typescript-eslint/prefer-readonly-parameter-types": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/return-await": "error",
  },
  env: {
    node: true,
  },
};
