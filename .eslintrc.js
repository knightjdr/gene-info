module.exports = {
  "env": {
    "jest": true
  },
  "extends": "airbnb",
  "globals": {
    "chrome": true,
    "Event": true,
    "document": true,
    "requestAnimationFrame": true,
    "window": true,
    "XMLHttpRequest": true,
  },
  "parser": "babel-eslint",
  "rules": {
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
  }
};
