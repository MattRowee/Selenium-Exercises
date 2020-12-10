import Page from './page';

class openCartRegisterPage extends Page {
      //OBJECTS
    get registerPageContent ()    { return $('#account-register') }
    
      //INPUT FIELDS   
    get firstNameInput () {return $('#input-firstname')}
    get lastNameInput () {return $('#input-lastname')}
    get emailInput () {return $('#input-email')}
    get telephoneInput () {return $('#input-telephone')}
    get passwordInput () {return $('#input-password')}
    get passConfirmInput () {return $('#input-confirm')}

      //BUTTONS
    get subscribeYesRadioButton () {return $("*[name='newsletter'][value=0]")}
    get subscribeNoRadioButton () {return $("*[name='newsletter'][value=1]")}
    get privacyCheckbox () {return $("*[name='agree']")}
    get continueButton () {return $("*[value='Continue']")}

      //MESSAGES
    get privacyPolicyAlert () {return $('.alert-dismissible')}
    get firstNameAlert () {return $('#input-firstname + .text-danger')}
    get lastNameAlert () {return $('#input-lastname + .text-danger')}
    get emailAlert () {return $('#input-email + .text-danger')}
    get telephoneAlert () {return $('#input-telephone + .text-danger')}
    get passwordAlert () {return $('#input-password + .text-danger')}
    get passwordConfirmAlert () {return $('#input-confirm + .text-danger')}
    get emailDuplicateAlert () {return $('*[.fa-exclamation-circle][value="Warning: E-Mail Address is already registered!"]')}
    get registrationSuccessMessage () {return $("h1 value='Your Account Has Been Created!'")}
      //EMAIL ALERT MODALS
    // get emailModal () {return $()}

    //METHODS
    open () {
      super.open('index.php?route=account/register')       //this will append the baseUrl to form complete URL
      browser.pause(3000);
  }
    generateUniqueEmail (){
      var crypto = require('crypto');
      function randomValueHex (len) {
        return crypto.randomBytes(Math.ceil(len/2))
        .toString('hex') // convert to hexadecimal format
        .slice(0,len).toUpperCase();   // return required number of characters
                                    } 
      var uniqueEmail = randomValueHex(4)+"-"+randomValueHex(4)+"-"+randomValueHex(4) +"@randomemail.com";
      return uniqueEmail;            
                            }

    waitUntilAccountRegisterIsVisible () {
        this.registerPageContent.waitForDisplayed()
      }

    inputDetails () {
        this.firstNameInput.setValue("John");
        this.lastNameInput.setValue("Juan");
        this.telephoneInput.setValue("555-555-5555");
    }
    inputUniqueEmail(){
      browser.pause(3000)
      this.emailInput.setValue(this.generateUniqueEmail());
      browser.pause(3000)
    }
    
  
    inputDuplicateEmail(){
    this.emailInput.setValue("dupilcate@testmail.com")
    }

    // 2 email scenarios: missing @ and missing suffix (.com)
    inputIncorrectEmail1(){
      this.emailInput.setValue("JohnDoeRandomEmail.com")
    }
    inputIncorrectEmail2(){
      this.emailInput.setValue("JohnDoe@RandomEmail")
    }
    //

    inputPasswordConfirm(){
        this.passwordInput.setValue("Pass123");
        this.passConfirmInput.setValue("Pass123");
        this.continueButton.click();
    }
    inputPasswordConfirmMismatch(){
        this.passwordInput.setValue("Pass123");
        this.passConfirmInput.setValue("Pass");
    }

    submitRegisterForm(){
      this.privacyCheckbox.click();
      browser.pause(2000);
      this.continueButton.click();
    }
    
    clickPrivacyCB(){
      this.privacyCheckbox.click()
    }
    clickOnContinueButton () {
      this.continueButton.click()
    }
    errorMessagesAreVisible(){
      this.privacyPolicyAlert.waitForDisplayed();
      this.firstNameAlert.waitForDisplayed();
      this.lastNameAlert.waitForDisplayed();
      this.emailAlert.waitForDisplayed();
      this.telephoneAlert.waitForDisplayed();
      this.passwordAlert.waitForDisplayed();
    }
    passwordMismatchErrorMessageVisible(){  
      browser.pause(2000)   
      this.passwordConfirmAlert.waitForDisplayed()
    }
    duplicateEmailMessageVisible(){
      browser.pause(2000)
      this.emailDuplicateAlert.waitForDisplayed()
    }
    registrationSuccessMessageIsVisible(){
      browser.pause(1000)
      this.registrationSuccessMessage.waitForDisplayed()
    }
}
export default new openCartRegisterPage()