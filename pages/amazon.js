var searchCommands = {
    submit: function() {
      this.waitForElementVisible('@submitButton', 3000)
        .click('@submitButton')
        .api.pause(1000);
      return this; // Return page object for chaining
    }
  };
  
  module.exports = {
    url: 'http://www.amazon.com.au',
    commands: [searchCommands],
    elements: {
      body: 'body',
      allCategoryLink: { selector: 'a[id=nav-link-shopall]'},
      kindleLink: { selector: "//a[text()='Kindle']", locateStrategy: 'xpath' },
      addToCartButton: { selector: 'input[id=add-to-cart-button]'},
      goToCartButton: {selector: 'a[id=nav-cart]'},
      proceedToCheckoutButton: { selector: 'input[name=proceedToCheckout] '}
    }
  };
  