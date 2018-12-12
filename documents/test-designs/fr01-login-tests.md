# Test Design

fr01-login-tests

## Change History

| Change Description | Engineer      | Date       |
| ------------------ | ------------- | ---------- |
| Created by         | Karyna Papian | 12/06/2018 |

## Test Design Inputs

### Feature

As an user, I want to be able login to the website - https://www.thomascook.com/

### Requirements

fr01
The component shall provide an option to login on site.

## Approach Refinement

### Verification Approach

Verification will be limited to confirmation that only registered user can login on site.

## Test Procedure Identification &amp; Decomposition

### Test Setup

1. Register 1 user on https://www.thomascook.com/

### Test Scenario

fr01_1 Login with valid user 

Pass/Fail criteria:

1. fr01_1 - the user is login.

```gherkin
Given Test setup
When  registered user login to the web site
Then  the MyAccount page is opened
```

fr01_2 Check login required field

Pass/Fail criteria:

1. fr01_2 - error messages for email and password fields.

```gherkin
Given the user open site
And   click on login button
When  user clicks  login button on login form
Then  the error messages for email and password appeared
```

fr01_3 Login with invalid user

Pass/Fail criteria:

1. fr01_3 - invalid login error messages is appeared.

```gherkin
Given the user open site
And   click on login button
When  user login to the web site with invalid data
Then  the invalid login error messages is appeared
```

fr01_4 Check static context for login form

Pass/Fail criteria:

1. fr01_4 - the email, password, loginBtn, forgotPassword, staticTextAccountBenefits is present.

```gherkin
Given the user open site
When  user opened login form 
Then  the <email>, <password>, <loginBtn>, <forgotPassword>, <staticTextAccountBenefits> is present
```

fr01_5 Check close login form functionality

Pass/Fail criteria:

1. fr01_5 - the login form is closed.

```gherkin
Given the user open site
And   user opened login form
When  user click on close login form 
Then  the login form is closed
```

### Test Clean Up

1. Not necessary.

## Equipment Required

### Test Platform Hardware

- PC with 2,0 GHz CPU and 4 GB of RAM or higher

### Test Platform Software

- Chrome web browser
- Protractor
