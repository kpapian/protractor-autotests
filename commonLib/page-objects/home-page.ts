import { element, by } from 'protractor';

export class HomePage {
    private loginTomasCook = element(by.id('login-link'));
    private nameTomas = element(by.id('userEmail'));
    private passwordTomas = element(by.id('userPassword'));
    private submittTommas = element(by.id('LoginBtn'));   
    
    async clickLoginTomasCook() {
        await this.loginTomasCook.click();
    }

    async loginTomasCook1(name: string, password: string) {
        await this.nameTomas.sendKeys(name);
        await this.passwordTomas.sendKeys(password);
        await this.submittTommas.click();
    }
}