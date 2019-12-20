$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/feature/ProdSmokeTesting.feature");
formatter.feature({
  "line": 1,
  "name": "KIA Customer Web Portal feature",
  "description": "",
  "id": "kia-customer-web-portal-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 5,
      "value": "#With Examples keyword"
    }
  ],
  "line": 6,
  "name": "KIA Customer Web Portal Smoke Testcases",
  "description": "",
  "id": "kia-customer-web-portal-feature;kia-customer-web-portal-smoke-testcases",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user is on KIA web portal Landing Page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "page title is Kia Owners Portal",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user clicks the Sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enter the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks the login button",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#Then user is on welcome page"
    },
    {
      "line": 14,
      "value": "#Then user pick the vehicle"
    }
  ],
  "line": 15,
  "name": "user is on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "fetch the name of the vehicle",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "get the status of the door",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user clicks the lockUnlock option",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks the remoteClimate option",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user find the vehicle location",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 21,
      "value": "#Then capture the alert message"
    },
    {
      "line": 22,
      "value": "#Then close the browser"
    }
  ],
  "line": 25,
  "name": "",
  "description": "",
  "id": "kia-customer-web-portal-feature;kia-customer-web-portal-smoke-testcases;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 27,
      "id": "kia-customer-web-portal-feature;kia-customer-web-portal-smoke-testcases;;1"
    },
    {
      "cells": [
        "jfpe93@mailinator.com",
        "Password1"
      ],
      "line": 28,
      "id": "kia-customer-web-portal-feature;kia-customer-web-portal-smoke-testcases;;2"
    },
    {
      "cells": [
        "kia.haea1@gmail.com",
        "Password1"
      ],
      "line": 29,
      "id": "kia-customer-web-portal-feature;kia-customer-web-portal-smoke-testcases;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "KIA Customer Web Portal Smoke Testcases",
  "description": "",
  "id": "kia-customer-web-portal-feature;kia-customer-web-portal-smoke-testcases;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user is on KIA web portal Landing Page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "page title is Kia Owners Portal",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user clicks the Sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enter the \"jfpe93@mailinator.com\" and \"Password1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks the login button",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#Then user is on welcome page"
    },
    {
      "line": 14,
      "value": "#Then user pick the vehicle"
    }
  ],
  "line": 15,
  "name": "user is on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "fetch the name of the vehicle",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "get the status of the door",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user clicks the lockUnlock option",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks the remoteClimate option",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user find the vehicle location",
  "keyword": "Then "
});
formatter.match({
  "location": "ProdSmokeTestingSD.user_is_on_KIA_web_portal_Landing_Page()"
});
formatter.result({
  "duration": 19509424339,
  "status": "passed"
});
formatter.match({
  "location": "ProdSmokeTestingSD.page_title_is_Kia_Owners_Portal()"
});
formatter.result({
  "duration": 10763891,
  "status": "passed"
});
formatter.match({
  "location": "ProdSmokeTestingSD.user_clicks_the_Sign_in_button()"
});
formatter.result({
  "duration": 10102448467,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jfpe93@mailinator.com",
      "offset": 16
    },
    {
      "val": "Password1",
      "offset": 44
    }
  ],
  "location": "ProdSmokeTestingSD.user_enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 364887440,
  "status": "passed"
});
formatter.match({
  "location": "ProdSmokeTestingSD.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 30093484119,
  "status": "passed"
});
formatter.match({
  "location": "ProdSmokeTestingSD.user_is_on_dashboard_page()"
});
formatter.result({
  "duration": 10024972574,
  "status": "passed"
});
formatter.match({
  "location": "ProdSmokeTestingSD.fetch_the_name_of_the_vehicle()"
});
formatter.result({
  "duration": 10053421055,
  "status": "passed"
});
formatter.match({
  "location": "ProdSmokeTestingSD.get_the_status_of_the_door()"
});
formatter.result({
  "duration": 10045705478,
  "status": "passed"
});
formatter.match({
  "location": "ProdSmokeTestingSD.user_clicks_the_lockUnlock_option()"
});
formatter.result({
  "duration": 156416341509,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d79.0.3945.79)\n  (Driver info: chromedriver\u003d78.0.3904.105 (60e2d8774a8151efa6a00b1f358371b1e0e07ee2-refs/branch-heads/3904@{#877}),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 6.01 seconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027ICT-2003278-AQA\u0027, ip: \u002710.108.25.73\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:56622}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d78.0.3904.105 (60e2d8774a8151efa6a00b1f358371b1e0e07ee2-refs/branch-heads/3904@{#877}), userDataDir\u003dC:\\Users\\2003278\\AppData\\Local\\Temp\\scoped_dir6676_140267650}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d79.0.3945.79, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: ef9c361b7b51bae3668448efa22ff995\n*** Element info: {Using\u003dxpath, value\u003d(//span[@class\u003d\u0027state-1 active\u0027])[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat stepDefinitions.ProdSmokeTestingSD.user_clicks_the_lockUnlock_option(ProdSmokeTestingSD.java:134)\r\n\tat ✽.Then user clicks the lockUnlock option(./src/test/java/feature/ProdSmokeTesting.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ProdSmokeTestingSD.user_clicks_the_remoteClimate_start_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProdSmokeTestingSD.user_find_the_vehicle_location()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 29,
  "name": "KIA Customer Web Portal Smoke Testcases",
  "description": "",
  "id": "kia-customer-web-portal-feature;kia-customer-web-portal-smoke-testcases;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user is on KIA web portal Landing Page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "page title is Kia Owners Portal",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user clicks the Sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enter the \"kia.haea1@gmail.com\" and \"Password1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks the login button",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#Then user is on welcome page"
    },
    {
      "line": 14,
      "value": "#Then user pick the vehicle"
    }
  ],
  "line": 15,
  "name": "user is on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "fetch the name of the vehicle",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "get the status of the door",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user clicks the lockUnlock option",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks the remoteClimate option",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user find the vehicle location",
  "keyword": "Then "
});
formatter.match({
  "location": "ProdSmokeTestingSD.user_is_on_KIA_web_portal_Landing_Page()"
});
formatter.result({
  "duration": 19228192824,
  "status": "passed"
});
formatter.match({
  "location": "ProdSmokeTestingSD.page_title_is_Kia_Owners_Portal()"
});
formatter.result({
  "duration": 8118789,
  "status": "passed"
});
formatter.match({
  "location": "ProdSmokeTestingSD.user_clicks_the_Sign_in_button()"
});
formatter.result({
  "duration": 10130541851,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kia.haea1@gmail.com",
      "offset": 16
    },
    {
      "val": "Password1",
      "offset": 42
    }
  ],
  "location": "ProdSmokeTestingSD.user_enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 343766079,
  "status": "passed"
});
formatter.match({
  "location": "ProdSmokeTestingSD.user_clicks_the_login_button()"
});
formatter.result({
  "duration": 30098565499,
  "status": "passed"
});
formatter.match({
  "location": "ProdSmokeTestingSD.user_is_on_dashboard_page()"
});
formatter.result({
  "duration": 10025556383,
  "status": "passed"
});
formatter.match({
  "location": "ProdSmokeTestingSD.fetch_the_name_of_the_vehicle()"
});
formatter.result({
  "duration": 10049255163,
  "status": "passed"
});
formatter.match({
  "location": "ProdSmokeTestingSD.get_the_status_of_the_door()"
});
formatter.result({
  "duration": 10048856761,
  "status": "passed"
});
formatter.match({
  "location": "ProdSmokeTestingSD.user_clicks_the_lockUnlock_option()"
});
formatter.result({
  "duration": 300884813277,
  "status": "passed"
});
formatter.match({
  "location": "ProdSmokeTestingSD.user_clicks_the_remoteClimate_start_option()"
});
formatter.result({
  "duration": 120681374902,
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not interactable\n  (Session info: chrome\u003d79.0.3945.79)\n  (Driver info: chromedriver\u003d78.0.3904.105 (60e2d8774a8151efa6a00b1f358371b1e0e07ee2-refs/branch-heads/3904@{#877}),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 20 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027ICT-2003278-AQA\u0027, ip: \u002710.108.25.73\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:56787}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d78.0.3904.105 (60e2d8774a8151efa6a00b1f358371b1e0e07ee2-refs/branch-heads/3904@{#877}), userDataDir\u003dC:\\Users\\2003278\\AppData\\Local\\Temp\\scoped_dir7524_1668961312}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d79.0.3945.79, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: a3d4fc1f448f368de32138268e848a24\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:85)\r\n\tat stepDefinitions.ProdSmokeTestingSD.user_clicks_the_remoteClimate_start_option(ProdSmokeTestingSD.java:213)\r\n\tat ✽.Then user clicks the remoteClimate option(./src/test/java/feature/ProdSmokeTesting.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ProdSmokeTestingSD.user_find_the_vehicle_location()"
});
formatter.result({
  "status": "skipped"
});
});