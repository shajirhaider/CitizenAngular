"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_1 = require("@angular/platform-browser");
const animations_1 = require("@angular/platform-browser/animations");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const ng_select_1 = require("@ng-select/ng-select");
const http_1 = require("@angular/common/http");
const app_routing_module_1 = require("./app-routing.module");
const app_material_module_1 = require("./app-material.module");
const http_service_1 = require("./services/http.service");
const loader_service_1 = require("./services/loader.service");
const auth_service_1 = require("./services/auth.service");
const date_service_1 = require("./services/date.service");
const app_component_1 = require("./app.component");
const navbar_component_1 = require("./navbar/navbar.component");
const header_component_1 = require("./header/header.component");
const sidebar_component_1 = require("./sidebar/sidebar.component");
const agree_component_1 = require("./agree/agree.component");
const search_properties_component_1 = require("./search-properties/search-properties.component");
const site_plan_approvals_component_1 = require("./site-plan-approvals/site-plan-approvals.component");
const store_1 = require("@ngrx/store");
const app_reducers_1 = require("./store/app.reducers");
const search_mobile_sign_location_component_1 = require("./search-mobile-sign-location/search-mobile-sign-location.component");
const login_component_1 = require("./auth/login/login.component");
const update_password_component_1 = require("./auth/update-password/update-password.component");
const update_personal_info_component_1 = require("./auth/update-personal-info/update-personal-info.component");
const register_component_1 = require("./auth/register/register.component");
const register_form_component_1 = require("./auth/register-form/register-form.component");
const home_component_1 = require("./home/home.component");
const logout_component_1 = require("./auth/logout/logout.component");
const apply_for_permit_component_1 = require("./my-permit/apply-for-permit/apply-for-permit.component");
const apply_for_licence_component_1 = require("./my-licence/apply-for-licence/apply-for-licence.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            navbar_component_1.NavbarComponent,
            header_component_1.HeaderComponent,
            sidebar_component_1.SidebarComponent,
            agree_component_1.AgreeComponent,
            search_properties_component_1.SearchPropertiesComponent,
            site_plan_approvals_component_1.SitePlanApprovalsComponent,
            search_mobile_sign_location_component_1.SearchMobileSignLocationComponent,
            login_component_1.LoginComponent,
            update_password_component_1.UpdatePasswordComponent,
            update_personal_info_component_1.UpdatePersonalInfoComponent,
            register_component_1.RegisterComponent,
            home_component_1.HomeComponent,
            logout_component_1.LogoutComponent,
            register_form_component_1.RegisterFormComponent,
            apply_for_permit_component_1.ApplyForPermitComponent,
            apply_for_licence_component_1.ApplyForLicenceComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            http_1.HttpClientModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            app_routing_module_1.AppRoutingModule,
            app_material_module_1.MaterialModule,
            ng_select_1.NgSelectModule,
            store_1.StoreModule.forRoot(app_reducers_1.reducers)
        ],
        providers: [http_service_1.HttpService, loader_service_1.LoaderService, date_service_1.DateUtilService, auth_service_1.AuthService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map