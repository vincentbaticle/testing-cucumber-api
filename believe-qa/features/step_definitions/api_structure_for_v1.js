const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const axios = require('axios');

const api_url = "http://dummy.restapiexample.com/api/v1";

Given('browse api structure', function () {
    this.test = '';
});

When('I send a GET request to {string}', async function (path) {
	
    const response = await axios({
    url: api_url + path,
    method: 'get'
    });
    
  this.response = response;
 
});

Then('I get stucture key {string}', function (structureKey) {
   
	assert.equal(true, this.response.data.data[0].hasOwnProperty(structureKey));
	
});