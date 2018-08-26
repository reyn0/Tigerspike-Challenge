module.exports = {
    'Ebay first test': function(browser) {
      // Browser is the browser that is being controlled
      browser
        .url('https://www.ebay.com.au') 
        .waitForElementVisible('body', 1000) 
        .verify.title('Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay') 
        .end() 
      }
  }