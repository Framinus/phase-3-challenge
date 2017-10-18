const print = require('node-print');
const { allSectionProducts, allOrdersforShopper, listRealShoppers } = require('../database/database.js');

const productList = (args) => {
  const sectionArray = ["bread", "bulk", "dairy", "deli", "frozen", "meat", "miscellaneous", "packaged", "produce"];
  if (!sectionArray.includes(args)) {
    throw new Error('not a valid section');
  }
  allSectionProducts(args)
    .then((products) => {
      console.log(`\n`);
      print.pt(products);
      console.log(`\n`);
      process.exit();
    })
    .catch((err) => {
      console.error(err);
      process.exit();
    });
};

const shopperOrders = (args) => {
  const shopperIDArray = ["1", "2", "3", "4", "5"];
  if (!shopperIDArray.includes(args)) {
    throw new Error('must enter a valid shopper id');
  }
  allOrdersforShopper(args)
    .then((orders) => {
      console.log(`\n`);
      print.pt(orders);
      console.log(`\n`);
      process.exit();
    })
    .catch((err) => {
      console.error(err);
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
