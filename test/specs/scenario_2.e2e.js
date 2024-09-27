import { should } from 'chai';
import { browser } from '@wdio/globals';
import LoginPage from '../../business/LoginPage.js'
import ProfilePage from '../../business/ProfilePage.js'

should();

describe('Verify Profile changes', () => {
    afterEach(async function() {
        await $('#bio').setValue(" ");
        await $("[type='submit']").click();
    });

    it('Edit bio in profile name', async () => {
        await LoginPage.login()
        await ProfilePage.open()
        await ProfilePage.changeBio()

        await browser.refresh();
        await $('#bio').waitForDisplayed();

        const bioValue = await $('#bio').getValue();
        bioValue.should.equal("Bio set by auto test");
    });
});
