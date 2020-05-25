import { browser } from 'protractor';
import { Homepage } from '../Pages/Homepage/homepage.po';
import { BrowserUtilities } from '../Common/Utilities/browser-utilities';

describe('Start app', () =>{
  const homepageGet = new Homepage;
  const browserUtili = new BrowserUtilities;
  const checkUrl = 'angular';
    it('Should have the correct url', async () => {
       // browser.get('');
       // expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/#/');
      //use the new created files
      await homepageGet.OpenBrowser('');
      //expect(browserUtili.getCrUrl()).toEqual(browser.baseUrl + '/#/');

    });

    //use urlContainingString
    it('The URL should contain the string: ', async () => {
      await homepageGet.OpenBrowser('');
     expect(await browserUtili.urlCotainsString(checkUrl)).toEqual(true);
   });
});