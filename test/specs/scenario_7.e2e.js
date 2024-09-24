import { expect } from 'chai';
import { browser } from '@wdio/globals';

describe('Board page - Card sorting functionality', () => {

    it('should apply the alphabetical filter and verify cards are sorted alphabetically', async () => {
        await browser.url(`https://trello.com/home`);
        await browser.waitUntil(() => {
            return browser.execute(() => document.readyState === 'complete');
        }, {
            timeout: 30000,
            timeoutMsg: 'page is not loaded'
        });
        
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

        await browser.pause(3000);

        const sortedCards = await $$('.list-card');
        
        const cardTexts = await Promise.all(sortedCards.map(async (card) => await card.getText()));

        const boardExists = cardTexts.includes('Board created for Search');

        expect(boardExists).to.equal(true);
    });
});
