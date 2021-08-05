$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/feature/ProdSmokeTesting.feature");
formatter.feature({
  "line": 1,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Background: Successful Login with valid credentials"
    },
    {
      "line": 4,
      "value": "#\tGiven User is on KIA web portal Home Page"
    },
    {
      "line": 5,
      "value": "#\tAnd Login button displayed"
    },
    {
      "line": 6,
      "value": "#\tWhen User navigates to SignIn section"
    },
    {
      "line": 7,
      "value": "#\t#And User enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\""
    },
    {
      "line": 8,
      "value": "#\tAnd user enter \"497phevniro@mailinator.com\" and \"Password1\""
    },
    {
      "line": 9,
      "value": "#\tThen User navigate to the MyVehicle Page"
    },
    {
      "line": 10,
      "value": "#"
    },
    {
      "line": 11,
      "value": "#"
    },
    {
      "line": 12,
      "value": "#Scenario: User picks the vehicle from MyVehicle section"
    },
    {
      "line": 13,
      "value": "#\tGiven User is on MyVehicle section"
    },
    {
      "line": 14,
      "value": "#\tWhen User select the vehicle"
    },
    {
      "line": 15,
      "value": "#\tThen User navigate to the Dashboard section"
    },
    {
      "line": 16,
      "value": "#"
    },
    {
      "line": 17,
      "value": "#"
    },
    {
      "line": 18,
      "value": "#Scenario: Perform Door Lock/Unlock and Remote Climate Start/Stop"
    },
    {
      "line": 19,
      "value": "#\tGiven User is on Dashbaord page"
    },
    {
      "line": 20,
      "value": "#"
    },
    {
      "line": 25,
      "value": "#With Examples keyword"
    }
  ],
  "line": 26,
  "name": "Successful Login with valid credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "user is on KIA web portal Landing Page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "page title is Kia Owners Portal",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user clicks the Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user enter the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user clicks the login button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user is on welcome page",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user pick the vehicle",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "user is on dashboard pag e",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "fetch the name of the vehicle",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "get the status of the door",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user clicks the lockUnlock option",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user clicks the remoteClimate option",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 40,
      "value": "#Then user find the vehicle location"
    },
    {
      "line": 41,
      "value": "#Then capture the alert message"
    }
  ],
  "line": 42,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 45,
  "name": "",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 47,
      "id": "login-action;successful-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "497phevniro@mailinator.com",
        "Password1"
      ],
      "line": 48,
      "id": "login-action;successful-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 48,
  "name": "Successful Login with valid credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "user is on KIA web portal Landing Page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "page title is Kia Owners Portal",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user clicks the Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user enter the \"497phevniro@mailinator.com\" and \"Password1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user clicks the login button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user is on welcome page",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user pick the vehicle",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "user is on dashboard pag e",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "fetch the name of the vehicle",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "get the status of the door",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user clicks the lockUnlock option",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user clicks the remoteClimate option",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 40,
      "value": "#Then user find the vehicle location"
    },
    {
      "line": 41,
      "value": "#Then capture the alert message"
    }
  ],
  "line": 42,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ProdSmokeTestingSD.user_is_on_KIA_web_portal_Landing_Page()"
});
formatter.result({
  "duration": 46819876900,
  "status": "passed"
});
formatter.match({
  "location": "ProdSmokeTestingSD.page_title_is_Kia_Owners_Portal()"
});
formatter.result({
  "duration": 38456700,
  "status": "passed"
});
formatter.match({
  "location": "ProdSmokeTestingSD.user_clicks_the_Sign_in_button()"
});
formatter.result({
  "duration": 10099117600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "497phevniro@mailinator.com",
      "offset": 16
    },
    {
      "val": "Password1",
      "offset": 49
    }
  ],
  "location": "ProdSmokeTestingSD.user_enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 291579000,
  "status": "passed"
});
formatter.match({
  "location": "ProdSmokeTestingSD.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 30102374400,
  "status": "passed"
});
formatter.match({
  "location": "ProdSmokeTestingSD.user_is_on_welcome_page()"
});
formatter.result({
  "duration": 28836831700,
  "status": "passed"
});
formatter.match({
  "location": "ProdSmokeTestingSD.user_pick_the_vehicle()"
});
formatter.result({
  "duration": 76037419700,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "ProdSmokeTestingSD.fetch_the_name_of_the_vehicle()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProdSmokeTestingSD.get_the_status_of_the_door()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProdSmokeTestingSD.user_clicks_the_lockUnlock_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProdSmokeTestingSD.user_clicks_the_remoteClimate_start_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProdSmokeTestingSD.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});