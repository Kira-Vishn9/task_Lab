const { expect } = require('@wdio/globals')
const { browser } = require('@wdio/globals')


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        browser.url(`https://trello.com/home`)
        await browser.refresh()
        browser.pause(15000)
        await $("//a[contains(text(), 'Log in')]").waitForDisplayed({ timeout: 20000 });
        await $("//a[contains(text(), 'Log in')]").click();
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

