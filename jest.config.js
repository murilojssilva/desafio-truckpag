module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
  testPathIgnorePartterns: ["/node_modules"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(scss|css|sass)$": "identity-obj-proxy",
  },
};
