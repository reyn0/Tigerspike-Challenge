var searchCommands = {
    search: function(searchTerm) {
        this.waitForElementVisible('@searchTextBox')
        .setValue('@searchTextBox', searchTerm)
        .click('@searchButton')
        return this;
      },
    clearCart: function() {
      this.waitForElementVisible('@goToCartButton')
        .click('@goToCartButton')
        .api.pause(1000)
        .waitForElementVisible('@deleteButton')
        .click('@deleteButton')
        .assert.containsText('@body', 'Your Shopping Cart is empty.')
      return this;
    }
  };
  
  module.exports = {
    url: 'http://www.amazon.com.au',
    commands: [searchCommands],
    elements: {
      body: 'body',
      searchTextBox: {selector: 'input[id=twotabsearchtextbox]'},
      searchButton: {selector: 'input[type=submit]'},
      allCategoryLink: { selector: 'a[id=nav-link-shopall]'},
      kindleLink: { selector: "//a[text()='Kindle']", locateStrategy: 'xpath' },
      addToCartButton: { selector: 'input[id=add-to-cart-button]'},
      goToCartButton: {selector: 'a[id=nav-cart]'},
      proceedToCheckoutButton: { selector: 'input[name=proceedToCheckout]'},
      deleteButton: {selector: 'input[type=submit][value=Delete]'}
    }
  };
  