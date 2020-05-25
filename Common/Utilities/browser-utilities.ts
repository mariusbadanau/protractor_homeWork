import { browser } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { URLSearchParams } from 'url';

export class BrowserUtilities {

   private getCrUrl() {
        return browser.getCurrentUrl();
    }

    /**
     * urlCotainsString
     */
    public async urlCotainsString(containsStr:string) {
        //const url = await browser.getCurrentUrl();
        const url2 = (await this.getCrUrl()).includes(containsStr);
        if(url2) {
            console.log(`TRUE: the URL contains ${containsStr}`);

            return true;    
        } else {
            console.log(`FALSE: the URL does not contain ${containsStr}`);

            return false;
        }
    }

}
