\copy grocery_items (name, price, section) FROM './database/grocery.csv' DELIMITER ',' CSV HEADER;

INSERT INTO shoppers (shopper_name) VALUES ('James');
INSERT INTO shoppers (shopper_name) VALUES ('Joe');
INSERT INTO shoppers (shopper_name) VALUES ('Emily');
INSERT INTO shoppers (shopper_name) VALUES ('Marla');
INSERT INTO shoppers (shopper_name) VALUES ('Jamie');

INSERT INTO orders (order_shopper_id) VALUES (1);
INSERT INTO orders (order_shopper_id) VALUES (1);
INSERT INTO orders (order_shopper_id) VALUES (2);
INSERT INTO orders (order_shopper_id) VALUES (4);
INSERT INTO orders (order_shopper_id) VALUES (5);

INSERT INTO order_items (order_id, item_id) VALUES (1, 2);
INSERT INTO order_items (order_id, item_id) VALUES (1, 4);
INSERT INTO order_items (order_id, item_id) VALUES (1, 5);
INSERT INTO order_items (order_id, item_id) VALUES (2, 7);
INSERT INTO order_items (order_id, item_id) VALUES (2, 4);
INSERT INTO order_items (order_id, item_id) VALUES (2, 8);
INSERT INTO order_items (order_id, item_id) VALUES (4, 6);
INSERT INTO order_items (order_id, item_id) VALUES (4, 12);
INSERT INTO order_items (order_id, item_id) VALUES (5, 1);
INSERT INTO order_items (order_id, item_id) VALUES (5, 7);
INSERT INTO order_items (order_id, item_id) VALUES (5, 4);
INSERT INTO order_items (order_id, item_id) VALUES (5, 10);
