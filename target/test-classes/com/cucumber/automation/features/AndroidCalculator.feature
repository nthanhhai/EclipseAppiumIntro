Feature: Testing calculation feature of Android Calculator
			In order to test basic calculator is correct

  Scenario: Perform basic plus calculation
    Given The application is launched
    When User clicks on button "4"
    And User clicks on button "+"
    And User clicks on button "2"
    And User clicks on button "="
    Then User sees value of result is "6"
