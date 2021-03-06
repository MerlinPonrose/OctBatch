package com.bdd.runnerfile;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)

@CucumberOptions(features="C:\\Users\\Karen Amy\\eclipse-workspace\\Oct_BDD\\src\\test\\java\\com\\bdd\\featurefile",
				glue="com.bdd.stepdefinition",
				plugin= {"pretty","html:output/report"},
				tags= {"@smoke"},
				dryRun=true, // to check the unimplemented steps in feature file before execution
				monochrome=true) //display console in proper readable format
public class TestRunner {

}
