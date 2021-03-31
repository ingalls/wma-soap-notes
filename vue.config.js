const Assembly = require('@mapbox/assembly');

module.exports = {
    publicPath: '/wma-soap-notes/',
    chainWebpack: () => {
        Assembly.buildUserAssets('public/')
    }
};
