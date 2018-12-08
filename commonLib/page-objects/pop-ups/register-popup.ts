import { element, by } from 'protractor';
import { UserRegistrationModel } from '../../models/user-registration-model';

export class RegisterPopup {


    private readonly emailField = element(by.id('emailMA'));
    private readonly passwordField = element(by.id('password'));
    private readonly confirmPasswordField = element(by.id('passwordConfirmation'));
    private readonly registerBtn = element(by.id('signupBtn'));
    private readonly agreeLabel = element(by.id('agreedLabel'));
    private readonly agreeLabelText = element(by.css('#agreedLabel span'));
    private readonly agreeCheckbox = element(by.xpath('.//label[@id="agreedLabel"]'));
    private readonly emailErrorMessage = element(by.css('#emailMAFormFieldMA .FormFieldMA-errorText'));
    private readonly passwordErrorMessage = element(by.css('#passwordFormFieldMA .FormFieldMA-errorText'));
    private readonly confirmPasswordErrorMessage = element(by.css('#passwordConfirmationFormFieldMA .FormFieldMA-errorText'));
    private readonly submit = element(by.css('#passwordConfirmationFormFieldMA .FormFieldMA-errorText'));

    private readonly registerBtnAttribute = 'disabled';

    async register(user: UserRegistrationModel) {
        await this.emailField.sendKeys(user.email);
        await this.passwordField.sendKeys(user.password);
        await this.confirmPasswordField.sendKeys(user.passwordConfirmation);
        await this.registerBtn.click();
    }

    async typeEmail(email: string): Promise<RegisterPopup> {
        await this.emailField.sendKeys(email);
        return this;
    }

    async typePassword(password: string): Promise<RegisterPopup> {
        await this.passwordField.sendKeys(password);
        return this;
    }

    async typeConfirmPassword(confirmPassword: string): Promise<RegisterPopup> {
        await this.confirmPasswordField.sendKeys(confirmPassword);
        return this;
    }

    async clickRegisterBtn() {
        await this.registerBtn.click();
    }

    async isAgreeBlockPresent(): Promise<boolean> {
        return await this.agreeLabel.isPresent();
    }

    async getAgreeText(): Promise<string> {
        return await this.agreeLabelText.getText();
    }

    async clickAgreeCheckbox(): Promise<RegisterPopup> {
        await this.agreeCheckbox.click();
        return this;
    }

    async isEmailErrorMessagePresent(): Promise<boolean> {
        return await this.emailErrorMessage.isPresent();
    }

    async isPasswordErrorMessagePresent(): Promise<boolean> {
        return await this.passwordErrorMessage.isPresent();
    }

    async isConfirmPasswordErrorMessagePresent(): Promise<boolean> {
        return await this.confirmPasswordErrorMessage.isPresent();
    }

    async getEmailErrorMessageTest(): Promise<string> {
        return await this.emailErrorMessage.getText();
    }

    async getPasswordErrorMessageTest(): Promise<string> {
        return await this.passwordErrorMessage.getText();
    }

    async getConfirmPasswordErrorMessageTest(): Promise<string> {
        return await this.confirmPasswordErrorMessage.getText();
    }

    async isRegisterBtnEnable(): Promise<boolean> {
        let btnValue = await this.registerBtn.getAttribute(this.registerBtnAttribute);

        return (btnValue === this.registerBtnAttribute) ? false : true;
    }
}