import  { expect } from 'chai'
import { browser } from '@wdio/globals';

describe('Workspace settings - Editing workspace name', () => {

    it('should allow the user to edit the workspace name and save the changes', async () => {
        await browser.url(`https://trello.com/home`)

        await browser.waitUntil(() => {
            return browser.execute(() => document.readyState === 'complete');
        }, {
            timeout: 30000,
            timeoutMsg: 'page is not loaded'
        });
        await $("//a[@data-uuid='MJFtCCgVhXrVl7v9HA7EH_login']").waitForDisplayed();
        await $("//a[@data-uuid='MJFtCCgVhXrVl7v9HA7EH_login']").click();

        await $('#username').waitForDisplayed();
        await $('#username').setValue('krtstgml@gmail.com');
        await $('#login-submit').click();

        await $('#password').waitForDisplayed();
        await $('#password').setValue('demotest69');
        await $('#login-submit').click();
        await browser.pause(5000);

        await browser.url('https://trello.com/w/user38376778');

        await $('span[data-testid="EditIcon"]').waitForDisplayed();
        await $('span[data-testid="EditIcon"]').click();

        await browser.pause(5000);

        await $('#displayName').waitForDisplayed();
        await $('#displayName').setValue('Рабочее пространство Trello Automate');

        await $('._wJD3QSFJjW4Pb.bxgKMAm3lq5BpA.SdamsUKjxSBwGb.SEj5vUdI3VvxDc').waitForDisplayed();
        await $('._wJD3QSFJjW4Pb.bxgKMAm3lq5BpA.SdamsUKjxSBwGb.SEj5vUdI3VvxDc').click();

        const result = await $('#displayName').getValue();
        expect(result).to.equal('Рабочее пространство Trello Automate');
    });
});
