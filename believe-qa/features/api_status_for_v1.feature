Feature: GET all status API V1
As a QA
I want to make sure CRUD REST API works fine

  Scenario Outline: get a root status
    Given browse api status
    When I send GET request to "<root>"
    Then I get response code 200
	
	Examples:
    | root         | 
    | /employees/  | 
    | /employee/1  |