import { element, by } from 'protractor';

export class LoginPopup {
    private readonly userName = element(by.id('username'));
    private readonly password = element(by.id('password'));
    private readonly loginBtn = element(by.id('loginBtnccc'));
}