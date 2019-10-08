require('@babel/polyfill');

module.exports = {
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  collectCoverageFrom: [
    '**/*.js',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/docs/**',
    '!**/public/**',
    '!**/dist/**',
    '!**/lib/**',
    '!**/src/index.js',
    '!**/src/mutationTypes.js',
    '!jest.config.js',
    '!webpack.config.js',
    '!index.js',
  ],
  coverageReporters: ['lcov', 'html', 'text'],
  globals: {
    NODE_ENV: 'test',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  },
};
