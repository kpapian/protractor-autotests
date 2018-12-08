import { } from 'jasmine';
import { HomePage } from '../commonLib/page-objects/home-page';
import { Navigation } from '../commonLib/utils/navigation';
import { Environment } from '../commonLib/utils/environment';
import { RegisterPopup } from '../commonLib/page-objects/pop-ups/register-popup';
import { UserRegistrationModel } from '../commonLib/models/user-registration-model';
import { browser, Key } from 'protractor';

const ERROR_MESSAGE_EMAIL = 'Please enter a valid email address';
const ERROR_MESSAGE_PASSWORD = 'Must contain a minimum of 8 characters; 1 capital and 1 lowercase letter, and 1 number';
const ERROR_MESSAGE_CONFIRM_PASSWORD = 'The passwords do not match';
const AGREE_TEXT = 'I have read and agree to the Site Terms and Conditions and Privacy Policy';

const invalidUserRegistrationData: UserRegistrationModel[] = [
    new UserRegistrationModel('anna', '12345', '44'),
    new UserRegistrationModel(Key.SPACE, Key.SPACE, Key.SPACE),
];

const homePage = new HomePage();
const registerPage = new RegisterPopup();
const navigation = new Navigation();

describe('**fr02** Registration test suite', () => {

    beforeEach(async () => {
        await navigation.goToPage(Environment.baseUrl);
        await navigation.refreshPage();
    });

    for (const invalidData of invalidUserRegistrationData) {
        it(`**fr02_1** Check registration form fields error messages`, async () => {

            await homePage.clickRegisterBtn();
            await registerPage.typeEmail(invalidData.email);
            await registerPage.typePassword(invalidData.password);
            await registerPage.typeConfirmPassword(invalidData.passwordConfirmation);

            expect(await registerPage.isEmailErrorMessagePresent()).toBeTruthy();
            expect(await registerPage.isPasswordErrorMessagePresent()).toBeTruthy();
            expect(await registerPage.isConfirmPasswordErrorMessagePresent()).toBeTruthy();

            expect(await registerPage.getEmailErrorMessageTest()).toEqual(ERROR_MESSAGE_EMAIL);
            expect(await registerPage.getPasswordErrorMessageTest()).toEqual(ERROR_MESSAGE_PASSWORD);
            expect(await registerPage.getConfirmPasswordErrorMessageTest()).toEqual(ERROR_MESSAGE_CONFIRM_PASSWORD);
        });
    }

    it(`**fr02_2** Check registration form 'I agree' checkbox`, async () => {

        await homePage.clickRegisterBtn();

        expect(await registerPage.isAgreeBlockPresent()).toBeTruthy();
        expect(await registerPage.getAgreeText()).toEqual(AGREE_TEXT);
    });

    it(`**fr02_3** Check registration button`, async () => {

        await homePage.clickRegisterBtn();
        expect(await registerPage.isRegisterBtnEnable()).toBeFalsy();
        await registerPage.clickAgreeCheckbox();
        
        expect(await registerPage.isRegisterBtnEnable()).toBeTruthy();
    });


})