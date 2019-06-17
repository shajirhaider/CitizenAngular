<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="UCFolderDetails.ascx.cs" Inherits="RA.AMANDA.Portal.UIFW.Controls.Test.UCFolderDetails" %>

<div ng-controller="CtrlFolderDetails">

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
                        <option ng-repeat="d in StreetList" value="{{d.id}}" ng-selected="CurrentPeople.addrStreet == d.id">{{d.description}}</option>
                    </select>
                    <input ng-model="addrStreet" />
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

    <div class="div-section-header">
        Details: {{Data.folderCentury}}{{Data.folderNumber}} {{Data.folderDesc}}&nbsp; 
        <div class="show-hide right" ng-click="ShowDetails = !ShowDetails;" ><i class="fa" ng-class="{'fa-caret-up':ShowDetails==true,'fa-caret-down':ShowDetails==false}"></i></div>
    </div>
    <div class="div-section" ng-show="ShowDetails==true">
        <div style ="word-wrap:break-word">
            <code>
                <pre>{{Data |json}}</pre>
            </code>
        </div>
    </div>

    <div class="div-space-between-section"></div>

    <div class="div-section-header">
        Property ({{PropertyList.length}})&nbsp;
        <div class="show-hide right" ng-click="ShowProperty = !ShowProperty;" ><i class="fa" ng-class="{'fa-caret-up':ShowProperty==true,'fa-caret-down':ShowProperty==false}"></i></div>
    </div>
    <div class="div-section" ng-show="ShowProperty==true">
        <div style ="word-wrap:break-word">
            <code>
                <pre>{{PropertyList |json}}</pre>
            </code>
        </div>
    </div>

    <div class="div-space-between-section"></div>
    <div class="div-section-header">
        People ({{PeopleList.length}})
        <div class="show-hide right" ng-click="ShowPeople = !ShowPeople;" ><i class="fa" ng-class="{'fa-caret-up':ShowPeople==true,'fa-caret-down':ShowPeople==false}"></i></div>
    </div>
    <div class="div-section" ng-show="ShowPeople==true">
        <div style ="word-wrap:break-word">
            <code>
                <pre>{{PeopleList |json}}</pre>
            </code>
        </div>
    </div>

    <div class="div-space-between-section"></div>
    <div class="div-section-header">
        Info ({{InfoList.length}})
        <div class="show-hide right" ng-click="ShowInfo = !ShowInfo;" ><i class="fa" ng-class="{'fa-caret-up':ShowInfo==true,'fa-caret-down':ShowInfo==false}"></i></div>
    </div>
    <div class="div-section" ng-show="ShowInfo==true">
        <div style ="word-wrap:break-word">
            <code>
                <pre>{{InfoList |json}}</pre>
            </code>
        </div>
    </div>

    <div class="div-space-between-section"></div>
    <div class="div-section-header">
        Process ({{ProcessList.length}})
        <div class="show-hide right" ng-click="ShowProcess = !ShowProcess;" ><i class="fa" ng-class="{'fa-caret-up':ShowProcess==true,'fa-caret-down':ShowProcess==false}"></i></div>
    </div>
    <div class="div-section" ng-show="ShowProcess==true">
        <div style ="word-wrap:break-word">
            <code>
                <pre>{{ProcessList |json}}</pre>
            </code>
        </div>
    </div>

    <div class="div-space-between-section"></div>
    <div class="div-section-header">
        Attachment ({{AttachmentList.length}})
        <div class="show-hide right" ng-click="ShowAttachment = !ShowAttachment;" ><i class="fa" ng-class="{'fa-caret-up':ShowAttachment==true,'fa-caret-down':ShowAttachment==false}"></i></div>
    </div>
    <div class="div-section" ng-show="ShowAttachment==true">
        <div style ="word-wrap:break-word">
            <table class="table01">
                <tr>
                    <th>
                        RSN
                    </th>
                    <th>
                        Desc
                    </th>
                    <th>
                        Path
                    </th>
                    <th></th>
                </tr>
                <tr ng-repeat="d in AttachmentList">
                    <td >
                        <a href="javascript:void('0');" ng-click="selectdocument(d);">{{d.attachmentRSN}}</a>
                        
                    </td>
                    <td>
                        {{d.attachmentTypeDesc}}
                    </td>
                    <td>
                        {{d.dosPath}}
                    </td>
                    <td>
                        <a href="javascript:void('0');" ng-click="viewdocument(d);">view</a>
                    </td>
                </tr>
            </table>
        </div>
        <div>
            <table>
                <tr>
                    <td>
                        <input name="data" size="40" type="file" ng-drop="fileSelected();">
                    </td>
                </tr>
            </table>
        </div>
        <div style ="word-wrap:break-word">
            <code>
                <pre>{{fileBlob |json}}</pre>
            </code>
        </div>
        <div>
            <img data-ng-src="data:image/png;base64,{{SelectedAttachmentContent.content2}}">
        </div>
        <div style ="word-wrap:break-word">
            <code>
                <pre>{{SelectedAttachment |json}}</pre>
            </code>
        </div>
        <div style ="word-wrap:break-word">
            <code>
                <pre>{{SelectedAttachmentContent |json}}</pre>
            </code>
        </div>

    </div>
</div>

