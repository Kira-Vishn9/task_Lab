import { expect } from 'chai';
import LoginPage from '../../business/LoginPage.js'
import WorkSpace from '../../business/WorkSpace.js'

describe('Create a new board on Trello', () => {
    before(async () => {
        await LoginPage.open();
    });

    it('should log in, create a new board, and verify its creation and redirection', async () => {
    
        await LoginPage.login()
        await WorkSpace.open()
        await WorkSpace.createBoard()

        const boardTitleElement = await $("[data-testid='board-name-display']").getText();

        expect(boardTitleElement).to.equal("Board created from Workspace");
    });
});
