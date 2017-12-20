package com.cucumber.automation.stepdefinition;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import com.cucumber.automation.pages.android.HomePage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;


public class AndroidCalcSD {

	HomePage homePage = new HomePage();
	
	@Given("^The application is launched$")
	public void the_application_is_launched() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    assertTrue(homePage.isHomePage());
	}

	@When("^User clicks on button \"([^\"]*)\"$")
	public void user_clicks_on_button(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		homePage.clickButton(arg1);
	}

	@Then("^User sees value of result is \"([^\"]*)\"$")
	public void user_sees_value_of_result_is(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    assertEquals(arg1, homePage.returnResult());
	}
	
}
