import { expect } from 'chai';
import { browser } from '@wdio/globals';
import LoginPage from '../../business/LoginPage.js'
import BoardPage from '../../business/BoardPage.js'

describe('Create a new card in a list', () => {
    before(async () => {
        await LoginPage.open();
    });

    it('should log in, create a board and list, then add a new card to the list', async () => {
        await LoginPage.login()
        await BoardPage.open()
        await BoardPage.createBoard()
        await BoardPage.createList()
        
        await browser.refresh()

        await BoardPage.createCard()

        const card = await $("[data-testid='card-name']");
        const cardName = await card.getText();
        expect(cardName).to.equal("My card");
    });
});
