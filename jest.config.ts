import type { JestConfigWithTsJest  } from "ts-jest"

const jestConfig: JestConfigWithTsJest = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/app/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/$1',
    '^@hooks/(.+)': '<rootDir>/src/app/data/hooks/$1',
    '^@components/(.+)': '<rootDir>/src/app/components/$1',
    '^@services/(.+)': '<rootDir>/src/app/data/services/$1',
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    "^.+\\.module\\.(css|less|scss)$": "identity-obj-proxy",
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.png$': 'jest-transform-stub',
  },
}

export default jestConfig
