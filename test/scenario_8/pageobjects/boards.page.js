const Page = require("./page");


class BoardsPage extends Page{

    item(param){
        const selectors = {
            boardName : "[data-testid='board-name-display']",
            memberAvatar : "[data-testid='header-member-menu-avatar']",
        };
        return $(selectors[param]);
    }

    listParams(param){
        const selectors = {
            listTitle : "textarea[data-testid='list-name-textarea']",
            addListButton : "[data-testid='list-composer-add-list-button']",
            listName : "[data-testid='list-name']",
            addCard : "[data-testid='list-add-card-button']",
            cardName : "[data-testid='list-card-composer-textarea']",
            cardCreate : "[data-testid='list-card-composer-add-card-button']",
            createdCardName:"[data-testid='card-name']",
        };
        return $(selectors[param]);
    }
    open () {
        return super.open('u/krtstgml/boards');
    }
   
}
module.exports = new BoardsPage();