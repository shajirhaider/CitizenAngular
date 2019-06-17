<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPages/Test.Master" AutoEventWireup="true" CodeBehind="Register.aspx.cs" Inherits="RA.AMANDA.Portal.UIFW.Test.Register" %>

<%@ Register Src="~/Controls/Test/UCRegister.ascx" TagName="Register"  TagPrefix="uc1" %>


<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="PageHeaderContent" runat="server">
    Register
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="body" runat="server">

        <uc1:Register ID="Register1" runat="server" />

</asp:Content>
