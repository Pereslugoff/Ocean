const path = require('path');
// module.exports = {
//   entry: './client/index.jsx', // assumes your entry point is the index.js in the root of your project folder
//   mode: 'development',
//   output: {
//     path: __dirname, // assumes your bundle.js will also be in the root of your project folder
//     filename: './public/bundle.js'
//   },
//   devtool: 'source-maps',
//   module: {
//     rules  : [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           query: {
//             presets: ['es2015', 'react']
//           }
//         }
//       },
//       {
// 				test: /\.css$/,
// 				use: [{
// 					loader: 'style-loader'
// 					}, {
// 						loader: 'css-loader',
// 						options: {
// 							modules: true,
// 							localIdentName: '[name]_[local]__[hash:base64:5]'
// 						}
// 					}
// 				]
// 			}
//     ]
//   }
// }

module.exports = {
  entry: './client/index.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
};