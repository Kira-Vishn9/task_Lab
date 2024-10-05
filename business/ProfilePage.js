import BasePage from '../Main/BasePage.js';

class ProfilePage extends BasePage {
  constructor() {
    super();
  }
  open() {
    return super.open('u/krtstgml');
  }

  async changeBio() {
    await this.inputText('#bio', 'Bio set by auto test');
    await this.click("[type='submit']");
  }
}

export default new ProfilePage();
