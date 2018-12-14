import { browser, element, by } from 'protractor';

export class Navigation {
    private readonly body = element(by.css('body'));

    async refreshPage(timeout?: number)  {
        await browser.refresh(timeout);
    } // here hoe to return current page TODO

    async backToPreviousPage()  {
        await browser.navigate().back();
    }

    async goToPage(url: string) {
        await browser.get(url);
        await browser.waitForAngular();       
    }

    async switchFocus() {
        await this.body.click();   
    }
}