"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const search_mobile_sign_location_component_1 = require("./search-mobile-sign-location.component");
describe('SearchMobileSignLocationComponent', () => {
    let component;
    let fixture;
    beforeEach(testing_1.async(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [search_mobile_sign_location_component_1.SearchMobileSignLocationComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(search_mobile_sign_location_component_1.SearchMobileSignLocationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=search-mobile-sign-location.component.spec.js.map