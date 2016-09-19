Feature: this will update status on facebook
  @StatusUpdate
  Scenario: Logon to user with credentials
    Given click on status bar and enter the status
    And Wait for 4 seconds

    And click on submit post
