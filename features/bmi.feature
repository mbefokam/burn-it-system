  Feature:  Test Nutrition data
  BY PIERRE ANTONE
  Background: To run all scenarios npm test,
  To run this feature npm test features/bmi.feature
  To run a specific scenarion npm test features/bmi.feature:8
@baseUrl @baseUrl-burnIt
Scenario: Making a POST request with json data to retrieve data for BMI module
  Given A new user "../../test_data/bmi/data.json"
  When I make a POST request to "/api/main/bmi"
  Then The response status should be "../../test_data/bmi/response.json"

@baseUrl @baseUrl-burnIt
Scenario: Making a POST request with good data json data to retrive data for BMI module with bad expected data
  Given A new user "../../test_data/bmi/data.json"
  When I make a POST request to "/api/main/bmi"
  Then The response status should not be "../../test_data/bmi/bad_response.json"

@baseUrl @baseUrl-burnIt
Scenario: Making a POST request with bad json data to retrive data for BMI module
  Given A new user "../../test_data/bmi/bad_data.json"
  When I make a POST request to "/api/main/bmi"
  Then the response status code should be "405"
