import { browser, by, element, ElementFinder } from 'protractor';


export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async isElementDisplayedById(elementId: string): Promise<boolean> {
    return await element(by.id(elementId)).isDisplayed();
  }

  async isElementEnabled(elementId: string): Promise<boolean> {
    return await element(by.id(elementId)).isEnabled();
  }

  async sendKeysToElementById(elementId: string, keys: string): Promise<void> {
    return await element(by.id(elementId)).sendKeys(keys)
  }
}
