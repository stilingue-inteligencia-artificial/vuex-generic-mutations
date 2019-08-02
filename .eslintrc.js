// module.exports = {
//   root: true,
//   env: {
//     node: true,
//     jest: true,
//     browser: true
//   },
//   extends: [
//     'airbnb'
//   ],
//   rules: {
//     'accessor-pairs': ['error'],
//     'array-callback-return': ['error'],
//     'block-scoped-var': ['error'],
//     'class-methods-use-this': ['error'],
//     'complexity': ['error', 6],
//     'curly': ['error', 'multi-line'],
//     'default-case': ['error'],
//     'dot-notation': ['error'],
//     'eqeqeq': ['error'],
//     'guard-for-in': ['error'],
//     'max-classes-per-file': ['error'],
//     'no-alert': ['error'],
//     'no-caller': ['error'],
//     'no-div-regex': ['error'],
//     'no-else-return': ['error'],
//     'no-eval': ['error'],
//     'no-extend-native': ['error'],
//     'no-extra-bind': ['error'],
//     'no-floating-decimal': ['error'],
//     'no-implicit-coercion': ['error'],
//     'no-implicit-globals': ['error'],
//     'no-implied-eval': ['error'],
//     'no-invalid-this': ['error'],
//     'no-iterator': ['error'],
//     'no-labels': ['error'],
//     'no-lone-blocks': ['error'],
//     'no-loop-func': ['error'],
//     'no-multi-spaces': ['error'],
//     'no-multi-str': ['error'],
//     'no-new-func': ['error'],
//     'no-new-wrappers': ['error'],
//     'no-new': ['error'],
//     'no-octal-escape': ['error'],
//     'no-param-reassign': [0],
//     'no-proto': ['error'],
//     'no-return-assign': ['error'],
//     'no-return-await': ['error'],
//     'no-self-compare': ['error'],
//     'no-sequences': ['error'],
//     'no-throw-literal': ['error'],
//     'no-undef': ['error'],
//     'no-unmodified-loop-condition': ['error'],
//     'no-unused-expressions': ['error', { 'allowShortCircuit': true }],
//     'no-unused-vars': ['error'],
//     'no-useless-call': ['error'],
//     'no-useless-concat': ['error'],
//     'no-useless-escape': ['error'],
//     'no-useless-return': ['error'],
//     'no-void': ['error'],
//     'no-with': ['error'],
//     'radix': ['error'],
//     'require-unicode-regexp': ['error'],
//     'wrap-iife': ['error'],
//     'yoda': ['error', 'never', { exceptRange: true }],
//
//     //NODE JS / COMMON JS
//     'handle-callback-err': ['error'],
//     'no-buffer-constructor': ['error'],
//     'no-mixed-requires': ['error'],
//     'no-new-require': ['error'],
//     'no-path-concat': ['error'],
//     'no-process-exit': ['error'],
//     'no-restricted-modules': ['error'],
//
//     // STYLING
//     'array-bracket-spacing': ['error'],
//     'brace-style': ['error'],
//     'comma-dangle': ['error'],
//     'comma-spacing': ['error'],
//     'comma-style': ['error'],
//     'computed-property-spacing': ['error'],
//     'consistent-this': ['error'],
//     'eol-last': ['error'],
//     'func-style': ['error', 'declaration'],
//     'indent': ['error', 2],
//     'key-spacing': ['error'],
//     'keyword-spacing': ['error'],
//     'lines-between-class-members': ['error'],
//     'max-lines': ['error', {
//       max: 1000,
//       'skipBlankLines': true,
//       'skipComments': true
//     }],
//     'max-nested-callbacks': ['error'],
//     'max-params': ['error'],
//     'new-parens': ['error'],
//     'no-empty': ['error', { allowEmptyCatch: true }],
//     'no-lonely-if': ['error'],
//     'no-mixed-operators': ['error'],
//     'no-multiple-empty-lines': ['error', { max: 1 }],
//     'no-trailing-spaces': ['error'],
//     'no-unneeded-ternary': ['error'],
//     'no-whitespace-before-property': ['error'],
//     'object-curly-spacing': ['error'],
//     'one-var-declaration-per-line': ['error'],
//     'operator-linebreak': ['error'],
//     'padded-blocks': ['error'],
//     'space-before-blocks': ['error'],
//     'space-in-parens': ['error'],
//     'space-infix-ops': ['error'],
//     'space-unary-ops': ['error'],
//     'no-underscore-dangle': ['error', { 'allow': ['_url', '_modulesNamespaceMap', '_rawModule'] }],
//
//     //Ecma 6
//     'arrow-spacing': ['error'],
//     'no-duplicate-imports': ['error'],
//     'no-this-before-super': ['error'],
//     'no-useless-computed-key': ['error'],
//     'no-useless-constructor': ['error'],
//     'no-useless-rename': ['error'],
//     'no-var': ['error'],
//     'object-shorthand': ['error'],
//     'prefer-const': ['error'],
//     'prefer-numeric-literals': ['error'],
//     'prefer-rest-params': ['error'],
//     'prefer-template': ['error'],
//     'rest-spread-spacing': ['error'],
//     'symbol-description': ['error'],
//     'template-curly-spacing': ['error']
//   },
//   parserOptions: {
//     parser: 'babel-eslint'
//   }
// };
module.exports = {
  parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends: [
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
    sourceType: 'module'  // Allows for the use of imports
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  }
};
