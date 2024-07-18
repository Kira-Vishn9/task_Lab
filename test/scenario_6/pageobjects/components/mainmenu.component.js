class MainMenuComponent {
  
    menuItem(param){
        const selectors = {
            searchInput : "[data-testid='cross-product-search-input-skeleton']",
            searchResult: "[data-testid='trello-hover-preview-popper-container'] span",
            createButton: "[data-testid='header-create-menu-button']",
            createBoardButton: "[data-testid='header-create-board-button']",

        };
        return $(selectors[param]);
    }
}

module.exports = MainMenuComponent;