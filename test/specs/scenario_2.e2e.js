import { should } from 'chai';
import { browser } from '@wdio/globals';

should();

describe('Verify Profile changes', () => {
    afterEach(async function() {
        await $('#bio').setValue(" ");
        await $("[type='submit']").click();
    });

    it('Edit bio in profile name', async () => {
        browser.url(`https://trello.com/home`);
        await $('//div[contains(@class, "jnMZCI")]/a[text()="Log in"]').waitForDisplayed();
        await $('//div[contains(@class, "jnMZCI")]/a[text()="Log in"]').click();

        await $('#username').waitForDisplayed();
        await $('#username').setValue('krtstgml@gmail.com');
        await $('#login-submit').click();

        await $('#password').waitForDisplayed();
        await $('#password').setValue('demotest69');
        await $('#login-submit').click();
        await browser.pause(5000);

        await browser.url('https://trello.com/u/krtstgml');
        await $('#bio').waitForDisplayed();
        await $('#bio').setValue("Bio set by auto test");
        await $("[type='submit']").waitForClickable();
        await $("[type='submit']").click();

        await browser.refresh();
        await $('#bio').waitForDisplayed();

        const bioValue = await $('#bio').getValue();
        bioValue.should.equal("Bio set by auto test");
    });
});
