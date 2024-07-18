const LoginPage = require('../pageobjects/login.page')
const WorkspacePage = require('../pageobjects/workspace.page')
const {WORK_SPACE_NAME} = require('../pageobjects/config')


describe('Verify action on board: adding lists and cards', () => {
    
    beforeEach(async  function() {
        this.retries(1);
        // await browser.reloadSession();
        await LoginPage.open();
        await LoginPage.login("krtstgml@gmail.com", "demotest69");

        await WorkspacePage.open();
        await WorkspacePage.item('buttonChange').click()
        await browser.pause(5000)
        await WorkspacePage.item('inputDisplayName').setValue(' ')
        });


    it('Add card to existent list', async function() {
        this.retries(1);
        await WorkspacePage.item('inputDisplayName').setValue(WORK_SPACE_NAME)
        await WorkspacePage.item('btnSave').click()
        const result = await WorkspacePage.item("inputDisplayName").getValue()
        await console.log('result', result)
        expect(result).toBe(WORK_SPACE_NAME);
    })
})