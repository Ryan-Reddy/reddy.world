Feature: Nav-menu
  As a user
  I want to be able to navigate the site using nav-menu
  So that I can see other pages easily

  Scenario: Succesful routing
    Given I am on the main index.html
    When I click on a link
    Then The corresponding page should be loaded by vaadin
    And the page should be rendered in the app slot
