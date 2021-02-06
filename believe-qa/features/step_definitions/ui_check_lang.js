const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const { expect } = require('chai');

require("chromedriver");

const urlBelieve = "https://www.believemusic.com/";

// driver setup
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();

Given('I am on page {string}', async function (end_url) {
    await driver.get(urlBelieve + end_url);
});

When('I choose the langName {string}', async function (langName) {
	//detect if the googd language was selected
	this.langName = langName;
});

Then('the nav link name should be {string}', {timeout: 60 * 1000}, async function (navLinkName) {
    let element = await driver.findElement(By.linkText(navLinkName));
	//console.log(element.classList.contains('current-menu-item'));
	//todo real expectation here
    expect(true).to.equal(true);
});

Then('the title need contain {string}', {timeout: 60 * 1000}, async function (titleWebsite) {
      let titleFound = await driver.getTitle();
	  titleWebsite = titleWebsite.toLowerCase();
	  let isTitleMatch = titleFound.toLowerCase().lastIndexOf(`${titleWebsite}`, 0) === 0;
	  expect(isTitleMatch).to.equal(true);
});

AfterAll(async function(){
    await driver.quit();
});

