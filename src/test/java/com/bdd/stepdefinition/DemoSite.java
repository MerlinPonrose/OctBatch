package com.bdd.stepdefinition;

import java.io.IOException;

import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DemoSite extends TestExecutor{
	
	
	
	@Given("Launch chrome browser and open URL {string}")
	public void launch_chrome_browser_and_open_URL(String url) {
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\Karen Amy\\eclipse-workspace\\OctSelenium\\exe\\chromedriver.exe");
		
		driver = new ChromeDriver();
		
		driver.manage().window().maximize();
		driver.get(url);
		
	}

	@When("user clicks the firstname and enter the value {string}")
	public void user_clicks_the_firstname_and_enter_the_value(String firsttName) throws IOException {
		
		
	  reg.enterFirstName(firsttName);
	}

	@When("user clicks the lastname and enter the value {string}")
	public void user_clicks_the_lastname_and_enter_the_value(String lastName) throws IOException {
	   
		reg.enterLastName(lastName);
	}

	@When("user clicks the Address and enter the value {string}")
	public void user_clicks_the_Address_and_enter_the_value(String Addresss) throws IOException {
	 reg.enterAddress(Addresss);
	}

	@When("user click the emailaddress and enter the value {string}")
	public void user_click_the_emailaddress_and_enter_the_value(String emaill) throws IOException {
		
		reg.enteremail(emaill);
	 
	}

	@When("user click the phonenumber and enter the value {string}")
	public void user_click_the_phonenumber_and_enter_the_value(String phone) throws IOException {
		reg.enterphoneNumber(phone);
	   
	}

	@Then("user validate the page title as {string}")
	public void user_validate_the_page_title(String value) {
		
	com.validatePageTitle(value);
	  
	}



}
