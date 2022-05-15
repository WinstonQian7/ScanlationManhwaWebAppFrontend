module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/**.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/src/jest-setup.ts'],
  moduleNameMapper: {
    /* Handle CSS imports (with CSS modules)
      https://jestjs.io/docs/webpack#mocking-css-modules */

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss|svg|png)$': '<rootDir>/src/__mocks__/styleMock.ts',

    /* Handle image imports
      https://jestjs.io/docs/webpack#handling-static-assets */
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$':
      '<rootDir>/src/__mocks__/fileMock.ts',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
      https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
}