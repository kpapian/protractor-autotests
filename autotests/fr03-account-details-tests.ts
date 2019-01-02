import { } from 'jasmine';
import { UserModel } from '../commonLib/models/user-model';
import { HomePage } from '../commonLib/page-objects/home-page';
import { Navigation } from '../commonLib/utils/navigation';
import { Environment } from '../commonLib/utils/environment';
import { LoginPopup } from '../commonLib/page-objects/pop-ups/login-popup';
import { MyAccountPage } from '../commonLib/page-objects/myAccount-page';
import { AccountDetails } from '../commonLib/page-objects/accountDetails-page';
import { Converter } from '../commonLib/utils/converter';
import { AccountDetailsModel } from '../commonLib/models/account-details-model';

//#region Test Preparation 
const FIRST_NAME_ERROR_MESSAGE = 'The First Name given is invalid or incomplete, please review and amend';
const LAST_NAME_ERROR_MESSAGE = 'The Last Name given is invalid or incomplete, please review and amend';
const CITY_ERROR_MESSAGE = 'City given is invalid or incomplete';
const POSTCODE_ERROR_MESSAGE = 'The postcode given is invalid or incomplete. Please review and amend';
const PHONE_NUMBER_ERROR_MESSAGE = 'Contact Number given is invalid or incomplete';
const DETAIL_UPDATED_SUCCESS_MESSAGE = 'Your details have been updated';


const registeredUser: UserModel = {
    userName: Environment.userEmail,
    password: Environment.userPassword
};
const homePage = new HomePage();
const myAccountPage = new MyAccountPage();
const loginPage = new LoginPopup();
const navigation = new Navigation();
const accountDetails = new AccountDetails();

const validDataPath = 'test-data/fr03/fr03_1_validData.json';
const invalidDataPath = 'test-data/fr03/fr03_2_invalidData.json';
const invalidPassword = 'qwerty123';

const accountDetailsValidDataModel = Converter.readFromJson<AccountDetailsModel>(validDataPath);
const accountDetailsInvalidDataModel = Converter.readFromJson<AccountDetailsModel>(invalidDataPath);
//#endregion

describe('**fr03** Account details test suite', () => {

    beforeEach(async () => {
        await navigation.goToPage(Environment.baseUrl);
        await navigation.refreshPage();
        await homePage.clickSignInBtn();
        await loginPage.login(registeredUser);
        await myAccountPage.clickAccountDetails();
    });

    afterEach(async () => {
        await myAccountPage.logout();
    });

    it('**fr03_1** Fill Account details form with valid data', async () => {

        await accountDetails.fillAccountDetailsForm(accountDetailsValidDataModel);
        await accountDetails.typePassword(registeredUser.password);
        await accountDetails.clickSaveChangesBtn();
        
        expect(await accountDetails.isDetailsUpdatedSuccessMessagePresent()).toBeTruthy();
        expect(await accountDetails.getDetailsUpdatedSuccessMessage()).toEqual(DETAIL_UPDATED_SUCCESS_MESSAGE);
    });

    it('**fr03_2** Check error messages on Account details page form fields', async () => {

        await accountDetails.typeFirstName(accountDetailsInvalidDataModel.firstName);
        await accountDetails.typeLastName(accountDetailsInvalidDataModel.lastName);
        await accountDetails.typeCity(accountDetailsInvalidDataModel.city);
        await accountDetails.selectCountry();
        await accountDetails.typePostCode(accountDetailsInvalidDataModel.postCode);
        await accountDetails.typePhoneNumber(accountDetailsInvalidDataModel.phoneNumber);
        await navigation.switchFocus();

        expect(await accountDetails.getFirstNameErrorMessage()).toEqual(FIRST_NAME_ERROR_MESSAGE);
        expect(await accountDetails.getLastNameErrorMessage()).toEqual(LAST_NAME_ERROR_MESSAGE);
        expect(await accountDetails.getCityErrorMessage()).toEqual(CITY_ERROR_MESSAGE);
        expect(await accountDetails.getPostcodeErrorMessage()).toEqual(POSTCODE_ERROR_MESSAGE);
        expect(await accountDetails.getPhoneNumberErrorMessage()).toEqual(PHONE_NUMBER_ERROR_MESSAGE);       

    });

    it('**fr03_3** Add valid data on Account details page form with invalid password', async () => {

        await accountDetails.fillAccountDetailsForm(accountDetailsValidDataModel);
        await accountDetails.typePassword(invalidPassword);
        await accountDetails.clickSaveChangesBtn();

        expect(await accountDetails.isPasswordNotificationErrorPresent()).toBeTruthy();
    });
})