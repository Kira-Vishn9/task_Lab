import { browser } from '@wdio/globals';
class LoginPage  {

    async login() {
        await browser.url(`https://trello.com/home`)
        await $("//a[@data-uuid='MJFtCCgVhXrVl7v9HA7EH_login']").waitForDisplayed();
        await $("//a[@data-uuid='MJFtCCgVhXrVl7v9HA7EH_login']").click();
        await $('#username').setValue('krtstgml@gmail.com');
        await $('#login-submit').click();
        await browser.pause(5000);
        await $('#password').setValue('demotest69');
        await $('#login-submit').click();
        await browser.pause(10000);
    }

}

export default new LoginPage();
