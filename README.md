# Nightwatch ChromeDriver Starter Project

This is a starter repository for those who want to quickly get started with Nightwatch without having to fumble through the [startup documentation](http://nightwatchjs.org/gettingstarted/ "Official Nightwatch Getting Started Guide"). You can get started with writing and running your e2e tests immediately and you won't have to worry about any of the painful dependencies or boilerplate configuration. 

Note that this setup **does NOT depend on Selenium or Java** (JDK), so we don't have to waste our time installing that software. The only dependencies are npm packages.

## Getting Started

### Install Nightwatch Globally (Optional)

```
npm install -g nightwatch
```

### Install Dependencies

```
yarn
```

### Run e2e Tests

```
yarn test
```
or (if nightwatch is installed globally)
```
nightwatch
```

### Example Console Output
```
C:\projects\nightwatch-chromedriver>yarn test

yarn run v1.10.1
$ nightwatch
Starting ChromeDriver 2.42.591088 (7b2b2dca23cca0862f674758c9a3933e685c27d5) on port 9515
Only local connections are allowed.

[Google Test] Test Suite
============================

Running:  Perform Google Search

DevTools listening on ws://127.0.0.1:61047/devtools/browser/81b3716b-5956-4e30-a940-bd1ad6d6a936
 √ Element <body> was visible after 88 milliseconds.
 √ Element <#resultStats> was visible after 55 milliseconds.

OK. 2 assertions passed. (5.767s)

Done in 7.25s.
```

## New to Node.js?
If you've never used Node.js or npm to install node packages, you'll want to first [install the latest version of node](https://nodejs.org/en/download/ "Node.js Downloads Page") before attempting to set up Nightwatch. Once you have Node.js installed, you'll also need to get the yarn tool for dependency management. Run `npm install -g yarn` to install yarn globally.