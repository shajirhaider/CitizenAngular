<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="UCLogin.ascx.cs" Inherits="RA.AMANDA.Portal.UIFW.Controls.Test.UCLogin" %>
<div ng-controller="CtrlPeopleDetails">

    <div class="div-section">
        <table class="folderdetails">
            <tr>
                <td style="width:100px;">
                    Username
                </td>
                <td style="width:100px;">
                    <input ng-model="username" />
                </td>
                <td style="width:100px;">
                    Password
                </td>
                <td style="width:100px;">
                    <input ng-model="password" />
                </td>
                <td style="width:100px;">
                    <div class ="applybutton" ng-click="login()">
                        Login
                    </div>
                </td>
                <td>

                </td>
            </tr>
        </table>
    </div> 


</div>
