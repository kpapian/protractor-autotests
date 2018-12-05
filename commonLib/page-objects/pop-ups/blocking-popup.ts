import { element, by } from 'protractor';

export class BlockingPopup {

    private blockingForm = element(by.id('e108742-promo-lightbox'));
    private blockingFormCloseBtn = element(by.css('#e108742-promo-lightbox span'));

    async closeBlockingPopup() {
        if(await this.blockingForm.isPresent())
        {
            await this.blockingForm.click();
        }
    }
}