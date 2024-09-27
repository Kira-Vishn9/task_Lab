import { browser } from '@wdio/globals';
import BasePage from '../Main/BasePage.js.js'

class ProfilePage extends BasePage {
    open() {
        return super.open('u/krtstgml');
    }

    async changeBio() {
        await this.inputText('#bio', 'Bio set by auto test');
        await this.click("[type='submit']");
    }
}

export default new ProfilePage();
