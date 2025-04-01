import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import prettierPluginConfig from 'eslint-plugin-prettier/recommended';
import tsParser from '@typescript-eslint/parser';

export default [
    eslint.configs.recommended,
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.stylistic,
    prettierConfig,
    prettierPluginConfig,
    {
        ignores: ['node_modules', '/dist/', './public/assets/**/*.js'],
        languageOptions: {
            globals: globals.browser,
            parser: tsParser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            '@typescript-eslint/consistent-type-definitions': 'off',
            '@typescript-eslint/consistent-indexed-object-style': 'off',
            'no-unused-vars': 'off', // base rule must be disabled
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    args: 'none',
                    caughtErrors: 'all',
                    ignoreRestSiblings: false,
                    reportUsedIgnorePattern: false,
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                },
            ],
        },
    },
];
