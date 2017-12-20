$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AndroidCalculator.feature");
formatter.feature({
  "line": 1,
  "name": "Testing calculation feature of Android Calculator",
  "description": "\tIn order to test basic calculator is correct",
  "id": "testing-calculation-feature-of-android-calculator",
  "keyword": "Feature"
});
formatter.before({
  "duration": 29218690854,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Perform basic plus calculation",
  "description": "",
  "id": "testing-calculation-feature-of-android-calculator;perform-basic-plus-calculation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "The application is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on button \"4\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on button \"+\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on button \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on button \"\u003d\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User sees value of result is \"6\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AndroidCalcSD.the_application_is_launched()"
});
formatter.result({
  "duration": 986750125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 23
    }
  ],
  "location": "AndroidCalcSD.user_clicks_on_button(String)"
});
formatter.result({
  "duration": 314056507,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "+",
      "offset": 23
    }
  ],
  "location": "AndroidCalcSD.user_clicks_on_button(String)"
});
formatter.result({
  "duration": 785320875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    }
  ],
  "location": "AndroidCalcSD.user_clicks_on_button(String)"
});
formatter.result({
  "duration": 739720586,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003d",
      "offset": 23
    }
  ],
  "location": "AndroidCalcSD.user_clicks_on_button(String)"
});
formatter.result({
  "duration": 799062180,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 30
    }
  ],
  "location": "AndroidCalcSD.user_sees_value_of_result_is(String)"
});
formatter.result({
  "duration": 1580620662,
  "status": "passed"
});
formatter.after({
  "duration": 3686694523,
  "status": "passed"
});
formatter.before({
  "duration": 32262227019,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Perform basic multiply calculation",
  "description": "",
  "id": "testing-calculation-feature-of-android-calculator;perform-basic-multiply-calculation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "The application is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User clicks on button \"4\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User clicks on button \"x\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User clicks on button \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User clicks on button \"\u003d\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User sees value of result is \"8\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AndroidCalcSD.the_application_is_launched()"
});
formatter.result({
  "duration": 884093328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 23
    }
  ],
  "location": "AndroidCalcSD.user_clicks_on_button(String)"
});
formatter.result({
  "duration": 325862280,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "x",
      "offset": 23
    }
  ],
  "location": "AndroidCalcSD.user_clicks_on_button(String)"
});
formatter.result({
  "duration": 10150828940,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.AndroidUIAutomator: new UiSelector().text(\"x\") (tried for 10 second(s) with 500 MILLISECONDS interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\r\n\tat com.cucumber.automation.pages.android.HomePage.clickButton(HomePage.java:29)\r\n\tat com.cucumber.automation.stepdefinition.AndroidCalcSD.user_clicks_on_button(AndroidCalcSD.java:26)\r\n\tat ✽.And User clicks on button \"x\"(AndroidCalculator.feature:15)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.AndroidUIAutomator: new UiSelector().text(\"x\")\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027DESKTOP-I6SHIPJ\u0027, ip: \u0027169.254.200.150\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:882)\r\n\tat java.util.Optional.orElseThrow(Optional.java:290)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:881)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:182)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:179)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\r\n\tat com.cucumber.automation.pages.android.HomePage.clickButton(HomePage.java:29)\r\n\tat com.cucumber.automation.stepdefinition.AndroidCalcSD.user_clicks_on_button(AndroidCalcSD.java:26)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    }
  ],
  "location": "AndroidCalcSD.user_clicks_on_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003d",
      "offset": 23
    }
  ],
  "location": "AndroidCalcSD.user_clicks_on_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 30
    }
  ],
  "location": "AndroidCalcSD.user_sees_value_of_result_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2996146446,
  "status": "passed"
});
});