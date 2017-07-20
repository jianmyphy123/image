module.exports = {
  // verbose: true,
  transform: {
    '.(ts|tsx)': '<rootDir>/node_modules/ts-jest/preprocessor.js'
  },
  testRegex: '/modules/__tests__/.*\\.test\\.(ts|tsx)$',
  modulePathIgnorePatterns: ['<rootDir>/lib'],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
  ]
}
