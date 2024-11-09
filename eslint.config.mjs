import { fixupConfigRules } from '@eslint/compat'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  {
    ignores: ['**/dist', '**/eslintrc.cjs', '**/vite.config.ts'],
  },
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
    ),
  ),
  {
    plugins: {
      'react-refresh': reactRefresh,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        project: './tsconfig.json',
      },
    },

    rules: {
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],

      'react/react-in-jsx-scope': 'off',
      'import/order': 'off',
      'import/prefer-default-export': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/require-default-props': 'off',
      'react/button-has-type': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
    },
  },
]
