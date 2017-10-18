const sql = require('./database.js');

// these are all helper functions for my test database.

const clearAllTables = () => {
  return sql.db.none(`TRUNCATE TABLE shoppers, orders, grocery_items, order_items CASCADE`)
};

const clearAllIds = () => {
  return sql.db.any('ALTER SEQUENCE "grocery_items_item_id_seq" RESTART WITH 1;')
    .then(() => sql.db.any('ALTER SEQUENCE "shoppers_shopper_id_seq" RESTART WITH 1;'))
    .then(() => sql.db.any('ALTER SEQUENCE "orders_order_id_seq" RESTART WITH 1;'));
};


const seedGroceryItems = () => {
  return sql.db.any(
    `INSERT INTO grocery_items (name, price, section)
    VALUES
    ('cashews', 6.99, 'bulk'),
    ('milk', 2.99, 'dairy'),
    ('cheese', 3.99, 'dairy')`);
};

const seedShoppers = () => {
  return sql.db.any(
    `INSERT INTO shoppers (shopper_name) VALUES ('James'), ('Joe')`);
};

const seedOrders = () => {
  return sql.db.any(
    `INSERT INTO orders (order_shopper_id) VALUES ('1'), ('2')`);
};

const seedOrderItems = () => {
  return sql.db.any(
    `INSERT INTO order_items (order_id, item_id) VALUES ('1', '1'), ('1', '2')`);
};

const loadAllTables = () => {
  seedGroceryItems()
    .then(() => {
      seedShoppers();
    })
    .then(() => {
      seedOrders();
    })
    .then(() => {
      seedOrderItems();
    })
    .catch(console.error)
};

module.exports = { clearAllTables, clearAllIds, loadAllTables };
