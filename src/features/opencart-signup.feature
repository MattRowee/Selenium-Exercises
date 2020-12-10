Feature: Register a New Account

    A user should be able to register a new account on the OpenCart app. A user should be 
    alerted by error messages when they have not filled in a required field, when email is a
    duplicate, when email format is incorrect, and when password confirmation does not match.

      Background:
        # Given I go to 'demo.opencart.com/index.php?route=account/register'
        Given I navigate to the account registration page

        # Scenario: User attempts to register with missing fields
        # When I click the Continue button
        # Then  I see error messages next to missing mandatory fields
        
        # Scenario: User attempts to register account with email without @
        # When I fill in the email field without an @ symbol
        # When I click the Continue button        
        # Then A modal appears under the Email field detailing the error

        # Scenario: User attempts to register without proper email suffix 
        # When I fill in the Email field without a proper suffix
        # When  I click the Continue button
        # Then A modal appears under the Email field detailing the error

        # Scenario: User attempts to register with a duplicate email
        # When I fill in all fields with correct information
        # When I use an existing email in the email input
        # When I click the Privacy Policy checkbox
        # When I input password and confirmation correctly 
        # When I click the Continue button        
        # Then I see a duplicate email error message

        # Scenario: User attempts to register with mismatched password 
        # When I fill in all fields with correct information
        # When I input mismatched password and confirmation data
        # When  I click the Continue button
        # Then I see a mismatched password alert message 
        
        Scenario: User registers an account correctly
        When I fill in all fields with correct information
        When I input a unique email
        When I input password and confirmation correctly 
        When I click the Privacy Policy checkbox
        When I click the Continue button
        Then I see a message confirming my account has been created
