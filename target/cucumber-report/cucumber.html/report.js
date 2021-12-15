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
  "duration": 6855597800,
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
  "duration": 162599901,
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
  "duration": 219897600,
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
  "duration": 126700800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 2808679201,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 26900,
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
  "line": 16,
  "name": "I Verify \"Add User\" Text message",
  "keyword": "And "
});
formatter.step({
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
  "duration": 897645600,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iClickOnAddButton()"
});
formatter.result({
  "duration": 20611094999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add User",
      "offset": 10
    }
  ],
  "location": "UserSteps.iVerifyTextMessage(String)"
});
formatter.result({
  "duration": 42889301,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Add User]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.demo.orangeHRM.cucumber.steps.UserSteps.iVerifyTextMessage(UserSteps.java:87)\r\n\tat ✽.And I Verify \"Add User\" Text message(user.feature:16)\r\n",
  "status": "failed"
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
  "duration": 969875000,
  "status": "passed"
});
});