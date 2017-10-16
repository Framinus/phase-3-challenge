const mocha = require('mocha');
const expect = require('chai').expect;

const { productList, shopperOrders, realShoppers } = require('../commands/commands.js');

describe('productList', function () {
  it('should be a function', function () {
    expect(productList).to.be.a('function');
  });
  it('should return a list of dairy products if the argument dairy is given', function () {
    // future test here
  });
});

describe('shopperOrders', function () {
  it('should be a function', function() {
    expect(shopperOrders).to.be.a('function');
  });
  it('should return order_ids related to the shopper_id given', function () {
    // future test here.
  });
});

describe('realShoppers', function () {
  it('should be a function', function () {
    expect(realShoppers).to.be.a('function');
  });
  it('should return a list of shoppers who have at least one order when called', function () {
    // future test here
  });
});
