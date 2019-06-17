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
const forms_1 = require("@angular/forms");
const http_service_1 = require("./../../services/http.service");
const url_service_1 = require("./../../services/url.service");
const loader_service_1 = require("./../../services/loader.service");
const local_storage_service_1 = require("./../../services/local-storage.service");
const operators_1 = require("rxjs/operators");
let UpdatePersonalInfoComponent = class UpdatePersonalInfoComponent {
    constructor(httpService, url, loaderService, storage) {
        this.httpService = httpService;
        this.url = url;
        this.loaderService = loaderService;
        this.storage = storage;
        this.updateInfo = new forms_1.FormGroup({
            addrStreet: new forms_1.FormControl(''),
            addrStreetType: new forms_1.FormControl(''),
            addrStreetDirection: new forms_1.FormControl(''),
            addrStreetPrefix: new forms_1.FormControl(''),
            addrPrefix: new forms_1.FormControl(''),
            addrCity: new forms_1.FormControl(''),
            addrCountry: new forms_1.FormControl(''),
            addrProvince: new forms_1.FormControl(''),
            addrHouse: new forms_1.FormControl(''),
            addrPostal: new forms_1.FormControl(''),
            addrUnit: new forms_1.FormControl(''),
            addrUnitType: new forms_1.FormControl(''),
            addressLine1: new forms_1.FormControl(''),
            addressLine2: new forms_1.FormControl(''),
            addressLine3: new forms_1.FormControl(''),
            addressLine4: new forms_1.FormControl(''),
            addressLine5: new forms_1.FormControl(''),
            addressLine6: new forms_1.FormControl(''),
            community: new forms_1.FormControl(''),
            internetAccess: new forms_1.FormControl(''),
        });
        this.countryList = [];
    }
    ngOnInit() {
        this.getValidStreetType();
        this.getValidStreetDirections();
        this.getValidStreet();
        this.getValidUnitTypes();
        this.getVaildCity();
        this.getVaildProvince();
        this.getVaildCounty();
        this.getVaildCommutinites();
        this.getValidCountry();
    }
    getValidStreetType() {
        this.loaderService.display(true);
        let lid = "";
        if (this.storage.getItem("lid")) {
            lid = this.storage.getItem("lid");
        }
        else {
            lid = "";
        }
        let body = {
            "token": "amandaportal",
            "lid": lid
        };
        this.httpService.post(this.url.Get_Valid_Street_Types, body)
            .subscribe((response) => {
            this.streetTypes = response["body"];
            this.filteredStreetTypes = this.updateInfo.get('addrStreetType').valueChanges
                .pipe(operators_1.startWith(''), operators_1.map(value => typeof value === 'string' ? value : value.id), operators_1.map(name => name ? this._filterStreetType(name) : this.streetTypes.slice()));
        }, (error) => console.log(error));
    }
    getValidStreetDirections() {
        let lid = "";
        if (this.storage.getItem("lid")) {
            lid = this.storage.getItem("lid");
        }
        else {
            lid = "";
        }
        let body = {
            "token": "amandaportal",
            "lid": lid
        };
        this.httpService.post(this.url.Get_Valid_Street_Directions, body)
            .subscribe((response) => {
            this.streetDirections = response["body"];
            this.filteredstreetDirection = this.updateInfo.get('addrStreetDirection').valueChanges
                .pipe(operators_1.startWith(''), operators_1.map(value => typeof value === 'string' ? value : value.addressDirection), operators_1.map(name => name ? this._filterStreetDirection(name) : this.streetDirections.slice()));
        }, (error) => console.log(error));
    }
    getValidStreet() {
        let lid = "";
        if (this.storage.getItem("lid")) {
            lid = this.storage.getItem("lid");
        }
        else {
            lid = "";
        }
        let body = {
            "token": "amandaportal",
            "lid": lid
        };
        this.httpService.post(this.url.Get_Valid_Street, body)
            .subscribe((response) => {
            this.streetNames = response["body"];
            this.filteredStreetNames = this.updateInfo.get('addrStreet').valueChanges
                .pipe(operators_1.startWith(''), operators_1.map(value => typeof value === 'string' ? value : value.propStreet), operators_1.map(name => name ? this._filterStreetName(name) : this.streetNames.slice()));
            console.log(this.streetNames);
            this.getPeople();
        }, (error) => console.log(error));
    }
    getValidUnitTypes() {
        let lid = "";
        if (this.storage.getItem("lid")) {
            lid = this.storage.getItem("lid");
        }
        else {
            lid = "";
        }
        let body = {
            "token": "amandaportal",
            "lid": lid
        };
        this.httpService.post(this.url.Get_Valid_UnitTypes, body)
            .subscribe((response) => {
            this.unitTypes = response["body"];
            this.filteredUnitTypes = this.updateInfo.get('addrUnitType').valueChanges
                .pipe(operators_1.startWith(''), operators_1.map(value => typeof value === 'string' ? value : value.addressUnitType), operators_1.map(name => name ? this._filterUnitType(name) : this.unitTypes.slice()));
        }, (error) => console.log(error));
    }
    getVaildCity() {
        let lid = "";
        if (this.storage.getItem("lid")) {
            lid = this.storage.getItem("lid");
        }
        else {
            lid = "";
        }
        let body = {
            "token": "amandaportal",
            "lid": lid
        };
        this.httpService.post(this.url.Get_Valid_City, body)
            .subscribe((response) => {
            this.city = response["body"];
            this.filteredCity = this.updateInfo.get('addrCity').valueChanges
                .pipe(operators_1.startWith(''), operators_1.map(value => typeof value === 'string' ? value : value.city), operators_1.map(name => name ? this._filterCity(name) : this.city.slice()));
        }, (error) => console.log(error));
    }
    getVaildProvince() {
        let lid = "";
        if (this.storage.getItem("lid")) {
            lid = this.storage.getItem("lid");
        }
        else {
            lid = "";
        }
        let body = {
            "token": "amandaportal",
            "lid": lid
        };
        this.httpService.post(this.url.Get_Valid_Provinces, body)
            .subscribe((response) => {
            this.province = response["body"];
            this.filteredProvince = this.updateInfo.get('addrProvince').valueChanges
                .pipe(operators_1.startWith(''), operators_1.map(value => typeof value === 'string' ? value : value.provinceName), operators_1.map(name => name ? this._filterProvince(name) : this.province.slice()));
        }, (error) => console.log(error));
    }
    getVaildCounty() {
        let lid = "";
        if (this.storage.getItem("lid")) {
            lid = this.storage.getItem("lid");
        }
        else {
            lid = "";
        }
        let body = {
            "token": "amandaportal",
            "lid": lid
        };
        this.httpService.post(this.url.Get_Valid_County, body)
            .subscribe((response) => {
            this.county = response["body"];
            this.filteredCounty = this.updateInfo.get('addrProvince').valueChanges
                .pipe(operators_1.startWith(''), operators_1.map(value => typeof value === 'string' ? value : value.provinceName), operators_1.map(name => name ? this._filterProvince(name) : this.province.slice()));
        }, (error) => console.log(error));
    }
    getVaildCommutinites() {
        let lid = "";
        if (this.storage.getItem("lid")) {
            lid = this.storage.getItem("lid");
        }
        else {
            lid = "";
        }
        let body = {
            "token": "amandaportal",
            "lid": lid
        };
        this.httpService.post(this.url.Get_Valid_Communities, body)
            .subscribe((response) => {
            this.community = response["body"];
            this.filteredCommunity = this.updateInfo.get('addrProvince').valueChanges
                .pipe(operators_1.startWith(''), operators_1.map(value => typeof value === 'string' ? value : value.provinceName), operators_1.map(name => name ? this._filterProvince(name) : this.province.slice()));
        }, (error) => console.log(error));
    }
    getPeople() {
        let lid = "";
        if (this.storage.getItem("lid")) {
            lid = this.storage.getItem("lid");
        }
        else {
            lid = "";
        }
        let body = {
            "token": "amandaportal",
            "lid": lid,
            "peopleRSN": +this.storage.getItem("peopleRSN")
        };
        this.httpService.post(this.url.Get_People, body)
            .subscribe((response) => {
            this.updateInfo.patchValue(response["body"]);
            this.peopleData = response["body"];
            this.streetNameObj(response["body"]["addrStreet"]);
            this.streetTypeObj(response["body"]["addrStreetType"]);
            this.streetDirectionObj(response["body"]["addrStreetDirection"]);
            this.cityObj(response["body"]["addrCity"]);
            this.provinceObj(response["body"]["addrProvince"]);
            this.countryObj(response["body"]["addrCountry"]);
            this.organizationName = response["body"]["organizationName"];
            this.name = response["body"]["nameFirst"] + " " + response["body"]["nameMiddle"] + " " + response["body"]["nameLast"];
            this.phone1 = response["body"]["phone1"];
            this.emailAddress = response["body"]["emailAddress"];
            this.loaderService.display(false);
        }, (error) => console.log(error));
    }
    getValidCountry() {
        let lid = "";
        if (this.storage.getItem("lid")) {
            lid = this.storage.getItem("lid");
        }
        else {
            lid = "";
        }
        let body = {
            "token": "amandaportal",
            "lid": lid
        };
        this.httpService.post(this.url.Get_Valid_Countries, body)
            .subscribe((response) => {
            this.countryList = response["body"];
            this.filteredCountry = this.updateInfo.get('addrCountry').valueChanges
                .pipe(operators_1.startWith(''), operators_1.map(value => typeof value === 'string' ? value : value.countryName), operators_1.map(name => name ? this._filterCountry(name) : this.countryList.slice()));
        }, (error) => console.log(error));
    }
    updatePeople() {
        this.loaderService.display(true);
        let body = this.modifier(this.updateInfo);
        console.log("body", body);
        this.httpService.post(this.url.Update_People, body)
            .subscribe((response) => {
            console.log(response);
            this.loaderService.display(false);
        }, (error) => console.log(error));
    }
    modifier(data) {
        let obj = data.value;
        this.peopleData["addrStreet"] = obj.addrStreet.propStreet,
            this.peopleData["addrStreetType"] = obj.addrStreetType.id,
            this.peopleData["addrStreetDirection"] = obj.addrStreetDirection.addressDirection,
            this.peopleData["addrStreetPrefix"] = obj.addrStreetPrefix,
            this.peopleData["addrPrefix"] = obj.addrPrefix,
            this.peopleData["addrCity"] = obj.addrCity.city,
            this.peopleData["addrCountry"] = obj.addrCountry.countryCode,
            this.peopleData["addrProvince"] = obj.addrProvince.provinceType,
            this.peopleData["addrHouse"] = obj.addrHouse,
            this.peopleData["addrPostal"] = obj.addrPostal,
            this.peopleData["addrUnit"] = obj.addrUnit,
            this.peopleData["addrUnitType"] = obj.addrUnitType,
            this.peopleData["addressLine1"] = obj.addressLine1,
            this.peopleData["addressLine2"] = obj.addressLine2,
            this.peopleData["addressLine3"] = obj.addressLine3,
            this.peopleData["addressLine4"] = obj.addressLine4,
            this.peopleData["addressLine5"] = obj.addressLine5,
            this.peopleData["addressLine6"] = obj.addressLine6,
            this.peopleData["community"] = obj.community,
            this.peopleData["internetAccess"] = obj.internetAccess;
        let body = {
            "lid": this.storage.getItem("lid"),
            "token": 'amandaportal',
            "data": this.peopleData
        };
        return body;
    }
    streetNameObj(val) {
        this.streetNames.forEach((iter) => {
            if (iter.propStreet === val) {
                this.updateInfo.get("addrStreet").setValue(iter);
                return;
            }
        });
    }
    streetTypeObj(val) {
        this.streetTypes.forEach((iter) => {
            if (iter.id === val) {
                this.updateInfo.get("addrStreetType").setValue(iter);
                return;
            }
        });
    }
    streetDirectionObj(val) {
        this.streetDirections.forEach((iter) => {
            if (iter.addressDirection === val) {
                this.updateInfo.get("addrStreetDirection").setValue(iter);
                return;
            }
        });
    }
    cityObj(val) {
        this.city.forEach((iter) => {
            if (iter.city === val) {
                this.updateInfo.get("addrCity").setValue(iter);
                return;
            }
        });
    }
    provinceObj(val) {
        this.province.forEach((iter) => {
            if (iter.provinceType === val) {
                this.updateInfo.get("addrProvince").setValue(iter);
                return;
            }
        });
    }
    countryObj(val) {
        this.countryList.forEach((iter) => {
            if (iter.countryCode === val) {
                this.updateInfo.get("addrCountry").setValue(iter);
                return;
            }
        });
    }
    displayfilterStreetType(type) {
        return type ? type.description : undefined;
    }
    _filterStreetType(name) {
        const filterValue = name.toLowerCase();
        return this.streetTypes.filter(option => option.description.toLowerCase().indexOf(filterValue) === 0);
    }
    displayfilterDirection(direction) {
        return direction ? direction.addressDirection : undefined;
    }
    _filterStreetDirection(name) {
        const filterValue = name.toLowerCase();
        return this.streetDirections.filter(option => option.addressDirection.toLowerCase().indexOf(filterValue) === 0);
    }
    displayfilterStreetName(name) {
        return name ? name.propStreet : undefined;
    }
    _filterStreetName(name) {
        const filterValue = name.toLowerCase();
        return this.streetNames.filter(option => option.propStreet.toLowerCase().indexOf(filterValue) === 0);
    }
    displayfilterUnitType(name) {
        return name ? name.addressUnitTypeDesc : undefined;
    }
    _filterUnitType(name) {
        const filterValue = name.toLowerCase();
        return this.unitTypes.filter(option => option.addressUnitTypeDesc.toLowerCase().indexOf(filterValue) === 0);
    }
    displayfilterCity(name) {
        return name ? name.city : undefined;
    }
    _filterCity(name) {
        const filterValue = name.toLowerCase();
        return this.city.filter(option => option.city.toLowerCase().indexOf(filterValue) === 0);
    }
    displayfilterProvince(name) {
        return name ? name.provinceName : undefined;
    }
    _filterProvince(name) {
        const filterValue = name.toLowerCase();
        return this.province.filter(option => option.provinceName.toLowerCase().indexOf(filterValue) === 0);
    }
    displayfilterCountry(name) {
        return name ? name.countryName : undefined;
    }
    _filterCountry(name) {
        const filterValue = name.toLowerCase();
        return this.countryList.filter(option => option.countryName.toLowerCase().indexOf(filterValue) === 0);
    }
};
UpdatePersonalInfoComponent = __decorate([
    core_1.Component({
        selector: 'app-update-personal-info',
        templateUrl: './update-personal-info.component.html',
        styleUrls: ['./update-personal-info.component.css']
    }),
    __metadata("design:paramtypes", [http_service_1.HttpService, url_service_1.UrlService, loader_service_1.LoaderService, local_storage_service_1.LocalStorageService])
], UpdatePersonalInfoComponent);
exports.UpdatePersonalInfoComponent = UpdatePersonalInfoComponent;
//# sourceMappingURL=update-personal-info.component.js.map