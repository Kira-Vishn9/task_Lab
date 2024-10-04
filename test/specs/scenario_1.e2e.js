import { assert } from 'chai';
import { browser } from '@wdio/globals';
import LoginPage from '../../business/LoginPage.js';

describe('My Login application - Assert', () => {
    before(async () => {
        await LoginPage.open();
    });

    it('should login with valid credentials', async () => {
        await LoginPage.login();
    
        const title = await browser.getTitle();
        await assert.equal(title, 'Boards | Trello', 'Title should match');
    });
});
