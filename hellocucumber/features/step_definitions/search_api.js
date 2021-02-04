const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const axios = require('axios');

function isItTest(path) {
  
    return 200;
 
  
}

Given('an id for api', function () {
    this.test = '';
});

When('I send GET request to {string}', async function (path) {
	
    const response = await axios({
    url: path,
    method: 'get'
  })

  console.log(response.data);
  
  this.test = isItTest(path);
  
  
});

Then('I get response code {int}', function (statuss) {
    assert.equal(this.test, statuss);
});