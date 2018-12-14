import { element, by } from 'protractor';
import { Title } from '../enum/title';
import { AccountDetailsModel } from '../models/account-details-model';

export class AccountDetails {
    private readonly title = element(by.id('mat-select-0'));
    private readonly titleMr = element(by.id('mat-option-0'));
    private readonly titleMrs = element(by.id('mat-option-1'));
    private readonly titleMs = element(by.id('mat-option-2'));
    private readonly titleMiss = element(by.id('mat-option-3'));
    private readonly firstName = element(by.id('mat-input-2'));
    private readonly lastName = element(by.id('mat-input-3'));
    private readonly streetAddress = element(by.id('mat-input-7'));
    private readonly addressLine2 = element(by.id('mat-input-8'));
    private readonly city = element(by.id('mat-input-10'));
    private readonly postCode = element(by.id('mat-input-9'));
    private readonly country = element(by.xpath('.//*[@formcontrolname="country"]'));
    private readonly countrySelect = element(by.id('mat-option-4'));
    private readonly phoneNumber = element(by.id('mat-input-4'));
    private readonly password = element(by.id('mat-input-5'));

    private readonly firstNameErrorMessage = element(by.xpath('.//mat-error[@owat-err-firstname]'));
    private readonly lastNameErrorMessage = element(by.xpath('.//mat-error[@owat-err-lastname]'));
    private readonly cityErrorMessage = element(by.xpath('.//mat-error[@owat-err-city]'));
    private readonly phoneNumberErrorMessage = element(by.xpath('.//mat-error[@owat-err-phone]'));
    private readonly postCodeNumberErrorMessage = element(by.xpath('.//mat-error[@owat-err-postalcode]'));
    private readonly passwordErrorMessage = element(by.xpath('.//mat-error[@owat-err-password]'));
    private readonly passwordNotificationError = element(by.xpath('.//notification'));
    private readonly saveChangesBtn = element(by.css('button.g-wide'));
    private readonly savedAccountDetailsSuccessMessage = element(by.css('.notification--success'));

    async fillAccountDetailsForm(accountDetails: AccountDetailsModel): Promise<AccountDetails> {
        if (accountDetails != null) {
            await this.selectTitle(accountDetails.title as any as Title);
            await this.typeFirstName(accountDetails.firstName);
            await this.typeLastName(accountDetails.lastName);
            await this.typeStreetAddress(accountDetails.streetAddress);
            await this.typeAddressLine2(accountDetails.addressLine2);
            await this.typeCity(accountDetails.city);
            await this.typePostCode(accountDetails.postCode);
            await this.selectCountry();            
            await this.typePhoneNumber(accountDetails.phoneNumber);
            return this; // todo if smth null from model
        }
    }

    async selectTitle(title: Title): Promise<AccountDetails> {
        await this.title.click();
        switch (title) {
            case Title.Mr:
                await this.titleMr.click();
                break;
            case Title.Mrs:
                await this.titleMrs.click();
                break;
            case Title.Ms:
                await this.titleMs.click();
                break;
            case Title.Miss:
                await this.titleMiss.click();
                break;
            default:
                throw new Error('Unknown title');
        }
        return this;
    }

    async typeFirstName(firstName: string): Promise<AccountDetails> {
        await this.firstName.clear();
        await this.firstName.sendKeys(firstName);
        return this;
    }

    async typeLastName(lastName: string): Promise<AccountDetails> {
        await this.lastName.clear();
        await this.lastName.sendKeys(lastName);
        return this;
    }

    async typeStreetAddress(streetAddress: string): Promise<AccountDetails> {
        await this.streetAddress.clear();
        await this.streetAddress.sendKeys(streetAddress);
        return this;
    }

    async typeAddressLine2(addressLine2: string): Promise<AccountDetails> {
        await this.addressLine2.clear();
        await this.addressLine2.sendKeys(addressLine2);
        return this;
    }

    async typeCity(city: string): Promise<AccountDetails> {
        await this.city.clear();
        await this.city.sendKeys(city);
        return this;
    }

    async typePostCode(postCode: string): Promise<AccountDetails> {
        await this.postCode.clear();
        await this.postCode.sendKeys(postCode);
        return this;
    }

    async selectCountry(): Promise<AccountDetails> {
        await this.country.click();
        await this.countrySelect.click();
        return this;
    }

    async typePhoneNumber(phoneNumber: string): Promise<AccountDetails> {
        await this.phoneNumber.clear();
        await this.phoneNumber.sendKeys(phoneNumber);
        return this;
    }

    async typePassword(password: string): Promise<AccountDetails> {
        await this.password.clear();
        await this.password.sendKeys(password);
        return this;
    }

    async clickSaveChangesBtn() {
        await this.saveChangesBtn.click();
    }

    async getFirstNameErrorMessage(): Promise<string> {
        return await this.firstNameErrorMessage.getText();
    }

    async getLastNameErrorMessage(): Promise<string> {
        return await this.lastNameErrorMessage.getText();
    }

    async getCityErrorMessage(): Promise<string> {
        return await this.cityErrorMessage.getText();
    }

    async getPhoneNumberErrorMessage(): Promise<string> {
        return await this.phoneNumberErrorMessage.getText();
    }

    async getPostcodeErrorMessage(): Promise<string> {
        return await this.postCodeNumberErrorMessage.getText();
    }

    async getPasswordErrorMessage(): Promise<string> {
        return await this.passwordErrorMessage.getText();
    }

    async isPasswordNotificationErrorPresent(): Promise<boolean> {
        return await this.passwordNotificationError.isPresent();
    }

    async getPasswordNotificationError(): Promise<string> {
        return await this.passwordNotificationError.getText();
    }

    async isDetailsUpdatedSuccessMessagePresent(): Promise<boolean> {
        return await this.savedAccountDetailsSuccessMessage.isPresent();
    }

    async getDetailsUpdatedSuccessMessage(): Promise<string> {
        return await this.savedAccountDetailsSuccessMessage.getText();
    }
}