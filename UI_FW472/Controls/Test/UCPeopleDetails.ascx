<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="UCPeopleDetails.ascx.cs" Inherits="RA.AMANDA.Portal.UIFW.Controls.Test.UCPeopleDetails" %>

<div ng-controller="CtrlPeopleDetails">

    <div class="div-section">
        <table>
            <tr>
                <td>
                    Row ID/RSN
                </td>
                <td>
                    <input ng-model="PeopleRSN" />
                </td>
                <td>
                    <div class ="applybutton" ng-click="refreshPeopleDetails(false)">
                        Refresh
                    </div>
                </td>
                <td style="width:20%;">
                    <div class="savebutton" style="float:right;margin-right: 5px; " title="Save data" ng-click="savePeople();">
                        <i class="fa fa-floppy-o"></i>&nbsp;Update
                    </div>
                </td>
            </tr>
        </table>
    </div> 

    <div class="div-space-between-section"></div>

    <div class="div-section-header">
        {{CurrentPeople.organizationName}} ({{CurrentPeople.nameFirst}} {{CurrentPeople.nameLast}})&nbsp;
    </div>
    <div class="div-section">
        <table class="folderdetails">
            <tr>
                <td class="td-head" style="width: 100px;">
                    Contact
                </td>
                <td class="td-data">
                    <div>
                        {{CurrentPeople.nameFirst}} {{CurrentPeople.nameLast}}&nbsp;
                    </div>
                </td>
                <td class="td-head" style="width: 80px;">
                    Phone
                </td>
                <td class="td-data" style="width: 150px;">
                    <div>
                        {{CurrentPeople.phone1}}&nbsp;
                    </div>
                </td>
                <td class="td-head" style="width: 80px;">
                    Type
                </td>
                <td class="td-data" style="width: 100px;">
                    <div>
                        {{CurrentPeople.peopleDesc}}&nbsp;
                    </div>
                </td>
                <td class="td-head" style="width: 100px;">
                    Row ID
                </td>
                <td class="td-data" style="width: 80px;">
                    <div>
                        {{CurrentPeople.peopleRSN}}&nbsp;
                    </div>
                </td>
            </tr>
            <tr>
                <td class="td-head">
                    Org
                </td>
                <td class="td-data">
                    <div>
                        {{CurrentPeople.organizationName}}&nbsp;
                    </div>
                </td>
                <td class="td-head">
                    Email
                </td>
                <td class="td-data">
                    <div>
                        {{CurrentPeople.emailAddress}}&nbsp;
                    </div>
                </td>
                <td class="td-head">
                    Status
                </td>
                <td class="td-data">
                    <div>
                        {{CurrentPeople.statusCode}}&nbsp;
                    </div>
                </td>
                <td class="td-head">
                    Parent ID
                </td>
                <td class="td-data">
                    <div>
                        {{CurrentPeople.parentRSN}}&nbsp;
                    </div>
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
                <td class="td-data" colspan="5">
                    <input ng-model="CurrentPeople.addrPrefix" />
                </td>
                <td colspan="2">
                    <div class="savebutton" style="float:right;margin-right: 5px; display:none  " title="Save data" ng-click="savePeople();">
                        <i class="fa fa-floppy-o"></i>&nbsp;Save
                    </div>

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
                <td class="td-data" style="width: 100px;">
                    <input ng-model="PeopleRSN" style="width:99%;" />
                </td>
                <td class="td-data">
                    <div class="refreshbutton" style="" title="Refresh" ng-click="refreshPeopleDetails();">
                        Refresh
                    </div>
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
                <td class="td-head" style="">
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
                        <option ng-repeat="d in CountryList" value="{{d.countryCode}}" ng-selected="CurrentPeople.addrCountry == d.countryCode">{{d.countryName}}</option>
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

