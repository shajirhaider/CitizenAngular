"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const BehaviorSubject_1 = require("rxjs/internal/BehaviorSubject");
const rxjs_1 = require("rxjs");
let AuthService = class AuthService {
    constructor() {
        this.status = new BehaviorSubject_1.BehaviorSubject(false);
        // public username: BehaviorSubject<string> = new BehaviorSubject<string>('');
        this.dataStringSource = new rxjs_1.Subject();
        // Observable string stream
        this.dataString$ = this.dataStringSource.asObservable();
    }
    display(value) {
        this.status.next(value);
    }
    getUsername(value) {
        this.dataStringSource.next(value);
    }
};
AuthService = __decorate([
    core_1.Injectable()
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map