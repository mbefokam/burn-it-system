  Feature: Get BMI Results
  As a user of the application
  I would like to be able to get my BMI results

Scenario: Entering basic informations
  Given I am using the application
  When I focus the textarea
    And I begin typing
  Then the save button is enabled