import { element, by } from 'protractor';
import { LoginPopup } from './pop-ups/login-popup';

export class HomePage {
    private readonly loginBtn = element(by.id('login-link'));  
    private readonly myAccountBtn = element(by.id('loggedInHeader')); 
    
    async clickLoginBtn(): Promise<LoginPopup> {
        await this.loginBtn.click();
        return new LoginPopup();
    }   

    async isUserLoggedIn(): Promise<boolean> {
        return await this.myAccountBtn.isPresent();
    } 
}