String.prototype.replaceAll = function (strReplace, strWith) {
    // See http://stackoverflow.com/a/3561711/556609
    var esc = strReplace.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    var reg = new RegExp(esc, 'ig');
    return this.replace(reg, strWith);
};


function ShowFolderDetails(id, t) {
    var preferredWidth = 1050;
    var preferredHeight = 700;
    var caption = "Folder Details";

    var hostUrl = gethost();
    //hostUrl = hostUrl.replace('pub', '');
    var url = hostUrl;
    url = "FolderDetails.aspx?id=" + id + "&t=" + t;
    //alert(url);

    ShowPopup(url + "&showClose=true", preferredWidth, preferredHeight, caption);
}

function ShowAdminReport(t, id, cat, y, m) {
    var preferredWidth = 1050;
    var preferredHeight = 700;
    var caption = "Report";

    var hostUrl = gethost();
    hostUrl = hostUrl.replaceAll('admin/events', 'Reports/');

    var url = hostUrl;
    //url += "/Reports/";

    if (t == "1")
    {
        url += "EventAttendeeListForLabel.aspx";
        url += "?id=" + id;
    }
    else if (t == "2") {
        url += "EventAttendeeListRV.aspx";
        url += "?id=" + id;
    }
    else if (t == "3") {
        url += "EventAttendeeListRVDetail.aspx";
        url += "?id=" + id;
    }
    else if (t == "4") {
        url += "EventSummary.aspx";
        url += "?id=" + id;
        url += "&cat=" + cat;
        url += "&y=" + y;
        url += "&m=" + m;
    }


    //alert(url);

    ShowPopup(url + "&showClose=true", preferredWidth, preferredHeight, caption);
}


function ShowPopup(url, width, height, caption) {

    jQuery.colorbox({
        href: url,
        opacity: '0.2',
        iframe: true,
        width: width,
        innerWidth: width,
        height: height,
        innerHeight: height,
        overlayClose: false,
        scrolling: false,
        className: "colorBox"
        //, onLoad: function () { $('#cboxClose').remove(); }
    });
}


function ClosePopup(pg) {
    //alert('hi1');
    jQuery.colorbox.close();
    if (pg == "email" || pg == "subscribeebilling" || pg == "cancelebilling" || pg == "account" || pg == "WaterAddressChange") {
        window.location.reload(false);
    }
    return false;
    //$.fn.colorbox.close();
}

function changepopupHeight(framecontentheight) {
    $("#colorbox").height(framecontentheight);
    $("#cboxWrapper").height(framecontentheight);
    $("#cboxContent").height(framecontentheight);
    $("#cboxLoadedContent").height(framecontentheight);
    $(".cboxIframe").height(framecontentheight);

    //console.log("in ViewCalendar : " + framecontentheight);

    //console.log("in ViewCalendar (colorbox) : " + $("#colorbox").height());
    //console.log("in ViewCalendar (cboxWrapper) : " + $("#cboxWrapper").height());
    //console.log("in ViewCalendar (cboxContent) : " + $("#cboxContent").height());
    //console.log("in ViewCalendar (cboxLoadedContent) : " + $("#cboxLoadedContent").height());
    //console.log("in ViewCalendar (cboxIframe) : " + $(".cboxIframe").height());
}



function gethost() {
    var url = document.location.href;
    //url = document.location.hostname;
    //url = url.split('&').join('&amp;').split('<').join('&lt;').split('"').join('&quot;');
    var path = document.location.pathname;
    var pathArray = window.location.pathname.split('/');
    var newPathname = "";

    for (i = 0; i < pathArray.length - 1; i++) {
        newPathname += "/";
        newPathname += pathArray[i];
    }
    newPathname = newPathname.replace('//', '/');
    url = document.location.protocol + '//' + document.location.host + '' + newPathname;
    return url;
    //alert(url);
}

//get query string from current url
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        //vars.push(hash[0].toLowerCase());
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }

    return vars;
}

//get query string from current url
function getQueryStringValue(q) {
    var vars = "";
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        //vars.push(hash[0].toLowerCase());
        if (hash[0].toLowerCase() == q.toLowerCase()) {
            return hash[1];
        }
    }

    return vars;
}

//get query string from current url and return value as boolean
function getQueryStringValueBoolean(q) {
    var vars = "";
    vars = getQueryStringValue(q);

    if (vars.toLowerCase() == "true" || vars == "1") {
        return true;
    }
    else {
        return false;
    }

}

//get querystring integer
function getQueryStringValueInteger(q) {
    var vars = "";
    vars = getQueryStringValue(q);

    if (vars == "") {
        return 0;
    }
    else {
        return parseInt(vars);
    }

}

//get browser name
function getBrowserName() {
    var ua = window.navigator.userAgent

    if (ua.indexOf("MSIE") > 0)      // If Internet Explorer 10 or below, return version number
        return "IE";
    else if (ua.indexOf("Firefox") > 0)      // Firefox
        return "Firefox";
    else if (ua.indexOf("Chrome") > 0)      // Chrome
        return "Chrome";
    else if (ua.indexOf("Safari") > 0)      // Safari
        return "Safari";
    else if (ua.indexOf("Trident") > 0)      // Safari
        return "IE";
    else               // If another browser, return 0
        return "IE";

}
