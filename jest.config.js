/* eslint-disable no-undef */
module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.css$': 'jest-transform-stub',
    '^.+\\.js$': 'babel-jest',
  },
}