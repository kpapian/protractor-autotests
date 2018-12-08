import { element, by } from 'protractor';
import { LoginPopup } from './pop-ups/login-popup';
import { RegisterPopup } from './pop-ups/register-popup';

export class HomePage {
    private readonly signInBtn = element(by.id('login-link'));  
    private readonly registerBtn = element(by.id('signup-link'));
        
    async clickSignInBtn(): Promise<LoginPopup> {
        await this.signInBtn.click();
        return new LoginPopup();
    } 
        
    async clickRegisterBtn(): Promise<RegisterPopup> {
        await this.registerBtn.click();
        return new RegisterPopup();
    }     
}