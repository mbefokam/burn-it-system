Feature:  Register feature For Node API
  As a user of Burn It System, I want to be able
  to Login or Register in the System 
  BY DEJOLIE CHRISTELLE
Background: To run all scenarios npm test,
            To run this feature npm test features/signup.feature
            To run a specific scenarion npm test features/signup.feature:8
@baseUrl @baseUrl-burnIt
Scenario: Making a POST request with json data to Sign up
  Given A new user "../../test_data/users/new_user.json"
  When I make a POST request to "/api/user/register"
  Then the response status code should be "200"

@baseUrl @baseUrl-burnIt
Scenario: Making a POST request with json data of the user to sign up with a bad email
  Given A new user "../../test_data/users/failed_user.json"
  When I make a POST request to "/api/user/register"
  Then the response status code should be "500"
