import Page from './page';

class OpenCartHomePage extends Page{
    
    get homePageContent ()    { return $('#common-home') }
    get accountIcon () { return $('.fa-user')}
    get registerDropDownOption () { return $('=Register')}
    // -- GETTERS --

    // -- SETTERS --

    // setSearchField (value) {
      // browser.pause(5000)
    //   this.searchField.waitForDisplayed()
    //   this.searchInputField.setValue(value)
    // }

    // -- METHODS --

    waitUntilContentIsVisible () {
      this.homePageContent.waitForDisplayed()
    }

     clickOnAccountIcon () {
          this.accountIcon.waitForDisplayed()
          this.accountIcon.click()
        }
     clickOnRegisterDropDownOption () {
              this.registerDropDownOption.waitForDisplayed()
              this.registerDropDownOption.click()
            }

}
export default new OpenCartHomePage()

