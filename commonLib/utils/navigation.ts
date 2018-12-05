import { browser } from "protractor";

export class Navigation {

    async refreshPage(timeout?: number)  {
        await browser.refresh(timeout);
    } // here hoe to return current page TODO

    async backToPreviousPage()  {
        await browser.navigate().back();
    }

    async goToPage<T>(url: string) {
        await browser.get(url);
        await browser.waitForAngular();       
    } // make it generic   TODO
}