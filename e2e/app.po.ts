import { browser, element, by } from 'protractor';

export class AngularTrufflePage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderText() {
    return element(by.css('h1')).getText();
  }
}
