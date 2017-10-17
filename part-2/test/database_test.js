const mocha = require('mocha');
const expect = require('chai').expect;

const { allSectionProducts, allOrdersforShopper, listRealShoppers } = require('../database/database.js');

describe('allSectionProducts', function () {
  it('should be a function', function () {
    expect(allSectionProducts).to.be.a('function');
  });
  it('should return a list of frozen products if the argument frozen is given', function () {
    return allSectionProducts('frozen')
      .then((products) => {
        expect(products.length).to.equal(3);
      });
  });
  it('should return a list of 3 bulk items if the argument bulk is given', function () {
    return allSectionProducts('bulk')
      .then((products) => {
        expect(products.length).to.equal(3);
      });
  });
});

describe('allOrdersforShopper', function () {
  it('should be a function', function () {
    expect(allOrdersforShopper).to.be.a('function');
  });
  it('should return order_ids related to the shopper_id given', function () {
    return allOrdersforShopper(1)
      .then((orders) => {
        expect(orders.length).to.equal(2);
      });
  });
});

describe('listRealShoppers', function () {
  it('should be a function', function () {
    expect(listRealShoppers).to.be.a('function');
  });
  it('should return a list of shoppers who have at least one order when called', function () {
    return listRealShoppers()
      .then((shoppers) => {
        expect(shoppers.length).to.equal(4);
      });
  });
});
