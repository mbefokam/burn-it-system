  Feature: Seach the web
  As a human I want to search the web so I can find information
  BY DEJOLIE CHRISTELLE
 

Scenario: Search for njit.edu
  Given I have visited Google
  When I search for "njit.edu"
  Then I see "New Jersey Institute of Technology"
  
  
Scenario: Navigate to Burnt it
  Given I have visited Burn It
  When I Enter Zip Code Age Select Gender, enter Weight and Height
    And I click Chech Your BMI buttom
  Then I should be transfered to "http://localhost:8080/#!/planning"
  
@watch
Scenario: Protractor and Cucumber Test
  Given I go to "https://angularjs.org/"
  When I add "Be Awesome" in the task field
    And I click the add button
  Then I should see my new task in the list