// Generated by Selenium IDE
const { Builder, By, Key } = require("selenium-webdriver");
import { timeout } from "../util/timeout";
describe("3_edit_by_enter", function () {
  timeout(30000);
  let driver;
  beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
  });
  afterEach(async function () {
    await driver.quit();
  });
  it("3_edit_by_enter", async function () {
    await driver.get("http://localhost:3000/");
    await driver.manage().window().setRect(1920, 1080);
    await driver
      .findElement(By.css(".root-container:nth-child(5) .edit"))
      .click();
    await driver
      .findElement(
        By.css(".root-container:nth-child(5) button:nth-child(1) > p")
      )
      .click();
    await driver.findElement(By.name("todo")).click();
    await driver.findElement(By.name("todo")).sendKeys("test edit by enter");
    await driver.findElement(By.name("todo")).sendKeys(Key.ENTER);
    await driver.close();
  });
});
