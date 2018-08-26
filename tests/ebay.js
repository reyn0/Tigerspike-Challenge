module.exports = {
  'Ebay electrical': function (client) {
    var ebay = client.page.ebay();

    ebay.navigate()
      .assert.title('Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay')
      .assert.visible('@searchBar')
      .setValue('@searchBar', 'nightwatch')
      .click('@submitButton');

    client.end();
  }
};