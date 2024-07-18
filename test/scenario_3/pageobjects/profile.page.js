
const Page = require("./page");

class ProfilePage extends Page{
 
   item(param){
      const selectors = {
         userName: "#username",
         bio: "#bio",
         saveButton: "[type='submit']",
         memberAvatar: "[data-testid='header-member-menu-avatar']",
      };
      return $(selectors[param]);
    }

    open () {
        return super.ProfilePage();
        }
    
}

module.exports = new ProfilePage();