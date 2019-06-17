cocapp
.controller('CtrlPeopleDetails', function ($http, $rootScope, $scope, $filter, LocalStorage, $window, Service, $location, $routeParams, $interval, $uibModal, $log) {

    $scope.isDebugMode = false;

    $scope.Loadcomplete = false;

    $scope.PeopleRSN = 198175;


    $scope.CurrentPeople = {};

    $scope.ProvinceList = [];
    $scope.CountyList = [];
    $scope.CommunityList = [];
    $scope.CountryList = [{ CountryCode: "CAN" }, { CountryCode: "USA" }];
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
        $scope.CountryList = [{ CountryCode: "CAN" }, { CountryCode: "USA" }];
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

        $scope.CurrentStep = 2;
        $scope.IAgree = "";

        $scope.LoadcompleteStreetType = false;
        $scope.LoadcompleteStreetDirection = false;
        $scope.LoadcompleteStreetName = false;

        $scope.LoadcompleteStep2 = true;
        $scope.LoadcompleteStep3 = true;
        $scope.LoadcompleteStep4 = true;

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

        $scope.CheckStatusStep2 = function () {
            if($scope.LoadcompleteStreetType == true &&
                $scope.LoadcompleteStreetDirection == true &&
                $scope.LoadcompleteStreetName == true)
            {
                $scope.LoadcompleteStep2 = true;
                $scope.CurrentStep = 2;
            }
        }

        //CtrlSearchProperty
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
            $scope.LoadcompleteStreetDirection = false;
            Service.getValidStreetDirections().then(gotValidStreetDirections, gotErrors);
        }

        $scope.refreshStreetTypeList = function () {
            $scope.LoadcompleteStreetType = false;
            Service.getValidStreetTypes().then(gotValidStreetTypes, gotErrors);
        }

        $scope.refreshStreetList = function () {
            $scope.LoadcompleteStreetName = false;
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

        $scope.IAgreeClicked = function () {

            $scope.LoadcompleteStep2 = false;

            $scope.refreshStreetDirectionList();
            $scope.refreshStreetTypeList();
            $scope.refreshStreetList();
        }

        //CtrlSearchProperty

        /*
        */
        $scope.refreshStreetDirectionList();
        $scope.refreshStreetTypeList();
        $scope.refreshStreetList();
        /*
        */

        //$scope.refreshProvinceList();
        //$scope.refreshCountyList();
        //$scope.refreshCommunityList();
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

            $scope.LoadcompleteStreetDirection = true;
            $scope.CheckStatusStep2();
        }

        function gotValidStreetTypes(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //console.log(myjson);
            //alert(myjson);
            $scope.StreetTypeList = myjson;

            $scope.LoadcompleteStreetType = true;
            $scope.CheckStatusStep2();
        }

        function gotValidStreet(records) {
            console.log(records);
            //alert(records);
            $scope.Loadcomplete = true;

            var myjson = angular.fromJson(records);
            //console.log(myjson);
            //alert(myjson);
            $scope.StreetList = myjson;

            $scope.LoadcompleteStreetName = true;
            $scope.CheckStatusStep2();
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



