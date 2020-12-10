import { When} from 'cucumber';
import OCregister from '../pageObjects/OC-register.page'
import opencartHomePage from '../pageObjects/opencartHomePage.page';

// CLICK EVENTS
When(/^I click the person icon$/, function () {
    opencartHomePage.clickOnAccountIcon()    
})
When(/^I click the Continue button$/, function () {
    OCregister.clickOnContinueButton()    
})

When(/^I click the Register option from the dropdown$/, function(){
    opencartHomePage.clickOnRegisterDropDownOption()
    browser.pause(2000)
})

When(/^I click the Privacy Policy checkbox$/, function(){
    OCregister.clickPrivacyCB()
})

// INPUT TEXT
When(/^I fill in the email field without an @ symbol$/, function(){
    OCregister.inputIncorrectEmail1()
})

When(/^I fill in the Email field without a proper suffix$/, function(){
    OCregister.inputIncorrectEmail2()
})

When(/^I fill in all fields with correct information$/, function(){
    OCregister.inputDetails()
})

When(/^I input mismatched password and confirmation data$/, function(){
    OCregister.inputPasswordConfirmMismatch()
})

When(/^I use an existing email in the email input$/, function(){
    OCregister.inputDuplicateEmail()
})

When(/^I input password and confirmation correctly$/, function(){
    OCregister.inputPasswordConfirm()
})

When(/^I input a unique email$/, function(){
    OCregister.inputUniqueEmail()
})