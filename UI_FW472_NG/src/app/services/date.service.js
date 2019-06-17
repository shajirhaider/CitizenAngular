"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const moment = require("moment");
let DateUtilService = class DateUtilService {
    approvalDate(date) {
        let indate = date.match(/\d+/g).map(Number);
        return moment.unix(indate / 1000).format("YYYY-MM-DD");
    }
};
DateUtilService = __decorate([
    core_1.Injectable()
], DateUtilService);
exports.DateUtilService = DateUtilService;
//# sourceMappingURL=date.service.js.map