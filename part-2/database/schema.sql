CREATE TABLE grocery_items (
  item_id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  price DECIMAL(2, 2),
  section VARCHAR(100)
);

CREATE TABLE shoppers (
  shopper_id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE orders (
  order_id: SERIAL PRIMARY KEY,
  shopper_id: INTEGER REFERENCES shoppers(shopper_id)
);

CREATE TABLE order_items (
  order_id REFERENCES orders(order_id),
  item_id REFERENCES grocery_items(item_id),
  quantity INTEGER
)
