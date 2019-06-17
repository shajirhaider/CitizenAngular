<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPages/Test.Master" AutoEventWireup="true" CodeBehind="People.aspx.cs" Inherits="RA.AMANDA.Portal.UIFW.Test.People" %>

<%@ Register Src="~/Controls/Test/UCPeopleDetails.ascx" TagName="PeopleDetails"  TagPrefix="uc1" %>


<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="PageHeaderContent" runat="server">
    People
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="body" runat="server">

        <uc1:PeopleDetails ID="PeopleDetails1" runat="server" />

</asp:Content>
