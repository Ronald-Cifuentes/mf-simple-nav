const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const getPath = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return path.resolve(__dirname, 'dist');
    case 'local:production':
      return path.resolve(__dirname, 'public');
    default:
      return 'http://localhost:3001/';
  }
};

const getPublicPath = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'https://mf-simple-nav.vercel.app/';
    case 'local:production':
      return 'http://localhost:5500/public/';
    default:
      return 'http://localhost:3001/';
  }
};

const deps = require('./package.json').dependencies;
module.exports = {
  output: {
    path: getPath(),
    publicPath: getPublicPath(),
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },

  devServer: {
    port: 3001,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new ModuleFederationPlugin({
      name: 'mf_simple_nav',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './Header': './src/Header',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
};
