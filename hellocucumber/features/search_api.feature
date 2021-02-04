Feature: Test Api

  Scenario Outline: get a contact
    Given an id for api
    When I send GET request to "https://reqres.in/api/users/2"
    Then I get response code 200