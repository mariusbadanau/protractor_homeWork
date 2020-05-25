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
exports.BrowserUtilities = void 0;
const protractor_1 = require("protractor");
class BrowserUtilities {
    getCrUrl() {
        return protractor_1.browser.getCurrentUrl();
    }
    /**
     * urlCotainsString
     */
    urlCotainsString(containsStr) {
        return __awaiter(this, void 0, void 0, function* () {
            //const url = await browser.getCurrentUrl();
            const url2 = (yield this.getCrUrl()).includes(containsStr);
            if (url2) {
                console.log(`TRUE: the URL contains ${containsStr}`);
                return true;
            }
            else {
                console.log(`FALSE: the URL does not contain ${containsStr}`);
                return false;
            }
        });
    }
}
exports.BrowserUtilities = BrowserUtilities;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci11dGlsaXRpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJicm93c2VyLXV0aWxpdGllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUM7QUFJckMsTUFBYSxnQkFBZ0I7SUFFbEIsUUFBUTtRQUNYLE9BQU8sb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7O09BRUc7SUFDVSxnQkFBZ0IsQ0FBQyxXQUFrQjs7WUFDNUMsNENBQTRDO1lBQzVDLE1BQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDM0QsSUFBRyxJQUFJLEVBQUU7Z0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsV0FBVyxFQUFFLENBQUMsQ0FBQztnQkFFckQsT0FBTyxJQUFJLENBQUM7YUFDZjtpQkFBTTtnQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO2dCQUU5RCxPQUFPLEtBQUssQ0FBQzthQUNoQjtRQUNMLENBQUM7S0FBQTtDQUVKO0FBdkJELDRDQXVCQyJ9