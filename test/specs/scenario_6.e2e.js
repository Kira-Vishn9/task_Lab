const { expect } = require('@wdio/globals');
const { browser } = require('@wdio/globals');

describe('Create a new card in a list', () => {

    it('should log in, create a board and list, then add a new card to the list', async () => {
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

        await browser.refresh();

        await $("[data-testid='list-add-card-button']").waitForDisplayed();
        await $("[data-testid='list-add-card-button']").click(); 

        await $("[data-testid='list-card-composer-textarea']").waitForDisplayed();
        await $("[data-testid='list-card-composer-textarea']").setValue("My card"); 

        await $("[data-testid='list-card-composer-add-card-button']").waitForDisplayed();
        await $("[data-testid='list-card-composer-add-card-button']").click(); 

        const result = $("[data-testid='card-name']")
        await expect(result).toHaveText("My card");
    });
});
