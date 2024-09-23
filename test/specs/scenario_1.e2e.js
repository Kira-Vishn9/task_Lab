const { expect } = require('@wdio/globals')
const { browser } = require('@wdio/globals')


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        browser.url(`https://trello.com/home`)
        await $("//a[@data-uuid='MJFtCCgVhXrVl7v9HA7EH_login']").waitForDisplayed();
        await $("//a[@data-uuid='MJFtCCgVhXrVl7v9HA7EH_login']").click();
        await $('#username').setValue('krtstgml@gmail.com');
        await $('#login-submit').click();
        await browser.pause(5000)
        await $('#password').setValue('demotest69');
        await $('#login-submit').click();
        await browser.pause(10000)
    
        const title = await browser.getTitle()
        expect('Boards | Trello').toBe(title)
    })
})

