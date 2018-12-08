import { element, by } from 'protractor';
import { HomePage } from './home-page';

export class MyAccountPage {
    private readonly myAccountBtn = element(by.id('my-account-widget')); 
    private readonly logoutBtn = element(by.xpath('.//account-layout//*[@owat-nav="logout"]')); 

    async logout(): Promise<HomePage> {
        await this.logoutBtn.click();
        return new HomePage();
    }
    
    async isUserLoggedIn(): Promise<boolean> {
        return await this.myAccountBtn.isPresent();
    }
}