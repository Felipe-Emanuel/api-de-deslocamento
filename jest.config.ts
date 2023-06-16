import type { JestConfigWithTsJest  } from "ts-jest"

const jestConfig: JestConfigWithTsJest = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/$1',
    '^@styles/(.+)': '<rootDir>/src/styles/$1',
    '^@utils/(.+)': '<rootDir>/src/components/utils/$1',
    '^@hooks/(.+)': '<rootDir>/src/data/hooks/$1',
    '^@Prismic/(.+)': '<rootDir>/src/data/prismic/$1',
    '^@components/(.+)': '<rootDir>/src/components/$1',
    '^@icons/(.+)': '<rootDir>/src/icons/$1',
    '^@animations/(.+)': '<rootDir>/src/components/animations/$1',
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.png$': 'jest-transform-stub',
  },

}

export default jestConfig
