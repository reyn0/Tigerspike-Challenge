module.exports = {
    'Amazon Electricals': function (client) {
      var amazon = client.page.amazon();
  
      amazon.navigate()
        .assert.title('Amazon.com.au: Shop online for Electronics, Apparel, Toys, Books, DVDs & more')
        .waitForElementVisible('@allCategoryLink', 1000)
        .click('@allCategoryLink')
        .waitForElementVisible('@kindleLink', 1000)
        .click('@kindleLink')
        .assert.title('Kindle E-reader – Amazon Official Site')
        .waitForElementVisible('@addToCartButton', 1000)
        .click('@addToCartButton')
        .assert.containsText('@body', '1 item was added to your cart')
        .waitForElementVisible('@goToCartButton', 1000)
        .click('@goToCartButton')
        .waitForElementVisible('@proceedToCheckoutButton', 1000)
        .click('@proceedToCheckoutButton')
        
      client.end();
    }
  };