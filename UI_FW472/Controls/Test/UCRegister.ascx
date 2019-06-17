<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="UCRegister.ascx.cs" Inherits="RA.AMANDA.Portal.UIFW.Controls.Test.UCRegister" %>

<div ng-controller="CtrlPeopleDetails">

    <div class="div-section">
        <table class="folderdetails">
            <tr>
                <td style="width:100px;">
                    Row ID/RSN
                </td>
                <td style="width:100px;">
                    <input ng-model="PeopleRSN" style ="width:99%;" />
                </td>
                <td style="width:80px;">
                    <div class ="applybutton" ng-click="refreshPeopleDetails(true)">
                        Refresh
                    </div>
                </td>
                <td style="width:100px;text-align:right; ">
                    Password
                </td>
                <td style="width:150px;">
                    <input ng-model="password" style ="width:99%;" />
                </td>
                <td style="width:200px;">
                    <div class ="applybutton" ng-click="updatePassword()">
                        <i class="fa fa-floppy-o"></i>&nbsp;Save Password
                    </div>
                </td>
                <td>

                </td>
                <td style="width:150px;">
                    <div class="savebutton" style="float:right;margin-right: 5px; " title="Save data" ng-click="savePeople();">
                        <i class="fa fa-floppy-o"></i>&nbsp;Update
                    </div>
                </td>
                <td style="width:150px;">
                    <div class="savebutton" style="float:right;margin-right: 5px; " title="Save data" ng-click="addPeople();">
                        <i class="fa fa-floppy-o"></i>&nbsp;Register
                    </div>
                </td>
            </tr>
        </table>
    </div> 

    <div class="div-space-between-section"></div>

    <div class="div-section-header">
        Personal Info
    </div>
    <div class="div-section">
        <table class="folderdetails">
            <tr>
                <td class="td-head" style="width: 120px;">
                    Email
                </td>
                <td class="td-data">
                    <input ng-model="CurrentPeople.emailAddress" />
                </td>
                <td class="td-head" style="width: 120px;">
                    Org
                </td>
                <td class="td-data" style="">
                    <input ng-model="CurrentPeople.organizationName" />
                </td>
            </tr>
            <tr>
                <td class="td-head" style="">
                    First Name
                </td>
                <td class="td-data" style="">
                    <input ng-model="CurrentPeople.nameFirst" />
                </td>
                <td class="td-head" style="">
                    Last Name
                </td>
                <td class="td-data" style="">
                    <input ng-model="CurrentPeople.nameLast" />
                </td>
            </tr>
            <tr>
                <td class="td-head" style="">
                    Phone 1
                </td>
                <td class="td-data" style="">
                    <input ng-model="CurrentPeople.phone1" />
                </td>
                <td class="td-head" style="">
                     Phone 1 Type
                </td>
                <td class="td-data" style="">
                    <select name="phonedesc1" ng-model="CurrentPeople.phone1Desc" style="width:100%;">
                        <option ng-repeat="d in PhoneDescList" value="{{d.Value}}" ng-selected="CurrentPeople.phone1Desc == d.Value">{{d.Value}}</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td class="td-head" style="">
                    Phone 2
                </td>
                <td class="td-data" style="">
                    <input ng-model="CurrentPeople.phone2" />
                </td>
                <td class="td-head" style="">
                     Phone 2 Type
                </td>
                <td class="td-data" style="">
                    <select name="phonedesc2" ng-model="CurrentPeople.phone2Desc" style="width:100%;">
                        <option ng-repeat="d in PhoneDescList" value="{{d.Value}}" ng-selected="CurrentPeople.phone2Desc == d.Value">{{d.Value}}</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td class="td-head" style="">
                    Phone 3
                </td>
                <td class="td-data" style="">
                    <input ng-model="CurrentPeople.phone3" />
                </td>
                <td class="td-head" style="">
                     Phone 3 Type
                </td>
                <td class="td-data" style="">
                    <select name="phonedesc3" ng-model="CurrentPeople.phone3Desc" style="width:100%;">
                        <option ng-repeat="d in PhoneDescList" value="{{d.Value}}" ng-selected="CurrentPeople.phone3Desc == d.Value">{{d.Value}}</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td class="td-head" style="">
                    Customer Type
                </td>
                <td class="td-data" style="">
                    <select name="customerType" ng-model="CurrentPeople.peopleCode" style="width:100%;">
                        <option ng-repeat="d in CustomerTypeList" value="{{d.Value}}" ng-selected="CurrentPeople.peopleCode == d.Value">{{d.Text}}</option>
                    </select>
                </td>
                <td class="td-head" style="">
                    Status
                </td>
                <td class="td-data" style="">
                    <input ng-model="CurrentPeople.statusCode" />
                </td>
            </tr>
        </table>
    </div>



    <div class="div-space-between-section"></div>

    <div class="div-section-header">Address</div>

    <div class="div-section">
        <table class="folderdetails">
            <tr>
                <td class="td-head">
                    Addr Prefix
                </td>
                <td class="td-data" colspan="7">
                    <input ng-model="CurrentPeople.addrPrefix" />
                </td>
            </tr>
            <tr>
                <td class="td-head" style="width: 100px;">
                    Street#
                </td>
                <td class="td-data">
                    <input ng-model="CurrentPeople.addrHouse" />
                </td>
                <td class="td-head" style="width: 100px;">
                    Unit Type
                </td>
                <td class="td-data">
                    <select name="repeatUnitType" id="repeatUnitType" ng-model="CurrentPeople.addrUnitType" style="width:100%;">
                        <option ng-repeat="d in UnitTypeList" value="{{d.addressUnitType}}" ng-selected="CurrentPeople.addrUnitType == d.addressUnitType">{{d.addressUnitTypeDesc}}</option>
                    </select>
                </td>
                <td class="td-head" style="width: 100px;">
                    Unit#
                </td>
                <td class="td-data">
                    <input ng-model="CurrentPeople.addrUnit" />
                </td>
            </tr>
            <tr>
                <td class="td-head" style="">
                    Street Name
                </td>
                <td class="td-data">
                    <input ng-model="CurrentPeople.addrStreet" />
                </td>
                <td class="td-head" style="">
                    Prefix
                </td>
                <td class="td-data">
                    <input ng-model="CurrentPeople.addrStreetPrefix" />
                </td>
                <td class="td-head" style="">
                    Type
                </td>
                <td class="td-data">
                    <select name="repeatStreetType" id="repeatStreetType" ng-model="CurrentPeople.addrStreetType" style="width:100%;">
                        <option ng-repeat="d in StreetTypeList" value="{{d.id}}" ng-selected="CurrentPeople.addrStreetType == d.id">{{d.description}}</option>
                    </select>
                </td>
                <td class="td-head" style="width:100px;">
                    Direction
                </td>
                <td class="td-data">
                    <input ng-model="CurrentPeople.addrStreetDirection" />
                </td>
            </tr>
            <tr>
                <td class="td-head" style="">
                    City
                </td>
                <td class="td-data">
                    <select name="repeatCity" id="repeatCity" ng-model="CurrentPeople.addrCity" style="width:100%;">
                        <option ng-repeat="d in CityList" value="{{d.city}}" ng-selected="CurrentPeople.addrCity == d.city">{{d.city}}</option>
                    </select>
                </td>
                <td class="td-head" style="">
                    County
                </td>
                <td class="td-data">
                    <div>
                        &nbsp;
                    </div>
                </td>
                <td class="td-head" style="">
                    Community
                </td>
                <td class="td-data">
                    <div>
                        {{CurrentPeople.community}}&nbsp;
                    </div>
                </td>
                <td class="td-head" style="">
                    Internet Access
                </td>
                <td class="td-data">
                    <input ng-model="CurrentPeople.internetAccess" />
                </td>
            </tr>
            <tr>
                <td class="td-head" style="">
                    Postal Code
                </td>
                <td class="td-data">
                    <input ng-model="CurrentPeople.addrPostal" />
                </td>
                <td class="td-head" style="">
                    Province
                </td>
                <td class="td-data">
                    <select name="repeatProvince" id="repeatProvince" ng-model="CurrentPeople.addrProvince" style="width:100%;">
                        <option ng-repeat="d in ProvinceList" value="{{d.provinceType}}" ng-selected="CurrentPeople.addrProvince == d.provinceType">{{d.provinceName}}</option>
                    </select>
                </td>
                <td class="td-head" style="">
                    Country
                </td>
                <td class="td-data">
                    <select name="repeatCountry" id="repeatCountry" ng-model="CurrentPeople.addrCountry" style="width:100%;">
                        <option ng-repeat="d in CountryList" value="{{d.CountryCode}}" ng-selected="CurrentPeople.addrCountry == d.CountryCode">{{d.CountryCode}}</option>
                    </select>
                </td>
            </tr>
        </table>
    </div>


    <div class="div-space-between-section"></div>

    <div class="div-section-header">Free Form Address</div>

    <div class="div-section">
        <table class="folderdetails">
            <tr>
                <td class="td-head" style="width: 100px;">
                    Line 1
                </td>
                <td class="td-data">
                    <input ng-model="CurrentPeople.addressLine1" />
                </td>
            </tr>
            <tr>
                <td class="td-head" style="width: 50px;">
                    Line 2
                </td>
                <td class="td-data">
                    <input ng-model="CurrentPeople.addressLine2" />
                </td>
            </tr>
            <tr>
                <td class="td-head" style="width: 50px;">
                    Line 3
                </td>
                <td class="td-data">
                    <input ng-model="CurrentPeople.addressLine3" />
                </td>
            </tr>
            <tr>
                <td class="td-head" style="width: 50px;">
                    Line 4
                </td>
                <td class="td-data">
                    <input ng-model="CurrentPeople.addressLine4" />
                </td>
            </tr>
            <tr>
                <td class="td-head" style="width: 50px;">
                    Line 5
                </td>
                <td class="td-data">
                    <input ng-model="CurrentPeople.addressLine5" />
                </td>
            </tr>
            <tr>
                <td class="td-head" style="width: 50px;">
                    Line 6
                </td>
                <td class="td-data">
                    <input ng-model="CurrentPeople.addressLine6" />
                </td>
            </tr>
        </table>
    </div>

</div>
