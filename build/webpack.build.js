var config = require('./webpack.config.js');

config.entry = {
    'vue-components': './src/main.js'
};

config.output = {
    filename: './dist/[name].js',
    library: 'VueComponents',
    libraryTarget: 'umd'
};

module.exports = config;
