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
const auth_service_1 = require("./../../services/auth.service");
const loader_service_1 = require("./../../services/loader.service");
let LoginComponent = class LoginComponent {
    constructor(httpService, url, storage, authService, router, loaderService) {
        this.httpService = httpService;
        this.url = url;
        this.storage = storage;
        this.authService = authService;
        this.router = router;
        this.loaderService = loaderService;
        this.errorShow = false;
        this.loginForm = new forms_1.FormGroup({
            username: new forms_1.FormControl(''),
            password: new forms_1.FormControl(''),
            token: new forms_1.FormControl('amandaportal')
        });
    }
    ngOnInit() { }
    authenticatePublicUser() {
        this.loaderService.display(true);
        this.httpService.post(this.url.LOGIN, this.loginForm.value)
            .subscribe((response) => {
            if (response.status == 200) {
                if (response.body.lid) {
                    this.storage.clear();
                    this.storage.setItem('lid', response.body.lid);
                    this.storage.setItem('peopleRSN', response.body.peopleRSN);
                    this.getPeople();
                }
                else {
                    this.errorShow = true;
                }
                console.log(response);
            }
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
            let name = response["body"]["nameFirst"] + " " + response["body"]["nameMiddle"] + " " + response["body"]["nameLast"];
            let username = response["body"]["organizationName"] + " (" + name + " )";
            this.authService.getUsername(username);
            this.authService.display(true);
            this.storage.setItem('username', username);
            this.router.navigate(['/home']);
            this.loaderService.display(false);
        }, (error) => console.log(error));
    }
    register() {
        this.router.navigate(['login/register']);
    }
};
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    }),
    __metadata("design:paramtypes", [http_service_1.HttpService,
        url_service_1.UrlService,
        local_storage_service_1.LocalStorageService,
        auth_service_1.AuthService,
        router_1.Router,
        loader_service_1.LoaderService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map