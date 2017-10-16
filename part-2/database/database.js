const pgp = require('pg-promise');

const connection = {
  host: 'localhost',
  port: 5432,
  database: 'grocery_store',
};

const db = pgp(connection);

// this one is complete.
const listAllProductsfromSection = (section) => {
  return db.any(`SELECT name, section FROM grocery_items WHERE section=$1`, section);
};

// List all orders for a given shopper id, returns the order id, and the total cost of each order. This is the hardest one.
const allOrdersforShopper = (shopperId) => {
  return db.any(``, shopperId);
};

// List all the shoppers that have at least 1 order, and also display the number of orders for them.
const listRealShoppers = () => {
  return db.any(`SELECT shoppers.shopper_name, COUNT(orders.order_id)
    FROM shoppers
    JOIN orders
    ON shoppers.shopper_id = orders.order_shopper_id
    GROUP BY shopper_name`);
};

module.exports = { listAllProductsfromSection, allOrdersforShopper };
