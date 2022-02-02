@MulitpleData
Feature: Register with multiple data



@smoke
Scenario Outline: validate register page with  multiple data

Given Launch chrome browser and open URL "http://demo.automationtesting.in/Register.html"
When user clicks the firstname and enter the value "<FirstName>"
And user clicks the lastname and enter the value "<LastName>"
And user clicks the Address and enter the value "<Address>"
And user click the emailaddress and enter the value "<Email>"
And user click the phonenumber and enter the value "<PhoneNumber>"
Then user validate the page title as "Register"

Examples:
|FirstName|LastName|Address|Email|PhoneNumber|
|Vcentry|Technologies|Guindy|abc@gmail.com|3311557700|
|Vcentry1|Technologies1|Saidapet|def@gmail.com|12469907|
|Vcentry2|Technologies2|Perungudi|xxx@gmail.com|124676907|

@smoke
Scenario: New testcase
Given Launch chrome browser and open URL "http://demo.automationtesting.in/Register.html"
Then user validate the page title as "Register"

