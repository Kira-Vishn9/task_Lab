import { expect } from 'chai';
import LoginPage from '../../business/LoginPage.js';
import WorkSpace from '../../business/WorkSpace.js';

describe('Board page - Card sorting functionality', () => {
  before(async () => {
    await LoginPage.open();
  });
  it('should apply the alphabetical filter and verify cards are sorted alphabetically', async () => {
    await LoginPage.login();
    await WorkSpace.open();
    await WorkSpace.sort();

    const cardText = await $$('.board-tile-details-name')[0].getText();

    expect(cardText).to.deep.equal('Board created for Search');
  });
});
