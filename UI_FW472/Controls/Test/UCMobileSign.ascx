<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="UCMobileSign.ascx.cs" Inherits="RA.AMANDA.Portal.UIFW.Controls.Test.UCMobileSign" %>
<div ng-controller="CtrlMobileSign">

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
                    Street Name
                </td>
                <td class="td-data">
                    <input ng-model="addrStreet"  />
                </td>
                <td class="td-head" style="width: 100px;">
                    Type
                </td>
                <td class="td-data">
                    <input ng-model="addrStreetType" />
                </td>
                <td class="td-data">
                    <div class ="applybutton" ng-click="refreshData()">
                        Search
                    </div>
                </td>
            </tr>
            <tr>
                <td class="td-head" style="">
                    Direction
                </td>
                <td class="td-data">
                    <input ng-model="addrStreetDirection" />
                </td>
                <td class="td-head" style="">
                    PostalCode
                </td>
                <td class="td-data">
                    <input ng-model="addrPostalCode" />
                </td>
            </tr>
        </table>
    </div>

    <div class="div-space-between-section"></div>

    <div class="div-section" >
        <div style ="word-wrap:break-word">
            <code>
                <pre>{{DataList |json}}</pre>
            </code>
        </div>
    </div>

</div>
