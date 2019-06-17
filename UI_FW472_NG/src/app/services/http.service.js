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
const http_1 = require("@angular/common/http");
const throwError_1 = require("rxjs/internal/observable/throwError");
require("rxjs/Rx");
let HttpService = class HttpService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://demo.randomaccess.ca/Amanda/API_FW/Services/ServiceMain.svc/json/';
    }
    post(url, data) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        try {
            return this.http.post(this.baseUrl + url, data, { observe: 'response' });
        }
        catch (err) {
            return throwError_1.throwError(err.message);
        }
    }
};
HttpService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [http_1.HttpClient])
], HttpService);
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map