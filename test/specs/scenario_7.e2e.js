import { expect } from 'chai';
import { browser } from '@wdio/globals';
import LoginPage from '../../business/LoginPage.js'
import WorkSpace from '../../business/WorkSpace.js'

describe('Board page - Card sorting functionality', () => {

    it('should apply the alphabetical filter and verify cards are sorted alphabetically', async () => {
        await LoginPage.login()
        await WorkSpace.open()
        await WorkSpace.sort()

        const cardText = await $$('.board-tile-details-name')[0].getText();

        expect(cardText).to.deep.equal("Board created for Search"); 
    });
});
