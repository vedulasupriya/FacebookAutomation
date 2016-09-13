$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("authentication.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook Automation",
  "description": "",
  "id": "facebook-automation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Start Facebook application",
  "description": "",
  "id": "facebook-automation;start-facebook-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@AuthenticationPage"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Navigate to url \"https://facebook.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter username as \"supriyavganti@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter password as \"@dindo2201\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on signIn",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "check if user home is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://facebook.com",
      "offset": 17
    }
  ],
  "location": "AuthenticationSteps.navigateToUrl(String)"
});
formatter.result({
  "duration": 9803461858,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "supriyavganti@gmail.com",
      "offset": 19
    }
  ],
  "location": "AuthenticationSteps.enterUsernameAs(String)"
});
formatter.result({
  "duration": 271130374,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "@dindo2201",
      "offset": 19
    }
  ],
  "location": "AuthenticationSteps.enterPasswordAs(String)"
});
formatter.result({
  "duration": 126474336,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationSteps.clickOnSignIn()"
});
formatter.result({
  "duration": 3400992585,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationSteps.checkIfUserHomeIsDisplayed()"
});
formatter.result({
  "duration": 762170172,
  "status": "passed"
});
});