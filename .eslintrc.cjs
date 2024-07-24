module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'plugin:prettier/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/no-explicit-any': 'off', // 关闭any类型检测
    'react/react-in-jsx-scope': 'off',
    'no-async-promise-executor': 0,
    'react/jsx-uses-react': 'off',
    // 'react/prop-types': 'off',
    'no-unused-vars': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true
      }
    ]
  }
};
