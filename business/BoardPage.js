import { browser } from '@wdio/globals';
import BasePage from '../base/BasePage.js';

class BoardPage extends BasePage {
    open() {
        return super.open('u/krtstgml/boards');
    }

    async createBoard() {
        await this.click("[data-testid='header-create-menu-button']");
        await this.click("[data-testid='header-create-board-button']");
        await this.inputText("[data-testid='create-board-title-input']", "Board for List");
        await this.click("button[data-testid='create-board-submit-button']");
    }

    async createList() {
        await this.inputText("textarea[data-testid='list-name-textarea']", "My list 100");
        await this.click("[data-testid='list-composer-add-list-button']");
    }

    async createCard() {
        await this.click("[data-testid='list-add-card-button']");
        await this.inputText("[data-testid='list-card-composer-textarea']", "My card");
        await this.click("[data-testid='list-card-composer-add-card-button']");
    }
}

export default new BoardPage();
