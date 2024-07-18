const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-submit');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.btnSubmit.click();
        await browser.pause(5000)
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await browser.pause(5000)
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
    openProfile () {
        return super.openProfile()
    }
}

module.exports = new LoginPage();
