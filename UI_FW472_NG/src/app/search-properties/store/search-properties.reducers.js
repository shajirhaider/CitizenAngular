"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SearchPropertiesActions = require("./search-properties.actions");
const forms_1 = require("@angular/forms");
exports.Search_Properties = 'Search_Properties';
exports.Search_Results = 'Search_Results';
exports.Search_Results_Show = 'Search_Results_Show';
const initialState = {
    searchProperties: new forms_1.FormGroup({
        streetNumber: new forms_1.FormControl(''),
        streetName: new forms_1.FormControl(''),
        streetType: new forms_1.FormControl(''),
        streetDirection: new forms_1.FormControl(''),
        unitNumber: new forms_1.FormControl(''),
        rollNumber: new forms_1.FormControl(''),
        token: new forms_1.FormControl('amandaportal'),
        lid: new forms_1.FormControl(''),
        count: new forms_1.FormControl('0')
    }),
    searchResults: [],
    searchResultShow: false
};
function SearchPropertiesReducer(state = initialState, action) {
    switch (action.type) {
        case SearchPropertiesActions.Search_Properties:
            return Object.assign({}, state, { searchProperties: action.payload });
        case SearchPropertiesActions.Search_Results:
            return Object.assign({}, state, { searchResults: [action.payload] });
        case SearchPropertiesActions.Search_Results_Show:
            return {
                searchResultShow: action.payload
            };
        default:
            return state;
    }
}
exports.SearchPropertiesReducer = SearchPropertiesReducer;
// export function SearchResultsReducer (state = initialState.searchResults, action: SearchPropertiesActions.SearchPropertiesActions){
//     switch (action.type){
//         case SearchPropertiesActions.Search_Results:
//             return{
//                 ...state,
//                 searchResults: [...state, action.payload]
//             }
//         default :
//             return state;  
//     }
// }
// export function SearchResultShowReducer (state = initialState.searchResultShow, action: SearchPropertiesActions.SearchPropertiesActions){
//     switch (action.type){
//         case SearchPropertiesActions.Search_Results_Show:
//             return{
//                 searchResultShow: action.payload
//             }
//         default :
//             return {
//                 state
//         }
//     }
// }
//# sourceMappingURL=search-properties.reducers.js.map