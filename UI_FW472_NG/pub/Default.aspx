﻿<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPages/Pub.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="RA.AMANDA.Portal.UIFWNG.pub.Default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="body" runat="server">
<div>
    <div class="" >
      <b>
          Welcome to City of Cambridge Online Permits
      </b>
    </div>  
    <div class="mt-3">
      The online property search allows you to find building permit details and application status information online. Building permit applications can now easily be searched by street address or roll number and provide details on work type, permit status, application date and property details.

    </div>
    <div class="mt-3">
       <b> New </b> - You can now apply, check the status, and pay for permits online, all from the comfort of your home or office. 
       Please 
       <a  [routerLink]="['/login']">Register</a>
       to create a user account in order to apply.
    </div>
    <div class="mt3">
        We are currently accepting the following application types:
        <ul>
          <li>
              New residential building permits
          </li>
          <li>
              New residential townhouse building permits
          </li>
          <li>
              Mobile sign permits
          </li>
          <li>
              Residential accessory permits
          </li>
          <li>
              Residential deck/porch permits
          </li>
          <li>
              Permanent sign permits
          </li>
          <li>
              Trade Licence new application and renewal
          </li>
                 
        </ul>
    </div>
    <div class="mt-3">
       <b> Terms of Use Agreement</b>
       <br>
        The City of Cambridge maintains this website as a service to members of the public for the purpose of providing on-line information about building application status within the City of Cambridge. By using this site, you are agreeing to comply with, and be bound by, the following terms of use.
 
    </div>

    <div class="mt-3">
      <b>  Online Search Help Guide & Glossary</b>
      <br>
        If you are not sure how to search for a permit or what a permit status means search the help guide and glossary of terms for a definition and more information.
    </div>
    <div class="mt-3">    
      <b>  Contact(s) </b>
      <br>
      <span>  Development and Infrastructure </span>
      <br>
      <span>  City of Cambridge, 50 Dickson Street, </span> 
      <br>
      <span>  Cambridge, ON, N1R 8S1 </span>
      <br>
      <span>  T: (519) 621-0740 </span>
      <br>
      <span>  TTY: (519) 623-6691 </span>
      <br>
      <span>  Email: planning@cambridge.ca </span>
      <br>
    </div>
  </div>
</asp:Content>


