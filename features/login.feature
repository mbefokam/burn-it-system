  Feature: Login and Register feature For Node API
  As a user of Burn It System, I want to be able
  to Login or Register in the System 
  BY PIERRE ANTONE 
  Background: To run all scenarios npm test,
  To run this feature npm test features/login.feature
  To run a specific scenarion npm test features/login.feature:8
@baseUrl @baseUrl-burnIt
Scenario: Making a POST request with json data to login
  Given The json request data
  """json
  {
  "email": "janedoe@gmail.com",
  "password": "12"
  }
  """
  When I make a POST request to "/api/user/login"
  Then the response status code should be "200"


@baseUrl @baseUrl-burnIt
Scenario: Making a POST request with json data to login with an non existing email
  Given The json request data
  """json
  {
  "email": "paul@gmail.com",
  "password": "12"
  }
  """
  When I make a POST request to "/api/user/login"
  Then the response status code should be "401"


@baseUrl @baseUrl-burnIt
Scenario: Making a POST request with json data to login with wrong password
  Given The json request data
  """json
  {
  "email": "janedoe@gmail.com",
  "password": "123"
  }
  """
  When I make a POST request to "/api/user/login"
  Then the response status code should be "401"
