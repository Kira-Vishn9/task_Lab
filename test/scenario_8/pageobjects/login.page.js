const Page = require('./page');
const { browser } = require('@wdio/globals')


class LoginPage extends Page {

    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-submit');
    }

    get errorMessage(){
        return $("[data-testid='form-error']")
    }
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.btnSubmit.click();
        await this.inputPassword.waitForDisplayed();
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await browser.pause(5000)
    }

    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
