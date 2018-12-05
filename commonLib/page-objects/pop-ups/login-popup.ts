import { element, by } from 'protractor';
import { UserModel } from '../../models/user-model';
import { HomePage } from '../home-page';

export class LoginPopup {
    private readonly userEmail = element(by.id('userEmail'));
    private readonly userPassword = element(by.id('userPassword'));
    private readonly loginBtn = element(by.id('LoginBtn')); 
    
    async login(user: UserModel): Promise<HomePage> {
        await this.userEmail.sendKeys(user.userName);
        await this.userPassword.sendKeys(user.password);
        await this.loginBtn.click();
        return new HomePage();
    }
}