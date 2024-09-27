import BasePage from '../base/BasePage.js';

class SearchPage extends BasePage {

    open() {
        this.open('search');
    }

    async search() {
        await this.inputText('input[data-testid="advanced-search-input"]', 'Board created for Search');
    }
}

export default new SearchPage();
