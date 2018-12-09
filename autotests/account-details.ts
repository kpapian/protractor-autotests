import { } from 'jasmine';
import { UserModel } from '../commonLib/models/user-model';
import { HomePage } from '../commonLib/page-objects/home-page';
import { Navigation } from '../commonLib/utils/navigation';
import { Environment } from '../commonLib/utils/environment';
import { LoginPopup } from '../commonLib/page-objects/pop-ups/login-popup';
import { MyAccountPage } from '../commonLib/page-objects/myAccount-page';
import { AccountDetails } from '../commonLib/page-objects/accountDetails-page';

const ERROR_MESSAGE_EMAIL = 'Please enter a valid email address';
const ERROR_MESSAGE_PASSWORD = 'Must contain a minimum of 8 characters; 1 capital and 1 lowercase letter, and 1 number';
const ACCOUNT_BENEFIT_TITLE = 'Use My Account to:';

const invalidUserData: UserModel[] = [
    new UserModel(Environment.userEmail, '12345'),
    new UserModel('qwerty@mail.ua', Environment.userPassword),
    new UserModel('qwer@mail.ua', '123456'),
];

const registeredUser: UserModel = {
    userName: Environment.userEmail,
    password: Environment.userPassword
};
const homePage = new HomePage();
const myAccountPage = new MyAccountPage();
const loginPage = new LoginPopup();
const navigation = new Navigation();
const accountDetails = new AccountDetails();

describe('**fr03** Account details test suite', () => {

    beforeEach(async () => {
        await navigation.goToPage(Environment.baseUrl);
        await navigation.refreshPage();
    });

    it('**fr03_1** Account details', async () => {

        await homePage.clickSignInBtn();
        await loginPage.login(registeredUser);
        await myAccountPage.clickAccountDetails();
    });  
})