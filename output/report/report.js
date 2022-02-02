$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Registration.feature");
formatter.feature({
  "name": "Registration",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SingleData"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Launch chrome browser and open URL \"http://demo.automationtesting.in/Register.html\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DemoSite.launch_chrome_browser_and_open_URL(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Register detail",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SingleData"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user clicks the firstname and enter the value \"Vcentry\"",
  "keyword": "When "
});
formatter.match({
  "location": "DemoSite.user_clicks_the_firstname_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks the lastname and enter the value \"Technologies\"",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSite.user_clicks_the_lastname_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks the Address and enter the value \"Guindy\"",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSite.user_clicks_the_Address_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click the emailaddress and enter the value \"abc@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSite.user_click_the_emailaddress_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click the phonenumber and enter the value \"3311557700\"",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSite.user_click_the_phonenumber_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Launch chrome browser and open URL \"http://demo.automationtesting.in/Register.html\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DemoSite.launch_chrome_browser_and_open_URL(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Register detail with different data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SingleData"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user clicks the firstname and enter the value \"TestFirstName\"",
  "keyword": "When "
});
formatter.match({
  "location": "DemoSite.user_clicks_the_firstname_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validate the page title as \"Register\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DemoSite.user_validate_the_page_title(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verifies the order in cart page",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Launch chrome browser and open URL \"http://demo.automationtesting.in/Register.html\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DemoSite.launch_chrome_browser_and_open_URL(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "New Test Casee",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SingleData"
    },
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "user clicks the firstname and enter the value \"Vcentry\"",
  "keyword": "When "
});
formatter.match({
  "location": "DemoSite.user_clicks_the_firstname_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks the lastname and enter the value \"Technologies\"",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSite.user_clicks_the_lastname_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:RegistrationMultipleData.feature");
formatter.feature({
  "name": "Register with multiple data",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@MulitpleData"
    }
  ]
});
formatter.scenarioOutline({
  "name": "validate register page with  multiple data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Launch chrome browser and open URL \"http://demo.automationtesting.in/Register.html\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user clicks the firstname and enter the value \"\u003cFirstName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks the lastname and enter the value \"\u003cLastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks the Address and enter the value \"\u003cAddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click the emailaddress and enter the value \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click the phonenumber and enter the value \"\u003cPhoneNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validate the page title as \"Register\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Address",
        "Email",
        "PhoneNumber"
      ]
    },
    {
      "cells": [
        "Vcentry",
        "Technologies",
        "Guindy",
        "abc@gmail.com",
        "3311557700"
      ]
    },
    {
      "cells": [
        "Vcentry1",
        "Technologies1",
        "Saidapet",
        "def@gmail.com",
        "12469907"
      ]
    },
    {
      "cells": [
        "Vcentry2",
        "Technologies2",
        "Perungudi",
        "xxx@gmail.com",
        "124676907"
      ]
    }
  ]
});
formatter.scenario({
  "name": "validate register page with  multiple data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@MulitpleData"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Launch chrome browser and open URL \"http://demo.automationtesting.in/Register.html\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DemoSite.launch_chrome_browser_and_open_URL(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks the firstname and enter the value \"Vcentry\"",
  "keyword": "When "
});
formatter.match({
  "location": "DemoSite.user_clicks_the_firstname_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks the lastname and enter the value \"Technologies\"",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSite.user_clicks_the_lastname_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks the Address and enter the value \"Guindy\"",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSite.user_clicks_the_Address_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click the emailaddress and enter the value \"abc@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSite.user_click_the_emailaddress_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click the phonenumber and enter the value \"3311557700\"",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSite.user_click_the_phonenumber_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validate the page title as \"Register\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DemoSite.user_validate_the_page_title(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "validate register page with  multiple data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@MulitpleData"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Launch chrome browser and open URL \"http://demo.automationtesting.in/Register.html\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DemoSite.launch_chrome_browser_and_open_URL(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks the firstname and enter the value \"Vcentry1\"",
  "keyword": "When "
});
formatter.match({
  "location": "DemoSite.user_clicks_the_firstname_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks the lastname and enter the value \"Technologies1\"",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSite.user_clicks_the_lastname_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks the Address and enter the value \"Saidapet\"",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSite.user_clicks_the_Address_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click the emailaddress and enter the value \"def@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSite.user_click_the_emailaddress_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click the phonenumber and enter the value \"12469907\"",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSite.user_click_the_phonenumber_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validate the page title as \"Register\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DemoSite.user_validate_the_page_title(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "validate register page with  multiple data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@MulitpleData"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Launch chrome browser and open URL \"http://demo.automationtesting.in/Register.html\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DemoSite.launch_chrome_browser_and_open_URL(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks the firstname and enter the value \"Vcentry2\"",
  "keyword": "When "
});
formatter.match({
  "location": "DemoSite.user_clicks_the_firstname_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks the lastname and enter the value \"Technologies2\"",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSite.user_clicks_the_lastname_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks the Address and enter the value \"Perungudi\"",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSite.user_clicks_the_Address_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click the emailaddress and enter the value \"xxx@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSite.user_click_the_emailaddress_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click the phonenumber and enter the value \"124676907\"",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSite.user_click_the_phonenumber_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validate the page title as \"Register\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DemoSite.user_validate_the_page_title(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "New testcase",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@MulitpleData"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "Launch chrome browser and open URL \"http://demo.automationtesting.in/Register.html\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DemoSite.launch_chrome_browser_and_open_URL(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validate the page title as \"Register\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DemoSite.user_validate_the_page_title(String)"
});
formatter.result({
  "status": "skipped"
});
});