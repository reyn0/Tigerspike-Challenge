// module.exports = {
//   'Ebay Electricals': function (client) {
//     var ebay = client.page.ebay();

//     ebay.navigate()
//       .assert.title('Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay')
//       .waitForElementVisible('@electricalsLink', 2000)
//       .click ('@electricalsLink')
//       .assert.title('Electronics | eBay')

//     client.end();
//   }
// };