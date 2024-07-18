const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('krtstgml@gmail.com', 'demotest69')
        await browser.pause(10000)

        const title = await browser.getTitle()
        expect('Главная — Atlassian Home').toBe(title)
    })
})

