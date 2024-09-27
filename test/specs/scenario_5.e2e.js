import { expect } from 'chai';
import { browser } from '@wdio/globals';
import LoginPage from '../../business/LoginPage.js'
import BoardPage from '../../business/BoardPage.js'

describe('Create a new list on a board', () => {

    it('should log in, create a board, and add a new list to it', async () => {
        await LoginPage.login()
        await BoardPage.open()
        await BoardPage.createBoard()
        await BoardPage.createList()
        
        const listName = await $("[data-testid='list-name']");
        const listNameText = await listName.getText();
        expect(listNameText).to.equal("My list 100");
    });
});
