const makeFileLoader = function (args) {
  switch (args) {
    case 'woff':
      return {
        test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff',
          },
        }],
      };
    case 'ttf':
      return {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/octet-stream',
          },
        }],
      };
    case 'svg':
      return {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'image/svg+xml',
          },
        }],
      };
    case 'eot':
      return {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
        }],
      };
    case 'jpg':
      return {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            hash: 'sha512',
            digest: 'hex',
            name: 'hash].[ext]',
          },
        }, {
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true,
            optimizationLevel: 7,
            interlaced: false,
          },
        }],
      };
    default:
      return {};
  }
};

export const js = {
  test: /\.js?$/,
  use: [
    'babel-loader', {
      options: {
        babelrc: false,
        presets: [['es2015', {
            modules: false
          }],
          'react',
          'stage-2'
        ]
      },
      loader: 'babel-loader',
    }
  ],
  exclude: /node_modules/,
};

export const sass = {
  test: /\.scss/,
  use: [
    'style-loader',
    'css-loader',
    'postcss-loader',
    'sass-loader',
  ],
};

export const json = {
  test: /\.json?$/,
  exclude: /node_modules/,
  use: [
    'json-loader',
  ],
};

export const eslint = {
  test: /\.js?$/,
  enforce: 'pre',
  use: [
    'eslint-loader',
  ],
  include: `${__dirname}/client`,
};

export const svgLoader = makeFileLoader('svg');
export const eotLoader = makeFileLoader('eot');
export const woffLoader = makeFileLoader('woff');
export const ttfLoader = makeFileLoader('ttf');
export const jpgLoader = makeFileLoader('jpg');

export default [eslint, js, json, sass,
  svgLoader, eotLoader, woffLoader,
  ttfLoader, jpgLoader];
