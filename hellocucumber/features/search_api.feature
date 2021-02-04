Feature: Is it Friday tomorrow?

  Scenario Outline: tomorrow is or is not Friday
    Given tomorrow is "<day>"
    When I ask whether tomorrow is Friday yet
    Then I should be told tomorrow "<answer>"

  Examples:
    | day            | answer |
    | Friday         | TGIF   |
    | Sunday         | Nope   |
    | anything else! | Nope   |