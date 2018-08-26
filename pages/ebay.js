var searchCommands = {
  submit: function() {
    this.waitForElementVisible('@submitButton', 3000)
      .click('@submitButton')
      .api.pause(1000);
    return this; // Return page object for chaining
  }
};

module.exports = {
  url: 'http://www.ebay.com.au',
  commands: [searchCommands],
  elements: {
    body: 'body',
    searchBar: { selector: 'input[name=_nkw]' },
    submitButton: { selector: 'input[id=gh-btn]' },
    electricalsLink: { selector: '//a[text()="Electronics"]', locateStrategy: 'xpath' }
  }
};
