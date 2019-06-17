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
const auth_service_1 = require("../services/auth.service");
let SidebarComponent = class SidebarComponent {
    constructor(authService, cdr) {
        this.authService = authService;
        this.cdr = cdr;
        this.items = [
            {
                text: "Home",
                url: "/home"
            },
            {
                text: "Search",
                url: "/search-properties"
            },
            {
                text: "Search Mobile Sign Locations",
                url: "/search-mobile-sign-location"
            },
            {
                text: "Public Payment Page",
                url: ""
            },
            {
                text: "My Profile",
                hasChild: false,
                child: [
                    {
                        text: "Update Personal Information",
                        url: "/update-personal-info"
                    },
                    {
                        text: "Update Password",
                        url: "/update-password"
                    }
                ]
            },
            {
                text: "My Permits",
                hasChild: false,
                child: [
                    {
                        text: "Apply for a Permit",
                        url: "/apply-for-permit"
                    },
                    {
                        text: "Track My Application",
                        url: "/track-application"
                    },
                    {
                        text: "My Shopping Cart",
                        url: "/shopping-cart"
                    }
                ]
            },
            {
                text: "My Licences",
                hasChild: false,
                child: [
                    {
                        text: "Apply for Licence",
                        url: "/apply-for-licence"
                    },
                    {
                        text: "Track My Application",
                        url: "/track-application"
                    },
                    {
                        text: "My Shopping Cart",
                        url: "/shopping-cart"
                    }
                ]
            },
            {
                text: "Logout",
                url: "/logout"
            },
        ];
    }
    ngOnInit() {
        this.authService.status.subscribe((val) => {
            this.showLoader = val;
        });
    }
    ngDoCheck() {
        this.cdr.detectChanges();
    }
};
SidebarComponent = __decorate([
    core_1.Component({
        selector: 'app-sidebar',
        templateUrl: './sidebar.component.html',
        styleUrls: ['./sidebar.component.css']
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, core_1.ChangeDetectorRef])
], SidebarComponent);
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map