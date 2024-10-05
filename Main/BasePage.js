import { browser, $ } from '@wdio/globals';

class BasePage {
  async click(selector) {
    const element = await $(selector);
    await element.waitForDisplayed({ timeout: 20000 });
    await element.click();
  }

  async inputText(selector, text) {
    const element = await $(selector);
    await element.waitForDisplayed({ timeout: 20000 });
    await element.setValue(text);
  }

  async BP(time) {
    await browser.pause(time);
  }

  open(path) {
    return browser.url(`https://trello.com/${path}`);
  }
}

export default BasePage;
