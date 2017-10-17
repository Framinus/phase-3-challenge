const print = require('node-print');
const { allSectionProducts, allOrdersforShopper, listRealShoppers } = require('../database/database.js');

const productList = (args) => {
  allSectionProducts(args)
    .then((products) => {
      console.log(`\n`);
      print.pt(products);
      console.log(`\n`);
      process.exit();
    })
    .catch(console.error);
};

const shopperOrders = (args) => {
  allOrdersforShopper(args)
    .then((orders) => {
      console.log(`\n`);
      print.pt(orders);
      console.log(`\n`);
      process.exit();
    });
};

const realShoppers = () => {
  listRealShoppers()
    .then((shoppers) => {
      console.log(`\n`);
      print.pt(shoppers);
      console.log(`\n`);
      process.exit();
    })
    .catch(console.error);
};

module.exports = { productList, shopperOrders, realShoppers };
