import { Given, When, Then, world } from "@cucumber/cucumber";
import { expect } from "@wdio/globals";
import dropdownPage from "../pageobjects/dropdown.page.js";

Given('I am on the Dropdown page', async function() {
  await dropdownPage.open();
});

When(/^I select "(.+)"$/, async function (option) {
  world.hello = "hello";
  console.log(world);
  await dropdownPage.select(option);
});

Then(/^The dropdown value should be "(.+)"$/, async function (option) {
  console.log(world);
  await expect(await dropdownPage.selectedOptionText()).toBe(option);
});
