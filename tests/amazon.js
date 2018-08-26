module.exports = {
    'Amazon Kindle From Category': function (client) {
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
        .proceedToPayment() // still not working properly with selecting address
        .clearCart() // still not working with the delete button
      client.end();
    },
    'Amazon Kindle From Search': function (client) {
        var amazonLogin = client.page.amazonLogin();
        amazonLogin.navigate()
          .login();
  
        var amazon = client.page.amazon();
        amazon.navigate()
          .search("Kindle")
          .assert.title('Amazon.com.au: Kindle')
          .addToCart()
          .goToCart()
          //.proceedToPayment() - still not working
          //.clearCart() - still not working
        client.end();
      }
  };