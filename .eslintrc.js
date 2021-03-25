module.exports = {
  extends: [
    '@metamask/eslint-config',
  ],

  parserOptions: {
    ecmaVersion: 2018,
  },

  plugins: [
    'json',
  ],

  overrides: [
    {
      files: ['*.ts'],
      extends: [
        '@metamask/eslint-config/config/typescript',
      ],
    },
    {
      files: [
        '*.js',
        '*.json',
      ],
      parserOptions: {
        sourceType: 'script',
      },
      extends: [
        '@metamask/eslint-config/config/nodejs',
      ],
    },
  ],

  ignorePatterns: [
    '!.eslintrc.js',
    'dist/',
  ],
};
