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
let NavMenuService = class NavMenuService {
    constructor() {
        this.nav = [
            { text: "Apply, Register and Play" },
            { text: "Parks, Recreation and Culture" },
            { text: "Build, Invest and Grow" },
            { text: "Learn About" },
            { text: "Your City" },
            { text: "How Do I?" }
        ];
    }
};
NavMenuService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], NavMenuService);
exports.NavMenuService = NavMenuService;
//# sourceMappingURL=nav-menu.service.js.map