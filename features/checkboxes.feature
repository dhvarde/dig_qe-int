Feature: The Internet Guinea Pig Website

  @CHECKBOXES
  Scenario Outline: As a user, I can log into the checkbox section and select checkboxes
    Given I am on the Checkboxes page
    When I select checkbox <num>
    Then The checkbox <num> should be "<status>"
      Examples:
      | num | status |
      |   1 | unchecked | 
      |   2 | unchecked |
