import {Given, When, Then } from "@cucumber/cucumber";
import inputsPage from "../pageobjects/inputs.page.js";
import Page from "../pageobjects/page.js";
const index = new Page();

Given('I am on the inputs page', async function () {
  await index.open('inputs');
});

When('I enter a {string}', async function (num) {
  this.num = num;
  await inputsPage.set(this.num);
});

Then(/^The input value should be the number I entered$/, async function () {
  await inputsPage.test(this.num);
});

