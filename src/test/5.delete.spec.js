// Generated by Selenium IDE
const { Builder, By } = require("selenium-webdriver");
import { timeout } from "../util/timeout";
describe("5_delete", function () {
  timeout(30000);
  let driver;
  beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
  });
  afterEach(async function () {
    await driver.quit();
  });
  it("5_delete", async function () {
    await driver.get("http://localhost:3000/");
    await driver.manage().window().setRect(1920, 1080);
    await driver
      .findElement(By.css(".root-container:nth-child(5) path"))
      .click();
    await driver
      .findElement(By.css(".root-container:nth-child(5) .color-delete > p"))
      .click();
    await driver
      .findElement(By.css(".root-container:nth-child(5) .toolkit-edit svg"))
      .click();
    await driver
      .findElement(By.css(".root-container:nth-child(5) .color-delete > p"))
      .click();
    await driver.close();
  });
});
