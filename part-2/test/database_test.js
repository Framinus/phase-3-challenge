const expect = require('chai').expect;

const { productList, shopperOrders, realShoppers } = require('../commands/commands.js');

describe('productList', function () {
  it('should be a function', function () {
    expect(productList).to.be.a('function');
  });
});

describe('shopperOrders', function () {
  it('should be a function', function() {
    expect(shopperOrders).to.be.a('function');
  });
});

describe('realShoppers', function () {
  it('should be a function', function () {
    expect(realShoppers).to.be.a('function');
  });
});
