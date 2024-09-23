const { expect } = require('@wdio/globals');
const { browser } = require('@wdio/globals');

describe('Board page - Card sorting functionality', () => {

    it('should apply the alphabetical filter and verify cards are sorted alphabetically', async () => {
        browser.url(`https://trello.com/home`)
        await $("//a[@data-uuid='MJFtCCgVhXrVl7v9HA7EH_login']").waitForDisplayed();
        await $("//a[@data-uuid='MJFtCCgVhXrVl7v9HA7EH_login']").click();

        await $('#username').waitForDisplayed();
        await $('#username').setValue('krtstgml@gmail.com');
        await $('#login-submit').click();

        await $('#password').waitForDisplayed();
        await $('#password').setValue('demotest69');
        await $('#login-submit').click();
        await browser.pause(5000);

        await browser.url('https://trello.com/w/user38376778');
        await $("#sort-by").waitForDisplayed();
        await $("#sort-by").click();

        await browser.keys(['ArrowDown']);
        await browser.keys(['ArrowDown']);
        await browser.keys(['Enter']);

        const sortedBoard = await $$('.boards-page-board-section-list a');

        let found = false;
        const divs = await sortedBoard[0].$$('div');
        for (let div of divs) {
            const text = await div.getText();
            if (text.includes('Board created for Search')) {
                found = true;
                break;
            }
        }

        expect(found).toBe(true);
    });
});
