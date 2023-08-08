module.exports = {
  preset: 'react-native',
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  setupFilesAfterEnv: ['./setup-jest.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|@kichiyaki/react-native-barcode-generator|jsbarcode|@gorhom)',

    // For pnpm you need to use inlcude `(?!(?:.pnpm/)?` part like this:
    // 'node_modules/(?!(?:.pnpm/)?((jest-)?@?react-native|@react-native-community|@react-navigation))',
  ],
};
