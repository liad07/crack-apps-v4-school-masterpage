<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="Registration.aspx.cs" Inherits="Registration" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
   <center>
    <input type="text" class="input" id="fname" placeholder="first name"><br>
    <input type="text" class="input" id="lname" placeholder="last name"><br>
    <input type="text" class="input" id="email" placeholder="sample@gmail.com"><br>
    <input type="text" class="input" id="username2" placeholder="user"><br>
    <input type="password" class="input" id="password2" placeholder="password"><br>
    <input type="checkbox" onclick="showpass()"/>Show Password<br><br>
    <input type="datetime-local"  id="date"><br><br>
    <input type="radio" name="gender" class="" value="male"><span class="">male</span>
    <input type="radio" name="gender" class="" value="female"><span class="">female</span><br><br>
    <select name="area" >
        <option value="north"> צפון
        <option value="west"> דרום
        <option value="center"> מרכז
        <option value="outofisrael">חו"ל
    </select><br><br><br>
<button type="button" class="btn btn-dark" onclick="is_valid();return false">submit</button>

</center>
</asp:Content>

