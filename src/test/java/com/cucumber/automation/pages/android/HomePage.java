package com.cucumber.automation.pages.android;

import io.appium.java_client.MobileBy;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;

import com.cucumber.automation.utils.AppiumBase;

public class HomePage extends AppiumBase {

	// All locators
	/*
	By two = MobileBy.AndroidUIAutomator("new UiSelector().text(\"2\")");
	By four = MobileBy.AndroidUIAutomator("new UiSelector().text(\"4\")");
	By plus = MobileBy.AndroidUIAutomator("new UiSelector().text(\"+\")");
	By equal = MobileBy.AndroidUIAutomator("new UiSelector().text(\"=\")");
	*/
	By result = By.className("android.widget.EditText");
	
	// All functions
	public boolean isHomePage() {
		wait.until(ExpectedConditions.presenceOfElementLocated(result));
		return driver.findElement(By.className("android.widget.EditText")).isDisplayed();
	}	
	
	public void clickButton(String arg1) {
		wait.until(ExpectedConditions.presenceOfElementLocated(MobileBy.AndroidUIAutomator("new UiSelector().text(\"" + arg1 + "\")")));
		WebElement button = driver.findElement(MobileBy.AndroidUIAutomator("new UiSelector().text(\"" + arg1 + "\")"));
		button.click();
	}
	
	public String returnResult() {
		return driver.findElement(result).getText();
	}

}
