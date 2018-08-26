module.exports = {
    'Amazon Kindle': function (client) {
      var amazonLogin = client.page.amazonLogin();
      amazonLogin.navigate()
        .login();

      var amazon = client.page.amazon();
      amazon.navigate()
        .assert.title('Amazon.com.au: Shop online for Electronics, Apparel, Toys, Books, DVDs & more')
        .waitForElementVisible('@allCategoryLink')
        .click('@allCategoryLink')
        .waitForElementVisible('@kindleLink')
        .click('@kindleLink')
        .assert.title('Kindle E-reader – Amazon Official Site')
        .addToCart()
        .goToCart()
        //.proceedToPayment() - still not working
        //.clearCart() - still not working
      client.end();
    }
  };