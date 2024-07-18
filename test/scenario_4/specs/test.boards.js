const LoginPage = require('../pageobjects/login.page')
const BoardsPage = require('../pageobjects/boards.page')
const WorkspacePage = require('../pageobjects/workspace.page')
const {BOARD_NAME_WORKSPACE,BOARD_NAME_MENU} = require('../pageobjects/config')
const { browser } = require('@wdio/globals')


describe('Verify adding new boards', () => {
    
    beforeEach(async function() {
        this.retries(1);
        await browser.reloadSession();
        await LoginPage.open();
        await LoginPage.login('krtstgml@gmail.com', 'demotest69')
        });

    it('Add new board from Workspace page', async function() {
        this.retries(1);
        await WorkspacePage.open();
        await WorkspacePage.item('addBoard').click();
        await WorkspacePage.boardCreate.boardCreateWindow('inputBoardTitle').setValue(BOARD_NAME_WORKSPACE);
        await WorkspacePage.boardCreate.boardCreateWindow('buttonCreateBoard').click();
        await expect(BoardsPage.item('boardName')).toHaveText(BOARD_NAME_WORKSPACE);
    })

    it(' Add new board from my main menu when you are at boards page', async function (){
        this.retries(1);
        await BoardsPage.open();
        await BoardsPage.mainMenu.menuItem('createButton').click();
        await BoardsPage.mainMenu.menuItem('createBoardButton').click();
        await BoardsPage.boardCreate.boardCreateWindow('inputBoardTitle').setValue(BOARD_NAME_MENU);
        await BoardsPage.boardCreate.boardCreateWindow('buttonCreateBoard').click();
        await expect(BoardsPage.item('boardName')).toHaveText(BOARD_NAME_MENU);
    })
})

