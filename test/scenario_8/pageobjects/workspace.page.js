const Page = require("./page");

class WorkspacePage extends Page{
 
   item(param){
      const selectors = {
          addBoard: ".mod-add",
          sortBy: "#sort-by",
          childBoard: '.boards-page-board-section-list a',
      };
      return $(selectors[param]);
    }


    open () {
        return super.open('w/user38376778');
        }
}

module.exports = new WorkspacePage();