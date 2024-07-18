const LoginPage = require('../pageobjects/login.page')
const WorkspacePage = require('../pageobjects/workspace.page')
const {SORT_BY_AL} = require('../pageobjects/config')


describe('Verify action on board: adding lists and cards', () => {
    
    beforeEach(async  function() {
        // this.retries(1);
        await LoginPage.open();
        await LoginPage.login("krtstgml@gmail.com", "demotest69");
        });


    it('Add card to existent list', async function() {
        // this.retries(1);
        await WorkspacePage.open();
        await WorkspacePage.item('sortBy').click()
        
        await browser.keys(['ArrowDown'])
        await browser.keys(['ArrowDown'])
        await browser.keys(['Enter'])
        const sortedBoard = await $$('.boards-page-board-section-list a')
        // Проверьте текст всех дочерних элементов <div> внутри <a>
        let found = false;
            const divs = await sortedBoard[0].$$('div');
            for (let div of divs) {
                const text = await div.getText();
                if (text.includes('Board created for Search')) {
                    found = true;
                    break;
                }
            }

        // Убедитесь, что текст был найден
        expect(found).toBe(true);
    })
})