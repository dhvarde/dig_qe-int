import { Given, When, Then } from "@wdio/cucumber-framework";
import checkboxesPage from "../pageobjects/checkboxes.page.js";

Given('I am on the Checkboxes page', async function () {
  await checkboxesPage.open();
});

When('I select checkbox {int}', async function (num) {
  await checkboxesPage.select(num);
});

Then('The checkbox {int} should be {string}', async function (num, status) {
  await checkboxesPage.test(num, status);
});



