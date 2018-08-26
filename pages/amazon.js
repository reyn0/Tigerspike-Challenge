var amazonCommands = {
    search: function(searchTerm) {
        this.waitForElementVisible('@searchTextBox')
        .setValue('@searchTextBox', searchTerm)
        .click('@searchButton')
        return this;
      },
};
var cartCommands = {
    clearCart: function() {
        this.navigate()
          .waitForElementVisible('@goToCartButton')
          .click('@goToCartButton')
          .api.pause(1000)
          .waitForElementVisible('@deleteButton')
          .click('@deleteButton')
          .assert.containsText('@body', 'Your Shopping Cart is empty.')
        return this;
    },
    addToCart: function() {
        this.waitForElementVisible('@addToCartButton')
        .click('@addToCartButton')
        .assert.containsText('@body', '1 item was added to your cart')
        return this;
    },
    goToCart: function() {
        this.waitForElementVisible('@goToCartButton')
        .click('@goToCartButton')
        return this;
    },
    proceedToPayment: function() {
        this.waitForElementVisible('@proceedToCheckoutButton')
        .click('@proceedToCheckoutButton')
        .assert.containsText('@body', 'Select a delivery address')
        .waitForElementVisible('@deliverToThisAddressButton')
        return this;
    },
};
  
  module.exports = {
    url: 'http://www.amazon.com.au',
    commands: [amazonCommands, cartCommands],
    elements: {
      body: 'body',
      searchTextBox: {selector: 'input[id=twotabsearchtextbox]'},
      searchButton: {selector: 'input[type=submit]'},
      allCategoryLink: { selector: 'a[id=nav-link-shopall]'},
      kindleLink: { selector: "//a[text()='Kindle']", locateStrategy: 'xpath' },
      addToCartButton: { selector: 'input[id=add-to-cart-button]'},
      goToCartButton: {selector: 'a[id=nav-cart]'},
      proceedToCheckoutButton: 'input[name=proceedToCheckout]',
      deliverToThisAddressButton: {selector: 'input[class=ship-to-this-address a-button a-button-primary a-button-span12 a-spacing-medium]'},
      deleteButton: {selector: 'input[type=submit][value=Delete]'}
    }
  };
  