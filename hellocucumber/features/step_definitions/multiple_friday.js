const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function isItFridayTomorrow(today) {
  if (today === "Friday") {
    return "TGIF";
  } else {
    return "Nope";
  }
}

Given('tomorrow is {string}', function (givenDay) {
  this.today = givenDay;
});

When('I ask whether tomorrow is Friday yet', function () {
  this.actualAnswer = isItFridayTomorrow(this.today);
});

Then('I should be told tomorrow {string}', function (expectedAnswer) {
  assert.equal(this.actualAnswer, expectedAnswer);
});