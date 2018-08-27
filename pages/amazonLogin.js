var loginCommands = {
    // Login as user. Currently hardcoded and need to extract it out
    login: function() {
      this.waitForElementVisible('@yourAccountLink')
        .click('@yourAccountLink')
        .setValue('@emailTextBox', 'reynaldi.hadianto+amazon@gmail.com')
        .click('@continueButton')
        .setValue('@passwordTextBox', 'OygbickyejnicE9')
        .click('@signInButton')
      return this;
    }
  };
  
  module.exports = {
    url: 'http://www.amazon.com.au',
    commands: [loginCommands],
    elements: {
      body: 'body',
      yourAccountLink: { selector: 'a[id=nav-link-yourAccount]'},
      emailTextBox: { selector: 'input[id=ap_email]'},
      continueButton: {selector: 'input[id=continue]'},
      passwordTextBox: {selector: 'input[id=ap_password]'},
      signInButton: {selector: 'input[id=signInSubmit]'},
    }
  };
  