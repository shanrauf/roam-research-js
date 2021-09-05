module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ["<rootDir>/src/", "<rootDir>/tests/"],
  "testRegex": "/tests/.*\\.test\\.(jsx?|tsx?)$",
  "moduleFileExtensions": ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
