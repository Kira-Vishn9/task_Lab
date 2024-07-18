const Page = require("./page");

class WorkspacePage extends Page{
 
   item(param){
      const selectors = {
          addBoard: ".mod-add",
          sortBy: "#sort-by",
          buttonChange: '.Ch1Opdvr77xkJp.bxgKMAm3lq5BpA.iUcMblFAuq9LKn.SEj5vUdI3VvxDc',
          inputDisplayName: '#displayName',
          btnSave: '._wJD3QSFJjW4Pb.bxgKMAm3lq5BpA.SdamsUKjxSBwGb.SEj5vUdI3VvxDc'
      };
      return $(selectors[param]);
    }


    open () {
        return super.open('w/user38376778');
        }
}

module.exports = new WorkspacePage();