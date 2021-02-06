Feature: GET all structures API V1
As a QA
I want to make sure CRUD REST API works fine

  Scenario Outline: get a root structure
    Given browse api structure
    When I send a GET request to "<root>"
    Then I get stucture key "<structureKey>"
	
	Examples:
    | root         | structureKey    |
    | /employees  | id              |
    | /employees  | employee_name   |
	| /employees  | employee_salary |
	| /employees  | employee_age    |