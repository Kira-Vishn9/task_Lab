const { expect } = require('@wdio/globals');
const { browser } = require('@wdio/globals');

describe('Verify Profile changes', () => {
    afterEach(async function() {
        this.retries(1);
        await $('#bio').setValue(" ");
        await $("[type='submit']").click();
    });

    it('Edit bio in profile name', async () => {
        await browser.url('https://trello.com/home');
        await $("//a[contains(text(), 'Log in')]").waitForDisplayed();
        await $("//a[contains(text(), 'Log in')]").click();

        await $('#username').waitForDisplayed();
        await $('#username').setValue('krtstgml@gmail.com');
        await $('#login-submit').click();

        await $('#password').waitForDisplayed();
        await $('#password').setValue('demotest69');
        await $('#login-submit').click();
        await browser.pause(5000)

        await browser.url('https://trello.com/u/krtstgml');
        await $('#bio').waitForDisplayed();
        await $('#bio').setValue("Bio set by auto test");
        await $("[type='submit']").waitForClickable();
        await $("[type='submit']").click();

        await browser.refresh();
        await $('#bio').waitForDisplayed();
        await expect($('#bio')).toHaveValue("Bio set by auto test");
    });
});
