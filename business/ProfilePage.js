import { browser } from '@wdio/globals';

class ProfilePage  {

    open(){
        browser.url('https://trello.com/u/krtstgml');
    }

    async changeBio () {
        await $('#bio').waitForDisplayed();
        await $('#bio').setValue("Bio set by auto test");
        await $("[type='submit']").waitForClickable();
        await $("[type='submit']").click();
    }
}

export default new ProfilePage();