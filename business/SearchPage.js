import { browser } from '@wdio/globals';
import BasePage from '../Main/BasePage.js.js'

class SearchPage extends BasePage {
    async open() {
        return super.open('search');
    }

    async search() {
        await this.inputText('input[data-testid="advanced-search-input"]', 'Board created for Search');
    }
}

export default new SearchPage();
