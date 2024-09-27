import { browser } from '@wdio/globals';

class WorkSpace {
  
    async open() {
        await browser.url('https://trello.com/w/user38376778');
    }

    async sort() {
        await $("#sort-by").waitForDisplayed();
        await $("#sort-by").click();

        await browser.keys(['ArrowDown']);
        await browser.keys(['ArrowDown']);
        await browser.keys(['Enter']);

        await browser.pause(3000);
    }

    async createBoard () {
        await $(".mod-add").waitForDisplayed();
        await $(".mod-add").click();
        await $("[data-testid='create-board-title-input']").waitForDisplayed();
        await $("[data-testid='create-board-title-input']").setValue("Board created from Workspace");
        await $("button[data-testid='create-board-submit-button']").waitForDisplayed();
        await $("button[data-testid='create-board-submit-button']").click();
    }

    async editWorkspaceName () {
        await $('span[data-testid="EditIcon"]').waitForDisplayed();
        await $('span[data-testid="EditIcon"]').click();

        await browser.pause(5000);

        await $('#displayName').waitForDisplayed();
        await $('#displayName').setValue('Рабочее пространство Trello Automate');

        await $('._wJD3QSFJjW4Pb.bxgKMAm3lq5BpA.SdamsUKjxSBwGb.SEj5vUdI3VvxDc').waitForDisplayed();
        await $('._wJD3QSFJjW4Pb.bxgKMAm3lq5BpA.SdamsUKjxSBwGb.SEj5vUdI3VvxDc').click();
    }
}

export default new WorkSpace();
