const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      'services': path.resolve(__dirname, 'src/services'),
      'components': path.resolve(__dirname, 'src/components'),
      'models': path.resolve(__dirname, 'src/models'),
      'store': path.resolve(__dirname, 'src/store'),


    },
  };

  return config;
};