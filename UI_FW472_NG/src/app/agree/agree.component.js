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
const router_1 = require("@angular/router");
let AgreeComponent = class AgreeComponent {
    constructor(router) {
        this.router = router;
        this.btnShow = false;
    }
    ngOnInit() {
    }
    localStorageDataRemove() {
        localStorage.removeItem("citizen_searchRslt");
        localStorage.removeItem("citizen_searchProp");
        localStorage.removeItem("citizen_search_rslt_msg");
        this.router.navigate(['search-properties']);
    }
};
AgreeComponent = __decorate([
    core_1.Component({
        selector: 'app-agree',
        templateUrl: './agree.component.html',
        styleUrls: ['./agree.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], AgreeComponent);
exports.AgreeComponent = AgreeComponent;
//# sourceMappingURL=agree.component.js.map