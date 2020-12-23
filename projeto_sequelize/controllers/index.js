const { request } = require('express');

const productsController = require('./productsController');

module.exports = {
  products: productsController,
};
