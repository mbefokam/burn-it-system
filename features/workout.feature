Feature:  Get Workout and Nutritionists Locations data
  BY PIERRE ANTONE 
Background: To run all scenarios npm test,
  To run this feature npm test features/workout.feature
  To run a specific scenarion npm test features/workout.feature:9

@baseUrl @baseUrl-burnIt
Scenario: Making a GET request to find workout locations
    When I make a GET request to "/api/main/yelp/workout/location/07102"
    Then the response status code should be "200"

@baseUrl @baseUrl-burnIt
Scenario: Making a bad GET request to find workout locations
    When I make a GET request to "/api/main/yelp/workout/location/"
    Then the response status code should be "404"

@baseUrl @baseUrl-burnIt
Scenario: Making a GET request to find workout locations
    When I make a GET request to "/api/main/yelp/nutritionists/location/07102"
    Then the response status code should be "200"

@baseUrl @baseUrl-burnIt

Scenario: Making a bad GET request to find workout locations
    When I make a GET request to "/api/main/yelp/nutritionists/location/"
    Then the response status code should be "404"
