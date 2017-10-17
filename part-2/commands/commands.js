const { allSectionProducts, allOrdersforShopper, listRealShoppers } = require('../database/database.js');

// i'm getting an undefined result for my top row. possibly column headers? must look into further.
const productList = (args) => {
  console.log(`----------------------`);
  console.log(`  Products   Section  `);
  console.log(`----------------------`);
  allSectionProducts(args)
    .then((products) => {
      products.forEach((product) => {
        console.log(`| ${product.name} | ${product.section} |`);
      });
    })
    .catch(console.error);
};

// console.log(productList('dairy'));

// getting out the data i need, but also same undefined row up top. 
const shopperOrders = (args) => {
  console.log(`---------------------`);
  console.log(` Order ID  Total Cost`);
  console.log(`---------------------`);
  allOrdersforShopper(args)
    .then((orders) => {
      orders.forEach((order) => {
        console.log(`| ${order.order_id} | ${order.sum}`);
      });
    });
};

console.log(shopperOrders(1));

const realShoppers = () => {
  // future function coming
};

module.exports = { productList, shopperOrders, realShoppers };
