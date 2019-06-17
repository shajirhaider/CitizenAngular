<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPages/Pub.Master" AutoEventWireup="true" CodeBehind="Search.aspx.cs" Inherits="RA.AMANDA.Portal.UIFW.pub.Search" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="body" runat="server">

    <div ng-controller="CtrlSearchProperty">

        <div ng-show="CurrentStep==1">

            <div class="outergroup">
                <div class ="groupheader">
                    Terms of Use Agreement
                </div>
                <div class="innergroup">
                    The City of Cambridge maintains this website as a service to members of the public for the purpose of providing on-line information about building application status within the City of Cambridge. By using this site, you are agreeing to comply with, and be bound by, the following terms of use. <a href="terms-of-use?reset=true">Please review the following terms carefully.</a>
                </div> 
            </div> 

            <div class="groupseparator"></div>
            <div class="outergroup">
                <div class ="groupheader">
                    I Agree
                </div>
                <div class="innergroup">
                    <ul class="ul-horizontal margin-bottom50">
                        <li class="li-left">
                            <input type="radio" name="r_IAgree" class=" deselect-off" id="r_IAgree" ng-model="IAgree" value="1" title="">
                            <label for="r_IAgree" class="inline" title="">I Agree</label>
                        </li>
                        <li class="li-left">
                            <input type="radio" name="r_IAgree" class=" deselect-off" id="r_IDisAgree" ng-model="IAgree" value="0" title="">
                            <label for="r_IDisAgree" class="inline" title="">I Disagree</label>
                        </li>
                        <li class="li-left" ng-show="LoadcompleteStep2==false">
                            loading...
                        </li>
                        <li class="li-right">
                                <div class="applybutton" ng-class="{'div-disable':(IAgree!=1 || LoadcompleteStep2==false)}" ng-click="IAgreeClicked();">
                                    <i class="fa fa-caret-right"></i>&nbsp;Continue
                                </div>
                        </li>
                    </ul>
                </div> 
            </div> 

        </div>

        <div ng-show="CurrentStep==2">
            <div class="outergroup">
                <div class ="groupheader">
                    Search Properties
                </div>
            <div class="innergroup">
                <div><span class="">Search properties by property address, street or roll number. </span></div>
                <div style=""><span class="">Please be advised that any building permits issued before January 1, 2000 may not be available on this database. </span><span class="staticText "></span></div>
            </div>
            </div>

            <div class="groupseparator"></div>
            <div class="outergroup">
                <div class ="groupheader">
                    By Address
                </div>
            <div class="innergroup">
                <div class="flotleft" >
                    <label for="streetNumber" title=""><span class="">Street Number </span>
                    </label>
                    <input type="text" name="streetNumber" id="streetNumber"ng-model="addrHouse" size="6">
                </div>
                <div class="flotleft" >
                    <label for="streetName" title=""><span class="">Street Name </span>
                    </label>
                    <input type="text" name="streetName" id="streetName" ng-model="addrStreet" size="6" style ="display:none;">
                    <select name="repeatstreetName" id="repeatstreetName" ng-model="addrStreet" style="width:100%;">
                        <option ng-repeat="d in StreetList" value="{{d.propStreet}}" ng-selected="addrStreet == d.propStreet">{{d.propStreet}}</option>
                    </select>
                </div>
                <div class="flotleft" >
                    <label for="repeatStreetType" title=""><span class="">Street Type </span>
                    </label>
                    <select name="repeatStreetType" id="repeatStreetType" ng-model="addrStreetType" style="width:100%;">
                        <option ng-repeat="d in StreetTypeList" value="{{d.id}}" ng-selected="addrStreetType == d.id">{{d.description}}</option>
                    </select>
                </div>
                <div class=" flotleft">
                    <label for="repeatStreetDirection" title=""><span class="">Direction </span>
                    </label>
                    <select name="repeatStreetDirection" id="repeatStreetDirection" ng-model="addrStreetDirection" style="width:100%;">
                        <option ng-repeat="d in StreetDirectionList" value="{{d.addressDirection}}" ng-selected="addrStreetDirection == d.addressDirection">{{d.addressDirectionDesc}}</option>
                    </select>
                </div>

                <div class="flotleft" >
                    <label for="unitNumber" title=""><span class="">Unit Number </span>
                    </label>
                    <input type="text" name="unitNumber" id="unitNumber" ng-model="addrUnit" size="6">
                </div>

            </div>
                <br />
            <div class="innergroup bordertop">
            <div style="float: right;">
                <div class="applybutton" ng-click="searchProperty();">
                    Search
                </div>
            </div>
            <div style="float: left;">
                <div class="applybutton" ng-click="clearSearch();">
                    Clear
                </div>
            </div>
            </div>
            </div>

            <div class="groupseparator"></div>

            <div class="outergroup">
                <div class ="groupheader">
                    By Roll Number
                </div>
            <div class="innergroup">
                <div class="floatnone">
                    <label for="rollNumber" title=""><span class="">Roll Number </span>
                        <!-- -->
                    </label>
                    <input type="text" name="rollNumber" id="rollNumber" ng-model="rollNumber" size="">
                </div>
                <div ><span class="">enter digits only </span><span class="staticText "></span></div>
            </div>

            <div class="innergroup bordertop">
            <div style="float: right;">
                <div class="applybutton" ng-click="searchProperty();">
                    Search
                </div>
            </div>
            <div style="float: left;">
                <div class="applybutton" ng-click="clearSearch();">
                    Clear
                </div>
            </div>
            </div>
            </div>
        </div>

        <div ng-show="CurrentStep==3">
            <div class="outergroup">
                <div class ="groupheader">
                    Search Results
                </div>
                <div class="innergroup">
                    <table class="searchlist">
                        <tr ng-repeat="p in PropertyList">
                            <td>
                                Address:<strong>{{p.propDesc}}</strong> <br />
                                Roll Number:<strong>{{p.propertyRoll}}</strong> <br />
                                Legal Description:<strong>{{p.legalDesc}}</strong> <br />
                            </td>
                            <td>
                                Area (acres): <strong>{{p.propArea}}</strong> <br />
                                Frontage (feet):<strong>{{p.propFrontage}}</strong> <br />
                                Depth (feet):<strong>{{p.propDepth}}</strong>
                            </td>
                            <td>
                                <div class="applybutton" ng-click="searchPermits(p);">
                                    Permits
                                </div>
                            </td>
                        </tr>
                    </table>
                </div> 
            </div>

            <div class="groupseparator"></div>

            <div class="outergroup">
            <div class="innergroup">
            <div style="float: left;">
                <div class="applybutton" ng-click="CurrentStep = 2;">
                    Back to Search Properties
                </div>
            </div>
            </div>
            </div>
        </div>

        <div ng-show="CurrentStep==4">

            <div class="outergroup">
                <div class ="groupheader">
                    Property Address
                </div>
                <div class="innergroup">
                    <strong>{{SelectedProperty.propHouse}} {{SelectedProperty.propStreet}} {{SelectedProperty.propStreetType}} {{SelectedProperty.propPostal}}</strong>
                </div> 
            </div>
            <div class="groupseparator"></div>

            <div class="outergroup">
                <div class ="groupheader">
                    Permits/Site Plan Approvals
                </div>
                <div class="innergroup">

        <table class="table01">
            <tr>
                <th class="td-head" style="width: 100px;">
                    RSN:
                </th>
                <th class="td-head" style="width: 100px;">
                    Folder#
                </th>
                <th class="td-head" >
                    Type/Sub/Work
                </th>
                <th class="td-head" style="width: 100px;">
                    Status
                </th>
                <th class="td-head" style="width: 100px;">
                    Date Application Received
                </th>
                <th class="td-head" style="width: 100px;">
                    Date Application Issued/Approved
                </th>
                <th class="td-head" style="width: 100px;">
                    Date File Closed
                </th>
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

            <div class="groupseparator"></div>

            <div class="outergroup">
            <div class="innergroup">
            <div style="float: right;">
                <div class="applybutton" ng-click="CurrentStep = 3;">
                    Back to search result
                </div>
            </div>
            <div style="float: left;">
                <div class="applybutton" ng-click="clearSearch();CurrentStep = 2;">
                    start new search
                </div>
            </div>
            </div>
            </div>

        </div>

    </div>

</asp:Content>
