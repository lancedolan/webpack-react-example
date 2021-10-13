/*
 * This config isn't used when building for production.
 * This allows Jest to babel transpile source when running Unit tests, and thus test ES export packages.
 *
 * This project's actual build-configs for babel are found in the webpack config.
 */
module.exports = {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}], '@babel/preset-react'],
};