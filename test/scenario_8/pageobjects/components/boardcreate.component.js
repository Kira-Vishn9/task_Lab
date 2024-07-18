class BoardCreateComponent {
     
    boardCreateWindow(param){
        const selectors = {
            inputBoardTitle: "[data-testid='create-board-title-input']",
            buttonCreateBoard: "button[data-testid='create-board-submit-button']",
        }
        return $(selectors[param]);
    }
}

module.exports = BoardCreateComponent;