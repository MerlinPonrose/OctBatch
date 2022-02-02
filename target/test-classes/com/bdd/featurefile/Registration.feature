@SingleData
Feature: Registration 

Background:
Given Launch chrome browser and open URL "http://demo.automationtesting.in/Register.html"

@Regression
Scenario: Register detail
When user clicks the firstname and enter the value "Vcentry"
And user clicks the lastname and enter the value "Technologies"
And user clicks the Address and enter the value "Guindy"
And user click the emailaddress and enter the value "abc@gmail.com"
And user click the phonenumber and enter the value "3311557700"


@smoke
Scenario: Register detail with different data
When user clicks the firstname and enter the value "TestFirstName"
Then user validate the page title as "Register"
And user verifies the order in cart page

@test
Scenario: New Test Casee
When user clicks the firstname and enter the value "Vcentry"
And user clicks the lastname and enter the value "Technologies"