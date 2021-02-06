Feature: Test Good text for good language 
  As a QA
  I want to make sure the languages are matching 
  
  Scenario: Check lang choose and text matching
   Given I am on page "<end_url>"
   When I choose the langName "<langName>"
   Then the nav link name should be "<navLinkName>"
   And the title need contain "<titleWebsite>"
   
   Examples:
    | end_url | langName  | navLinkName | titleWebsite |
    | values  | English   | Values      | Values       |
	| valeurs | Français  | Valeurs     | Valeurs      |
