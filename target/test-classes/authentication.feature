Feature: Facebook Automation
  @AuthenticationPage
  Scenario: Start Facebook application
        Given Navigate to url "https://facebook.com"
    And Enter username as "supriyavganti@gmail.com"
    Then Enter password as "@dindo2201"
    And click on signIn
    Then check if user home is displayed


