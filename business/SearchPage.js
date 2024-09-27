import { browser } from '@wdio/globals';

class SearchPage  {

    open(){
        browser.url('https://trello.com/search');
    }

    async search() {
        await $('input[data-testid="advanced-search-input"]').waitForDisplayed();
        await $('input[data-testid="advanced-search-input"]').setValue("Board created for Search");
    }
    
}

export default new SearchPage();