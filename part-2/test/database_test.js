process.env.NODE_ENV = "test";

const mocha = require('mocha');
const expect = require('chai').expect;

const { allSectionProducts, allOrdersforShopper, listRealShoppers } = require('../database/database.js');
const { clearAllTables, clearAllIds, loadAllTables } = require('../database/helpers.js');

describe('allSectionProducts', function () {
  it('should be a function', function () {
    expect(allSectionProducts).to.be.a('function');
  });
  before(function (done) {
    clearAllTables()
      .then(() => {
        clearAllIds();
      })
      .then(() => {
        loadAllTables();
      })
      .then(() => {
        done();
      });
  });
  it('should return a list of dairy products if the argument dairy is given', function () {
    return allSectionProducts('dairy')
      .then((products) => {
        expect(products.length).to.equal(2);
      })
      .catch(console.error);
  });
  it('should return a list of 1 bulk item if the argument bulk is given', function () {
    return allSectionProducts('bulk')
      .then((products) => {
        expect(products.length).to.equal(1);
      })
      .catch(console.error);
  });
});

describe('allOrdersforShopper', function () {
  it('should be a function', function () {
    expect(allOrdersforShopper).to.be.a('function');
  });
  it('should return order_ids related to the shopper_id given', function () {
    return allOrdersforShopper(1)
      .then((orders) => {
        expect(orders.length).to.equal(1);
      })
      .catch(console.error);
  });
});

describe('listRealShoppers', function () {
  it('should be a function', function () {
    expect(listRealShoppers).to.be.a('function');
  });
  it('should return a list of shoppers who have at least one order when called', function () {
    return listRealShoppers()
      .then((shoppers) => {
        expect(shoppers.length).to.equal(2);
      })
      .catch(console.error);
  });
});
