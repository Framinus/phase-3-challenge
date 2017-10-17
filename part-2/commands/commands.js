const { allSectionProducts, allOrdersforShopper, listRealShoppers } = require('../database/database.js');


const productList = (args) => {
  console.log(`----------------------`);
  console.log(`  Products   Section  `);
  allSectionProducts(args)
    .then((products) => {
      products.forEach((product) => {
        console.log(`| ${product.name}  | ${product.section} |`);
      });
    })
    .catch(console.error);
};

console.log(productList('dairy'));

const shopperOrders = (args) => {
  // future function coming
};

const realShoppers = () => {
  // future function coming
};

module.exports = { productList, shopperOrders, realShoppers };
