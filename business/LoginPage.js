import { browser } from '@wdio/globals';
import BasePage from '../Main/BasePage.js.js'

class LoginPage extends BasePage {
    async login() {
        this.open('home');

        await this.click("//a[@data-uuid='MJFtCCgVhXrVl7v9HA7EH_login']");

        await this.inputText('#username', 'krtstgml@gmail.com');
        await this.click('#login-submit');

        await this.BP(5000);

        await this.inputText('#password', 'demotest69');
        await this.click('#login-submit');

        await this.BP(10000);
    }
}  

export default new LoginPage();

