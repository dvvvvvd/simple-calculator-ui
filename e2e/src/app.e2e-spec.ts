import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('simple-calculator-ui App', () => {
  const ADD_BUTTON_ID = 'add-button';
  const SUBTRACT_BUTTON_ID = 'subtract-button';
  const MULTIPLY_BUTTON_ID = 'multiply-button';
  const DIVIDE_BUTTON_ID = 'divide-button';

  const LEFTHAND_INPUT_ID = 'left-hand-input';
  const RIGHTHAND_INPUT_ID = 'right-hand-input';

  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display calculation buttons', async () => {
    await page.navigateTo();
    await expect(page.isElementDisplayedById(ADD_BUTTON_ID)).toBeTruthy();
    await expect(page.isElementDisplayedById(SUBTRACT_BUTTON_ID)).toBeTruthy();
    await expect(page.isElementDisplayedById(MULTIPLY_BUTTON_ID)).toBeTruthy();
    await expect(page.isElementDisplayedById(DIVIDE_BUTTON_ID)).toBeTruthy();
  });

  it('should display input fields', async () => {
    await page.navigateTo();
    await expect(page.isElementDisplayedById(LEFTHAND_INPUT_ID)).toBeTruthy();
    await expect(page.isElementDisplayedById(RIGHTHAND_INPUT_ID)).toBeTruthy();
  });

  it('expect buttons to be disabled when empty', async () => {
    await page.navigateTo();
    await expect(page.isElementEnabled(ADD_BUTTON_ID)).toBeFalsy();
    await expect(page.isElementEnabled(SUBTRACT_BUTTON_ID)).toBeFalsy();
    await expect(page.isElementEnabled(MULTIPLY_BUTTON_ID)).toBeFalsy();
    await expect(page.isElementEnabled(DIVIDE_BUTTON_ID)).toBeFalsy();
  });

  it('expect buttons to be enabled when input is provided', async () => {
    await page.navigateTo();

    await page.sendKeysToElementById(LEFTHAND_INPUT_ID, '1');
    await page.sendKeysToElementById(RIGHTHAND_INPUT_ID, '2');

    await expect(page.isElementEnabled(ADD_BUTTON_ID)).toBeTruthy();
    await expect(page.isElementEnabled(SUBTRACT_BUTTON_ID)).toBeTruthy();
    await expect(page.isElementEnabled(MULTIPLY_BUTTON_ID)).toBeTruthy();
    await expect(page.isElementEnabled(DIVIDE_BUTTON_ID)).toBeTruthy();
  });

  it('expect buttons to be disabled when invalid input is provided', async () => {
    await page.navigateTo();

    await page.sendKeysToElementById(LEFTHAND_INPUT_ID, 'abc');
    await page.sendKeysToElementById(RIGHTHAND_INPUT_ID, '0123');

    await expect(page.isElementEnabled(ADD_BUTTON_ID)).toBeFalsy();
    await expect(page.isElementEnabled(SUBTRACT_BUTTON_ID)).toBeFalsy();
    await expect(page.isElementEnabled(MULTIPLY_BUTTON_ID)).toBeFalsy();
    await expect(page.isElementEnabled(DIVIDE_BUTTON_ID)).toBeFalsy();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
