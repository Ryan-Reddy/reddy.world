import {Given, Then, When} from "@cucumber/cucumber";

Given(/^I am on the main index\.html$/, function () {
  console.log('test 1 started')
  throw new Error('test 1 started');

});
When(/^I click on a link$/, function () {

});
Then(/^The corresponding page should be loaded by vaadin$/, function () {

});
Then(/^the page should be rendered in the app slot$/, function () {

});
