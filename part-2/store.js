#!/usr/bin/env node

const { productList, shopperOrders, realShoppers } = require('./commands/commands.js');

const command = process.argv[2];
const args = process.argv[3];

switch (command) {
  case "product-list": {
    productList(args);
    break;
  }
  case "shopper-orders": {
    shopperOrders(args);
    break;
  }
  case "real-shoppers": {
    realShoppers();
    break;
  }
  default: {
    throw new Error('Invalid command');
  }
}
