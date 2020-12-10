import { Then} from 'cucumber';
import OCregister from '../pageObjects/OC-register.page'
import opencartHomePage from '../pageObjects/opencartHomePage.page';




Then(/^I navigate to the Register page$/, function () {
    OCregister.waitUntilAccountRegisterIsVisible()
})

Then(/^I see error messages next to missing mandatory fields$/, function (){
    browser.pause(3000)
    OCregister.errorMessagesAreVisible();
})

Then(/^I see a mismatched password alert message$/, function (){
    browser.pause(3000)
    OCregister.passwordMismatchErrorMessageVisible();
})

Then(/^I see a duplicate email error message$/, function (){
    browser.pause(3000)
    OCregister.passwordMismatchErrorMessageVisible();
})

Then(/^I see a message confirming my account has been created$/, function (){
    browser.pause(3000)
    OCregister.passwordMismatchErrorMessageVisible();
})

