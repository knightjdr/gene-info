const config = {
  projects: [
    {
      displayName: 'api',
      testMatch: [
        '<rootDir>/api/**/*.test.js',
      ],
    },
    {
      displayName: 'database',
      testMatch: [
        '<rootDir>/database/**/*.test.js',
      ],
    },
    {
      displayName: 'extension',
      testEnvironment: 'jsdom',
      testMatch: [
        '<rootDir>/chrome-extension/src/**/*.test.js',
      ],
    },
  ],
  testPathIgnorePatterns: [
    '/node_modules',
  ],
};

module.exports = config;
