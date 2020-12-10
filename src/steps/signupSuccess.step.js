// import OCregister from '../pageObjects/OC-register.page'


// // const { Given, When, And, Then } = require('cucumber');
// const { Given, When, Then } = require('cucumber');


// // the step commands can be used on the same steps page. also, 
// // a steps page can call methods from several page object pages


// Given(/^I go to '([^"]*)?'$/, function (url) {
//     browser.url(`https://${url}`)
//     browser.pause(5000)
// })
// // [^"] is a regular expression, means a character that is NOT a "
// // REGULAR EXPRESSIONS - a sequence of characters that forms a search pattern. When you search for data in a text,
// // you use this pattern to describe what you are looking for. text search / text replace operations. This was used
// // in the example i ripped from testing a search function, not sure how to make it work for this: need to read
// // more cucumber documentation.

// When(/^I click the person icon$/, function () {
//     // browser.pause(4000)
//     // opencartHomePage.waitUntilHomePageIsVisible()
//     opencartHomePage.clickOnAccountIcon()    
// })

// Then(/^I click the Register option from the dropdown$/, function(){
//     // opencartHomePage.waitUntilHomePageIsVisible()
//     opencartHomePage.clickOnRegisterDropDownOption()
//     browser.pause(5000)
// }
// )

// Then(/^I navigate to the Register page$/, function () {
//     OCregister.waitUntilAccountRegister()
// })