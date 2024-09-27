import { browser } from '@wdio/globals';

class BoardPage  {

    open(){
        browser.url('https://trello.com/u/krtstgml/boards');
    }

    async createBoard() {
        await $("[data-testid='header-create-menu-button']").waitForDisplayed();
        await $("[data-testid='header-create-menu-button']").click();

        await $("[data-testid='header-create-board-button']").waitForDisplayed();
        await $("[data-testid='header-create-board-button']").click();

        await $("[data-testid='create-board-title-input']").waitForDisplayed();
        await $("[data-testid='create-board-title-input']").setValue("Board for List");

        await $("button[data-testid='create-board-submit-button']").waitForDisplayed();
        await $("button[data-testid='create-board-submit-button']").click();
    }

    async createList () {
        await $("textarea[data-testid='list-name-textarea']").waitForDisplayed();
        await $("textarea[data-testid='list-name-textarea']").setValue("My list 100");

        await $("[data-testid='list-composer-add-list-button']").waitForDisplayed();
        await $("[data-testid='list-composer-add-list-button']").click();
    }

    async createCard () {
        await $("[data-testid='list-add-card-button']").waitForDisplayed();
        await $("[data-testid='list-add-card-button']").click(); 

        await $("[data-testid='list-card-composer-textarea']").waitForDisplayed();
        await $("[data-testid='list-card-composer-textarea']").setValue("My card"); 

        await $("[data-testid='list-card-composer-add-card-button']").waitForDisplayed();
        await $("[data-testid='list-card-composer-add-card-button']").click(); 
    }
    
}

export default new BoardPage();