const Page = require("./page");


class SearchPage extends Page{

    item(param){
        const selectors = {
            inputSearch : 'input[data-testid="advanced-search-input"]',
            resultSearch: 'a[title="Board created for Search"]',
        };
        return $(selectors[param]);
    }

    open () {
        return super.open('search');
    }
   
}
module.exports = new SearchPage();