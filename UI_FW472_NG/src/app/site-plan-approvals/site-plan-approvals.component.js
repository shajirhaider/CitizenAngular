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
const http_service_1 = require("../services/http.service");
const loader_service_1 = require("../services/loader.service");
const url_service_1 = require("../services/url.service");
const local_storage_service_1 = require("../services/local-storage.service");
const date_service_1 = require("../services/date.service");
const material_1 = require("@angular/material");
let SitePlanApprovalsComponent = class SitePlanApprovalsComponent {
    constructor(httpService, loaderService, route, router, url, storage, dateUtilService) {
        this.httpService = httpService;
        this.loaderService = loaderService;
        this.route = route;
        this.router = router;
        this.url = url;
        this.storage = storage;
        this.dateUtilService = dateUtilService;
        this.datas = [];
        this.displayedColumns = ['folderRSN', 'folderNumber', 'folderTypeDesc', 'statusDesc', 'indate', 'issueDate', 'finalDate'];
    }
    ngOnInit() {
        this.searchFolderByProperty();
    }
    searchFolderByProperty() {
        this.loaderService.display(true);
        let lid = "";
        if (this.storage.getItem("lid")) {
            lid = this.storage.getItem("lid");
        }
        else {
            lid = "";
        }
        let body = {
            "token": "amandaportal",
            "lid": lid,
            "propertyRSN": +this.route.snapshot.params["rsn"]
        };
        this.httpService.post(this.url.Search_Folder_By_Property, body)
            .subscribe((response) => {
            this.datas = response["body"];
            for (let i = response["body"].length - 1; i >= 0; i--) {
                if (this.datas[i].indate) {
                    this.datas[i].indate = this.dateUtilService.approvalDate(this.datas[i].indate);
                }
                if (this.datas[i].issueDate) {
                    this.datas[i].issueDate = this.dateUtilService.approvalDate(this.datas[i].issueDate);
                }
                if (this.datas[i].finalDate) {
                    this.datas[i].finalDate = this.dateUtilService.approvalDate(this.datas[i].finalDate);
                }
            }
            this.address = this.route.snapshot.params["house"] + " " + this.route.snapshot.params["street"] + " " + this.route.snapshot.params["city"];
            this.loaderService.display(false);
            console.log(this.datas);
            this.dataSource = new material_1.MatTableDataSource(this.datas);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }, (error) => console.log(error));
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    localStorageDataChange() {
        this.storage.removeItem("citizen_searchRslt");
        this.storage.removeItem("citizen_searchProp");
        this.storage.removeItem("citizen_search_rslt_msg");
        this.storage.setItem('agree-content', "false");
        this.router.navigate(['/search-properties']);
    }
};
__decorate([
    core_1.ViewChild(material_1.MatPaginator),
    __metadata("design:type", material_1.MatPaginator)
], SitePlanApprovalsComponent.prototype, "paginator", void 0);
__decorate([
    core_1.ViewChild(material_1.MatSort),
    __metadata("design:type", material_1.MatSort)
], SitePlanApprovalsComponent.prototype, "sort", void 0);
SitePlanApprovalsComponent = __decorate([
    core_1.Component({
        selector: 'app-site-plan-approvals',
        templateUrl: './site-plan-approvals.component.html',
        styleUrls: ['./site-plan-approvals.component.css']
    }),
    __metadata("design:paramtypes", [http_service_1.HttpService,
        loader_service_1.LoaderService,
        router_1.ActivatedRoute,
        router_1.Router,
        url_service_1.UrlService,
        local_storage_service_1.LocalStorageService,
        date_service_1.DateUtilService])
], SitePlanApprovalsComponent);
exports.SitePlanApprovalsComponent = SitePlanApprovalsComponent;
//# sourceMappingURL=site-plan-approvals.component.js.map