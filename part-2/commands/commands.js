const print = require('node-print');
const { allSectionProducts, allOrdersforShopper, listRealShoppers } = require('../database/database.js');

const productList = (args) => {
  allSectionProducts(args)
    .then((products) => {
      print.pt(products);
    })
    .catch(console.error);
};

console.log(productList('dairy'));

const shopperOrders = (args) => {
  allOrdersforShopper(args)
    .then((orders) => {
      print.pt(orders);
    });
};

const realShoppers = () => {
  listRealShoppers()
    .then((shoppers) => {
      print.pt(shoppers);
    })
    .catch(console.error);
};

module.exports = { productList, shopperOrders, realShoppers };
