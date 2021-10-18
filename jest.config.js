module.exports = {
    /**
     * Mock front-end assets which are imported by our dependencies but have no value in unit tests.
     */
    "moduleNameMapper": {
        "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/style-mock.js",
        "\\.(scss|less)$": "<rootDir>/test/style-mock.js"
    },
    /**
     * mock Browser API, since this is a webapp and our dependencies assume global Browser API
     */
    "testEnvironment": "jsdom",
    /**
     * As a rule, node_modules are already transpiled.
     * Some libraries break that rule, so we must transpile them during jest, which depends on commonJS.
     */
    "transformIgnorePatterns": [
        "<rootDir>/node_modules/(?!lodash-es)"
    ]
}