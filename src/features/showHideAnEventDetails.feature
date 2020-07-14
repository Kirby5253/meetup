Feature: SHOW/HIDE AN EVENT DETAILS

  Feature Description: Allow users to see event details of a selected event

  Scenario: An event element is collapsed by default.
    Given the home page has been loaded
    When the user sees an event
    Then the details of the event will be collapsed

  Scenario: User can expand an event to see its details.
    Given the user wanted to view information on an event
    When the user is clicks on an event
    Then the user will be able see its details

  Scenario: User can collapse an event to hide its details.
    Given the user no longer wants to see the details of an event
    When the user clicks the less details button on an event
    Then the user will be able to hide the details of an event