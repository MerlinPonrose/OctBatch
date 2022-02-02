package com.bdd.utility;

import com.bdd.stepdefinition.TestExecutor;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends TestExecutor{
	
	
	@Before(order=1)
	public void validatebeforescenario()
	{
		System.out.println("Pre condition1");
	}
	
	@Before(order=2)
	public void validatePreCondition2()
	{
		System.out.println("Pre condition 2");
	}
	
	@After(order=1)
	public void postCondition()
	{
		System.out.println("Post condition 1");
		driver.quit();
}
	
	@After(order=2)
	public void postcondoition2()
	{
		System.out.println("Post condition 2");
	}
	
	
	@Before("@smoke,@test")
	public void preconditionforsmoke()
	{
		System.out.println("Pre condition for smoke");
	}
	
	@After("@smoke")
	public void postConditionnn()
	{
		System.out.println("post condition for smoke");
	}
	
	@Before("@test")
	public void test()
	{
		
	}

}
