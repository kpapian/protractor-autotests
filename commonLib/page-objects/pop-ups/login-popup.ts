import { element, by } from 'protractor';
import { UserModel } from '../../models/user-model';
import { HomePage } from '../home-page';

export class LoginPopup {
    private readonly userEmail = element(by.id('userEmail'));
    private readonly userPassword = element(by.id('userPassword'));
    private readonly loginBtn = element(by.id('LoginBtn')); 
    private readonly emailErrorMessage = element(by.css('#userEmailFormFieldMA p')); 
    private readonly passwordErrorMessage = element(by.css('#userPasswordFormFieldMA p')); 
    private readonly invalidLoginErrorMessage = element(by.css('NotificationLegacy NotificationLegacy'));
    private readonly loginForm = element(by.css('.Modal-content'));
    
    async login(user: UserModel): Promise<HomePage> {
        await this.userEmail.sendKeys(user.userName);
        await this.userPassword.sendKeys(user.password);
        await this.loginBtn.click();
        return new HomePage();
    }

    async typeEmail(email: string): Promise<LoginPopup> {
        await this.userEmail.sendKeys(email);
        return this;
    }

    async typePassword(password: string): Promise<LoginPopup> {
        await this.userPassword.sendKeys(password);
        return this;
    }

    async clickLoginBtn(): Promise<HomePage> {
        await this.loginBtn.click();
        return new HomePage();
    }

    async isEmailErrorMessagePresent(): Promise<LoginPopup> {
        await this.emailErrorMessage.isPresent();
        return new LoginPopup();
    }

    async isLoginFormOpened(): Promise<LoginPopup> {
        await this.loginForm.isPresent();
        return new LoginPopup();
    }

    async isPasswordErrorMessagePresent(): Promise<LoginPopup> {
        await this.passwordErrorMessage.isPresent();
        return new LoginPopup();
    }

    async isInvalidLoginErrorMessagePresent(): Promise<LoginPopup> {
        await this.invalidLoginErrorMessage.isPresent();
        return new LoginPopup();
    }

    async getEmailErrorMessage(): Promise<string> {
        return await this.emailErrorMessage.getText();
    }

    async getPasswordErrorMessage(): Promise<string> {
        return await this.passwordErrorMessage.getText();
    }
}