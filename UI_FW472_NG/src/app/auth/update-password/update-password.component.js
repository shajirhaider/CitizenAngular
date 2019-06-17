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
const router_1 = require("@angular/router");
const http_service_1 = require("./../../services/http.service");
const url_service_1 = require("./../../services/url.service");
const local_storage_service_1 = require("./../../services/local-storage.service");
const loader_service_1 = require("./../../services/loader.service");
const auth_service_1 = require("./../../services/auth.service");
let UpdatePasswordComponent = class UpdatePasswordComponent {
    constructor(httpService, url, storage, loaderService, authService, router) {
        this.httpService = httpService;
        this.url = url;
        this.storage = storage;
        this.loaderService = loaderService;
        this.authService = authService;
        this.router = router;
        this.UpdatePassword = new forms_1.FormGroup({
            internetPassword: new forms_1.FormControl(''),
            oldPassword: new forms_1.FormControl(''),
            retypePassword: new forms_1.FormControl(''),
        });
    }
    ngOnInit() {
    }
    updatePeopleInternetPassword() {
        this.loaderService.display(true);
        let body = this.modifier(this.UpdatePassword);
        this.httpService.post(this.url.Update_People_Internet_Password, body)
            .subscribe((response) => {
            console.log(response);
            this.loaderService.display(false);
        }, (error) => console.log(error));
    }
    modifier(body) {
        let a = JSON.stringify(body.value);
        let obj = body.value;
        obj.peopleRSN = +this.storage.getItem("peopleRSN");
        obj.lid = this.storage.getItem("lid");
        obj.token = 'amandaportal';
        console.log(obj);
        return obj;
    }
};
UpdatePasswordComponent = __decorate([
    core_1.Component({
        selector: 'app-update-password',
        templateUrl: './update-password.component.html',
        styleUrls: ['./update-password.component.css']
    }),
    __metadata("design:paramtypes", [http_service_1.HttpService,
        url_service_1.UrlService,
        local_storage_service_1.LocalStorageService,
        loader_service_1.LoaderService,
        auth_service_1.AuthService,
        router_1.Router])
], UpdatePasswordComponent);
exports.UpdatePasswordComponent = UpdatePasswordComponent;
//# sourceMappingURL=update-password.component.js.map