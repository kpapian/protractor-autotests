import { element, by } from 'protractor';
import { UserModel } from '../../models/user-model';
import { HomePage } from '../home-page';
import { MyAccountPage } from '../myAccount-page';

export class LoginPopup {
    private readonly emailField = element(by.id('userEmail'));
    private readonly passwordField = element(by.id('userPassword'));
    private readonly loginBtn = element(by.id('LoginBtn'));
    private readonly emailErrorMessage = element(by.css('#userEmailFormFieldMA p'));
    private readonly passwordErrorMessage = element(by.css('#userPasswordFormFieldMA p'));
    private readonly invalidLoginErrorMessage = element(by.css('.NotificationLegacy--large'));
    private readonly loginForm = element(by.css('.Modal-content'));
    private readonly forgotYourPasswordLink = element(by.id('forgottenPassword'));
    private readonly closeLoginFormBtn = element(by.css('.Modal-close'));
    private readonly accountBenefitsTitle = element(by.css('account-benefits h2'));

    async login(user: UserModel): Promise<MyAccountPage> {
        await this.emailField.sendKeys(user.userName);
        await this.passwordField.sendKeys(user.password);
        await this.loginBtn.click();
        return new MyAccountPage();
    }

    async typeEmail(email: string): Promise<LoginPopup> {
        await this.emailField.sendKeys(email);
        return this;
    }

    async typePassword(password: string): Promise<LoginPopup> {
        await this.passwordField.sendKeys(password);
        return this;
    }

    async clickLoginBtn(): Promise<MyAccountPage> {
        await this.loginBtn.click();
        return new MyAccountPage();
    }

    async clickCloseLoginFormBtn(): Promise<HomePage> {
        await this.closeLoginFormBtn.click();
        return new HomePage();
    }

    async isEmailErrorMessagePresent(): Promise<boolean> {
        return await this.emailErrorMessage.isPresent();
    }

    async isLoginFormOpened(): Promise<boolean> {
        return await this.loginForm.isPresent();
    }

    async isPasswordErrorMessagePresent(): Promise<boolean> {
        return await this.passwordErrorMessage.isPresent();
    }

    async isInvalidLoginErrorMessagePresent(): Promise<boolean> {
        return await this.invalidLoginErrorMessage.isPresent();
    }

    async getEmailErrorMessageText(): Promise<string> {
        return await this.emailErrorMessage.getText();
    }

    async getPasswordErrorMessageText(): Promise<string> {
        return await this.passwordErrorMessage.getText();
    }

    async isLoginBtnPresent(): Promise<boolean> {
        return await this.loginBtn.isPresent();
    }

    async isEmailFieldPresent(): Promise<boolean> {
        return await this.emailField.isPresent();
    }

    async isPasswordFieldPresent(): Promise<boolean> {
        return await this.passwordField.isPresent();
    }

    async isForgotYourPasswordLinkPresent(): Promise<boolean> {
        return await this.forgotYourPasswordLink.isPresent();
    }

    async isAccountBenefitsTitlePresent(): Promise<boolean> {
        return await this.accountBenefitsTitle.isPresent();
    }

    async getAccountBenefitsTitleText(): Promise<string> {
        return await this.accountBenefitsTitle.getText();
    }

    async isLoginFormClosed(): Promise<boolean> {
        return await this.loginForm.isPresent();
    }
}