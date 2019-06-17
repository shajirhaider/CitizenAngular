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
const loader_service_1 = require("./services/loader.service");
const local_storage_service_1 = require("./services/local-storage.service");
const auth_service_1 = require("./services/auth.service");
let AppComponent = class AppComponent {
    constructor(loaderService, storageService, authService, cdr, router, route, eleRef) {
        this.loaderService = loaderService;
        this.storageService = storageService;
        this.authService = authService;
        this.cdr = cdr;
        this.router = router;
        this.route = route;
        this.eleRef = eleRef;
        this.title = 'Citizen Portal';
    }
    ngOnInit() {
        let prop = this.eleRef.nativeElement.getAttribute('name');
        switch (prop) {
            case "Search-Properties":
                this.router.navigate(['/pub/Search.aspx']);
                break;
            case "Search-Mobile-Sign":
                this.router.navigate(['/pub/SearchMobileSign.aspx']);
                break;
            default:
                this.router.navigate(['/']);
                break;
        }
        this.loaderService.status.subscribe((val) => {
            this.showLoader = val;
        });
        this.authService.status.subscribe((val) => {
            this.showLoader = val;
        });
        this.authService.dataString$.subscribe(data => {
            this.username = data;
        });
        // getUserName(){
        //   if(this.storageService.getItem('username')){
        //     this.username = this.storageService.getItem('username')
        //   }
        //   else{
        //     this.username = ""
        //   }
        // }
    }
    ngDoCheck() {
        this.cdr.detectChanges();
    }
};
__decorate([
    core_1.Input('name'),
    __metadata("design:type", String)
], AppComponent.prototype, "name", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [loader_service_1.LoaderService,
        local_storage_service_1.LocalStorageService,
        auth_service_1.AuthService,
        core_1.ChangeDetectorRef,
        router_1.Router,
        router_1.ActivatedRoute,
        core_1.ElementRef])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map