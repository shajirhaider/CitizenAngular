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
const http_service_1 = require("../services/http.service");
const url_service_1 = require("../services/url.service");
const loader_service_1 = require("../services/loader.service");
const local_storage_service_1 = require("../services/local-storage.service");
const forms_1 = require("@angular/forms");
const operators_1 = require("rxjs/operators");
const material_1 = require("@angular/material");
let SearchMobileSignLocationComponent = class SearchMobileSignLocationComponent {
    constructor(httpService, url, loaderService, storage) {
        this.httpService = httpService;
        this.url = url;
        this.loaderService = loaderService;
        this.storage = storage;
        this.searchProperties = new forms_1.FormGroup({
            streetNumber: new forms_1.FormControl(''),
            streetName: new forms_1.FormControl(''),
            streetType: new forms_1.FormControl(''),
            streetDirection: new forms_1.FormControl(''),
            postalCode: new forms_1.FormControl('')
        });
        this.searchForm = true;
        this.searchResultshow = false;
        this.msgShow = false;
        this.searchResults = [];
        this.searchResultCount = 0;
        this.msg = "msg";
        this.searchResultMsg = '';
        this.address = "";
        this.displayedColumns = ['address', 'location', 'availableAfter'];
        if (this.storage.getItem("Search_Mobile_Sign")) {
            let a = JSON.parse(this.storage.getItem("Search_Mobile_Sign"));
            this.searchProperties.setValue(a);
        }
        if (this.storage.getItem("citizen_search_mobile_rslt")) {
            this.searchResultshow = true;
            this.searchForm = false;
            this.searchResults = JSON.parse(this.storage.getItem("citizen_search_mobile_rslt"));
            this.dataSource = new material_1.MatTableDataSource(this.searchResults);
            setTimeout(() => {
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            }, 200);
            this.searchResultMsg = this.storage.getItem("citizen_search_mobile_rslt_msg");
        }
    }
    ngOnInit() {
        this.getValidStreetType();
        this.getValidStreetDirections();
        this.getValidStreet();
    }
    getValidStreetType() {
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
            this.filteredStreetTypes = this.searchProperties.get('streetType').valueChanges
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
            this.filteredstreetDirection = this.searchProperties.get('streetDirection').valueChanges
                .pipe(operators_1.startWith(''), operators_1.map(value => typeof value === 'string' ? value : value.addressDirection), operators_1.map(name => name ? this._filterStreetDirection(name) : this.streetDirections.slice()));
        }, (error) => console.log(error));
    }
    getValidStreet() {
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
        this.httpService.post(this.url.Get_Valid_Street, body)
            .subscribe((response) => {
            this.streetNames = response["body"];
            this.filteredStreetNames = this.searchProperties.get('streetName').valueChanges
                .pipe(operators_1.startWith(''), operators_1.map(value => typeof value === 'string' ? value : value.propStreet), operators_1.map(name => name ? this._filterStreetName(name) : this.streetNames.slice()));
            console.log(this.streetNames);
            this.loaderService.display(false);
        }, (error) => console.log(error));
    }
    searchMobileSign() {
        if (!this.searchProperties.value.streetName) {
            this.msgShow = true;
            this.searchResultshow = false;
            this.msg = "Street Name is mandatory.";
        }
        else {
            this.loaderService.display(true);
            let body = this.modifier(this.searchProperties);
            this.httpService.post(this.url.Search_Mobile_Sign, body)
                .subscribe((response) => {
                console.log("res", response);
                if (response.status == 200) {
                    this.searchResultshow = true;
                    this.searchForm = false;
                    this.msgShow = false;
                    this.searchResults = response["body"];
                    this.storage.setItem("citizen_search_mobile_rslt", JSON.stringify(this.searchResults));
                    this.searchResultCount = this.searchResults.length;
                    if (this.searchProperties.value.streetName && this.searchProperties.value.streetNumber) {
                        this.searchResultMsg = "Found " + this.searchResultCount + " result(s) for " + this.searchProperties.value.streetNumber + " " + this.searchProperties.value.streetName;
                    }
                    else if (this.searchProperties.value.streetName && !this.searchProperties.value.streetNumber) {
                        this.searchResultMsg = "Found " + this.searchResultCount + " result(s) for " + this.searchProperties.value.streetName;
                    }
                    else {
                        this.searchResultMsg = "Found " + this.searchResultCount + " result(s) for " + this.searchProperties.value.postalCode;
                    }
                    this.storage.setItem("citizen_search_mobile_rslt_msg", this.searchResultMsg);
                    this.dataSource = new material_1.MatTableDataSource(this.searchResults);
                    setTimeout(() => {
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.sort = this.sort;
                    }, 200);
                    this.loaderService.display(false);
                    console.log(this.searchResults);
                }
            }, (error) => console.log(error));
        }
    }
    modifier(body) {
        let a = JSON.stringify(body.value);
        this.storage.setItem("Search_Mobile_Sign", a);
        let obj = body.value;
        if (this.searchProperties.value.streetType) {
            obj.streetType = obj.streetType.id;
        }
        if (this.searchProperties.value.streetDirection) {
            obj.streetDirection = obj.streetDirection.addressDirection;
        }
        if (this.searchProperties.value.streetName) {
            obj.streetName = obj.streetName.propStreet;
        }
        if (this.storage.getItem("lid")) {
            obj.lid = this.storage.getItem("lid");
        }
        else {
            obj.lid = "";
        }
        obj.token = 'amandaportal';
        obj.count = '0';
        console.log(obj);
        return obj;
    }
    clear() {
        this.searchProperties.get('streetNumber').setValue("");
        this.searchProperties.get('streetName').setValue("");
        this.searchProperties.get('streetType').setValue("");
        this.searchProperties.get('streetDirection').setValue("");
        this.searchProperties.get('postalCode').setValue("");
        this.storage.removeItem("Search_Mobile_Sign");
    }
    searchShow() {
        this.searchResultshow = false;
        this.searchForm = true;
        this.storage.removeItem("citizen_search_mobile_rslt");
        this.storage.removeItem("citizen_search_mobile_rslt_msg");
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
};
__decorate([
    core_1.ViewChild(material_1.MatPaginator),
    __metadata("design:type", material_1.MatPaginator)
], SearchMobileSignLocationComponent.prototype, "paginator", void 0);
__decorate([
    core_1.ViewChild(material_1.MatSort),
    __metadata("design:type", material_1.MatSort)
], SearchMobileSignLocationComponent.prototype, "sort", void 0);
SearchMobileSignLocationComponent = __decorate([
    core_1.Component({
        selector: 'app-search-mobile-sign-location',
        templateUrl: './search-mobile-sign-location.component.html',
        styleUrls: ['./search-mobile-sign-location.component.css']
    }),
    __metadata("design:paramtypes", [http_service_1.HttpService, url_service_1.UrlService, loader_service_1.LoaderService, local_storage_service_1.LocalStorageService])
], SearchMobileSignLocationComponent);
exports.SearchMobileSignLocationComponent = SearchMobileSignLocationComponent;
//# sourceMappingURL=search-mobile-sign-location.component.js.map