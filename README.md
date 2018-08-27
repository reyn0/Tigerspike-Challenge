# Tigerspike-Challenge
For Tigerspike Challenge

Setting up the environment:

Before you start, make sure you have installed these dependencies before:

- Install Node js and NPM (https://nodejs.org/en/)
- Install JDK (https://www.oracle.com/technetwork/java/javase/downloads/index.html)
- Any code editor that you fancy (I use VSCode - https://code.visualstudio.com/)

Once you have all those dependencies, clone the source code from Github (https://github.com/reyn0/Tigerspike-Challenge.git)

Once you finished cloning, run this command in the terminal:

- npm install

This will install all the required npm packages that listed from package.json

To run the test, run any of these commands in the terminal:

- npm run nightwatch
- npm run nightwatchChrome
- npm run nightwatchChromeHeadless
- npm run nightwatchFirefox
- npm run nightwatchSafari

The first one (npm run nightwatch) will run the tests in parallel for all the available browsers: chrome, firefox, and safari

Safari is having a bit of problem starting up the selenium-server
Microsoft edge browser support will be added in the future