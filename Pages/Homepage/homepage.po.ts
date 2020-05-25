import { browser } from 'protractor';

export class Homepage {

    OpenBrowser(url: string) {
        return browser.get(url);
    }
}
