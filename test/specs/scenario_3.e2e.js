const { expect } = require('@wdio/globals');
const { browser } = require('@wdio/globals');

describe('Create a new board on Trello', () => {

    it('should log in, create a new board, and verify its creation and redirection', async () => {
        browser.url(`https://trello.com/home`)
        await $("//a[contains(text(), 'Log in')]").waitForDisplayed();
        await $("//a[contains(text(), 'Log in')]").click();

        await $('#username').waitForDisplayed();
        await $('#username').setValue('krtstgml@gmail.com');
        await $('#login-submit').click();

        await $('#password').waitForDisplayed();
        await $('#password').setValue('demotest69');
        await $('#login-submit').click();
        await browser.pause(5000)

        await browser.url('https://trello.com/w/user38376778');
        await $(".mod-add").waitForDisplayed();
        await $(".mod-add").click();
        await $("[data-testid='create-board-title-input']").waitForDisplayed();
        await $("[data-testid='create-board-title-input']").setValue("Board created from Workspace");
        await $("button[data-testid='create-board-submit-button']").waitForDisplayed();
        await $("button[data-testid='create-board-submit-button']").click();

        const boardTitleElement = await $("[data-testid='board-name-display']");
        await boardTitleElement.waitForDisplayed();
        await expect(boardTitleElement).toHaveText("Board created from Workspace");
    });
});
