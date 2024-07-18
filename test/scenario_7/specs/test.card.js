const LoginPage = require('../pageobjects/login.page')
const BoardsPage = require('../pageobjects/boards.page')
const {LIST_NAME,BOARD_NAME_CARD,CARD_NAME} = require('../pageobjects/config')


describe('Verify action on board: adding lists and cards', () => {
    
    beforeEach(async  function() {
        this.retries(1);
        await LoginPage.open();
        await LoginPage.login("krtstgml@gmail.com", "demotest69");
        await BoardsPage.open();
        await BoardsPage.mainMenu.menuItem('createButton').click();
        await BoardsPage.mainMenu.menuItem('createBoardButton').click();
        await BoardsPage.boardCreate.boardCreateWindow('inputBoardTitle').setValue(BOARD_NAME_CARD);
        await BoardsPage.boardCreate.boardCreateWindow('buttonCreateBoard').click();
        });


    it('Add card to existent list', async function() {
        this.retries(1);
        await BoardsPage.listParams('listTitle').setValue(LIST_NAME);
        await BoardsPage.listParams('addListButton').click(); 
        await browser.refresh();
        await BoardsPage.listParams('addCard').click(); 
        await BoardsPage.listParams('cardName').setValue(CARD_NAME); 
        await BoardsPage.listParams('cardCreate').click(); 
        await expect(BoardsPage.listParams('createdCardName')).toHaveText(CARD_NAME);
    })
})