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
const auth_service_1 = require("./../../services/auth.service");
const router_1 = require("@angular/router");
const local_storage_service_1 = require("./../../services/local-storage.service");
let LogoutComponent = class LogoutComponent {
    constructor(authService, router, storage) {
        this.authService = authService;
        this.router = router;
        this.storage = storage;
    }
    ngOnInit() {
    }
    logout() {
        this.authService.display(false);
        this.authService.getUsername('');
        this.router.navigate(['/home']);
        this.storage.clear();
    }
    cancel() {
        this.router.navigate(['/home']);
    }
};
LogoutComponent = __decorate([
    core_1.Component({
        selector: 'app-logout',
        templateUrl: './logout.component.html',
        styleUrls: ['./logout.component.css']
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        router_1.Router,
        local_storage_service_1.LocalStorageService])
], LogoutComponent);
exports.LogoutComponent = LogoutComponent;
//# sourceMappingURL=logout.component.js.map