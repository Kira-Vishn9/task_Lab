const {MainMenu} = require('./components');
const {BoardCreateWindow} = require('./components');
const { browser } = require('@wdio/globals')

module.exports = class Page {
    constructor(){
        this.mainMenu = new MainMenu();
        this.boardCreate = new BoardCreateWindow();
        
     }

    open (path) {
        return browser.url(`https://trello.com/${path}`)
    }
}
