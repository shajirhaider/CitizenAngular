var cocapp = angular.module('amanda.app', ['ngRoute', 'ngAnimate', 'ui.bootstrap'])
    .run(function (Security, $rootScope, $templateCache) {
        Security.token = requestData.token;
        angular.element(document).on("click", function (e) {
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
    ;