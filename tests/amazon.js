module.exports = {
    'Amazon Kindle': function (client) {
      var amazonLogin = client.page.amazonLogin();
      amazonLogin.navigate()
        .login();

      var amazon = client.page.amazon();
      amazon.navigate()
        .search("Kindle")
        .assert.title('Amazon.com.au: Shop online for Electronics, Apparel, Toys, Books, DVDs & more')
        .waitForElementVisible('@allCategoryLink')
        .click('@allCategoryLink')
        .waitForElementVisible('@kindleLink')
        .click('@kindleLink')
        .assert.title('Kindle E-reader – Amazon Official Site')
        .waitForElementVisible('@addToCartButton')
        .click('@addToCartButton')
        .assert.containsText('@body', '1 item was added to your cart')
        .waitForElementVisible('@goToCartButton')
        .click('@goToCartButton')
        .waitForElementVisible('@proceedToCheckoutButton')
        .click('@proceedToCheckoutButton')
        .assert.containsText('@body', 'Select a delivery address')
        .navigate()
        .clearCart()
      client.end();
    }
  };