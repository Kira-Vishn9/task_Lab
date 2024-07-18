const LoginPage = require('../pageobjects/login.page')
const SearchPage = require('../pageobjects/search.page')
const {BOARD_SEARCH} = require('../pageobjects/config')
const fs = require('fs');

describe('Verify Search from main menu', () => {

    beforeEach(async function() {
        this.retries(1);
        await LoginPage.open();
        await LoginPage.login('krtstgml@gmail.com', 'demotest69')
    });

    it('Search for existent board at my boards page', async function() {
        this.retries(1);

        await SearchPage.open()
        await SearchPage.item("inputSearch").setValue(BOARD_SEARCH)
        const result = await SearchPage.item('resultSearch')

        expect(result).toBeDisabled(true)
    })
})