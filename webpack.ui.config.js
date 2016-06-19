var webpack = require('webpack');
var path    = require('path');
var pkg     = require('./webtask.json');

var StringReplacePlugin = require("string-replace-webpack-plugin");

module.exports = {
  entry: [
    './src/public/react/app' // Your appʼs entry point
  ],
  output: {
    filename: './build/ui/'+pkg.name+'-'+pkg.version+'.min.js'
  },
  module: {
    loaders: [{
          test: /\.jade$/,
          loader: StringReplacePlugin.replace({
            replacements: [
              {
                pattern: /@assets_baseurl/ig,
                replacement: function (match, p1, offset, string) {
                  var location = 'http://localhost:3000';

                  if ((process.env.NODE_ENV || 'development') !== 'development') {
                    location = 'https://cdn.auth0.com/extensions/' + pkg.name + '/assets';
                  }

                  return location;
                }.bind(this)
              },
              {
                pattern: /@extension_name/ig,
                replacement: function (match, p1, offset, string) {
                  return pkg.name+'-'+pkg.version;
                }.bind(this)
              }
            ]
          })
        },
        { test: /\.jsx$/, path:'src', loader: "babel", query: { presets:['react', 'es2015'] }},
        { test: /\.js$/, path:'src', loader: "babel" },
        { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new StringReplacePlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ]
};
