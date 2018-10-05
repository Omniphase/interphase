module.exports = {
  collectCoverageFrom: [
    'src/**/*.ts',
  ],
  projects: [
    {
      displayName: 'test-node',
      preset: 'ts-jest',
      testEnvironment: 'node',
    },
    {
      displayName: 'test-browser',
      preset: 'ts-jest',
      testEnvironment: 'jsdom',
    }
  ],
  testMatch: ['./test/**/*.ts']
}; 