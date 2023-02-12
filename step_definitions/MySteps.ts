import { Given, Then, When } from "@cucumber/cucumber";
import { Builder, WebDriver } from "selenium-webdriver";
import { expect} from "chai"

let driver: WebDriver;

Given("User navigates to page", async function() {
  driver = await new Builder().forBrowser("firefox").build();
  return await driver.get("about");
});

When("User clicks on a link", async function() {
  return await driver.getTitle();
});

Then("The url should match",
  async function () {
    const title = await driver.getTitle();
    expect(title).to.equal("About");
  });
