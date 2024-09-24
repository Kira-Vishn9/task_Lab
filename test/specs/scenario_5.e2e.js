import { expect } from 'chai';
import { browser } from '@wdio/globals';

describe('Create a new list on a board', () => {

    it('should log in, create a board, and add a new list to it', async () => {
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

        await browser.url('https://trello.com/u/krtstgml/boards');
        await $("[data-testid='header-create-menu-button']").waitForDisplayed();
        await $("[data-testid='header-create-menu-button']").click();

        await $("[data-testid='header-create-board-button']").waitForDisplayed();
        await $("[data-testid='header-create-board-button']").click();

        await $("[data-testid='create-board-title-input']").waitForDisplayed();
        await $("[data-testid='create-board-title-input']").setValue("Board for List");

        await $("button[data-testid='create-board-submit-button']").waitForDisplayed();
        await $("button[data-testid='create-board-submit-button']").click();

        await $("textarea[data-testid='list-name-textarea']").waitForDisplayed();
        await $("textarea[data-testid='list-name-textarea']").setValue("My list 100");

        await $("[data-testid='list-composer-add-list-button']").waitForDisplayed();
        await $("[data-testid='list-composer-add-list-button']").click(); 
        
        const result = await $("[data-testid='list-name']");
        const listName = await result.getText();
        expect(listName).to.equal("My list 100");
    });
});
