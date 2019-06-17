<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPages/Test.Master" AutoEventWireup="true" CodeBehind="MobileSign.aspx.cs" Inherits="RA.AMANDA.Portal.UIFW.Test.MobileSign" %>

<%@ Register Src="~/Controls/Test/UCMobileSign.ascx" TagName="Login"  TagPrefix="uc1" %>


<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="PageHeaderContent" runat="server">
    People
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="body" runat="server">

        <uc1:Login ID="Login1" runat="server" />

</asp:Content>
