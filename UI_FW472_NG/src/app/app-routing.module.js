"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const login_component_1 = require("./auth/login/login.component");
const logout_component_1 = require("./auth/logout/logout.component");
const register_component_1 = require("./auth/register/register.component");
const register_form_component_1 = require("./auth/register-form/register-form.component");
const update_personal_info_component_1 = require("./auth/update-personal-info/update-personal-info.component");
const update_password_component_1 = require("./auth/update-password/update-password.component");
const search_properties_component_1 = require("./search-properties/search-properties.component");
const site_plan_approvals_component_1 = require("./site-plan-approvals/site-plan-approvals.component");
const search_mobile_sign_location_component_1 = require("./search-mobile-sign-location/search-mobile-sign-location.component");
const home_component_1 = require("./home/home.component");
const apply_for_permit_component_1 = require("./my-permit/apply-for-permit/apply-for-permit.component");
const apply_for_licence_component_1 = require("./my-licence/apply-for-licence/apply-for-licence.component");
const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'pub/Search.aspx', component: search_properties_component_1.SearchPropertiesComponent },
    // { path: 'search-properties', component: SearchPropertiesComponent},
    { path: 'search-properties/permits/:rsn/:house/:street/:city', component: site_plan_approvals_component_1.SitePlanApprovalsComponent },
    { path: 'pub/SearchMobileSign.aspx', component: search_mobile_sign_location_component_1.SearchMobileSignLocationComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'logout', component: logout_component_1.LogoutComponent },
    { path: 'update-password', component: update_password_component_1.UpdatePasswordComponent },
    { path: 'update-personal-info', component: update_personal_info_component_1.UpdatePersonalInfoComponent },
    { path: 'login/register', component: register_component_1.RegisterComponent },
    { path: 'login/register/form', component: register_form_component_1.RegisterFormComponent },
    { path: 'apply-for-permit', component: apply_for_permit_component_1.ApplyForPermitComponent },
    { path: 'apply-for-licence', component: apply_for_licence_component_1.ApplyForLicenceComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map