Feature:  Test Nutrition data
  BY DEJOLIE CHRISTELLE
Background: To run all scenarios npm test,
  To run this feature npm test features/nutrition.feature
  To run a specific scenarion npm test features/nutrition.feature:8
@baseUrl @baseUrl-burnIt
Scenario: Making a POST request with json data to retrieve data for nutrition module
  Given A new user "../../test_data/nutritions/data.json"
  When I make a POST request to "/api/nutritionix/deit"
  Then The response status should be "../../test_data/nutritions/response.json"

@baseUrl @baseUrl-burnIt
Scenario: Making a POST request with bad json data to retrive data for nutrition module
  Given A new user "../../test_data/nutritions/data.json"
  When I make a POST request to "/api/nutritionix/deit"
  Then The response status should not be "../../test_data/nutritions/bad_response.json"

@baseUrl @baseUrl-burnIt
Scenario: Making a POST request with bad json data to retrive data for BMI module
  Given A new user "../../test_data/nutritions/bad_data.json"
  When I make a POST request to "/api/nutritionix/deit"
  Then the response status code should be "404"
