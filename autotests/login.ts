import { browser } from 'protractor';
import { } from 'jasmine';
import { UserModel } from '../commonLib/models/user-model';
import { HomePage } from '../commonLib/page-objects/home-page';
import { Navigation } from '../commonLib/utils/navigation';

const registeredUser: UserModel = {
    userName: '',
    password: ''
};
const homePage = new HomePage();
const navigation = new Navigation();

describe('Login test suite', () => {

    it('Login to Tomas cook', async () => {

        await browser.get('https://www.thomascook.com/');
        await navigation.refreshPage();
        await homePage.clickLoginTomasCook();
        await homePage.loginTomasCook1('', '');
    

    });
})