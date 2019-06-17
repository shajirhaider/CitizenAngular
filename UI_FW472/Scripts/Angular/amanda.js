var cocapp = angular.module('amanda.app', ['ngRoute', 'ngAnimate', 'ui.bootstrap'])
.run(function (Security, $rootScope, $templateCache) {
    Security.token = requestData.token;
    angular.element(document).on("click", function(e) {
        $rootScope.$broadcast("documentClicked", angular.element(e.target));
	});
})
.filter('slice', function () {
    return function (arr, start, end) {
        return arr.slice(start, end);
    };
})
.factory('Security', function () {
    return {
        token: null
    };
})
.factory('Server', function ($http, Working, Security) {
    var _s = {
        post: function (endpoint, method, data, resultProperty) {
            Working.start();
            data = data || {};
            data.token = Security.token;
            $.support.cors = true;
            //alert(data.token);
            return $http.post(endpoint + method, data)
				.then(function (res) {
	                return resultProperty ?
						res.data[method + 'Result'] :
						res.data;
				}
                )
				.finally(Working.end);
        },
        cocService: function (method, data) {
            //alert(BiaslServiceURL);
            return _s.post(ServiceURL, method, data, false);
        }
    };
    return _s;
})
.factory('Service', function (Server) {
    return {
        getToken: function (imei) {
            return Server.cocService('GetToken', {
                imei: imei
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        authenticatePublicUser: function (username, password) {
            return Server.cocService('authenticatePublicUser', {
                username: username,
                password: password
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        getFolder: function (folderRSN) {
            return Server.cocService('getFolder', {
                folderRSN: folderRSN
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        getPeople: function (peopleRSN) {
            return Server.cocService('getPeople', {
                peopleRSN: peopleRSN
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        getProperty: function (propertyRSN) {
            return Server.cocService('getProperty', {
                propertyRSN: propertyRSN
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        getValidOperators: function () {
            return Server.cocService('getValidOperators', {
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        searchProperty_Old: function (criteria, startIndex, count, orderBy) {
            return Server.cocService('searchProperty_Old', {
                criteria: criteria,
                startIndex: startIndex,
                count: count,
                orderBy: orderBy
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        searchProperty: function (unitNumber, streetNumber, streetName, streetType, streetDirection, rollNumber, count) {
            return Server.cocService('searchProperty', {
                unitNumber: unitNumber,
                streetNumber: streetNumber,
                streetName: streetName,
                streetType: streetType,
                streetDirection: streetDirection,
                rollNumber: rollNumber,
                count: count
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        searchPropertyAjax: function (fullAddress) {
            return Server.cocService('searchPropertyAjax', {
                fullAddress: fullAddress
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        searchMobileSign: function (streetNumber, streetName, streetType, streetDirection, postalCode) {
            return Server.cocService('searchMobileSign', {
                streetNumber: streetNumber,
                streetName: streetName,
                streetType: streetType,
                streetDirection: streetDirection,
                postalCode: postalCode
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        searchFolderByProperty: function (propertyRSN) {
            return Server.cocService('searchFolderByProperty', {
                propertyRSN: propertyRSN
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        getFolderProperty: function (folderRSN) {
            return Server.cocService('getFolderProperty', {
                folderRSN: folderRSN
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        getFolderPeople: function (folderRSN) {
            return Server.cocService('getFolderPeople', {
                folderRSN: folderRSN
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        getFolderInfo: function (folderRSN, displayOptions) {
            return Server.cocService('getFolderInfo', {
                folderRSN: folderRSN,
                displayOptions: displayOptions
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        getFolderProcess: function (folderRSN, processGroups) {
            return Server.cocService('getFolderProcess', {
                folderRSN: folderRSN,
                processGroups: processGroups
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        getFolderAttachment: function (folderRSN) {
            return Server.cocService('getFolderAttachment', {
                folderRSN: folderRSN
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        getAttachmentContent: function (attachmentRSN) {
            return Server.cocService('getAttachmentContent', {
                attachmentRSN: attachmentRSN
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        getFolderInfoGroupListByFolder: function (folderRSN) {
            return Server.cocService('GetFolderInfoGroupListByFolder', {
                folderRSN: folderRSN
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        getPropertyByRSN: function (propertyRSN) {
            return Server.cocService('GetPropertyByRSN', {
                propertyRSN: propertyRSN
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        getAccountBillFeeListByFolder: function (folderRSN) {
            return Server.cocService('GetAccountBillFeeListByFolder', {
                folderRSN: folderRSN
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        getFolderFeeSummaryByFolder: function (folderRSN) {
            return Server.cocService('GetFolderFeeSummaryByFolder', {
                folderRSN: folderRSN
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        getPaymentListByFolder: function (folderRSN) {
            return Server.cocService('GetPaymentListByFolder', {
                folderRSN: folderRSN
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        getUserList: function () {
            return Server.cocService('GetUserList', {
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        getRefundSTGList: function () {
            return Server.cocService('GetRefundSTGList', {
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        getUser: function (OID) {
            return Server.cocService('GetUser', {
                OID: OID
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        getValidCountries: function () {
            return Server.cocService('getValidCountries', {
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        getValidProvinces: function () {
            return Server.cocService('getValidProvinces', {
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        getValidCounty: function () {
            return Server.cocService('getValidCounty', {
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        getValidStreet: function () {
            return Server.cocService('getValidStreet', {
            }).then(function (records) {
                //console.log(records);
                return records;
            }
            );
        },
        getValidStreetList: function () {
            return Server.cocService('getValidStreetList', {
            }).then(function (records) {
                //console.log(records);
                return records;
            }
            );
        },
        getValidStreetTypes: function () {
            return Server.cocService('getValidStreetTypes', {
            }).then(function (records) {
                //console.log(records);
                return records;
            }
            );
        },
        getValidStreetDirections: function () {
            return Server.cocService('getValidStreetDirections', {
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        getValidUnitTypes: function () {
            return Server.cocService('getValidUnitTypes', {
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        getValidCommunities: function () {
            return Server.cocService('getValidCommunities', {
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        getValidCity: function () {
            return Server.cocService('getValidCity', {
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        uploadPermitRefundList: function (dataList) {
            return Server.cocService('UploadPermitRefundList', {
                dataList: dataList
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        uploadPermitNoRefundList: function (dataList) {
            return Server.cocService('UploadPermitNoRefundList', {
                dataList: dataList
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        updateFolderInfo: function (data) {
            return Server.cocService('UpdateFolderInfo', {
                data: data
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        addPeople: function (data) {
            return Server.cocService('addPeople', {
                data: data
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        updatePeople: function (data) {
            return Server.cocService('updatePeople', {
                data: data
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        updatePeopleInternetPassword: function (peopleRSN, internetPassword) {
            return Server.cocService('updatePeopleInternetPassword', {
                peopleRSN: peopleRSN,
                internetPassword: internetPassword
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
        updateLogin: function (data) {
            return Server.cocService('UpdateLogin', {
                data: data
            }).then(function (records) {
                //alert(records);
                return records;
            }
            );
        },
    };
})
.factory('Working', function ($rootScope) {
    return {
        start: function () {
            $rootScope.isWorking = true;
        },
        end: function () {
            $rootScope.isWorking = false;
        }
    };
})
.factory('LocalStorage', function ($window) {
    return {
        setJson: function (key, value) {
            $window.localStorage.setItem(key, angular.toJson(value));
        },
        getJson: function (key) {
            //alert(key);
            var jsonval = $window.localStorage.getItem(key);
            return angular.fromJson(jsonval);
            //return angular.fromJson($window.localStorage.getItem(key));
        }
    };
})
    .directive("addressAutosuggest", function () {
        return {
            templateUrl: "../test/addressAutoSuggest.html?v=30",
            require: 'ngModel',
            controller: 'CtrlPropertyDetails',
            scope: {
                serviceUrl: '@',
                token: '@',
                selectedAddress: '=',
                latitude: '=',
                longitude: '=',
                max: '@',
                loading: '='
            },
            link: function (scope, element, attrs, ctrl) {

                scope.onAddressSelected = function (item) {
                    //console.log('addressAutosuggest:' + item.AutoID);
                    ctrl.$setViewValue(item);
                    if (scope.onChange !== undefined)
                        scope.onChange(item);
                };

            }
        }
    })
.filter('SortJSon', function () {
    return function (items, field, reverse) {
        var filtered = [];
        angular.forEach(items, function (item) {
            filtered.push(item);
        });
        filtered.sort(function (a, b) {
            return (a[field] > b[field] ? 1 : -1);
        });
        if (reverse) filtered.reverse();
        return filtered;
    };
})
.controller('CtrlPeopleDetails', function ($http, $rootScope, $scope, $filter, LocalStorage, $window, Service, $location, $routeParams, $interval, $uibModal, $log) {

    $scope.isDebugMode = false;

    $scope.Loadcomplete = false;

    $scope.PeopleRSN = 198175;


    $scope.CurrentPeople = {};

    $scope.ProvinceList = [];
    $scope.CountyList = [];
    $scope.CommunityList = [];
    $scope.CountryList = [];// [{ CountryCode: "CAN" }, { CountryCode: "USA" }];
    $scope.StreetDirectionList = [];
    $scope.StreetTypeList = [];
    $scope.UnitTypeList = [];
    $scope.CityList = [];
    $scope.PhoneDescList = [{ Value: "Work" }, { Value: "Fax" }];
    $scope.CustomerTypeList = [{ Value: 2, Text:"Owner" }, { Value: 1, Text:"aaa" }];

    $scope.AddMode = false;

    $scope.refreshPeopleDetails = function (m) {
        $scope.Loadcomplete = false;
        $scope.AddMode = m;
        console.log($scope.AddMode);
        Service.getPeople($scope.PeopleRSN).then(gotPeopleDetails, gotErrors);
    }

    $scope.refreshCountryList = function () {
        $scope.Loadcomplete = false;
        Service.getValidCountries().then(gotValidCountries, gotErrors);
    }

    $scope.refreshProvinceList = function () {
        $scope.Loadcomplete = false;
        Service.getValidProvinces().then(gotValidProvinces, gotErrors);
    }

    $scope.refreshCountyList = function () {
        $scope.Loadcomplete = false;
        Service.getValidCounty().then(gotValidCounty, gotErrors);
    }

    $scope.refreshCommunityList = function () {
        $scope.Loadcomplete = false;
        Service.getValidCommunities($scope.PeopleRSN).then(gotValidCommunities, gotErrors);
    }

    $scope.refreshStreetDirectionList = function () {
        $scope.Loadcomplete = false;
        Service.getValidStreetDirections().then(gotValidStreetDirections, gotErrors);
    }

    $scope.refreshStreetTypeList = function () {
        $scope.Loadcomplete = false;
        Service.getValidStreetTypes().then(gotValidStreetTypes, gotErrors);
    }

    $scope.refreshUnitTypeList = function () {
        $scope.Loadcomplete = false;
        Service.getValidUnitTypes().then(gotValidUnitTypes, gotErrors);
    }

    $scope.refreshCityList = function () {
        $scope.Loadcomplete = false;
        Service.getValidCity().then(gotValidCity, gotErrors);
    }


    //$scope.refreshPeopleDetails();
    $scope.refreshCountryList();
    $scope.refreshProvinceList();
    $scope.refreshCountyList();
    $scope.refreshCommunityList();
    $scope.refreshStreetDirectionList();
    /*
    */

    $scope.refreshStreetTypeList();

    $scope.refreshUnitTypeList();
    $scope.refreshCityList();
    /*
    */

    $scope.username = "md2hanif@yahoo.com";
    $scope.password = "NA";

    $scope.savePeople = function () {
        Service.updatePeople($scope.CurrentPeople).then(updatePeopleComplete, gotErrors);
    }

    $scope.addPeople = function () {
        console.log($scope.CurrentPeople); 
        Service.addPeople($scope.CurrentPeople).then(addPeopleComplete, gotErrors);
    }

    $scope.updatePassword = function () {
        Service.updatePeopleInternetPassword($scope.CurrentPeople.peopleRSN, $scope.password).then(updatePasswordComplete, gotErrors);
    }

    $scope.login = function () {
        Service.authenticatePublicUser($scope.username, $scope.password).then(loginComplete, gotErrors);
    }

    function gotErrors(res) {
        $scope.Loadcomplete = true;
        alert(res.statusText);

    }

    function gotPeopleDetails(records) {
        console.log(records);
        //alert(records);
        $scope.Loadcomplete = true;

        var myjson = angular.fromJson(records);
        //alert(myjson);
        $scope.CurrentPeople = myjson;

        /*
        if ($scope.AddMode) {
            $scope.CurrentPeople.emailAddress = "md2hanif@yahoo.com";
            $scope.CurrentPeople.nameFirst = "Hanif";
            $scope.CurrentPeople.nameLast = "Mohammad";
            $scope.CurrentPeople.phone1 = "416-111-1111";
        }
        */
    }

    function updatePeopleComplete(records) {
        console.log(records);
        alert("Save Complete");
        $scope.Loadcomplete = true;

        //$scope.close();

    }

    function addPeopleComplete(records) {
        console.log(records);

        $scope.Loadcomplete = true;
    }

    function loginComplete(records) {
        console.log(records);

        $scope.Loadcomplete = true;
    }
    function updatePasswordComplete(records) {
        console.log(records);
        $scope.Loadcomplete = true;


    }

//
    function gotValidCountries(records) {
        console.log(records);
        //alert(records);
        $scope.Loadcomplete = true;

        var myjson = angular.fromJson(records);
        //alert(myjson);
        $scope.CountryList = myjson;
    }

    function gotValidProvinces(records) {
        console.log(records);
        //alert(records);
        $scope.Loadcomplete = true;

        var myjson = angular.fromJson(records);
        //alert(myjson);
        $scope.ProvinceList = myjson;
    }

    function gotValidCounty(records) {
        console.log(records);
        //alert(records);
        $scope.Loadcomplete = true;

        var myjson = angular.fromJson(records);
        //alert(myjson);
        $scope.CountyList = myjson;
    }

    function gotValidCommunities(records) {
        console.log(records);
        //alert(records);
        $scope.Loadcomplete = true;

        var myjson = angular.fromJson(records);
        //alert(myjson);
        $scope.CommunityList = myjson;
    }

    function gotValidStreetDirections(records) {
        console.log(records);
        //alert(records);
        $scope.Loadcomplete = true;

        var myjson = angular.fromJson(records);
        //alert(myjson);
        $scope.StreetDirectionList = myjson;
    }

    function gotValidStreetTypes(records) {
        console.log(records);
        //alert(records);
        $scope.Loadcomplete = true;

        var myjson = angular.fromJson(records);
        //console.log(myjson);
        //alert(myjson);
        $scope.StreetTypeList = myjson;
    }

    function gotValidUnitTypes(records) {
        console.log(records);
        //alert(records);
        $scope.Loadcomplete = true;

        var myjson = angular.fromJson(records);
        //alert(myjson);
        $scope.UnitTypeList = myjson;
    }

    function gotValidCity(records) {
        console.log(records);
        //alert(records);
        $scope.Loadcomplete = true;

        var myjson = angular.fromJson(records);
        //alert(myjson);
        $scope.CityList = myjson;
    }

})
    .controller('CtrlPropertyDetails', function ($http, $rootScope, $scope, $filter, LocalStorage, $window, Service, $location, $routeParams, $interval, $uibModal, $log) {

        $scope.isDebugMode = false;

        $scope.Loadcomplete = false;

        $scope.RSN = 26678;


        $scope.Data = {};
        $scope.SelectedAddress = {};

        $scope.ProvinceList = [];
        $scope.CountyList = [];
        $scope.CommunityList = [];
        $scope.CountryList = [];// [{ CountryCode: "CAN" }, { CountryCode: "USA" }];
        $scope.StreetDirectionList = [];
        $scope.StreetList = [];
        $scope.StreetTypeList = [];
        $scope.UnitTypeList = [];
        $scope.CityList = [];
        $scope.PhoneDescList = [{ Value: "Work" }, { Value: "Fax" }];
        $scope.CustomerTypeList = [{ Value: 2, Text: "Owner" }, { Value: 1, Text: "aaa" }];

        $scope.FolderList = [];

        $scope.ValidOperator = {};
        $scope.AddMode = false;

        $scope.addrHouse = "700";
        $scope.addrUnitType = "";
        $scope.addrUnit = "";
        $scope.addrStreet = "Hespeler";
        $scope.addrStreetPrefix = "";
        $scope.addrStreetType = "Rd";
        $scope.addrStreetDirection = "";

        $scope.fullAddress = "700 Hespeler Rd";

        $scope.viewtype = "JSON";

        $scope.refreshOperator = function () {
            $scope.Loadcomplete = false;
            Service.getValidOperators().then(gotValidOperators, gotErrors);
        }

        $scope.refreshData = function () {
            $scope.Loadcomplete = false;
            Service.getProperty($scope.RSN).then(gotDetails, gotErrors);
        }

        $scope.showPermits = function (RSN) {
            console.log(RSN);
            $scope.Loadcomplete = false;
            Service.searchFolderByProperty(RSN).then(gotFolders, gotErrors);
        }

        $scope.searchData = function () {
            $scope.Loadcomplete = false;

            var criteria = [];
            var startIndex = 1;
            var count = 10;
            var orderBy = [];

            var streetNumber = { "fieldName": "propHouse", "value": [$scope.addrHouse], "tableName": "Property", "operatorSpecified": true, "operator": 1, "conjuctiveOperatorSpecified": true, "conjuctiveOperator": 12}; 
            var streetName = { "fieldName": "propStreet", "value": [$scope.addrStreet], "tableName": "Property", "operatorSpecified": true, "operator": 1, "conjuctiveOperatorSpecified": true, "conjuctiveOperator": 12 }; 
            var streetType = { "fieldName": "propStreetType", "value": [$scope.addrStreetType], "tableName": "Property", "operatorSpecified": true, "operator": 1, "conjuctiveOperatorSpecified": true, "conjuctiveOperator": 12 }; 

            criteria.push(streetNumber);
            criteria.push(streetName);
            criteria.push(streetType);

            orderBy.push("propStreet");

            console.log(criteria); 

            Service.searchProperty_Old(criteria, startIndex, count, orderBy).then(gotDetails, gotErrors);
        }

        $scope.searchFullAddress = function () {
            $scope.Loadcomplete = false;

            Service.searchPropertyAjax($scope.fullAddress).then(gotDetails, gotErrors);
        }

        $scope.refreshProvinceList = function () {
            $scope.Loadcomplete = false;
            Service.getValidProvinces().then(gotValidProvinces, gotErrors);
        }

        $scope.refreshCountyList = function () {
            $scope.Loadcomplete = false;
            Service.getValidCounty().then(gotValidCounty, gotErrors);
        }

        $scope.refreshCountryList = function () {
            $scope.Loadcomplete = false;
            Service.getValidCountries().then(gotValidCountries, gotErrors);
        }

        $scope.refreshCommunityList = function () {
            $scope.Loadcomplete = false;
            Service.getValidCommunities($scope.PeopleRSN).then(gotValidCommunities, gotErrors);
        }

        $scope.refreshStreetDirectionList = function () {
            $scope.Loadcomplete = false;
            Service.getValidStreetDirections().then(gotValidStreetDirections, gotErrors);
        }

        $scope.refreshStreetTypeList = function () {
            $scope.Loadcomplete = false;
            Service.getValidStreetTypes().then(gotValidStreetTypes, gotErrors);
        }

        $scope.refreshStreetList = function () {
            $scope.Loadcomplete = false;
            Service.getValidStreet().then(gotValidStreet, gotErrors);
        }

        $scope.refreshUnitTypeList = function () {
            $scope.Loadcomplete = false;
            Service.getValidUnitTypes().then(gotValidUnitTypes, gotErrors);
        }

        $scope.refreshCityList = function () {
            $scope.Loadcomplete = false;
            Service.getValidCity().then(gotValidCity, gotErrors);
        }


        //$scope.refreshPeopleDetails();
        $scope.refreshProvinceList();
        $scope.refreshCountyList();
        $scope.refreshCommunityList();
        $scope.refreshStreetDirectionList();
        /*
        */

        $scope.refreshStreetTypeList();
        //$scope.refreshStreetList();

        $scope.refreshUnitTypeList();
        $scope.refreshCityList();
        /*
        */


        $scope.fromDateString = function (str) {

            return fromDateString(str);
        }

        $scope.addresschanged = function () {
                console.log($scope.SelectedAddress);

        }


        $scope.suggest = function (input) {
            console.log(input);

            if (input.length > 2) {
                return Service.searchPropertyAjax(input).then(gotSuggestedAddress, gotErrors);
            }
            //return Service.getSuggestedAddress($scope.AddressSearch.number, $scope.AddressSearch.search, $scope.AddressSearch.latitude, $scope.AddressSearch.longitude, $scope.AddressSearch.max).then(gotSuggestedAddress, gotErrors);;
            /*
            var streetElements = splitStreetNumber(input);

            if (streetElements.name.length >= 2) {
                $scope.AddressSearch.number = streetElements.number;
                $scope.AddressSearch.search = streetElements.name;

                return Service.getSuggestedAddress($scope.AddressSearch.number, $scope.AddressSearch.search, $scope.AddressSearch.latitude, $scope.AddressSearch.longitude, $scope.AddressSearch.max).then(gotSuggestedAddress, gotErrors);;
            }
            else {
                return [];
            }
            */
        }

        $scope.formatItem = function (item) {
            //console.log(item);
            //return 'aaa';
            if (item) {
                return item.propDesc;
                //return item.propHouse + ' ' + item.propStreet + ' ' + item.propStreetType + ' - ' + item.propUnit;
                //return (item.NUMBER ? item.NUMBER + ' ' : '') + item.DisplayString;

            }
        }

        function gotSuggestedAddress(records) {
            //console.log(records);
            //var records2 = records.replace('"[', '[').replace(']"', ']').replace(/\\/g, "");
            var myjson = angular.fromJson(records);
            //console.log(myjson);
            //console.log(myjson);

            $scope.AddressItemList = myjson;

            if ($scope.AddressItemList.length > 0) {
                //$scope.SelectedAddressItem = $scope.AddressItemList[0];

                //console.log($scope.SelectedAddressItem);
            }

            return $scope.AddressItemList;
        }

        function splitStreetNumber(input) {
            var numberMatch = input.match(/^(\d+)\s+/);
            //console.log(numberMatch);

            //return input;
            if (numberMatch && numberMatch.length > 1) {
                return {
                    number: parseInt(numberMatch[1]),
                    name: input.substr(numberMatch[0].length)
                };
            }
            return {
                number: undefined,
                name: ''
            };
        }

        $scope.saveData = function () {
            return;
            Service.updatePeople($scope.Data).then(updateComplete, gotErrors);
        }

        $scope.addData = function () {
            return;
            console.log($scope.Data);
            Service.addPeople($scope.Data).then(addComplete, gotErrors);
        }


        function gotErrors(res) {
            $scope.Loadcomplete = true;
            alert(res.statusText);

        }

        //ValidOperator
        function gotValidOperators(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.ValidOperator = myjson;

        }

        function gotDetails(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.Data = myjson;

        }

        function gotFolders(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.FolderList = myjson;

        }


        function updateComplete(records) {
            console.log(records);
            alert("Save Complete");
            $scope.Loadcomplete = true;

            //$scope.close();

        }

        function addComplete(records) {
            console.log(records);

            $scope.Loadcomplete = true;
        }

        function gotValidCountries(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.CountryList = myjson;
        }

        function gotValidProvinces(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.ProvinceList = myjson;
        }

        function gotValidCounty(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.CountyList = myjson;
        }

        function gotValidCommunities(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.CommunityList = myjson;
        }

        function gotValidStreetDirections(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.StreetDirectionList = myjson;
        }

        function gotValidStreetTypes(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //console.log(myjson);
            //alert(myjson);
            $scope.StreetTypeList = myjson;
        }

        function gotValidStreet(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //console.log(myjson);
            //alert(myjson);
            $scope.StreetList = myjson;
        }

        function gotValidUnitTypes(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.UnitTypeList = myjson;
        }

        function gotValidCity(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.CityList = myjson;
        }

    })
    .controller('CtrlFolderDetails', function ($http, $rootScope, $scope, $filter, LocalStorage, $window, Service, $location, $routeParams, $interval, $uibModal, $log) {

        $scope.isDebugMode = false;

        $scope.Loadcomplete = false;

        $scope.RSN = 233318;


        $scope.Data = {};

        $scope.PropertyList = [];
        $scope.PeopleList = [];
        $scope.InfoList = [];
        $scope.ProcessList = [];
        $scope.AttachmentList = [];

        $scope.ProvinceList = [];
        $scope.CountyList = [];
        $scope.CommunityList = [];
        $scope.CountryList = [{ CountryCode: "CAN" }, { CountryCode: "USA" }];
        $scope.StreetDirectionList = [];
        $scope.StreetList = [];
        $scope.StreetTypeList = [];
        $scope.UnitTypeList = [];
        $scope.CityList = [];
        $scope.PhoneDescList = [{ Value: "Work" }, { Value: "Fax" }];
        $scope.CustomerTypeList = [{ Value: 2, Text: "Owner" }, { Value: 1, Text: "aaa" }];

        $scope.ValidOperator = {};
        $scope.AddMode = false;

        $scope.addrHouse = "700";
        $scope.addrUnitType = "";
        $scope.addrUnit = "";
        $scope.addrStreet = "Hespeler";
        $scope.addrStreetPrefix = "";
        $scope.addrStreetType = "Rd";
        $scope.addrStreetDirection = "";

        $scope.ShowDetails = false;
        $scope.ShowProperty = false;
        $scope.ShowPeople = false;
        $scope.ShowInfo = false;
        $scope.ShowProcess = false;
        $scope.ShowAttachment = false;

        $scope.refreshOperator = function () {
            $scope.Loadcomplete = false;
            Service.getValidOperators().then(gotValidOperators, gotErrors);
        }

        $scope.refreshData = function () {
            $scope.Loadcomplete = false;
            Service.getFolder($scope.RSN).then(gotDetails, gotErrors);
            $scope.refreshPeople();
            $scope.refreshProperty();
            $scope.refreshInfo();
            $scope.refreshProcess();
            /*
            */
            $scope.refreshAttachment();
        }

        $scope.refreshPeople = function () {
            $scope.Loadcomplete = false;
            Service.getFolderPeople($scope.RSN).then(gotPeople, gotErrors);
        }
        $scope.refreshProperty = function () {
            $scope.Loadcomplete = false;
            Service.getFolderProperty($scope.RSN).then(gotProperty, gotErrors);
        }
        $scope.refreshInfo = function () {
            $scope.Loadcomplete = false;
            var displayOptions = [];
            Service.getFolderInfo($scope.RSN, displayOptions).then(gotInfo, gotErrors);
        }

        $scope.refreshProcess = function () {
            $scope.Loadcomplete = false;
            var processGroups = [];
            Service.getFolderProcess($scope.RSN, processGroups).then(gotProcess, gotErrors);
        }

        $scope.refreshAttachment = function () {
            $scope.Loadcomplete = false;
            var processGroups = [];
            Service.getFolderAttachment($scope.RSN).then(gotAttachment, gotErrors);
        }

        $scope.viewdocument = function (d) {
            $scope.SelectedAttachment = d;
            Service.getAttachmentContent(d.attachmentRSN).then(gotAttachmentContent, gotErrors);

        }
        $scope.SelectedAttachment = {};
        $scope.SelectedAttachmentContent = {};
        $scope.selectdocument = function (d) {
            $scope.SelectedAttachment = d;

        }

        $scope.fileSelected = function (files) {

            console.log(files);

            if (files && files.length) {
                $scope.filename = files[0].name;
                var mimeType = $scope.determineMimeType(files[0].name);
                if (mimeType === '') {
                    $scope.invalidResume = true;
                    return false;
                }
                $scope.fileBlob = files[0];
                $scope.$digest();
            }
        };

        function _arrayBufferToBase64(buffer) {
            var binary = '';
            var bytes = new Uint8Array(buffer);
            var len = bytes.byteLength;
            for (var i = 0; i < len; i++) {
                binary += String.fromCharCode(bytes[i]);
            }
            return window.btoa(binary);
        }

        function gotAttachmentContent(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //console.log(myjson);
            //alert(myjson);
            $scope.SelectedAttachmentContent = myjson;
            $scope.SelectedAttachmentContent.content2 = _arrayBufferToBase64($scope.SelectedAttachmentContent.content);

        }

        function gotProperty(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.PropertyList = myjson;

        }

        function gotPeople(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.PeopleList = myjson;

        }
        function gotInfo(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.InfoList = myjson;

        }
        function gotProcess(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.ProcessList = myjson;

        }

        function gotAttachment(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.AttachmentList = myjson;

        }

        $scope.searchData = function () {
            $scope.Loadcomplete = false;

            var criteria = [];
            var startIndex = 1;
            var count = 2;
            var orderBy = [];

            var streetNumber = { "fieldName": "propHouse", "value": [$scope.addrHouse], "tableName": "Property", "operatorSpecified": true, "operator": 1, "conjuctiveOperatorSpecified": true, "conjuctiveOperator": 12 };
            var streetName = { "fieldName": "propStreet", "value": [$scope.addrStreet], "tableName": "Property", "operatorSpecified": true, "operator": 1, "conjuctiveOperatorSpecified": true, "conjuctiveOperator": 12 };
            var streetType = { "fieldName": "propStreetType", "value": [$scope.addrStreetType], "tableName": "Property", "operatorSpecified": true, "operator": 1, "conjuctiveOperatorSpecified": true, "conjuctiveOperator": 12 };

            criteria.push(streetNumber);
            criteria.push(streetName);
            criteria.push(streetType);

            orderBy.push("propStreet");

            console.log(criteria);

            Service.searchProperty(criteria, startIndex, count, orderBy).then(gotDetails, gotErrors);
        }

        $scope.refreshProvinceList = function () {
            $scope.Loadcomplete = false;
            Service.getValidProvinces().then(gotValidProvinces, gotErrors);
        }

        $scope.refreshCountyList = function () {
            $scope.Loadcomplete = false;
            Service.getValidCounty().then(gotValidCounty, gotErrors);
        }

        $scope.refreshCommunityList = function () {
            $scope.Loadcomplete = false;
            Service.getValidCommunities($scope.PeopleRSN).then(gotValidCommunities, gotErrors);
        }

        $scope.refreshStreetDirectionList = function () {
            $scope.Loadcomplete = false;
            Service.getValidStreetDirections().then(gotValidStreetDirections, gotErrors);
        }

        $scope.refreshStreetTypeList = function () {
            $scope.Loadcomplete = false;
            Service.getValidStreetTypes().then(gotValidStreetTypes, gotErrors);
        }

        $scope.refreshStreetList = function () {
            $scope.Loadcomplete = false;
            Service.getValidStreet().then(gotValidStreet, gotErrors);
        }

        $scope.refreshUnitTypeList = function () {
            $scope.Loadcomplete = false;
            Service.getValidUnitTypes().then(gotValidUnitTypes, gotErrors);
        }

        $scope.refreshCityList = function () {
            $scope.Loadcomplete = false;
            Service.getValidCity().then(gotValidCity, gotErrors);
        }


        //$scope.refreshPeopleDetails();
        /*
        $scope.refreshProvinceList();
        $scope.refreshCountyList();
        $scope.refreshCommunityList();
        $scope.refreshStreetDirectionList();
        */

        /*
        $scope.refreshStreetTypeList();
        $scope.refreshStreetList();

        $scope.refreshUnitTypeList();
        $scope.refreshCityList();
        */

        $scope.saveData = function () {
            return;
            Service.updatePeople($scope.Data).then(updateComplete, gotErrors);
        }

        $scope.addData = function () {
            return;
            console.log($scope.Data);
            Service.addPeople($scope.Data).then(addComplete, gotErrors);
        }


        function gotErrors(res) {
            $scope.Loadcomplete = true;
            alert(res.statusText);

        }

        //ValidOperator
        function gotValidOperators(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.ValidOperator = myjson;

        }

        function gotDetails(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.Data = myjson;

        }

        function updateComplete(records) {
            console.log(records);
            alert("Save Complete");
            $scope.Loadcomplete = true;

            //$scope.close();

        }

        function addComplete(records) {
            console.log(records);

            $scope.Loadcomplete = true;
        }

        function gotValidProvinces(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.ProvinceList = myjson;
        }

        function gotValidCounty(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.CountyList = myjson;
        }

        function gotValidCommunities(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.CommunityList = myjson;
        }

        function gotValidStreetDirections(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.StreetDirectionList = myjson;
        }

        function gotValidStreetTypes(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //console.log(myjson);
            //alert(myjson);
            $scope.StreetTypeList = myjson;
        }

        function gotValidStreet(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //console.log(myjson);
            //alert(myjson);
            $scope.StreetList = myjson;
        }

        function gotValidUnitTypes(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.UnitTypeList = myjson;
        }

        function gotValidCity(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.CityList = myjson;
        }

    })
    .controller('CtrlSearchProperty', function ($http, $rootScope, $scope, $filter, LocalStorage, $window, Service, $location, $routeParams, $interval, $uibModal, $log) {

        $scope.isDebugMode = false;

        $scope.Loadcomplete = false;

        $scope.CurrentStep = 1;

        $scope.RSN = 26678;


        $scope.Data = {};
        $scope.SelectedAddress = {};
        $scope.SelectedProperty = {};

        $scope.ProvinceList = [];
        $scope.CountyList = [];
        $scope.CommunityList = [];
        $scope.CountryList = [{ CountryCode: "CAN" }, { CountryCode: "USA" }];
        $scope.StreetDirectionList = [];
        $scope.StreetList = [];
        $scope.StreetTypeList = [];
        $scope.UnitTypeList = [];
        $scope.CityList = [];
        $scope.PhoneDescList = [{ Value: "Work" }, { Value: "Fax" }];
        $scope.CustomerTypeList = [{ Value: 2, Text: "Owner" }, { Value: 1, Text: "aaa" }];

        $scope.FolderList = [];

        $scope.PropertyList = [];
        $scope.PropertyList = [{
            "communityCodeDesc": "",
            "countyCodeDesc": "",
            "dateCreated": "/Date(-2208970800000)/",
            "dateCreatedSpecified": false,
            "dateObsoleted": null,
            "dateObsoletedSpecified": false,
            "familyRSN": 26678,
            "familyRSNSpecified": false,
            "gpsElevation": "",
            "gpsLatitude": "",
            "gpsLongitude": "",
            "gpsZone": "",
            "legalDesc": "PLAN 1364 LOT 51 CLOSED;HESPELER RD RP67R3704 PARTS;1 TO 7",
            "parentPropertyRSN": null,
            "parentPropertyRSNSpecified": false,
            "prop116": null,
            "prop116Specified": false,
            "propArea": 3.74,
            "propAreaCode": null,
            "propAreaCodeSpecified": false,
            "propAreaSpecified": false,
            "propBlock": "",
            "propCity": "Cambridge",
            "propCode": null,
            "propCodeSpecified": false,
            "propComment": "",
            "propCommunityCode": null,
            "propCommunityCodeSpecified": false,
            "propCountyCode": null,
            "propCountyCodeSpecified": false,
            "propCrossStreet": "",
            "propCrossStreetUpper": "",
            "propDepth": null,
            "propDepthSpecified": false,
            "propDesc": "700 Hespeler Rd, Cambridge, ON N3H 5L8",
            "propFireDistrict": "1",
            "propFrontage": null,
            "propFrontageSpecified": false,
            "propGISArea": null,
            "propGISAreaSpecified": false,
            "propGISID1": "037670040",
            "propHistoric": "A",
            "propHouse": "700",
            "propHouseNumeric": 700,
            "propHouseNumericSpecified": false,
            "propLot": "51",
            "propPlan": "1364",
            "propPostal": "N3H 5L8",
            "propProvince": "ON",
            "propRange": "",
            "propSection": "1",
            "propStreet": "Hespeler",
            "propStreetDirection": " ",
            "propStreetPrefix": "",
            "propStreetType": "Rd",
            "propStreetUpper": "HESPELER",
            "propSubDivision": "",
            "propTownship": "",
            "propUnit": "",
            "propUnitType": "",
            "propX": 554304.976595,
            "propXSpecified": false,
            "propY": 4806540.620025,
            "propYSpecified": false,
            "propertyName": "",
            "propertyRSN": 26678,
            "propertyRSNSpecified": false,
            "propertyRoll": "150015080000000",
            "routeCode": null,
            "routeCodeSpecified": false,
            "statusActive": false,
            "statusActiveSpecified": false,
            "statusCode": 1,
            "statusCodeSpecified": false,
            "statusDesc": "",
            "zoneType1": "C4",
            "zoneType2": "",
            "zoneType3": "",
            "zoneType4": "",
            "zoneType5": ""
        }];
        $scope.ValidOperator = {};
        $scope.AddMode = false;

        $scope.addrHouse = "700";
        $scope.addrUnitType = "";
        $scope.addrUnit = "";
        $scope.addrStreet = "Hespeler";
        $scope.addrStreetPrefix = "";
        $scope.addrStreetType = "Rd";
        $scope.addrStreetDirection = "";
        $scope.rollNumber = "150015080000000";

        $scope.fullAddress = "700 Hespeler Rd";

        $scope.viewtype = "JSON";

        $scope.refreshOperator = function () {
            $scope.Loadcomplete = false;
            Service.getValidOperators().then(gotValidOperators, gotErrors);
        }

        $scope.refreshData = function () {
            $scope.Loadcomplete = false;
            Service.getProperty($scope.RSN).then(gotDetails, gotErrors);
        }

        $scope.showPermits = function (RSN) {
            console.log(RSN);
            $scope.Loadcomplete = false;
            Service.searchFolderByProperty(RSN).then(gotFolders, gotErrors);
        }

        $scope.searchPermits = function (p) {
            console.log(p);
            $scope.SelectedProperty = p;
            $scope.Loadcomplete = false;
            Service.searchFolderByProperty(p.propertyRSN).then(gotFolders, gotErrors);
        }

        $scope.searchProperty = function () {
            $scope.Loadcomplete = false;

            var count = 10;


            Service.searchProperty($scope.addrUnit, $scope.addrHouse, $scope.addrStreet, $scope.addrStreetType, $scope.addrStreetDirection, $scope.rollNumber, count).then(gotProperties, gotErrors);

        }


        $scope.clearSearch = function () {
            $scope.addrHouse = "";
            $scope.addrUnitType = "";
            $scope.addrUnit = "";
            $scope.addrStreet = "";
            $scope.addrStreetPrefix = "";
            $scope.addrStreetType = "";
            $scope.addrStreetDirection = "";
            $scope.rollNumber = "";
        }

        $scope.searchData = function () {
            $scope.Loadcomplete = false;

            var criteria = [];
            var startIndex = 1;
            var count = 10;
            var orderBy = [];

            var streetNumber = { "fieldName": "propHouse", "value": [$scope.addrHouse], "tableName": "Property", "operatorSpecified": true, "operator": 1, "conjuctiveOperatorSpecified": true, "conjuctiveOperator": 12 };
            var streetName = { "fieldName": "propStreet", "value": [$scope.addrStreet], "tableName": "Property", "operatorSpecified": true, "operator": 1, "conjuctiveOperatorSpecified": true, "conjuctiveOperator": 12 };
            var streetType = { "fieldName": "propStreetType", "value": [$scope.addrStreetType], "tableName": "Property", "operatorSpecified": true, "operator": 1, "conjuctiveOperatorSpecified": true, "conjuctiveOperator": 12 };

            criteria.push(streetNumber);
            criteria.push(streetName);
            criteria.push(streetType);

            orderBy.push("propStreet");

            console.log(criteria);

            Service.searchProperty_Old(criteria, startIndex, count, orderBy).then(gotDetails, gotErrors);
        }

        $scope.searchFullAddress = function () {
            $scope.Loadcomplete = false;

            Service.searchPropertyAjax($scope.fullAddress).then(gotDetails, gotErrors);
        }

        $scope.refreshProvinceList = function () {
            $scope.Loadcomplete = false;
            Service.getValidProvinces().then(gotValidProvinces, gotErrors);
        }

        $scope.refreshCountyList = function () {
            $scope.Loadcomplete = false;
            Service.getValidCounty().then(gotValidCounty, gotErrors);
        }

        $scope.refreshCommunityList = function () {
            $scope.Loadcomplete = false;
            Service.getValidCommunities($scope.PeopleRSN).then(gotValidCommunities, gotErrors);
        }

        $scope.refreshStreetDirectionList = function () {
            $scope.Loadcomplete = false;
            Service.getValidStreetDirections().then(gotValidStreetDirections, gotErrors);
        }

        $scope.refreshStreetTypeList = function () {
            $scope.Loadcomplete = false;
            Service.getValidStreetTypes().then(gotValidStreetTypes, gotErrors);
        }

        $scope.refreshStreetList = function () {
            $scope.Loadcomplete = false;
            Service.getValidStreet().then(gotValidStreet, gotErrors);
        }

        $scope.refreshUnitTypeList = function () {
            $scope.Loadcomplete = false;
            Service.getValidUnitTypes().then(gotValidUnitTypes, gotErrors);
        }

        $scope.refreshCityList = function () {
            $scope.Loadcomplete = false;
            Service.getValidCity().then(gotValidCity, gotErrors);
        }


        //$scope.refreshProvinceList();
        //$scope.refreshCountyList();
        //$scope.refreshCommunityList();
        $scope.refreshStreetDirectionList();
        /*
        */

        $scope.refreshStreetTypeList();
        $scope.refreshStreetList();

        //$scope.refreshUnitTypeList();
        //$scope.refreshCityList();
        /*
        */


        $scope.fromDateString = function (str) {

            return fromDateString(str);
        }

        $scope.addresschanged = function () {
            console.log($scope.SelectedAddress);

        }


        $scope.suggest = function (input) {
            console.log(input);

            if (input.length > 2) {
                return Service.searchPropertyAjax(input).then(gotSuggestedAddress, gotErrors);
            }
            //return Service.getSuggestedAddress($scope.AddressSearch.number, $scope.AddressSearch.search, $scope.AddressSearch.latitude, $scope.AddressSearch.longitude, $scope.AddressSearch.max).then(gotSuggestedAddress, gotErrors);;
            /*
            var streetElements = splitStreetNumber(input);

            if (streetElements.name.length >= 2) {
                $scope.AddressSearch.number = streetElements.number;
                $scope.AddressSearch.search = streetElements.name;

                return Service.getSuggestedAddress($scope.AddressSearch.number, $scope.AddressSearch.search, $scope.AddressSearch.latitude, $scope.AddressSearch.longitude, $scope.AddressSearch.max).then(gotSuggestedAddress, gotErrors);;
            }
            else {
                return [];
            }
            */
        }

        $scope.formatItem = function (item) {
            //console.log(item);
            //return 'aaa';
            if (item) {
                return item.propDesc;
                //return item.propHouse + ' ' + item.propStreet + ' ' + item.propStreetType + ' - ' + item.propUnit;
                //return (item.NUMBER ? item.NUMBER + ' ' : '') + item.DisplayString;

            }
        }

        function gotSuggestedAddress(records) {
            //console.log(records);
            //var records2 = records.replace('"[', '[').replace(']"', ']').replace(/\\/g, "");
            var myjson = angular.fromJson(records);
            //console.log(myjson);
            //console.log(myjson);

            $scope.AddressItemList = myjson;

            if ($scope.AddressItemList.length > 0) {
                //$scope.SelectedAddressItem = $scope.AddressItemList[0];

                //console.log($scope.SelectedAddressItem);
            }

            return $scope.AddressItemList;
        }

        function splitStreetNumber(input) {
            var numberMatch = input.match(/^(\d+)\s+/);
            //console.log(numberMatch);

            //return input;
            if (numberMatch && numberMatch.length > 1) {
                return {
                    number: parseInt(numberMatch[1]),
                    name: input.substr(numberMatch[0].length)
                };
            }
            return {
                number: undefined,
                name: ''
            };
        }

        $scope.saveData = function () {
            return;
            Service.updatePeople($scope.Data).then(updateComplete, gotErrors);
        }

        $scope.addData = function () {
            return;
            console.log($scope.Data);
            Service.addPeople($scope.Data).then(addComplete, gotErrors);
        }


        function gotErrors(res) {
            $scope.Loadcomplete = true;
            alert(res.statusText);

        }

        //ValidOperator
        function gotValidOperators(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.ValidOperator = myjson;

        }

        function gotDetails(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.Data = myjson;

        }

        function gotProperties(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.PropertyList = myjson;

            $scope.CurrentStep = 3;
        }

        function gotFolders(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.FolderList = myjson;

            $scope.CurrentStep = 4;

        }


        function updateComplete(records) {
            console.log(records);
            alert("Save Complete");
            $scope.Loadcomplete = true;

            //$scope.close();

        }

        function addComplete(records) {
            console.log(records);

            $scope.Loadcomplete = true;
        }

        function gotValidProvinces(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.ProvinceList = myjson;
        }

        function gotValidCounty(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.CountyList = myjson;
        }

        function gotValidCommunities(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.CommunityList = myjson;
        }

        function gotValidStreetDirections(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.StreetDirectionList = myjson;
        }

        function gotValidStreetTypes(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //console.log(myjson);
            //alert(myjson);
            $scope.StreetTypeList = myjson;
        }

        function gotValidStreet(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //console.log(myjson);
            //alert(myjson);
            $scope.StreetList = myjson;
        }

        function gotValidUnitTypes(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.UnitTypeList = myjson;
        }

        function gotValidCity(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.CityList = myjson;
        }

    })
    .controller('CtrlMobileSign', function ($http, $rootScope, $scope, $filter, LocalStorage, $window, Service, $location, $routeParams, $interval, $uibModal, $log) {

        $scope.isDebugMode = false;

        $scope.Loadcomplete = false;


        $scope.DataList = [];

        $scope.addrHouse = "700";
        $scope.addrStreet = "Hespeler";
        $scope.addrStreetType = "Rd";
        $scope.addrStreetDirection = "";
        $scope.addrPostalCode = "";


        $scope.viewtype = "JSON";


        $scope.refreshData = function () {
            $scope.Loadcomplete = false;
            Service.searchMobileSign($scope.addrHouse, $scope.addrStreet, $scope.addrStreetType, $scope.addrStreetDirection, $scope.addrPostalCode).then(gotData, gotErrors);
        }




        $scope.refreshData();




        function gotErrors(res) {
            $scope.Loadcomplete = true;
            alert(res.statusText);

        }


        function gotData(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //alert(myjson);
            $scope.DataList = myjson;
        }


    })
;


function fromDateString(str) {

    if (str == null) {
        return "";
    }

    var res = str.match(/\/Date\((\d+)(?:([+-])(\d\d)(\d\d))?\)\//);
    if (res == null)
        return new Date(NaN); // or something that indicates it was not a DateString
    var time = parseInt(res[1], 10);
    if (res[2] && res[3] && res[4]) {
        var dir = res[2] == "+" ? -1 : 1,
            h = parseInt(res[3], 10),
            m = parseInt(res[4], 10);
        time += dir * (h * 60 + m) * 60000;
    }

    var dt = new Date(time);

    return dateToYMD(dt);

    /*
    var date = "0" + dt.getDate();
    var month = "0" + (dt.getMonth()+1); //Be careful! January is 0 not 1
    var year = dt.getFullYear();

    var dateString = year + "-" + month.slice(-2) + "-" + date.slice(-2);


    //return dt.toLocaleDateString();

    return dateString;

    //console.log(dt.toString('yyyy-MM-d-h-mm-ss'));
    return dt.toISOString();//.substring(0, 10)
    */
}

function dateToYMD(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1; //Month from 0 to 11
    var y = date.getFullYear();
    return '' + y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
}



