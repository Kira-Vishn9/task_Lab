const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const ProfilePage = require('../pageobjects/profile.page')
const {BIO_DESCRIPTION} = require('../pageobjects/config')


describe('Verify Profile changes', () => {
    beforeEach(async function() {
        this.retries(1);
        await LoginPage.open()
        await LoginPage.login('krtstgml@gmail.com', 'demotest69')
        await ProfilePage.open()
        });

        afterEach(async function() {
            // this.retries(1);
           
            await ProfilePage.item('bio').setValue(" ");
            await ProfilePage.item('saveButton').click();
            });
    
        it('Edit bio in profile name', async function() {
            this.retries(1);
            await ProfilePage.item('bio').setValue(BIO_DESCRIPTION);
            await ProfilePage.item('saveButton').click();
            await ProfilePage.open()
            expect(await ProfilePage.item('bio').getValue()).toHaveValue(BIO_DESCRIPTION);
    
        })
})