$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("user.feature");
formatter.feature({
  "line": 2,
  "name": "Employee Records",
  "description": "As a user I am able to  create and verify all employee details on Admin Page.",
  "id": "employee-records",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@user"
    }
  ]
});
formatter.before({
  "duration": 9076362100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User should be able to login successfully",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter Username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 193623500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 207781700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 125975900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1474857100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 72600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Admin should add users successfully",
  "description": "",
  "id": "employee-records;admin-should-add-users-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on Admin Tab",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on Add Button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "#   And I Verify \"Add User\" Text message"
    }
  ],
  "line": 17,
  "name": "I select User Role \"ESS\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter Employee Name \"Dominic Chase\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter username \"Aravind\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Select status \"Enabled\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter Password \"Rutu1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter Confirm Password \"Rutu1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click On Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should able to verify message \"Successfully Saved\"",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 20059036200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#menu_admin_viewAdminModule\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-29UVJ148\u0027, ip: \u0027192.168.0.14\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e8bf7d0c71ba750a0f1ba81fc4ad1603, findElement {using\u003did, value\u003dmenu_admin_viewAdminModule}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\chira\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53093}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53093/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e8bf7d0c71ba750a0f1ba81fc4ad1603\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\r\n\tat com.demo.orangeHRM.utility.Utility.clickOnElement(Utility.java:71)\r\n\tat com.demo.orangeHRM.pages.HomePage.setAdmin(HomePage.java:41)\r\n\tat com.demo.orangeHRM.cucumber.steps.UserSteps.iClickOnAdminTab(UserSteps.java:137)\r\n\tat ✽.When I click on Admin Tab(user.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UserSteps.iClickOnAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ESS",
      "offset": 20
    }
  ],
  "location": "UserSteps.iSelectUserRole(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Dominic Chase",
      "offset": 23
    }
  ],
  "location": "UserSteps.iEnterEmployeeName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Aravind",
      "offset": 18
    }
  ],
  "location": "UserSteps.iEnterUsername(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 17
    }
  ],
  "location": "UserSteps.iSelectStatus(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Rutu1234",
      "offset": 18
    }
  ],
  "location": "UserSteps.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Rutu1234",
      "offset": 26
    }
  ],
  "location": "UserSteps.iEnterConfirmPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserSteps.iClickOnSaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Successfully Saved",
      "offset": 33
    }
  ],
  "location": "UserSteps.iShouldAbleToVerifyMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1083542100,
  "status": "passed"
});
});