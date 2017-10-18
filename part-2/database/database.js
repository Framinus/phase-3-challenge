const pgp = require('pg-promise')();

const connection = {
  host: 'localhost',
  port: 5432,
  database: 'grocery_store',
};

const db = pgp(connection);

const allSectionProducts = (section) => {
  return db.any(`SELECT name, section FROM grocery_items WHERE section=$1`, section);
};

const allOrdersforShopper = (shopperId) => {
  return db.any(`SELECT orders.order_id, SUM(grocery_items.price) AS order_total
      FROM orders
      JOIN order_items
        ON orders.order_id = order_items.order_id
      JOIN grocery_items
        ON order_items.item_id = grocery_items.item_id
        WHERE orders.order_shopper_id=$1
        GROUP BY orders.order_id
      `, shopperId);
};

const listRealShoppers = () => {
  return db.any(`SELECT shoppers.shopper_name, COUNT(orders.order_id) AS number_of_orders
    FROM shoppers
    JOIN orders
    ON shoppers.shopper_id = orders.order_shopper_id
    GROUP BY shopper_name`);
};

module.exports = { allSectionProducts, allOrdersforShopper, listRealShoppers };
