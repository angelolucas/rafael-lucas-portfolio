module.exports = {
    "extends": [
      "react-app",
      "airbnb"
    ],
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "globals": {
      "window": true,
      "document": true
    },
    "rules": {
      "react/forbid-prop-types": 0,
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "class-methods-use-this": 0,
      "max-len": 0,
    }
};