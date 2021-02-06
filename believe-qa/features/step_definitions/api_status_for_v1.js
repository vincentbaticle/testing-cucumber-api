const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const axios = require('axios');

const api_url = "http://dummy.restapiexample.com/api/v1";

Given('browse api status', function () {
    this.test = '';
});

When('I send GET request to {string}', async function (path) {
	
    const response = await axios({
    url: api_url + path,
    method: 'get'
    });
    
  this.responseStatus = response.status;
  
});

Then('I get response code {int}', function (responseStatus) {
    assert.equal(this.responseStatus, responseStatus);
});