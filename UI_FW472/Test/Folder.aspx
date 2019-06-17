<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPages/Test.Master" AutoEventWireup="true" CodeBehind="Folder.aspx.cs" Inherits="RA.AMANDA.Portal.UIFW.Test.Folder" %>

<%@ Register Src="~/Controls/Test/UCFolderDetails.ascx" TagName="FolderDetails"  TagPrefix="uc1" %>


<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="PageHeaderContent" runat="server">
    Folder
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="body" runat="server">

        <uc1:FolderDetails ID="FolderDetails1" runat="server" />

</asp:Content>
