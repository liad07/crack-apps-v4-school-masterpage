<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="CreateContentItem.aspx.cs" Inherits="CreateContentItem" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <div class="center">
            <div class="form " >


            <b>name of chanel:</b>
            <input type="text" name="chanel" size="8"><br>
            <b>details of chanel:</b>
            <textarea></textarea><br>
            <b>email address:</b>
            <input type="email" placeholder="example@gmail.com">
            <br>
            </br>
            <b>upload chanel</b><br>

            <input type="file" accept=".url,.m3u,.m3u8,.html" /><br>
        </br> <b>file type</b><br>
            <input type="radio" name="chanel" value="url">url<br>
            <input type="radio" name="chanel" value="m3u">m3u<br>
            <input type="radio" name="chanel" value="m3u8">m3u8<br>
            <b>upload img of chanel</b><br>
            <input type="file" onchange="preview()"><br></div>
        <div style="text-align:right;">
            <img id="frame" src="" width="500" height="500"/>
        </div></div>
</asp:Content>

