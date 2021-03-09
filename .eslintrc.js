module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module', // Allows for the use of imports
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'],
  extends: ['eslint:recommended'],
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      plugins: ['testing-library', 'jest-dom', 'import'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // TypeScript rules
        'plugin:react/recommended', // React rules
        'plugin:react-hooks/recommended', // React hooks rules
        'plugin:testing-library/recommended',
        'plugin:testing-library/react',
        'plugin:jest-dom/recommended',
        'plugin:jsx-a11y/recommended', // Accessibility rules
        'plugin:prettier/recommended', // Prettier recommended rules
      ],
      rules: {
        // eslint-plugin-import rules
        'import/named': 'error',
        'import/namespace': 'error',
        'import/default': 'error',
        'import/export': 'error',
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
            alphabetize: {
              order: 'asc',
            },
            pathGroups: [
              {
                pattern: 'react',
                group: 'builtin',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: ['builtin'],
          },
        ],
        // React, Next & Typescript rules
        // We will use TypeScript's types for component props instead
        'react/prop-types': 'off',

        // No need to import React when using Next.js
        'react/react-in-jsx-scope': 'off',

        // This rule is not compatible with Next.js's <Link /> components
        'jsx-a11y/anchor-is-valid': 'off',

        // Why would you want unused vars?
        '@typescript-eslint/no-unused-vars': ['error'],

        // I suggest this setting for requiring return types on functions only where useful
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],
        'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Includes .prettierrc.js rules
      },
    },
  ],
};
