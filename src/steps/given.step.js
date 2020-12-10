import { Given } from 'cucumber';
import OCregister from '../pageObjects/OC-register.page'
import opencartHomePage from '../pageObjects/opencartHomePage.page';



Given('I navigate to the account registration page', function () {
    browser.url(`https://demo.opencart.com/index.php?route=account/register`)
    browser.pause(5000)
});

// Given(/^I navigate to the opencart Register page'$/, function(){
//     OCregister.open();
// })



