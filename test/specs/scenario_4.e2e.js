import { expect } from 'chai';
import { browser } from '@wdio/globals';

describe('Search for an existing board on Trello', () => {

    it('should log in, search for a board, and verify it appears in the search results', async () => {
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

        await browser.url('https://trello.com/search');
        await $('input[data-testid="advanced-search-input"]').waitForDisplayed();
        await $('input[data-testid="advanced-search-input"]').setValue("Board created for Search");

        await browser.pause(10000);

        const searchBoard = await $('//a[.//span[text()="Board created for Search"]]');
        await searchBoard.waitForDisplayed();
        const isDisplayed = await searchBoard.isDisplayed();
        expect(isDisplayed).to.be.true;
    });
});
