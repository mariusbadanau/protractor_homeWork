"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const homepage_po_1 = require("../Pages/Homepage/homepage.po");
const browser_utilities_1 = require("../Common/Utilities/browser-utilities");
describe('Start app', () => {
    const homepageGet = new homepage_po_1.Homepage;
    const browserUtili = new browser_utilities_1.BrowserUtilities;
    const checkUrl = 'angular';
    it('Should have the correct url', () => __awaiter(void 0, void 0, void 0, function* () {
        // browser.get('');
        // expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/#/');
        //use the new created files
        yield homepageGet.OpenBrowser('');
        //expect(browserUtili.getCrUrl()).toEqual(browser.baseUrl + '/#/');
    }));
    //use urlContainingString
    it('The URL should contain the string: ', () => __awaiter(void 0, void 0, void 0, function* () {
        yield homepageGet.OpenBrowser('');
        expect(yield browserUtili.urlCotainsString(checkUrl)).toEqual(true);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2Uuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWVwYWdlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSwrREFBeUQ7QUFDekQsNkVBQXlFO0FBRXpFLFFBQVEsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFO0lBQ3pCLE1BQU0sV0FBVyxHQUFHLElBQUksc0JBQVEsQ0FBQztJQUNqQyxNQUFNLFlBQVksR0FBRyxJQUFJLG9DQUFnQixDQUFDO0lBQzFDLE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQztJQUN6QixFQUFFLENBQUMsNkJBQTZCLEVBQUUsR0FBUyxFQUFFO1FBQzFDLG1CQUFtQjtRQUNuQixvRUFBb0U7UUFDckUsMkJBQTJCO1FBQzNCLE1BQU0sV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQyxtRUFBbUU7SUFFckUsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILHlCQUF5QjtJQUN6QixFQUFFLENBQUMscUNBQXFDLEVBQUUsR0FBUyxFQUFFO1FBQ25ELE1BQU0sV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsTUFBTSxZQUFZLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEUsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDQUFDIn0=