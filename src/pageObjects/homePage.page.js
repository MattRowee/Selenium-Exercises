class HomePage {

    get homePageContainer ()    { return $('.index-page') }
    // -- SEARCH FIELD --
    get searchField ()          { return $('.search-key-box') }
    get searchInputField ()     { return $('#search-key') }
    get searchButton ()         { return $('.search-button') }


    // -- GETTERS --

    // -- SETTERS --

    setSearchField (value) {
      // browser.pause(5000)
      this.searchField.waitForDisplayed()
      this.searchInputField.setValue(value)
    }

    // -- METHODS --

    waitUntilHomePageIsVisible () {
      this.homePageContainer.waitForDisplayed()
    }

    clickOnSearchButton () {
      this.searchButton.waitForDisplayed()
      this.searchButton.click()
    }

    searchItem (item) {
      this.waitUntilHomePageIsVisible()
      this.setSearchField(item)
      this.clickOnSearchButton()
    } 
}

export default new HomePage()
