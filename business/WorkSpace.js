import { browser } from '@wdio/globals';
import BasePage from '../Main/BasePage.js';

class WorkSpace extends BasePage {
  constructor() {
    super();
  }
  open() {
    return super.open('w/user38376778');
  }

  async sort() {
    await this.click('#sort-by');
    await browser.keys(['ArrowDown', 'ArrowDown', 'Enter']);
    await this.BP(3000);
  }

  async createBoard() {
    await this.click('.mod-add');
    await this.inputText(
      "[data-testid='create-board-title-input']",
      'Board created from Workspace'
    );
    await this.click("button[data-testid='create-board-submit-button']");
  }

  async editWorkspaceName() {
    await this.click('span[data-testid="EditIcon"]');
    await this.BP(5000);
    await this.inputText(
      '#displayName',
      'Рабочее пространство Trello Automate'
    );
    await this.click(
      '._wJD3QSFJjW4Pb.bxgKMAm3lq5BpA.SdamsUKjxSBwGb.SEj5vUdI3VvxDc'
    );
  }
}

export default new WorkSpace();
