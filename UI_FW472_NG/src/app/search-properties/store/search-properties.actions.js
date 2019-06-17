"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search_Properties = 'Search_Properties';
exports.Search_Results = 'Search_Results';
exports.Search_Results_Show = 'Search_Results_Show';
class AddSearchProperties {
    constructor(payload) {
        this.payload = payload;
        this.type = exports.Search_Properties;
    }
}
exports.AddSearchProperties = AddSearchProperties;
class SearchResult {
    constructor(payload) {
        this.payload = payload;
        this.type = exports.Search_Results;
    }
}
exports.SearchResult = SearchResult;
class SearchResultShow {
    constructor(payload) {
        this.payload = payload;
        this.type = exports.Search_Results_Show;
    }
}
exports.SearchResultShow = SearchResultShow;
//# sourceMappingURL=search-properties.actions.js.map