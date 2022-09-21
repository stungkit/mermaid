// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  transform: {
    '^.+\\.[jt]sx?$': 'esbuild-jest',
    '^.+\\.jison$': [
      path.resolve(__dirname, './src/jison/transformer.cjs'),
      { 'token-stack': true },
    ],
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '^.+\\.jison$', // might be able to fix in future if .jison adds source-map support
  ],
  transformIgnorePatterns: ['/node_modules/(?!dagre-d3-renderer/lib|khroma).*\\.js'],
  testPathIgnorePatterns: ['/node_modules/', '.cache', './cypress'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node', 'jison'],
};
