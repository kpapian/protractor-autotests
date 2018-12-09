import { } from 'jasmine';
import { UserModel } from '../commonLib/models/user-model';
import { HomePage } from '../commonLib/page-objects/home-page';
import { Navigation } from '../commonLib/utils/navigation';
import { Environment } from '../commonLib/utils/environment';
import { LoginPopup } from '../commonLib/page-objects/pop-ups/login-popup';
import { MyAccountPage } from '../commonLib/page-objects/myAccount-page';
import { AccountDetails } from '../commonLib/page-objects/accountDetails-page';

const registeredUser: UserModel = {
    userName: Environment.userEmail,
    password: Environment.userPassword
};
const homePage = new HomePage();
const myAccountPage = new MyAccountPage();
const loginPage = new LoginPopup();
const navigation = new Navigation();
const accountDetails = new AccountDetails();

fdescribe('**fr03** Account details test suite', () => {

    beforeEach(async () => {
        await navigation.goToPage(Environment.baseUrl);
        await navigation.refreshPage();
    });

    it('**fr03_1** Fill Account details form with valid data', async () => {

        await homePage.clickSignInBtn();
        await loginPage.login(registeredUser);
        await myAccountPage.clickAccountDetails();

    }); 
    
    fit('**fr03_2** Check error messages on Account details page form fields', async () => {

        await homePage.clickSignInBtn();
        await loginPage.login(registeredUser);
        await myAccountPage.clickAccountDetails();

    }); 

    it('**fr03_3** Add valid data on Account details page form with invalid password', async () => {

        await homePage.clickSignInBtn();
        await loginPage.login(registeredUser);
        await myAccountPage.clickAccountDetails();

    });
})