  Feature: End to end testing of Burn It System.
          BY PIERRE ANTONE And DEJOLIE CHRISTELLE
  Scenario Outline: Build The deit plan
  Given I am a new user of Burn It Sytem
    And I enter the url "http://localhost:8080/#!/"
  #When The user enter thier '<zip_code>' and '<age>' and then "<gender>" and then the '<weight>' and '<height>' for basic information
  When The user enter thier "07102" and "24" and then "Male" and then the "80" and "180" for basic information
    And press click your BMI
    And The User select a Nutritionist
    And The User select a Work Place
    And press click Build Your Own Diet Plan
    And I click "<day>"#:
    And I click Breakfact
    And I search for  "1/2 Grapefruit" and "1 Slice of Toast" and "2 Tablespoons of Peanut Butter" and "1 cup Coffee or Tea (with caffeine)"
    And  I click First Snack
    And I search for "1 Oranges" and "1 banana"
    And I click Lunch
    And I search for "1/2 Cup of Tuna" and "1 Slice of Toast" and "1 cup Coffee or Tea (with caffeine)"
    And I click Second Snack
    And I search for "Kashi Ripe Strawberry Cereal Bars"
    And I click Dinner
    And I search for "Fied Rice Chicken" with "1 soda"
  #  Then I save my plan
  #  And I click sign up
  #  And I enter first  name "Mark Paul" and last name "Doe" and then address"23 Washington street Jersey City NY 07102 " then  phone number"305-678=9023" and email "mark"
#    And I search '<weight>' and then '<energy>' then I search '<protein>'
    #Then The Boby Mass Index Status should be "Normal (healthy weight)"


 # Examples:
 #   | Brackfast         | FirstSnack | Lunch           |SecondSnack                         |  Diner            |
 #   |    1/2 Grapefruit |  2 Oranges | 1/2 Cup of Tuna | Kashi Ripe Strawberry Cereal Bars  |Fied Rice Chicken  |
#  Examples:
 #    | zip_code | age | gender  | weight | height |
  #   |    07102 |  24 |  Male   | 75     | 180    |
  #   |    07105 |  56 |  Female | 65     | 170    |
  Examples:
     | day    |
     | Monday |
    # | Tuesday   |
    # | Wednesday |
    # | Thursday  |
   #  | Friday    |
    # | Saturday  |
   #  | Sunday    |
