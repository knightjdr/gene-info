module.exports = {
  "env": {
    "jest": true
  },
  "extends": "airbnb",
  "globals": {
    "chrome": true,
    "document": true,
    "XMLHttpRequest": true,
  },
  "parser": "babel-eslint",
  "rules": {
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
  }
};
