/*
 * This config isn't used when building for production.
 * This allows Jest to babel-transpile source when running Unit tests, and thus test ES export packages.
 *
 * Babel configs use during actual app builds are found in the webpack configs.
 */
module.exports = {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}], '@babel/preset-react'],
};