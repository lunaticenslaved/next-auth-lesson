// eslint-disable-next-line no-undef
module.exports = {
  extends: ['next/core-web-vitals', './node_modules/@lunaticenslaved/configs/eslint.client.js'],
  ignorePatterns: ['dist', 'node_modules'],
  rules: {
    'no-console': 0,
  },
};
