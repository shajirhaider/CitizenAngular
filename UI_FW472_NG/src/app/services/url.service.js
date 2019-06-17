"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let UrlService = class UrlService {
    constructor() {
        this.LOGIN = 'authenticatePublicUser';
        this.Get_Valid_Street_Types = 'getValidStreetTypes';
        this.Get_Valid_Street_Directions = 'getValidStreetDirections';
        this.Get_Valid_Street = 'getValidStreet';
        this.Search_Property = 'searchProperty';
        this.Search_Folder_By_Property = 'searchFolderByProperty';
        this.Search_Mobile_Sign = 'searchMobileSign';
        this.Update_People_Internet_Password = 'updatePeopleInternetPassword';
        this.Get_People = 'getPeople';
        this.Get_Valid_UnitTypes = 'getValidUnitTypes';
        this.Get_Valid_City = 'getValidCity';
        this.Get_Valid_Provinces = 'getValidProvinces';
        this.Get_Valid_Communities = 'getValidCommunities';
        this.Get_Valid_County = 'getValidCounty';
        this.Get_Valid_Countries = 'getValidCountries';
        this.Update_People = 'updatePeople';
    }
};
UrlService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], UrlService);
exports.UrlService = UrlService;
//# sourceMappingURL=url.service.js.map