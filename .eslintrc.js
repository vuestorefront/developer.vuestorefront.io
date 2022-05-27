module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: 'tsconfig.json',
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: false,
      jsx: false
    },
    vueFeatures: {
      filter: false
    }
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'prettier',
    '@vue/eslint-config-prettier',
    './.eslintrc-auto-import.json',
  ],
  plugins: [
    'vue',
    'prettier'
  ],
  rules: {
    'vue/require-default-prop': 'off',
    'import/prefer-default-export': 'off',
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': ['error', {
      'devDependencies': true,
      'optionalDependencies': false,
      'peerDependencies': false,
    }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'vue': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
    ]
  }
};
