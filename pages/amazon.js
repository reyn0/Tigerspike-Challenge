var amazonCommands = {
    // Search for something in the Search bar
    search: function(searchTerm) {
        this.waitForElementVisible('@searchTextBox')
        .setValue('@searchTextBox', searchTerm)
        .click('@searchButton')
        return this;
    },
    // Select a category from the category list
    selectCategory: function(categoryTerm) {
        var locatorBuilder = "//a[text()='"+ categoryTerm +"']"
        this.waitForElementVisible('@allCategoryLink')
        .click('@allCategoryLink')
        .click('xpath',locatorBuilder)
        return this;
    },
    // Click a link to see item details
    selectItem: function(itemName) {
        var locatorBuilder = "a[title='"+ itemName +"']"
        this.click('xpath', locatorBuilder)
        return this;
    },
};

var cartCommands = {
    // Clear an item from a cart
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
    // Add an item to a cart
    addToCart: function() {
        this.waitForElementVisible('@addToCartButton')
        .click('@addToCartButton')
        .assert.containsText('@body', '1 item was added to your cart')
        return this;
    },
    // Go to cart from the cart button
    goToCart: function() {
        this.waitForElementVisible('@goToCartButton')
        .click('@goToCartButton')
        return this;
    },
    // Proceed to payment page
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
      searchTextBox: 'input[id=twotabsearchtextbox]',
      searchButton: 'input[type=submit]',
      allCategoryLink: { selector: 'a[id=nav-link-shopall]'},
      kindleLink: { selector: "//a[text()='Kindle']", locateStrategy: 'xpath' },
      addToCartButton: { selector: 'input[id=add-to-cart-button]'},
      goToCartButton: {selector: 'a[id=nav-cart]'},
      proceedToCheckoutButton: 'input[name=proceedToCheckout]',
      deliverToThisAddressButton: {selector: 'input[class=ship-to-this-address a-button a-button-primary a-button-span12 a-spacing-medium]'},
      deleteButton: {selector: 'input[type=submit][value=Delete]'}
    }
  };
  