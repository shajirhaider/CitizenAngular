<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="UCPropertyDetails.ascx.cs" Inherits="RA.AMANDA.Portal.UIFW.Controls.Test.UCPropertyDetails" %>

<div ng-controller="CtrlPropertyDetails">

    <div class="div-section">
        <table>
            <tr>
                <td>
                    Row ID/RSN
                </td>
                <td>
                    <input ng-model="RSN" />
                </td>
                <td>
                    <div class ="applybutton" ng-click="refreshData()">
                        Refresh
                    </div>
                </td>
                <td>
                    <div class ="applybutton" ng-click="refreshOperator()">
                        Operator
                    </div>
                </td>
                <td style="width:20%;">

                </td>
            </tr>
        </table>
    </div> 

    <div class="div-space-between-section"></div>
    <div class="div-section">
        <table class="">
            <tr>
                <td class="td-head" style="width: 100px;">
                    Street#
                </td>
                <td class="td-data">
                    <input ng-model="addrHouse" />
                </td>
                <td class="td-head" style="width: 100px;">
                    Unit Type
                </td>
                <td class="td-data">
                    <select name="repeatUnitType" id="repeatUnitType" ng-model="addrUnitType" style="width:100%;">
                        <option ng-repeat="d in UnitTypeList" value="{{d.addressUnitType}}" ng-selected="addrUnitType == d.addressUnitType">{{d.addressUnitTypeDesc}}</option>
                    </select>
                </td>
                <td class="td-head" style="width: 100px;">
                    Unit#
                </td>
                <td class="td-data">
                    <input ng-model="addrUnit" />
                </td>
                <td class="td-data">
                    <div class ="applybutton" ng-click="searchData()">
                        Search
                    </div>
                </td>
            </tr>
            <tr>
                <td class="td-head" style="">
                    Street Name
                </td>
                <td class="td-data">
                    <select name="repeatStreet" id="repeatStreet" ng-model="addrStreet" style="width:100%;">
                        <option ng-repeat="d in StreetList" value="{{d.propStreet}}" ng-selected="CurrentPeople.addrStreet == d.propStreet">{{d.propStreet}}</option>
                    </select>
                    <input ng-model="addrStreet"  />
                </td>
                <td class="td-head" style="">
                    Prefix
                </td>
                <td class="td-data">
                    <input ng-model="addrStreetPrefix" />
                </td>
                <td class="td-head" style="">
                    Type
                </td>
                <td class="td-data">
                    <select name="repeatStreetType" id="repeatStreetType" ng-model="addrStreetType" style="width:100%;">
                        <option ng-repeat="d in StreetTypeList" value="{{d.id}}" ng-selected="CurrentPeople.addrStreetType == d.id">{{d.description}}</option>
                    </select>
                </td>
                <td class="td-head" style="">
                    Direction
                </td>
                <td class="td-data">
                    <input ng-model="addrStreetDirection" />
                </td>
            </tr>
        </table>
    </div>

    <div class="div-space-between-section"></div>

    <div class="div-section">
        <table style="width:100%;">
            <tr>
                <td class="td-head" style="width: 100px;">
                    Full Address
                </td>
                <td class="td-data">
                    <input ng-model="fullAddress" style ="width:99%;" />
                </td>
                <td class="td-data" style="width:100px;">
                    <div class ="applybutton" ng-click="searchFullAddress()">
                        Search
                    </div>
                </td>
            </tr>
        </table>
    </div>

    <div class="div-section">
        <table style="width:100%;">
            <tr>
                <td class="td-head" style="width: 100px;">
                    Full Address
                </td>
                <td class="td-data">
                    <address-autosuggest ng-model="SelectedAddress" selected-address="SelectedAddress" ng-change="addresschanged();" loading="loadingItems" ></address-autosuggest>
                </td>
                <td class="td-data" style="width:100px;">
                </td>
            </tr>
        </table>
    </div>

    <div class="div-space-between-section"></div>

    <div class="div-section-header">
        <table style="width:100%;">
            <tr>
                <td>
                    SelectedAddress:{{SelectedAddress.propDesc}}&nbsp;
                </td>
                <td style="width:50px;">
                    <a href ="javascript:void('0');" ng-click="viewtype='JSON';">JSON</a>
                </td>
                <td style="width:50px;">
                    <a href ="javascript:void('0');" ng-click="viewtype='DATA';">DATA</a>
                </td>
            </tr>
        </table>
    </div>
    <div class="div-section">
        <div style ="word-wrap:break-word" ng-show="viewtype=='JSON'">
            <code>
                <pre>{{SelectedAddress |json}}</pre>
            </code>
        </div>
        <div style ="word-wrap:break-word" ng-show="viewtype=='DATA'">
        <table style="width:100%;">
            <tr>
                <td class="td-head" style="width: 100px;text-align:right;">
                    Full Address:
                </td>
                <td class="td-data">
                    {{SelectedAddress.propDesc}}
                </td>
                <td class="td-head" style="width: 50px;text-align:right;">
                    RSN:
                </td>
                <td class="td-data" style="width:50px;">
                    {{SelectedAddress.propertyRSN}}
                </td>
                <td class="td-head" style="width: 100px;text-align:right;">
                    Roll Number:
                </td>
                <td class="td-data" style="width:100px;">
                    {{SelectedAddress.propertyRoll}}
                </td>
                <td style="width:50px;text-align:center;">
                    <a href ="javascript:void('0');" ng-click="showPermits(SelectedAddress.propertyRSN);">Permits</a>
                </td>
            </tr>
        </table>

        <table class="table01">
            <tr>
                <td class="td-head" style="width: 100px;">
                    RSN:
                </td>
                <td class="td-head" style="width: 100px;">
                    Folder#
                </td>
                <td class="td-head" >
                    Type/Sub/Work
                </td>
                <td class="td-head" style="width: 100px;">
                    Status
                </td>
                <td class="td-head" style="width: 100px;">
                    Date Application Received
                </td>
                <td class="td-head" style="width: 100px;">
                    Date Application Issued/Approved
                </td>
                <td class="td-head" style="width: 100px;">
                    Date File Closed
                </td>
            </tr>
            <tr ng-repeat="d in FolderList">
                <td class="td-data">
                    {{d.folderRSN}}
                </td>
                <td class="td-data" >
                    {{d.folderNumber}}
                </td>
                <td class="td-data" >
                    {{d.folderTypeDesc}}<br />
                    -------------------------<br />
                    {{d.subCodeDesc}}<br />
                    -------------------------<br />
                    {{d.workCodeDesc}}
                </td>
                <td class="td-data" >
                    {{d.statusDesc}}
                </td>
                <td class="td-data" >
                    {{fromDateString(d.indate)}}
                </td>
                <td class="td-data" >
                    {{fromDateString(d.issueDate)}}
                </td>
                <td class="td-data" >
                    {{fromDateString(d.finalDate)}}
                </td>
            </tr>
        </table>

        </div>
    </div>
    <div class="div-space-between-section"></div>

    <div class="div-section-header">
        {{Data.propHouse}} {{Data.propStreet}} {{Data.propStreetType}}&nbsp;
    </div>
    <div class="div-section">
        <div style ="word-wrap:break-word">
            <code>
                <pre>{{Data |json}}</pre>
            </code>
        </div>
    </div>

    <div class="div-section-header">
        Operators
    </div>
    <div class="div-section">
        <div style ="word-wrap:break-word">
            <code>
                <pre>{{ValidOperator |json}}</pre>
            </code>
        </div>
    </div>



</div>

