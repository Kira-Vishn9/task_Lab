import BasePage from '../base/BasePage.js';

class ProfilePage extends BasePage {

    open() {
        this.open('u/krtstgml');
    }

    async changeBio() {
        await this.inputText('#bio', 'Bio set by auto test');
        await this.click("[type='submit']");
    }
}

export default new ProfilePage();
