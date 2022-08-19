const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

// activity 28 

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({ 
        template: './index.html', 
        title: 'Text-Editor-Extreme'
      }),
      new InjectManifest({ 
        swSrc: './src/sw.js',
        swDest: 'service-worker.js',
      }),
      // webpack - fingerprints inject name short name descrip background color,,,,, 
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
