package com.bdd.pages;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import com.bdd.stepdefinition.TestExecutor;

public class RegistrationPage extends TestExecutor{
	
	
	public String FirstName = "//input[@ng-model='FirstName']";
	public String LastName = "//input[@placeholder='Last Name']";
	public String Address = "textarea";
	public String email1 = "//input[@type='email']";
	public String phoneNumber = "//input[@type='tel']";
	
	
	
	public void enterFirstName(String firsttNmae) throws IOException
	{
		com.enterValue(By.xpath(reg.FirstName), firsttNmae);
		
	}
	
	
	public void enterLastName(String lastNamee) throws IOException
	{
		com.enterValue(By.xpath(LastName), lastNamee);
		
	}
	
	
public void enterAddress(String Addresss) throws IOException
{
	

	com.enterValue(By.tagName(Address), Addresss);
	

}

public void enteremail(String emaill) throws IOException
{

	
//	com.enterValue(By.xpath(email1), getData("Email"),"Email");
	
	com.enterValue(By.xpath(email1), emaill);
	
}


public void enterphoneNumber(String numberr) throws IOException
{
		
		com.enterValue(By.xpath(phoneNumber), numberr);
		
		}


}
