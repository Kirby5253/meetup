Feature: SPECIFY NUMBER OF EVENTS

  Feature Description: As a user I should be able to specify the number of events shown to me so that I can control my user experience

  Scenario: When user hasn’t specified a number, 32 is the default number.
    Given the user hasn’t modified the number of events to display
    When the user is viewing the events list page
    Then 32 events will be shown to the user

  Scenario: User can change the number of events they want to see.
    Given the user wanted to change the number of events shown
    When the user selects a desired amount of items to show
    Then the events list will update to the desired amount selected