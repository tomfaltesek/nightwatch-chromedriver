module.exports = {
  'Perform Google Search' : (browser) => {
    browser
      .url("https://www.google.com")
      .waitForElementVisible('body', 2000)
      .setValue("input[name='q']", ["nightwatch chromedriver starter", browser.Keys.ENTER])
      .waitForElementVisible('#resultStats', 2000)
      .end();
    }
};
