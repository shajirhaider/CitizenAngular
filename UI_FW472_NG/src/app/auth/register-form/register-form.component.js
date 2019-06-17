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
let RegisterFormComponent = class RegisterFormComponent {
    constructor(router) {
        this.router = router;
        this.agreeContent = false;
        this.personForm = new forms_1.FormGroup({
            pin: new forms_1.FormControl(''),
            email: new forms_1.FormControl(''),
            token: new forms_1.FormControl('amandaportal')
        });
        this.orgForm = new forms_1.FormGroup({
            pin: new forms_1.FormControl(''),
            email: new forms_1.FormControl(''),
            token: new forms_1.FormControl('amandaportal')
        });
    }
    ngOnInit() {
    }
    agreeContentShow() {
        this.agreeContent = true;
    }
    btnShowT() {
        this.agree = true;
    }
    btnShowF() {
        this.agree = false;
    }
    previous() {
        this.router.navigate(['/login/register']);
    }
};
RegisterFormComponent = __decorate([
    core_1.Component({
        selector: 'app-register-form',
        templateUrl: './register-form.component.html',
        styleUrls: ['./register-form.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], RegisterFormComponent);
exports.RegisterFormComponent = RegisterFormComponent;
//# sourceMappingURL=register-form.component.js.map