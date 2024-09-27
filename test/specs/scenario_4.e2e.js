import { expect } from 'chai';
import { browser } from '@wdio/globals';
import LoginPage from '../../business/LoginPage.js'
import SearchPage from '../../business/SearchPage.js'

describe('Search for an existing board on Trello', () => {

    it('should log in, search for a board, and verify it appears in the search results', async () => {
        await LoginPage.login()

        await SearchPage.open()
        await SearchPage.search()
        
        const searchBoard = await $('//a[.//span[text()="Board created for Search"]]');
        await searchBoard.waitForDisplayed();
        const isDisplayed = await searchBoard.isDisplayed();
        expect(isDisplayed).to.be.true;
    });
});
