import { } from 'jasmine';
import { UserModel } from '../commonLib/models/user-model';
import { HomePage } from '../commonLib/page-objects/home-page';
import { Navigation } from '../commonLib/utils/navigation';
import { Environment } from '../commonLib/utils/environment';
import { LoginPopup } from '../commonLib/page-objects/pop-ups/login-popup';
import { browser } from 'protractor';

const ERROR_MESSAGE_EMAIL = 'Please enter a valid email address';
const ERROR_MESSAGE_PASSWORD = 'Must contain a minimum of 8 characters; 1 capital and 1 lowercase letter, and 1 number';
const ACCOUNT_BENEFIT_TITLE = 'Use My Account to:';

const invalidUserData: UserModel[] = [
    new UserModel(Environment.userEmail, '12345'),
    new UserModel('qwerty', Environment.userPassword),
    new UserModel('qwer@mail.ua', '123456'),
];

const registeredUser: UserModel = {
    userName: Environment.userEmail,
    password: Environment.userPassword
};
const homePage = new HomePage();
const loginPage = new LoginPopup();
const navigation = new Navigation();

describe('**fr01** Login test suite', () => {

    beforeEach(async () => {
        await navigation.goToPage(Environment.baseUrl);
        await navigation.refreshPage();
    });

    // afterEach(async () => {
    //     await navigation.tryLogout();
    // });

    it('**fr01_1** Login with valid user', async () => {

        await homePage.clickSignInBtn();
        await loginPage.login(registeredUser);

        expect(await homePage.isUserLoggedIn()).toBeTruthy();
    });

    it('**fr01_2** Check login required field', async () => {

        await homePage.clickSignInBtn();
        await loginPage.clickLoginBtn();

        expect(await loginPage.isEmailErrorMessagePresent()).toBeTruthy();
        expect(await loginPage.isPasswordErrorMessagePresent()).toBeTruthy();

        expect(await loginPage.getEmailErrorMessageText()).toEqual(ERROR_MESSAGE_EMAIL);
        expect(await loginPage.getPasswordErrorMessageText()).toEqual(ERROR_MESSAGE_PASSWORD);

    });

    for (const invalidUser of invalidUserData) {
        it(`**fr01_3** Login with invalid user - email:${ invalidUser.userName} password:${invalidUser.password}`, async () => {

            await homePage.clickSignInBtn();
            await loginPage.login(invalidUser);

            expect(await loginPage.isInvalidLoginErrorMessagePresent()).toBeTruthy();
        });
    }

    it('**fr01_4** Check static context for login form', async () => {

        await homePage.clickSignInBtn();

        expect(await loginPage.isLoginFormOpened()).toBeTruthy();
        expect(await loginPage.isEmailFieldPresent()).toBeTruthy();
        expect(await loginPage.isPasswordFieldPresent()).toBeTruthy();
        expect(await loginPage.isLoginBtnPresent()).toBeTruthy();
        expect(await loginPage.isForgotYourPasswordLinkPresent()).toBeTruthy();        
        expect(await loginPage.isAccountBenefitsTitlePresent()).toBeTruthy();
        expect(await loginPage.getAccountBenefitsTitleText()).toEqual(ACCOUNT_BENEFIT_TITLE);
    });

    it('**fr01_5** Check close login form functionality', async () => {

        await homePage.clickSignInBtn();
        await loginPage.clickCloseLoginFormBtn();
           
        expect(await loginPage.isLoginFormClosed()).toBeFalsy();
    });
})