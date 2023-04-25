/* eslint-disable no-undef */
module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transform: {
    '^.+\\.css$': 'jest-transform-stub',
    '^.+\\.js$': 'babel-jest',
  },
}