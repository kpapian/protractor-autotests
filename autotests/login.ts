import { } from 'jasmine';
import { UserModel } from '../commonLib/models/user-model';
import { HomePage } from '../commonLib/page-objects/home-page';
import { Navigation } from '../commonLib/utils/navigation';
import { Environment } from '../commonLib/utils/environment';
import { LoginPopup } from '../commonLib/page-objects/pop-ups/login-popup';

const registeredUser: UserModel = {
    userName: Environment.userEmail,
    password: Environment.userPassword
};
const homePage = new HomePage();
const loginPage = new LoginPopup();
const navigation = new Navigation();

describe('fr01 Login test suite', () => {

    it('fr01_1 Login with valid user', async () => {

        await navigation.goToPage(Environment.baseUrl);
        await navigation.refreshPage();
        await homePage.clickLoginBtn();
        await loginPage.login(registeredUser);  
        
        expect(await homePage.isUserLoggedIn()).toBeTruthy();
    });
})