const { expect } = require('@wdio/globals');
const { browser } = require('@wdio/globals');

describe('Workspace settings - Editing workspace name', () => {


    it('should allow the user to edit the workspace name and save the changes', async () => {
        browser.url(`https://trello.com/home`)
        await $("//a[@data-uuid='MJFtCCgVhXrVl7v9HA7EH_login']").waitForDisplayed();
        
        await $("//a[@data-uuid='MJFtCCgVhXrVl7v9HA7EH_login']").click();

        await $('#username').waitForDisplayed();
        await $('#username').setValue('krtstgml@gmail.com');
        await $('#login-submit').click();

        await $('#password').waitForDisplayed();
        await $('#password').setValue('demotest69');
        await $('#login-submit').click();
        await browser.pause(5000)

        await browser.url('https://trello.com/w/user38376778');

        await $('span[data-testid="EditIcon"]').waitForDisplayed()
        await $('span[data-testid="EditIcon"]').click()

        await browser.pause(5000)

        await $('#displayName').waitForDisplayed()
        await $('#displayName').setValue('Рабочее пространство Trello Automate')

        await $('._wJD3QSFJjW4Pb.bxgKMAm3lq5BpA.SdamsUKjxSBwGb.SEj5vUdI3VvxDc').waitForDisplayed()
        await $('._wJD3QSFJjW4Pb.bxgKMAm3lq5BpA.SdamsUKjxSBwGb.SEj5vUdI3VvxDc').click()

        const result = await $("#displayName").getValue()
        expect(result).toBe('Рабочее пространство Trello Automate');
    });
});
