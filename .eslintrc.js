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
    'max-len': ["warn", { "code": 120 }],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
  }
};
