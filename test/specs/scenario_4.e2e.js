const { expect } = require('@wdio/globals');
const { browser } = require('@wdio/globals');

describe('Search for an existing board on Trello', () => {

    it('should log in, search for a board, and verify it appears in the search results', async () => {
        browser.url(`https://trello.com/home`)
        await $("//a[contains(text(), 'Log in')]").waitForDisplayed();
        await $("//a[contains(text(), 'Log in')]").click();

        await $('#username').waitForDisplayed();
        await $('#username').setValue('krtstgml@gmail.com');
        await $('#login-submit').click();

        await $('#password').waitForDisplayed();
        await $('#password').setValue('demotest69');
        await $('#login-submit').click();
        await browser.pause(5000);

        await browser.url('https://trello.com/search');
        await $('input[data-testid="advanced-search-input"]').setValue("Board created for Search");

        const result = await $('a[title="Board created for Search"]');
        expect(result).toBeDisabled(true);
    });
});
