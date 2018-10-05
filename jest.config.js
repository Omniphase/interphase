module.exports = {
  projects: [
    {
      collectCoverageFrom: [
        'src/**/*.ts',
      ],
      displayName: 'test-node',
      preset: 'ts-jest',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/test/**/*.test.ts'],
    },
    {
      collectCoverageFrom: [
        'src/**/*.ts',
      ],
      displayName: 'test-browser',
      preset: 'ts-jest',
      testEnvironment: 'jsdom',
      testMatch: ['<rootDir>/test/**/*.test.ts'],
    }
  ],
}; 