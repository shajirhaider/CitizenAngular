using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Collections.Specialized;
using eSolutionsGroup.WebParser;
using System.Text.RegularExpressions;

namespace RA.AMANDA.Portal.UIFW.Utility
{
    public class eSolutionsGroup
    {

        public static WebParserResult GetWebParserResult_Actual(string title, string leftmenu, bool wide = false)
        {
            string appname = "garbagetagsssstep3";
            //var wide = false;
            var skipCache = true;
            string host = "https://www2.cambridge.ca/";

            host = Utility.UIHelper.ESolutionUrl;

            WebParserResult result = null;
            if (wide)
            {
                result = new WebParser(
                   host + "en/parser-wide.aspx?appname=" + appname,
                   "parser",
                   host,
                   host,
                   skipCache).Parse();

            }
            else
            {
                result = new WebParser(
                   host + "en/parser.aspx?appname=" + appname,
                   "parser",
                   host,
                   host,
                   skipCache).Parse();
            }

            result.Header = Regex.Replace(result.Header, "<title>.*?</title>", "<title>" + title + "</title>", RegexOptions.Singleline | RegexOptions.Multiline | RegexOptions.IgnoreCase);

            result.Top = result.Top
                    .Replace("\"/en/", "\"" + host + "en/")
                    .Replace("'/en/", "\'" + host + "en/");
            result.Top = Regex.Replace(result.Top, "<h1>.*?</h1>", "<h1>" + title + "</h1>", RegexOptions.Singleline | RegexOptions.Multiline | RegexOptions.IgnoreCase);

            //<ul class=""subNav""><li></li></ul>

            /*
            leftmenu = @"
            <ul class=""subNav top"">
                <li ><a title = ""View our Upcoming Events"" href = ""Default.aspx"" class=""current""><span>Upcoming Events</span></a></li>
            </ul>
            <ul class=""subNav secondul"">
                <li><a title = ""View our Event1"" href=""Mockup01_01.aspx"" class=""""><span>Arts Connect Cambridge - T1</span></a></li>
                <li><a title = ""View our Event1"" href=""Mockup01_02.aspx"" class=""""><span>Arts Connect Cambridge - T2</span></a></li>
                <li><a title = ""View our Event1"" href=""Mockup01_03.aspx"" class=""""><span>Arts Connect Cambridge - T3</span></a></li>
                <li><a title = ""View our Event1"" href=""Mockup02_01.aspx"" class=""""><span>Mayor's Movie Night - T1</span></a></li>
                <li><a title = ""View our Event1"" href=""Mockup02_02.aspx"" class=""""><span>Mayor's Movie Night - T3</span></a></li>
                <li><a title = ""View our Event1"" href=""Mockup03_01.aspx"" class=""""><span>Payment</span></a></li>
                <li><a title = ""View our Event1"" href=""Mockup04_01.aspx"" class=""""><span>Confirmation</span></a></li>
            </ul>                
                
                ";
            */

            result.Top = result.Top.Replace(@"<ul class=""subNav""><li></li></ul>", leftmenu);

            result.Bottom = result.Bottom
                    .Replace("\"/en/", "\"" + host + "en/")
                    .Replace("'/en/", "\'" + host + "en/")
                    //.ToLower();
                    .Replace("pagesubscription.js", "blank.js")
                    .Replace("PageSubscription.js", "blank.js");


            return result;
        }


        public static WebParserResult GetWebParserResult(string title, string leftmenu)
        {

            if (Utility.UIHelper.UserLiveESolution)
            {
                return GetWebParserResult_Actual(title, leftmenu);
            }

            string host = "http://cambridge.icreate7.esolutionsgroup.ca/";
            host = Utility.UIHelper.ESolutionUrl;


            WebParserResult result = new WebParserResult();

            result.DOCType = "<!DOCTYPE html>";

            result.Header = @"<script type=""text/javascript"">
    var esol_ico_width = 0;

    try {
        esol_ico_width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
    } catch (err) { }

    var iCreateObject =
    {
        isSiteInICreateMode: ""False"".toLowerCase() == ""true"",
        lang: ""en"",
        isIe8: false,
        corpHome: ""http://cambridge.icreate7.esolutionsgroup.ca/"",
        corpRoot: ""/"",
        gaTrackingCode: '',
        isSiteInLocalDevelopment: 'False'.toLowerCase() == ""true"",
        calendarUrl: 'http://calendar.cambridge.icreate7.esolutionsgroup.ca',
        isSiteInPreviewMode: 'False'.toLowerCase() == ""true"",
        newsFeeds: {},
        isMobile: esol_ico_width <= 767,
        iCreateTheme: ''
    }

    var myStringArray = """".split(',');
    for(var i = 0; i < myStringArray.length; i++)
    {
        var mySubstring = myStringArray[i].split('|');
        iCreateObject.newsFeeds[mySubstring[0]] = mySubstring[1];
    }

    try {
        if (document.location.href.toLowerCase().indexOf('https://') == 0) {
            iCreateObject.corpHome = 'https://' + iCreateObject.corpHome.substring(8);
        }
    } catch (err) { }

    if (iCreateObject.isSiteInLocalDevelopment)
        console.log(iCreateObject);

</script>

<link rel=""apple-touch-icon"" sizes=""57x57"" href=""http://cambridge.icreate7.esolutionsgroup.ca//Common/apple-touch-icon-57x57.png"">
<link rel=""apple-touch-icon"" sizes=""60x60"" href=""http://cambridge.icreate7.esolutionsgroup.ca//Common/apple-touch-icon-60x60.png"">
<link rel=""apple-touch-icon"" sizes=""72x72"" href=""http://cambridge.icreate7.esolutionsgroup.ca//Common/apple-touch-icon-72x72.png"">
<link rel=""apple-touch-icon"" sizes=""76x76"" href=""http://cambridge.icreate7.esolutionsgroup.ca//Common/apple-touch-icon-76x76.png"">
<link rel=""apple-touch-icon"" sizes=""114x114"" href=""http://cambridge.icreate7.esolutionsgroup.ca//Common/apple-touch-icon-114x114.png"">
<link rel=""apple-touch-icon"" sizes=""120x120"" href=""http://cambridge.icreate7.esolutionsgroup.ca//Common/apple-touch-icon-120x120.png"">
<link rel=""apple-touch-icon"" sizes=""144x144"" href=""http://cambridge.icreate7.esolutionsgroup.ca//Common/apple-touch-icon-144x144.png"">
<link rel=""apple-touch-icon"" sizes=""152x152"" href=""http://cambridge.icreate7.esolutionsgroup.ca//Common/apple-touch-icon-152x152.png"">
<link rel=""apple-touch-icon"" sizes=""180x180"" href=""http://cambridge.icreate7.esolutionsgroup.ca//Common/apple-touch-icon-180x180.png"">
<link rel=""icon"" type=""image/png"" href=""http://cambridge.icreate7.esolutionsgroup.ca//Common/favicon-32x32.png"" sizes=""32x32"">
<link rel=""icon"" type=""image/png"" href=""http://cambridge.icreate7.esolutionsgroup.ca//Common/android-chrome-192x192.png"" sizes=""192x192"">
<link rel=""icon"" type=""image/png"" href=""http://cambridge.icreate7.esolutionsgroup.ca//Common/favicon-96x96.png"" sizes=""96x96"">
<link rel=""icon"" type=""image/png"" href=""http://cambridge.icreate7.esolutionsgroup.ca//Common/favicon-16x16.png"" sizes=""16x16"">
<meta name=""msapplication-TileColor"" content=""#da532c"">
<meta name=""msapplication-TileImage"" content=""/mstile-144x144.png"">
<meta name=""theme-color"" content=""#ffffff"">
<meta http-equiv=""Content-Style-Type"" content=""text/css"">
<meta http-equiv=""Content-Script-Type"" content=""text/javascript"">
<meta name=""viewport"" content=""width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=yes"" />

<!--This is only needed if you are using the Google translate widget-->
<meta name=""google-translate-customization"" content=""64f17b6d9cb6233b-e59f9de7b0b09f30-g4ca0816f9369ddc5-e""/>
<!--<link rel=""icon"" type=""image/ico"" href=""http://cambridge.icreate7.esolutionsgroup.ca//Common/favicon.ico"">-->

<link href=""https://fonts.googleapis.com/css?family=Open+Sans:400,400italic,600,700"" rel=""stylesheet"" type=""text/css"">
<link href=""http://cambridge.icreate7.esolutionsgroup.ca//Common/styles/styles.css"" rel=""stylesheet"" type=""text/css"" media=""screen"" />
<link href=""http://cambridge.icreate7.esolutionsgroup.ca//Common/styles/print.css"" rel=""stylesheet"" type=""text/css"" media=""print"" />
<link href=""https://js.esolutionsgroup.ca/js/libs/media-element/2.13.2/mediaelementplayer.min.css"" rel=""stylesheet"" type=""text/css"" media=""screen"" />

<!--[if lt IE 9]>
    <script src=""http://js.esolutionsgroup.ca/js/libs/html5shiv/3.7.0/html5shiv.js""></script>
<![endif]-->

<script type=""text/javascript"" src=""https://js.esolutionsgroup.ca/js/libs/jquery/1.11.2/jquery.min.js""></script>

<link href=""https://js.esolutionsgroup.ca/js/libs/jquery-ui/1.10.4/resources/themes/base/jquery-ui.min.css"" rel=""stylesheet"" type=""text/css"" media=""screen"" />
<script type=""text/javascript"" src=""https://js.esolutionsgroup.ca/js/libs/jquery-ui/1.11.2/jquery-ui.min.js""></script>
<script type=""text/javascript"" src=""https://js.esolutionsgroup.ca/js/libs/jquery_cookie/1.4.0/jquery.cookie.min.js""></script>
<script type=""text/javascript"" src=""https://js.esolutionsgroup.ca/js/libs/icreate-date/1.0.0/icrt-toDateTimeString.min.js""></script>

<script type=""text/javascript"" src='http://cambridge.icreate7.esolutionsgroup.ca//Modules/email/scripts/email.js'></script>
<link href=""https://js.esolutionsgroup.ca/js/libs/jquery_contextmenu/skins/1.0.0/contextMenu.min.css"" rel=""stylesheet"" type=""text/css"" media=""screen"" />
<script type=""text/javascript"" src=""https://js.esolutionsgroup.ca/js/libs/jquery_contextmenu/1.0.0/jquery.contextMenu.min.js""></script>

<script type=""text/javascript"">
    
    function PrintScreen() {
        if (iCreateObject.isSiteInICreateMode) {
            showNAMessage();
        }
        else {
            window.print();
        }
    }

	
</script>







<link href=""http://cambridge.icreate7.esolutionsgroup.ca//Common/styles/int.css"" rel=""stylesheet"" type=""text/css"" media=""screen"" />
<script type=""text/javascript"" src=""https://js.esolutionsgroup.ca/js/libs/media-element/2.13.2/mediaelement-and-player.min.js""></script>
<script type=""text/javascript"" src='http://cambridge.icreate7.esolutionsgroup.ca//Common/scripts/script.js'></script>

<script type=""text/javascript"" src=""https://js.esolutionsgroup.ca/js/libs/ios_slider/structure/1.3.43/jquery.iosslider.min.js""></script>
<script type=""text/javascript"">
    $(function () {
        // Drop-down lists

        if (!iCreateObject.isSiteInICreateMode) {
            $('video,audio').mediaelementplayer({
                // if the <video width> is not specified, this is the default
                defaultVideoWidth: 480,
                // if the <video height> is not specified, this is the default
                defaultVideoHeight: 270,
                // if set, overrides <video width>
                videoWidth: -1,
                // if set, overrides <video height>
                videoHeight: -1,
                // width of audio player
                audioWidth: 400,
                // height of audio player
                audioHeight: 30,
                // initial volume when the player starts
                startVolume: 0.8,
                // useful for <audio> player loops
                loop: false,
                // enables Flash and Silverlight to resize to content size
                enableAutosize: true,
                // the order of controls you want on the control bar (and other plugins below)
                features: ['playpause', 'progress', 'current', 'duration', 'tracks', 'volume', 'fullscreen'],
                // Hide controls when playing and mouse is not over the video
                alwaysShowControls: false,
                // force iPad's native controls
                iPadUseNativeControls: false,
                // force iPhone's native controls
                iPhoneUseNativeControls: false,
                // force Android's native controls
                AndroidUseNativeControls: false,
                // forces the hour marker (##:00:00)
                alwaysShowHours: false,
                // show framecount in timecode (##:00:00:00)
                showTimecodeFrameCount: false,
                // used when showTimecodeFrameCount is set to true
                framesPerSecond: 25,
                // turns keyboard support on and off for this instance
                enableKeyboard: true,
                // when this player starts, it will pause other players
                pauseOtherPlayers: true,
                // array of keyboard commands
                keyActions: []
            });

        }
   
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		    $(""#Share a.ShareLink"").click(function (event) {
		        if (iCreateObject.isSiteInICreateMode) {
		            showNAMessage();
		        }
		        else {
		            event.preventDefault();
		            $(""#Share"").trigger(""mouseenter"");
		        }
		    });
		} 

    });
</script>


<script type=""text/javascript"">
    $(document).ready(function () {
        if (!iCreateObject.isSiteInICreateMode || iCreateObject.isSiteInPreviewMode) {

            var contentWidth = ($('#main').width());
            //var contentTable = $('#printAreaContent table');

            $('#printAreaContent table').each(function () {
                if ($(this).width() > contentWidth) {
                    $(this).wrap('<div class=""tableContainer"" />');
                    var wideTable = $(this).addClass('wideTable');
                }
                var wideTableContainer = $(wideTable).parent();
                $('<div class=""tableContainerHead"">Scroll right to view complete table</div>""').insertBefore(wideTableContainer);

            });

            $("".AccordionTrigger"").on(""click"", function () {
                $('#printAreaContent .AccordionContent table').each(function () {
                    var width = $(this).parent("".AccordionContent"").width();
                    if (width > 0 && $(this).width() > width && !$(this).hasClass(""wideTable"")) {
                        $(this).wrap('<div class=""tableContainer"" />');
                        var wideTable = $(this).addClass('wideTable');
                    }
                    var wideTableContainer = $(wideTable).parent();
                    $('<div class=""tableContainerHead"">Scroll right to view complete table</div>""').insertBefore(wideTableContainer);

                });
            });
        }
    });
</script>


        <script src='http://cambridge.icreate7.esolutionsgroup.ca//Modules/Contact/scripts/contactsV2.js' type=""text/javascript""></script>
    
<script type=""text/javascript"" src='http://cambridge.icreate7.esolutionsgroup.ca//Common/scripts/icrtDoubleCtrlShortcut.js'></script>
    <script type=""text/javascript"">
        $(document).ready(function () {
            if (location.href.indexOf('/edit_') > -1) {
                icrtDoubleCtrlShortcut(location.href.replace('/edit_', '/'));
            } else {
                icrtDoubleCtrlShortcut('https://icreate7.esolutionsgroup.ca/icreate/modules/pageeditor3/page.srv?pageUrl=' + encodeURIComponent(location.href.trim().split(""#"",1)));
            }
        });

</script>

<title>
	
     
        Parser-Wide
     - City of Cambridge
</title>
        <meta name=""description"" content="""" />

<meta property=""dcterms.issued"" content=""2016-08-22T18:08:47-0400"" />
<meta property=""og:title"" content=""Parser-Wide"" />
<meta property=""og:url"" content=""http://cambridge.icreate7.esolutionsgroup.ca/en/parser-wide.aspx"" /><script type=""text/javascript"" src=""http://cambridge.icreate7.esolutionsgroup.ca//Modules/News/scripts/jquery.EmergencyAlertBanners.js""></script><link rel=""stylesheet"" type=""text/css"" media=""screen"" href=""http://cambridge.icreate7.esolutionsgroup.ca//Modules/News/styles/EmergencyAlertBanners.css""></link><script type=""text/javascript"" src=""https://js.esolutionsgroup.ca/js/libs/feedback-form/structure/2.4.1/feedbackStructure.min.js""></script><script type=""text/javascript"">$(function(){$(""#feedbackLink"").feedbackForm({
useDefaultIfNoIdIsSet: ""True"".toLowerCase() == ""true"",
baseUrl: ""https://icreate7.esolutionsgroup.ca/feedback/api/1.0/"",
getUrl: ""client/11111027_CityofCambridge/default-form/en"",
jsServerUrl: ""https://js.esolutionsgroup.ca/js/libs/feedback-form/"",
previewMode: false,
showButton: true,
pageTitle: document.title.replace("" - City of Cambridge"", """").trim(),
buttonText: """",
feedbackFormId: $(""#FeedbackFormId"") === undefined ? """" : $(""#FeedbackFormId"").val(),
language: 'en'
})});</script><script type=""text/javascript"" src=""http://cambridge.icreate7.esolutionsgroup.ca//Modules/Polling/PollModule.js""></script><script type=""text/javascript"" src=""https://js.esolutionsgroup.ca/js/libs/jquery_gallery/1.2.4/jquery.gallery.min.js""></script><script type=""text/javascript"">$(function () {
    $("".eSolutionsGroupPhotoGalleryV2PlaceholderDiv"").each(function () {
        var method = $(this).attr(""method"");
        var id = $(this).attr(""id"");
        if (id != '') {
            $(this).load(id, function () { return method; })
        } else {
            $(this).html('');
        }
    })
});</script>



";

            result.Top = @"
<script type=""text/javascript"">
    function HideEmergencyAlertBanners() {
        if(! jQuery('#EmergencyBannerWrapperOuter').hasClass(""hide"")){
            jQuery('#EmergencyBannerWrapperOuter').addClass(""hide"");
		}
        jQuery.cookie('seenAlertBanner', 1, { path: ""/"" });
    }

    jQuery(function () {
        if (iCreateObject.corpHome.indexOf(document.location.hostname) >= 0) {
            if ((document.location.href.toLowerCase().indexOf('/edit_') == -1) && (jQuery.cookie('seenAlertBanner') != 1) && iCreateObject.isSiteInICreateMode == false) {
                jQuery.getJSON(iCreateObject.corpHome + '/Modules/News/services/getAlertBannerFeeds.ashx?feedId=1c637683-a726-406c-bb3f-37e2ee4b9dce&callback=?',
	                function (result) {
	                    var results = """";
	                    jQuery.each(result, function (index, element) {
	                        results += ""<div class=\""alertbanner "" + element.Categories[0].Code + ""\""><div class=\""EmergencyBannerTitle\"">"" + element.Title + ""</div><div class=\""EmergencyBannerText\"">"" + element.Description + ""</div></div>"";
	                    });
	                    if (results != """") {
	                        jQuery(""#emergencyAlertBanners"").append(results);
	                        jQuery(""#emergencyAlertBanners"").children("".alertbanner:first"").addClass(""default"");
	                        jQuery(""#EmergencyBannerWrapperOuter"").removeClass(""hide"");
	                        jQuery(""#emergencyAlertBanners"").rotating_EmergencyAlertBanners();
	                    }
	                }
	            );
            }
        }
    });
		
</script>

<div id=""EmergencyBannerWrapperOuter"" class=""hide"">
	<div id=""EmergencyBanner"" style=""display: block;"" class=""nocontent"">
        <div id=""emergencyAlertBanners"" class=""bannerContainer"">	
            <div id=""EmergencyBannerClose"">
			    <a class=""Close"" href=""#"" onclick=""javascript: HideEmergencyAlertBanners();"">Close</a>
		    </div> 	                          
		</div>
	</div>
</div>

	
<script type=""text/javascript"">
    function HideBrowserAlertBanners() {
        jQuery(""#BrowserBannerWrapperOuter"").addClass(""hide"");
        jQuery.cookie(""seenBrowserBanner"", 1, {path: ""/""});
    }
</script>


<script type=""text/javascript"">
if(/msie ((1[0])|[1-9]\.)/i.exec(navigator.userAgent))
{
    jQuery(function () {
        if ((document.location.href.toLowerCase().indexOf(""/edit_"") == -1) && (jQuery.cookie(""seenBrowserBanner"") != 1)) {
            jQuery(""#BrowserBannerWrapperOuter"").removeClass(""hide"");
        }
    });
}
</script>

<div id=""BrowserBannerWrapperOuter"" class=""hide"">
	<div id=""BrowserBanner"" class=""nocontent"">
        <div id=""browserAlertBanners"" class=""bannerContainer"">	
            <div id=""BrowserBannerClose""> 
			    <a href=""#"" onclick=""javascript: HideBrowserAlertBanners();"">Close</a>
		    </div> 			                    
			<div class=""alertbanner browserAlert"">
				<div class=""BrowserBannerTitle"">Browser Compatibility Notification</div>
				<div class=""BrowserBannerText"">It appears you are trying to access this site using an outdated browser.  As a result, parts of the site may not function properly for you.  We recommend updating your browser to its most recent version at your earliest convenience.</div>
		 	</div>
		</div>
	</div>
</div>
    
    
        <input type=""hidden"" name=""FeedbackFormId"" id=""Hidden1"" value="""" />
    
        
    <div id=""uber"" class='interior navTab00'>
        <header class=""nocontent"">
            		
<a id=""skipContent"" class=""sr-only sr-only-focusable nocontent"" title=""Skip Navigation and go to Content"" href=""#main"">Skip to Content</a>			
            
            <div id=""topNavContainer"">
                <div class=""ic-container-fluid"">
                    
<div id=""browseAloudContainer"">
    <script type=""text/javascript"">var _baTheme = 0, _baMode = 'BrowseAloud', _baUseCookies = true, _baHideOnLoad = true;</script>
    <script type=""text/javascript"" src=""https://www.browsealoud.com/plus/scripts/ba.js""></script>
</div>

                    <div id=""topNav"">
                		<a id=""feedbackLink"" class=""feedbackTabButton"" title=""Feedback"" href=""#"">Feedback</a>
              		</div>
                    
<div id=""translateContainer"">
    <a id=""loadTranslate"" href=""#"" onclick=""loadGoogleTranslate(); this.remove()""></a>
    <div id=""google_translate_element"">TRANSLATE</div>
</div>
<script type=""text/javascript"">
    function googleTranslateElementInit() {
        if (!iCreateObject.isSiteInICreateMode)
            new google.translate.TranslateElement({ pageLanguage: iCreateObject.lang, layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true, gaId: iCreateObject.gaTrackingCode }, 'google_translate_element');
    }
</script>
<script type=""text/javascript"" src=""https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit""></script>

                </div>
              </div>
            
            <div id=""headerInner"" class=""ic-container-fluid"">
                <div id=""headerLeft"">
                    <div id=""logo"" title=""View our Homepage"">
                        
<a href=""http://cambridge.icreate7.esolutionsgroup.ca/en/index.aspx"" title=""Click to go back Home"">
    <img src=""http://cambridge.icreate7.esolutionsgroup.ca//en/images/structure/logo.svg"" alt=""City of Cambridge Logo"">
</a>

                        
    
                    </div>
                    
<script type=""text/javascript"">
    var _element = $('#logo');
    _title = _element.attr('title');

    if(($('div#logo img').length) || ($('div#logo').has('div.eSolutionsGroupPhotoGalleryV2PlaceholderDiv').length)) {
        if (iCreateObject.isSiteInICreateMode) {
            _element.css('background','none');
        }
        else{
            _element.addClass('hasImage');
        }
    }
    else {
        if (iCreateObject.isSiteInICreateMode && !iCreateObject.isSiteInPreviewMode) {
            _element.removeClass('hasImage');
            imgsrc = 'http://cambridge.icreate7.esolutionsgroup.ca//en/images/structure/logo.svg';
            var title = _title;
            var url = '/en/index.aspx';
            var target = ""_self"";
            _element.css(""background"", ""url("" + imgsrc + "") no-repeat 0px 0px #FFFFFF"").css(""height"",""89px"").css(""background-size"",""contain"").attr(""title"", jQuery.trim(title) != """" ? title : _title);
            if (url != '' && !iCreateObject.isSiteInICreateMode || iCreateObject.isSiteInPreviewMode) {
                _element.attr(""onclick"", ""javascript:window.open('"" + url + ""','"" + target + ""');"");
            }
        }        
    }
  </script>
                </div>
                <!-- header left -->
                
<nav class=""mobileNav"">
    <!--displayed only for smaller viewports-->
    <a class=""mobileContact"" href=""http://cambridge.icreate7.esolutionsgroup.ca/contact"" title=""Contact Us"">
        
    </a>
    <a href=""#"" class=""menuTrigger"">
        
    </a>
</nav>

                <div id=""headerRight"">
                     
    <nav id=""mainNav"">
    <ul id=""nav""><li id=""navTab01""><a title=""View our Apply, Register and Pay page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/apply-register-pay/Apply-Register-and-Pay.aspx"" class="""" data-mh=""nav-item"">Apply, Register<br /> and Pay</a><div class=""dropDownContainer""><ul class=""dropdown""><li><a title=""View our Animal Licences page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Animal-Licences.aspx?_mid_=2408"" class="""">Animal Licences</a></li><li><a title=""View our Applications, Licences and Permits page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/apply-register-pay/Applications-Licences-and-Permits.aspx"" class="""">Applications, Licences and Permits</a></li><li><a title=""View our Awards and Bursaries page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/apply-register-pay/Awards-and-Bursaries.aspx"" class="""">Awards and Bursaries</a></li><li><a title=""View our Bids and Tenders page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/build-invest-grow/Bids-and-Tenders.aspx?_mid_=2454"" class="""">Bids and Tenders</a></li><li><a title=""View our Birth or Death Certificate page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/apply-register-pay/Birth-or-Death-Certificate.aspx"" class="""">Birth or Death Certificate</a></li><li><a title=""View our Camps page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Camps.aspx?_mid_=2456"" class="""">Camps</a></li><li><a title=""View our Careers page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Current-Opportunities.aspx?_mid_=2457"" class="""">Careers</a></li></ul><ul class=""dropdown""><li><a title=""View our Committees and Boards page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Committees-and-Boards.aspx?_mid_=2458"" class="""">Committees and Boards</a></li><li><a title=""View our Event Tickets page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/apply-register-pay/Event-Tickets.aspx"" class="""">Event Tickets</a></li><li><a title=""View our Facility, Park or Field Rental page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/apply-register-pay/Facility-Park-or-Field-Rental.aspx"" class="""">Facility, Park or Field Rental</a></li><li><a title=""View our Maps page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/apply-register-pay/Maps.aspx"" class="""">Maps</a></li><li><a title=""View our Marriage and Weddings page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Marriage-and-Weddings.aspx?_mid_=2468"" class="""">Marriage and Weddings</a></li><li><a title=""View our Parking Ticket page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/apply-register-pay/Parking-Ticket.aspx"" class="""">Parking Ticket</a></li></ul><ul class=""dropdown""><li><a title=""View our Parking Permits page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/apply-register-pay/Parking-Permits.aspx"" class="""">Parking Permits</a></li><li><a title=""View our Schools page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/apply-register-pay/Schools.aspx"" class="""">Schools</a></li><li><a title=""View our Taxes page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Pay-Taxes.aspx?_mid_=2474"" class="""">Taxes</a></li><li><a title=""View our Recreation Programs page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Register-For-a-Program.aspx?_mid_=2475"" class="""">Recreation Programs</a></li><li><a title=""View our Register as a Charity or Non Profit page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/apply-register-pay/Register-as-a-Charity-or-Non-Profit.aspx"" class="""">Register as a Charity or Non Profit</a></li><li><a title=""View our Water Account page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Water-Account.aspx?_mid_=2477"" class="""">Water and Sewer</a></li></ul></div></li><li id=""navTab02""><a title=""View our Parks, Recreation and Culture page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Parks-Recreation-and-Culture.aspx"" class="""" data-mh=""nav-item"">Parks, Recreation<br /> and Culture</a><div class=""dropDownContainer""><ul class=""dropdown""><li><a title=""View our Accessibility and Inclusion Services page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/learn-about/Accessibility-and-Inclusion-Services.aspx?_mid_=2486"" class="""">Accessibility and Inclusion Services</a></li><li><a title=""View our Aquatics page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Aquatics.aspx"" class="""">Aquatics</a></li><li><a title=""View our Arts and Culture page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Arts-and-Culture.aspx"" class="""">Arts and Culture</a></li><li><a title=""View our Attractions page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Attractions.aspx"" class="""">Attractions</a></li><li><a title=""View our Cambridge Centre for the Arts page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Cambridge-Centre-for-the-Arts.aspx"" class="""">Cambridge Centre for the Arts</a></li><li><a title=""View our Camps page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Camps.aspx"" class="""">Camps</a></li><li><a title=""View our Cemeteries page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Cemeteries.aspx"" class="""">Cemeteries</a></li><li><a title=""View our Community Associations page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Community-Associations.aspx"" class="""">Community Associations</a></li><li><a title=""View our Events Calendar page"" href=""http://calendar.cambridge.icreate7.esolutionsgroup.ca"" class="""">Events Calendar</a></li><li><a title=""View our Facilities and Sports Fields page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Facilities-and-Sports-Fields.aspx"" class="""">Facilities and Sports Fields</a></li></ul><ul class=""dropdown""><li><a title=""View our Farmers' Market page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Farmers_-Market.aspx"" class="""">Farmers' Market</a></li><li><a title=""View our Get Involved page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Get-Involved.aspx"" class="""">Get Involved</a></li><li><a title=""View our Library page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Library.aspx"" class="""">Library</a></li><li><a title=""View our Maps page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Maps.aspx"" class="""">Maps</a></li><li><a title=""View our Parks, Forestry, Trails and Conversation Areas page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Parks-Forestry-Trails-and-Conversation-Areas.aspx"" class="""">Parks, Forestry, Trails and Conversation Areas</a></li><li><a title=""View our Places of Worship page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Places-of-Worship.aspx"" class="""">Places of Worship</a></li><li><a title=""View our Recreation and Programs page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Recreation-and-Programs.aspx"" class="""">Recreation and Programs</a></li><li><a title=""View our Special Events and Festivals page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Special-Events-and-Festivals.aspx"" class="""">Special Events and Festivals</a></li><li><a title=""View our Transportation and Getting Here page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/learn-about/Transportation-and-Getting-Here.aspx?_mid_=2558"" class="""">Transportation and Getting Here</a></li><li><a title=""View our Where to Eat, Stay and Shop page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Where-to-Eat-Stay-and-Shop.aspx"" class="""">Where to Eat, Stay and Shop</a></li></ul><div class=""dropdown dropDownRight""><a class=""dropDownRightInner"" title=""Childcare"" href=""#""><img alt=""Childcare"" src=""http://cambridge.icreate7.esolutionsgroup.ca/en/resourcesGeneral/dropdown_01.jpg"" /><div class=""dropdownRightGradient""></div><div class=""dropDownRightOverlay""><div><span>Childcare</span></div></div></a></div></div></li><li id=""navTab03""><a title=""View our Build, Invest and Grow page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/build-invest-grow/Build-Invest-and-Grow.aspx"" class="""" data-mh=""nav-item"">Build, Invest<br /> and Grow</a><div class=""dropDownContainer""><ul class=""dropdown""><li><a title=""View our Bids and Tenders page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/build-invest-grow/Bids-and-Tenders.aspx"" class="""">Bids and Tenders</a></li><li><a title=""View our Boxwood Business Campus page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/build-invest-grow/Boxwood-Business-Campus.aspx"" class="""">Boxwood Business Campus</a></li><li><a title=""View our Building and Planning page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/build-invest-grow/Building-and-Planning.aspx"" class="""">Building and Planning</a></li><li><a title=""View our Business Applications, Licences and Permits page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/build-invest-grow/Business-Applications-Licences-and-Permits.aspx"" class="""">Business Applications, Licences and Permits</a></li><li><a title=""View our Business Connection Newsletter page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/build-invest-grow/Business-Connection-Newsletter.aspx"" class="""">Business Connection Newsletter</a></li><li><a title=""View our Business Directory page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/build-invest-grow/Business-Directory.aspx"" class="""">Business Directory</a></li><li><a title=""View our Chamber of Commerce page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/build-invest-grow/Chamber-of-Commerce.aspx"" class="""">Chamber of Commerce</a></li><li><a title=""View our Construction and Renovating page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/build-invest-grow/Construction-and-Renovating.aspx"" class="""">Construction and Renovating</a></li></ul><ul class=""dropdown""><li><a title=""View our Development and Building page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/build-invest-grow/Development-and-Building.aspx"" class="""">Development and Building</a></li><li><a title=""View our Economic Development page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/build-invest-grow/Economic-Development.aspx"" class="""">Economic Development</a></li><li><a title=""View our Filming in Cambridge page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/build-invest-grow/Filming-in-Cambridge.aspx"" class="""">Filming in Cambridge</a></li><li><a title=""View our Manufacturing Innovation Network (MIN) page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/build-invest-grow/Manufacturing-Innovation-Network-MIN.aspx"" class="""">Manufacturing Innovation Network (MIN)</a></li><li><a title=""View our Maps page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Maps.aspx?_mid_=2607"" class="""">Maps</a></li><li><a title=""View our Starting or Relocating a Business page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/build-invest-grow/Starting-or-Relocating-a-Business.aspx"" class="""">Starting or Relocating a Business</a></li><li><a title=""View our Taxes page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Taxes.aspx"" class="""">Taxes</a></li><li><a title=""View our Utilities page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/build-invest-grow/Utilities.aspx"" class="""">Utilities</a></li></ul><div class=""dropdown dropDownRight""><a class=""dropDownRightInner"" title=""Childcare"" href=""#""><img alt=""Childcare"" src=""http://cambridge.icreate7.esolutionsgroup.ca/en/resourcesGeneral/dropdown_01.jpg"" /><div class=""dropdownRightGradient""></div><div class=""dropDownRightOverlay""><div><span>Childcare</span></div></div></a></div></div></li><li id=""navTab04""><a title=""View our Learn About page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/learn-about/Learn-About.aspx"" class="""" data-mh=""nav-item"">Learn About</a><div class=""dropDownContainer""><ul class=""dropdown""><li><a title=""View our About Cambridge page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/learn-about/About-Cambridge.aspx"" class="""">About Cambridge</a></li><li><a title=""View our Accessibility and Inclusion Services page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/learn-about/Accessibility-and-Inclusion-Services.aspx"" class="""">Accessibility and Inclusion Services</a></li><li><a title=""View our Awards and Bursaries page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/apply-register-pay/Awards-and-Bursaries.aspx?_mid_=2644"" class="""">Awards and Bursaries</a></li><li><a title=""View our Budget page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Budget.aspx?_mid_=2645"" class="""">Budget</a></li><li><a title=""View our Careers page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Careers.aspx?_mid_=2646"" class="""">Careers</a></li><li><a title=""View our Connect with Cambridge page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/learn-about/Connect-with-Cambridge.aspx"" class="""">Connect with Cambridge</a></li><li><a title=""View our Current Projects page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/learn-about/Current-Projects.aspx"" class="""">Current Projects</a></li><li><a title=""View our Doctor or Health Services page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Hospitals-and-Health-Centres.aspx?_mid_=2657"" class="""">Doctor or Health Services</a></li><li><a title=""View our Elections page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/learn-about/Elections.aspx"" class="""">Elections</a></li><li><a title=""View our Environment page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/learn-about/Environment.aspx"" class="""">Environment</a></li><li><a title=""View our Government page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/learn-about/Government.aspx"" class="""">Government</a></li><li><a title=""View our Have Your Say (engageCambridge) page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/learn-about/Have-Your-Say-engageCambridge.aspx"" class="""">Have Your Say (engageCambridge)</a></li></ul><ul class=""dropdown""><li><a title=""View our Heritage page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/learn-about/Heritage.aspx"" class="""">Heritage</a></li><li><a title=""View our Library page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Library.aspx?_mid_=2696"" class="""">Library</a></li><li><a title=""View our Maps page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/learn-about/Maps.aspx"" class="""">Maps</a></li><li><a title=""View our Moving Here page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/learn-about/Moving-Here.aspx"" class="""">Moving Here</a></li><li><a title=""View our News and Public Notices page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/Modules/News/search.aspx?lang=en"" class="""">News and Public Notices</a></li><li><a title=""View our Open Data page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Open-Data.aspx?_mid_=2700"" class="""">Open Data</a></li><li><a title=""View our Places of Worship page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Places-of-Worship.aspx?_mid_=2701"" class="""">Places of Worship</a></li><li><a title=""View our Reports, Studies and Plans page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/learn-about/Reports-Studies-and-Plans.aspx"" class="""">Reports, Studies and Plans</a></li><li><a title=""View our Roads, Parking and Sidewalks page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/learn-about/Roads-Parking-and-Sidewalks.aspx"" class="""">Roads, Parking and Sidewalks</a></li><li><a title=""View our Service Interruptions page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/learn-about/Service-Interruptions.aspx"" class="""">Service Interruptions</a></li><li><a title=""View our Social Services page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Social-Services.aspx?_mid_=2734"" class="""">Social Services</a></li><li><a href=""http://cambridge.icreate7.esolutionsgroup.ca/en/learn-about/Learn-About.aspx"" title=""View More for Learn About"" class=""viewMore"">View More...</a></li></ul><div class=""dropdown dropDownRight""><a class=""dropDownRightInner"" title=""Childcare"" href=""#""><img alt=""Childcare"" src=""http://cambridge.icreate7.esolutionsgroup.ca/en/resourcesGeneral/dropdown_01.jpg"" /><div class=""dropdownRightGradient""></div><div class=""dropDownRightOverlay""><div><span>Childcare</span></div></div></a></div></div></li><li id=""navTab05""><a title=""View our Your City page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Your-City.aspx"" class="""" data-mh=""nav-item"">Your City</a><div class=""dropDownContainer""><ul class=""dropdown""><li><a title=""View our Animal Services page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Animal-Services.aspx"" class="""">Animal Services</a></li><li><a title=""View our Accounting and Budget page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Accounting-and-Budget.aspx"" class="""">Accounting and Budget</a></li><li><a title=""View our By-Laws page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Your-City-By-Laws.aspx"" class="""">By-Laws</a></li><li><a title=""View our Careers page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Careers.aspx"" class="""">Careers</a></li><li><a title=""View our Report an Issue page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Report-an-Issue.aspx"" class="""">Report an Issue</a></li><li><a title=""View our Commissioner of Oaths page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Commissioner-of-Oaths.aspx"" class="""">Commissioner of Oaths</a></li><li><a title=""View our Committees and Boards page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Committees-and-Boards.aspx"" class="""">Committees and Boards</a></li><li><a title=""View our Contact Us page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Contact-Us.aspx"" class="""">Contact Us</a></li><li><a title=""View our Departments page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Departments.aspx"" class="""">Departments</a></li><li><a title=""View our Emergency Services and Preparedness page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/emergency-services-and-preparedness.aspx"" class="""">Emergency Services and Preparedness</a></li><li><a title=""View our Garbage and Recycling page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Garbage-and-Recycling.aspx"" class="""">Garbage and Recycling</a></li></ul><ul class=""dropdown""><li><a title=""View our Marriage and Weddings page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Marriage-and-Weddings.aspx"" class="""">Marriage and Weddings</a></li><li><a title=""View our Mayor and Council page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Mayor-and-Council.aspx"" class="""">Mayor and Council</a></li><li><a title=""View our Open Data page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Open-Data.aspx"" class="""">Open Data</a></li><li><a title=""View our Senior Services page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Senior-Services.aspx"" class="""">Senior Services</a></li><li><a title=""View our Social Services page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Social-Services.aspx"" class="""">Social Services</a></li><li><a title=""View our Taxes page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Taxes.aspx?_mid_=2888"" class="""">Taxes</a></li><li><a title=""View our Utilities page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Utilities.aspx"" class="""">Utilities</a></li><li><a title=""View our Water and Sewer page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Water-and-Sewer.aspx"" class="""">Water and Sewer</a></li><li><a title=""View our Who Does What at City Hall? page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Who-Does-What-at-City-Hall.aspx"" class="""">Who Does What at City Hall?</a></li><li><a title=""View our Volunteer page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Volunteer.aspx"" class="""">Volunteer</a></li><li><a title=""Photo Galleries"" href=""http://cambridge.icreate7.esolutionsgroup.ca/Common/Photo-Galleries.aspx"" class="""">Photo Galleries</a></li></ul><div class=""dropdown dropDownRight""><a class=""dropDownRightInner"" title=""Childcare"" href=""#""><img alt=""Childcare"" src=""http://cambridge.icreate7.esolutionsgroup.ca/en/resourcesGeneral/dropdown_01.jpg"" /><div class=""dropdownRightGradient""></div><div class=""dropDownRightOverlay""><div><span>Childcare</span></div></div></a></div></div></li><li id=""navTab06""><a title="""" href=""#"" class="""" data-mh=""nav-item"">How Do I?</a><div class=""dropDownContainer""><ul class=""dropdown""><li><a title=""View our Book or Rent a Facility page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Book-or-Rent-a-Facility.aspx?_mid_=47"" class="""">Book or Rent a Facility</a></li><li><a title=""View our Careers page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Careers.aspx?_mid_=5874"" class="""">Apply for a Job</a></li><li><a title="""" href=""#"" class="""">Change My Address</a></li><li><a title=""View our Report an Issue page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Report-an-Issue.aspx"" class="""">Submit a Compliment or Complaint</a></li><li><a title=""View our Connect with Cambridge page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/learn-about/Connect-with-Cambridge.aspx?_mid_=5877"" class="""">Connect with Cambridge</a></li><li><a title="""" href=""#"" class="""">File a Claim</a></li><li><a title=""View our Taxes page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Taxes.aspx?_mid_=5879"" class="""">Find Information on Taxes</a></li></ul><ul class=""dropdown""><li><a title="""" href=""#"" class="""">Find Online Services</a></li><li><a title=""Pay My Bill"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/apply-register-pay/Apply-Register-and-Pay.aspx?_mid_=46"" class="""">Find Utilities or Pay My Bill</a></li><li><a title=""View our Marriage Licence page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Marriage-Licence.aspx?_mid_=48"" class="""">Get a Marriage Licence</a></li><li><a title=""View our Birth or Death Certificate page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/apply-register-pay/Birth-or-Death-Certificate.aspx?_mid_=49"" class="""">Get a Birth or Death Certificate</a></li><li><a title=""View our Have Your Say (engageCambridge) page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/learn-about/Have-Your-Say-engageCambridge.aspx?_mid_=5881"" class="""">Have My Say</a></li><li><a title=""View our Leaf Collection page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Leaf-Collection.aspx?_mid_=5882"" class="""">Learn About Leaf Collection</a></li><li><a title=""View our Freedom of Information page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Freedom-of-Information.aspx?_mid_=5883"" class="""">Make a Freedom of Information Request</a></li></ul><ul class=""dropdown""><li><a title=""View our Parking Ticket page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/apply-register-pay/Parking-Ticket.aspx?_mid_=5884"" class="""">Pay a Parking Ticket</a></li><li><a title=""View our Recreation and Programs page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Recreation-and-Programs.aspx?_mid_=5885"" class="""">Register for Recreation and Programs</a></li><li><a title=""View our Construction and Renovating page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/build-invest-grow/Construction-and-Renovating.aspx?_mid_=5886"" class="""">Renovate My Home or Property</a></li><li><a title=""View our Request Greeting, Plaque or Photo page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Request-Greeting-Plaque-or-Photo.aspx?_mid_=5887"" class="""">Request a Greeting or Plaque</a></li><li><a title=""View our Service Interruptions page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/learn-about/Service-Interruptions.aspx?_mid_=5888"" class="""">Learn About Service Interruptions</a></li><li><a title=""View our Payments page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Payments.aspx?_mid_=5889"" class="""">Make a Service Invoice Payments</a></li></ul></div></li></ul>
    </nav>
           
                </div>
                <!-- header right -->
            </div>
            <!--headerInner -->
        </header>

        <div id=""intBg"">
            <div id=""intBgImage"" class=""nocontent"">
                
    
                <p class=""defaultImage"">
<a title=""Default Interior Banner"" target=""&#xD;&#xA;            _blank&#xD;&#xA;          "">
<img alt=""Default Interior Banner"" src=""http://cambridge.icreate7.esolutionsgroup.ca//en/rotatingimages/defaultInterior/defaultInteriorBanner.jpg"" /></a></p>
            </div>          
            <script type=""text/javascript"">
      var _element = $('#intBgImage');
      _title = _element.attr('title');

      if(($('div#intBgImage img').length) || ($('div#intBgImage').has('div.eSolutionsGroupPhotoGalleryV2PlaceholderDiv').length)) {
      if (iCreateObject.isSiteInICreateMode ) {
      _element.css('background','none');
      _element.addClass('hasImage');
      }
      else{
      _element.addClass('hasImage');
      }

      } else {
      if (iCreateObject.isSiteInICreateMode && !iCreateObject.isSiteInPreviewMode) {
      _element.removeClass('hasImage');
      var interiorBanners = [
        repSingleQuote(""/en/rotatingimages/defaultInterior/defaultInteriorBanner.jpg"")];
      var titles = [
        repSingleQuote(""Default Interior Banner"")];
      var urls = [
        """"];
      var newWindows = [false];
      if (interiorBanners.length != 0) {
      var num = Math.floor(Math.random() * ( (interiorBanners.length - 1) + 1));
      imgsrc = interiorBanners[num];
      var title = titles[num];
      var url = urls[num];
      var target = newWindows[num]?""_blank"":""_self"";
      _element.css(""background"", ""url("" + imgsrc + "") no-repeat 0px 0px #FFFFFF"").attr(""title"", jQuery.trim(title) != """" ? title : _title);
      if(url != '' && !iCreateObject.isSiteInICreateMode || iCreateObject.isSiteInPreviewMode){
      _element.attr(""onclick"",""javascript:window.open('""+url+""','""+target+""');"");
      }
      } else {
      var defaultBanners = [
        repSingleQuote(""/en/rotatingimages/defaultInterior/defaultInteriorBanner.jpg"")];
      var defaultTitles = [
        repSingleQuote(""Default Interior Banner"")];
      var defaultUrls = [
        """"];
      var defaultNewWindows = [false];
      if (defaultBanners.length != 0) {
      var num = Math.floor(Math.random() * ( (defaultBanners.length - 1) + 1));
      imgsrc = defaultBanners[num];
      var title = defaultTitles[num];
      _element.css(""background"", ""url("" + imgsrc + "") no-repeat 0px 0px #FFFFFF"").attr(""title"", jQuery.trim(title) != """" ? title : _title);
      if(url != '' && !iCreateObject.isSiteInICreateMode || iCreateObject.isSiteInPreviewMode){
      _element.attr(""onclick"",""javascript:window.open('""+url+""','""+target+""');"");
      }
      }
      }
      }
      }
    </script>
            
            <div class=""topContent"">
                <div class=""ic-container-fluid"">
                    <div id=""pageHeading"">
                        <h1>
    
        Parser-Wide
    </h1>
                        

    <a class=""subNavTrigger nocontent"" href=""#"" title="""">
    
    <span class=""subNavTriggerText"">More</span></a>

                        
<div id=""breadcrumbs"" class=""nocontent"">

</div>

                    </div>
                    <!--pageHeading -->
                     
<script type=""text/javascript"">
    $(window).load(function () {
		setTimeout(function(){
			$('form.gsc-search-box').find(""input.gsc-input"").each(function (ev) {
				$(this).attr(""placeholder"", 'What are you looking for?');
			});
			},300);
    });
</script>
<script type=""text/javascript"">
    (function () {
        var cx = '008243341244748208528:ohbzveayjfg';
        var gcse = document.createElement('script');
        gcse.type = 'text/javascript';
        gcse.async = true;
        gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
            '//cse.google.com/cse.js?cx=' + cx;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(gcse, s);
    })();
</script>
<div class=""searchContainer nocontent"">
    <div class=""search"">
     
        <!--<gcse:searchbox-only></gcse:searchbox-only>-->
        <div class=""gsc-control-searchbox-only gsc-control-searchbox-only-en""><form class=""gsc-search-box""><table class=""gsc-search-box""><tr><td class=""gsc-input""><input type=""text"" class=""gsc-input"" readonly value=""What are you looking for?"" /></td><td class=""gsc-search-button""><input type=""button"" value=""Search"" class=""gsc-search-button"" title=""search""></td><tr></form></table></div>
    
    </div>
</div>
                </div>
            </div>
        </div>
        
        <div style=""display: none;"" class=""icreateTokenWrapper"">
            
    
        <form id=""frmToggleContent"" action=""#""><input type=""hidden"" id=""hdnHideLeftContent"" value=""wide""><input type=""hidden"" id=""hdnHideRightContent"" value=""hide""><input type=""hidden"" id=""hdnHideRightContact"" value=""""><input type=""hidden"" id=""hdnHideQuickLinks"" value=""""><input type=""submit"" id=""btnToggleContent"" name=""btnToggleContent"" class=""hideButton""></form>
    
        </div>
         
        <div id=""main"">
            <div class=""ic-container-fluid"">
                <div id=""subNavWrapper"" class=""nocontent"">
                    <nav id=""subNavContainer"">
                        <ul class=""subNav""><li></li></ul>
                    </nav>
                </div>          
                <div id=""contentInt"">
                    <div id=""printArea"">                            
                        
<div id=""actions"" class=""nocontent"" role=""toolbar"">
    <input type=""hidden"" id=""hdnContent"" name=""hdnContent"" />
	<input type=""hidden"" id=""hdnPage"" name=""hdnPage"" />
    <div class=""resizeText"">
        
            <a class=""textDecrease"" href=""#"" title=""Decrease text size""></a>
            <a class=""textDefault"" href=""#"" title=""Default text size""></a>
            <a class=""textIncrease"" href=""#"" title=""Increase text size""></a>            
        
    </div>

    <div class=""actionItem"">
        <a id=""printLink"" class=""printLink"" title=""Print This Page X"" href=""javascript: PrintScreen();""></a>
    </div>
    
    
    
<div id=""Share"" class=""share"">
	<a class=""ShareLink"" href=""javascript: void(0);"" title=""Share This Page"">
	</a>
    
	<ul id=""ShareItemsPlaceholder"" class=""shareDropDown"">
        <li>
            <a href=""http://www.facebook.com/sharer.php?u=http%3a%2f%2fcambridge.icreate7.esolutionsgroup.ca%2fen%2fparser-wide.aspx%3fappname%3dgarbagetagsssstep3"" title="""" target=""_blank"">
                <img src=""http://cambridge.icreate7.esolutionsgroup.ca//Common/images/share/facebook.gif"" alt=""Open new window to share this page via Facebook"" />
                <span>Facebook</span>
            </a>
        </li>
        <li>
            <a href=""http://www.linkedin.com/shareArticle?mini=true&url=http%3a%2f%2fcambridge.icreate7.esolutionsgroup.ca%2fen%2fparser-wide.aspx%3fappname%3dgarbagetagsssstep3"" title="""" target=""_blank"">
                <img src=""http://cambridge.icreate7.esolutionsgroup.ca//Common/images/share/linkedin.gif"" alt=""Open new window to share this page via LinkedIn"" />
                <span>LinkedIn</span>
            </a>
        </li>
        
        <li>
            <a href=""http://twitter.com/home?status=Check+out+http%3a%2f%2fcambridge.icreate7.esolutionsgroup.ca%2fen%2fparser-wide.aspx%3fappname%3dgarbagetagsssstep3"" title="""" target=""_blank"">
                <img src=""http://cambridge.icreate7.esolutionsgroup.ca//Common/images/share/twitter.gif"" alt=""Open new window to share this page via Twitter"" />
                <span>Twitter</span>
            </a>
        </li>

        <li>
            <a id=""emailLink"" href=""#"" onclick=""javascript: mailTo(event);"" title="""">
                <img src=""http://cambridge.icreate7.esolutionsgroup.ca//Common/images/share/email.png"" alt=""Email This page"" />
                <span>Email</span>
            </a>
        </li>
	</ul>
    
    <script type=""text/javascript"">
        if (!iCreateObject.isSiteInICreateMode) {
            $(""#ShareItemsPlaceholder li"").last().addClass(""last"");
        }
        else
        {
            $(""#ShareItemsPlaceholder"").empty();
        }

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            $(""#Share a.ShareLink"").click(function (event) {
                if (iCreateObject.isSiteInICreateMode) {
                    showNAMessage();
                }
                else {
                    event.preventDefault();
                    $(""#Share"").trigger(""mouseenter"");
                }
            });
        }

        if (iCreateObject.lang == 'fr') {
            $(""#Share a.ShareLink"").attr(""title"", ""Partager cette page"");

            $(""#ShareItemsPlaceholder li a"").each(function () {
                $(this).attr(""title"", $(this).attr(""title"").replace(""Open new window to share this page via"", ""Ouvrir une nouvelle fen?tre pour partager cette page avec""));
            });
        }
        
    </script>
</div>
	
</div>


                        <div id=""intFloatRight"" class=""nocontent"">
                            <div id=""intQuicklinks"" class=""relatedLinksContainer"">
                                















<h2>Quick Links</h2>


                                <div class=""relatedLinks"">
                                    
    
                                </div>
                            </div>
                            <div id=""contactMainContainer"">
                                <div class=""contactContainer"">
                                    <div class=""contactHeader"">
                                        <div class=""contactHeaderTitle"">
                                            















<p>Contact Us</p>


                                        </div>
                                    </div>
                                    <!--contactHeader -->
                                    <div class=""contactBody"">
                                        
    
                                    </div>
                                    <div class=""contactFooter"">                                    
                                        
<div class=""socialLinks nocontent"">
    <p>
  <a title="""" href=""https://www.youtube.com/user/CityOfCambridgeOn"" target=""_blank"">
    <img alt=""YouTube page"" src=""http://cambridge.icreate7.esolutionsgroup.ca//en/resourcesGeneral/socialicons/icon-youtube.svg"" />
  </a>
  <a title="""" href=""https://www.facebook.com/thecityofcambridge"" target=""_blank"">
    <img alt=""Facebook page"" src=""http://cambridge.icreate7.esolutionsgroup.ca//en/resourcesGeneral/socialicons/icon-facebook.svg"" />
  </a>
  <a title="""" href=""https://twitter.com/cityofcambridge"" target=""_blank"">
    <img alt=""Twitter page"" src=""http://cambridge.icreate7.esolutionsgroup.ca//en/resourcesGeneral/socialicons/icon-twitter.svg"" />
  </a>
  <a title="""" href=""#"">
    <img alt=""Maps"" src=""http://cambridge.icreate7.esolutionsgroup.ca//en/resourcesGeneral/socialicons/icon-pingstreet.svg"" />
  </a>
</p>
</div>


                                    </div>
                                </div>
                            </div>
                        </div>                            
                         
<script type=""text/javascript"" src=""http://cambridge.icreate7.esolutionsgroup.ca//Common/scripts/toggleContent.js""></script>
 
                        <div id=""printAreaContent"" tabindex=""-1"">
                            
    
        <div id=""parser"">
        


";

            result.Bottom = @"

</div>
    
                        </div>
                         
<a href=""#"" id=""pageSubscription"" class=""button nocontent"" style=""display:none;"">Subscribe to this Page</a>

    <link rel='stylesheet' href='http://cambridge.icreate7.esolutionsgroup.ca//Modules/PageSubscription/style/PageSubscriptionForm.css' />
    <script src=""http://cambridge.icreate7.esolutionsgroup.ca//Modules/PageSubscription/scripts/PageSubscription.js""></script>

                        <div id=""mobileContact""></div>
                    </div>
                </div>
                <!--mainContent-->
            </div>
        </div>
        <!--main-->
        <nav class=""quickLinks""><div class=""ic-container-fluid""><ul id=""anchors""><li data-menuanchor=""events"" class=""""><a href=""#events"" title=""Calendar of Events"">Calendar of Events</a></li><li data-menuanchor=""council"" class=""""><a href=""#council"" title=""Meet Our Council"">Meet Our Council</a></li><li data-menuanchor=""connect"" class=""""><a href=""#connect"" title=""Connect With Cambridge"">Connect With Cambridge</a></li><li data-menuanchor=""capital"" class=""""><a href=""#capital"" title=""Capital Projects"">Capital Projects</a></li></ul></div></nav>
        <footer class=""nocontent"">
            
<div class=""ic-container-fluid"">
    <div id=""footerLeft"">
        <p><img src=""http://cambridge.icreate7.esolutionsgroup.ca//en/images/structure/logo.svg"" alt=""Cambridge logo""></p>
        















<p>City of Cambridge<br>50 Dickson Street<br>PO Box 669<br>Cambridge, ON, N1R 5W8<br>Phone: 519-623-1340<br>TTY: 519-623-6691<br><a title=""Open new window to send an email to  "" href=""javascript:emailContactV2('PRfMhB7D9utqk63ONDPlUsZ7weQuAleQuAl')&amp;&amp;false"">info@cambridge.ca</a></p>


         
<div id=""footerNav"">
    <a title=""View our Website Accessibility page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/learn-about/Website-Accessibility.aspx""><span>Accessibility</span></a><a title=""A to Z Services"" href=""http://cambridge.icreate7.esolutionsgroup.ca/Modules/AtoZ/Index.aspx""><span>A to Z Services</span></a><a title=""View our Freedom of Information page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Freedom-of-Information.aspx""><span>Freedom of Information</span></a><a title=""View our Contact Us page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Contact-Us.aspx""><span>Contact Us</span></a><a title=""Sitemap"" href=""http://cambridge.icreate7.esolutionsgroup.ca/Common/Sitemap.aspx""><span>Sitemap</span></a>
    <a id=""esol"" title=""Designed by eSolutionsGroup"" target=""_blank"" href=""http://www.esolutionsgroup.ca"">Designed by eSolutions</a>
</div>
    </div>
    
    
<div class=""footerNavMega"">
    <div class=""footerNavMegaCol""><ul><li><a title=""View our Apply, Register and Pay page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/apply-register-pay/Apply-Register-and-Pay.aspx"" class=""topItem"" data-mh=""topItem"">Apply, Register and Pay</a><ul><li><a title=""View our Animal Licences page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Animal-Licences.aspx?_mid_=2408"">Animal Licences</a></li><li><a title=""View our Applications, Licences and Permits page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/apply-register-pay/Applications-Licences-and-Permits.aspx"">Applications, Licences and Permits</a></li><li><a title=""View our Awards and Bursaries page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/apply-register-pay/Awards-and-Bursaries.aspx"">Awards and Bursaries</a></li><li><a title=""View our Bids and Tenders page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/build-invest-grow/Bids-and-Tenders.aspx?_mid_=2454"">Bids and Tenders</a></li><li><a title=""View our Birth or Death Certificate page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/apply-register-pay/Birth-or-Death-Certificate.aspx"">Birth or Death Certificate</a></li><li><a title=""View our Camps page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Camps.aspx?_mid_=2456"">Camps</a></li><li><a title=""View our Careers page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Current-Opportunities.aspx?_mid_=2457"">Careers</a></li><li><a title=""View our Committees and Boards page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Committees-and-Boards.aspx?_mid_=2458"">Committees and Boards</a></li><li><a title=""View our Event Tickets page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/apply-register-pay/Event-Tickets.aspx"">Event Tickets</a></li><li><a class=""viewMore"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/apply-register-pay/Apply-Register-and-Pay.aspx"" title=""Apply, Register[\n] and Pay"">View All...</a></li></ul></li></ul></div><div class=""footerNavMegaCol""><ul><li><a title=""View our Parks, Recreation and Culture page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Parks-Recreation-and-Culture.aspx"" class=""topItem"" data-mh=""topItem"">Parks, Recreation and Culture</a><ul><li><a title=""View our Accessibility and Inclusion Services page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/learn-about/Accessibility-and-Inclusion-Services.aspx?_mid_=2486"">Accessibility and Inclusion Services</a></li><li><a title=""View our Aquatics page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Aquatics.aspx"">Aquatics</a></li><li><a title=""View our Arts and Culture page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Arts-and-Culture.aspx"">Arts and Culture</a></li><li><a title=""View our Attractions page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Attractions.aspx"">Attractions</a></li><li><a title=""View our Cambridge Centre for the Arts page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Cambridge-Centre-for-the-Arts.aspx"">Cambridge Centre for the Arts</a></li><li><a title=""View our Camps page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Camps.aspx"">Camps</a></li><li><a title=""View our Cemeteries page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Cemeteries.aspx"">Cemeteries</a></li><li><a title=""View our Community Associations page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Community-Associations.aspx"">Community Associations</a></li><li><a title=""View our Events Calendar page"" href=""http://calendar.cambridge.icreate7.esolutionsgroup.ca"">Events Calendar</a></li><li><a class=""viewMore"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/parks-recreation-culture/Parks-Recreation-and-Culture.aspx"" title=""Parks, Recreation[\n] and Culture"">View All...</a></li></ul></li></ul></div><div class=""footerNavMegaCol""><ul><li><a title=""View our Build, Invest and Grow page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/build-invest-grow/Build-Invest-and-Grow.aspx"" class=""topItem"" data-mh=""topItem"">Build, Invest and Grow</a><ul><li><a title=""View our Bids and Tenders page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/build-invest-grow/Bids-and-Tenders.aspx"">Bids and Tenders</a></li><li><a title=""View our Boxwood Business Campus page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/build-invest-grow/Boxwood-Business-Campus.aspx"">Boxwood Business Campus</a></li><li><a title=""View our Building and Planning page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/build-invest-grow/Building-and-Planning.aspx"">Building and Planning</a></li><li><a title=""View our Business Applications, Licences and Permits page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/build-invest-grow/Business-Applications-Licences-and-Permits.aspx"">Business Applications, Licences and Permits</a></li><li><a title=""View our Business Connection Newsletter page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/build-invest-grow/Business-Connection-Newsletter.aspx"">Business Connection Newsletter</a></li><li><a title=""View our Business Directory page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/build-invest-grow/Business-Directory.aspx"">Business Directory</a></li><li><a title=""View our Chamber of Commerce page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/build-invest-grow/Chamber-of-Commerce.aspx"">Chamber of Commerce</a></li><li><a title=""View our Construction and Renovating page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/build-invest-grow/Construction-and-Renovating.aspx"">Construction and Renovating</a></li><li><a title=""View our Development and Building page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/build-invest-grow/Development-and-Building.aspx"">Development and Building</a></li><li><a class=""viewMore"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/build-invest-grow/Build-Invest-and-Grow.aspx"" title=""Build, Invest[\n] and Grow"">View All...</a></li></ul></li></ul></div><div class=""footerNavMegaCol""><ul><li><a title=""View our Learn About page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/learn-about/Learn-About.aspx"" class=""topItem"" data-mh=""topItem"">Learn About</a><ul><li><a title=""View our About Cambridge page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/learn-about/About-Cambridge.aspx"">About Cambridge</a></li><li><a title=""View our Accessibility and Inclusion Services page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/learn-about/Accessibility-and-Inclusion-Services.aspx"">Accessibility and Inclusion Services</a></li><li><a title=""View our Awards and Bursaries page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/apply-register-pay/Awards-and-Bursaries.aspx?_mid_=2644"">Awards and Bursaries</a></li><li><a title=""View our Budget page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Budget.aspx?_mid_=2645"">Budget</a></li><li><a title=""View our Careers page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Careers.aspx?_mid_=2646"">Careers</a></li><li><a title=""View our Connect with Cambridge page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/learn-about/Connect-with-Cambridge.aspx"">Connect with Cambridge</a></li><li><a title=""View our Current Projects page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/learn-about/Current-Projects.aspx"">Current Projects</a></li><li><a title=""View our Doctor or Health Services page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Hospitals-and-Health-Centres.aspx?_mid_=2657"">Doctor or Health Services</a></li><li><a title=""View our Elections page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/learn-about/Elections.aspx"">Elections</a></li><li><a class=""viewMore"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/learn-about/Learn-About.aspx"" title=""Learn About"">View All...</a></li></ul></li></ul></div><div class=""footerNavMegaCol""><ul><li><a title=""View our Your City page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Your-City.aspx"" class=""topItem"" data-mh=""topItem"">Your City</a><ul><li><a title=""View our Animal Services page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Animal-Services.aspx"">Animal Services</a></li><li><a title=""View our Accounting and Budget page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Accounting-and-Budget.aspx"">Accounting and Budget</a></li><li><a title=""View our By-Laws page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Your-City-By-Laws.aspx"">By-Laws</a></li><li><a title=""View our Careers page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Careers.aspx"">Careers</a></li><li><a title=""View our Report an Issue page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Report-an-Issue.aspx"">Report an Issue</a></li><li><a title=""View our Commissioner of Oaths page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Commissioner-of-Oaths.aspx"">Commissioner of Oaths</a></li><li><a title=""View our Committees and Boards page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Committees-and-Boards.aspx"">Committees and Boards</a></li><li><a title=""View our Contact Us page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Contact-Us.aspx"">Contact Us</a></li><li><a title=""View our Departments page"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Departments.aspx"">Departments</a></li><li><a class=""viewMore"" href=""http://cambridge.icreate7.esolutionsgroup.ca/en/your-city/Your-City.aspx"" title=""Your City"">View All...</a></li></ul></li></ul></div>
</div>
</div>
<!-- Footer top -->


    <script type=""text/javascript"" src='https://js.esolutionsgroup.ca/js/libs/icreate-tinymce-accordion/1.0.3/jquery-icrtaccordion-clean.min.js'></script>
















<script type=""text/javascript"">/**/
    iCreateObject.gaTrackingCode = '';

    var _gaq = _gaq || []; var pluginUrl = ""//www.google-analytics.com/plugins/ga/inpage_linkid.js""; _gaq.push([""_require"", ""inpage_linkid"", pluginUrl]); _gaq.push([""_setAccount"", iCreateObject.gaTrackingCode]); _gaq.push([""_trackPageview""]); (function () { var e = document.createElement(""script""); e.type = ""text/javascript""; e.async = true; e.src = (""https:"" == document.location.protocol ? ""https://"" : ""http://"") + ""stats.g.doubleclick.net/dc.js""; var t = document.getElementsByTagName(""script"")[0]; t.parentNode.insertBefore(e, t) })(); if (typeof jQuery != ""undefined"") { jQuery(document).ready(function (e) { var t = /\.(zip|exe|pdf|doc*|xls*|ppt*|mp3)$/i; var n = """"; if (jQuery(""base"").attr(""href"") != undefined) n = jQuery(""base"").attr(""href""); jQuery(""a"").each(function () { var e = jQuery(this).attr(""href""); var r = jQuery(this).attr(""href""); if (e) { e = e.toLowerCase() } if (e && e.match(/^https?\:/i) && !e.match(document.domain)) { jQuery(this).click(function () { var t = e.replace(/^https?\:\/\//i, """"); _gaq.push([""_trackEvent"", ""External"", ""Click"", t]); if (jQuery(this).attr(""target"") != undefined && jQuery(this).attr(""target"").toLowerCase() != ""_blank"") { setTimeout(function () { location.href = r }, 200); return false } }) } else if (e && e.match(/^mailto\:/i)) { jQuery(this).click(function () { var t = e.replace(/^mailto\:/i, """"); _gaq.push([""_trackEvent"", ""Email"", ""Click"", t]) }) } else if (e && e.match(t)) { jQuery(this).click(function () { var t = /[.]/.exec(e) ? /[^.]+$/.exec(e) : undefined; var r = e; _gaq.push([""_trackEvent"", ""Download"", ""Click-"" + t, r]); if (jQuery(this).attr(""target"") != undefined && jQuery(this).attr(""target"").toLowerCase() != ""_blank"") { setTimeout(function () { location.href = n + e }, 200); return false } }) } }) }) }
/**/</script>



        </footer>
    </div>
    <!--uber-->
    
    
";


            //<ul class=""subNav""><li></li></ul>

            if(string.IsNullOrEmpty(leftmenu)  )
            {
                leftmenu = @"
<ul class=""subNav top"">
                <li ><a title = ""View our Business Directory page"" href = ""http://directory.cambridge.ca/"" class=""current""><span>Business Directory</span></a></li>
            </ul>
            <ul class=""subNav secondul"">
                <li><a title = ""View our Bids and Tenders page"" href=""http://www.cambridge.ca/en/build-invest-grow/Bids-and-Tenders.aspx"" class=""""><span>Bids and Tenders</span></a></li>
                <li><a title = ""View our Boxwood Business Campus page"" href=""http://www.cambridge.ca/en/build-invest-grow/Boxwood-Business-Campus.aspx"" class=""""><span>Boxwood Business Campus</span></a></li>
                <li class=""withChildren""><a title = ""View our Building and Planning page"" href=""http://www.cambridge.ca/en/build-invest-grow/Building-and-Planning.aspx"" class=""""><span>Building and Planning</span></a></li>
                <li><a title = ""View our Business Applications, Licences and Permits page"" href=""http://www.cambridge.ca/en/build-invest-grow/Business-Applications-Licences-and-Permits.aspx"" class=""""><span>Business Applications, Licences and Permits</span></a></li>
                <li><a title = ""View our Business Connection Newsletter page"" href= ""http://www.cambridge.ca/en/build-invest-grow/Business-Connection-Newsletter.aspx"" class=""""><span>Business Connection Newsletter</span></a></li>
                <li><a title = ""View our Chamber of Commerce page"" href=""http://www.cambridge.ca/en/build-invest-grow/Chamber-of-Commerce.aspx"" class=""""><span>Chamber of Commerce</span></a></li>
                <li><a title = ""View our Construction and Renovating page"" href=""http://www.cambridge.ca/en/build-invest-grow/Construction-and-Renovating.aspx"" class=""""><span>Construction and Renovating</span></a></li>
                <li class=""withChildren""><a title = ""View our Development and Infrastructure Planning page"" href=""http://www.cambridge.ca/en/build-invest-grow/Development-and-Infrastructure-Planning.aspx"" class=""""><span>Development and Infrastructure Planning</span></a></li>
                <li><a title = ""View our Economic Development page"" href= ""http://www.cambridge.ca/en/build-invest-grow/Economic-Development.aspx"" class=""""><span>Economic Development</span></a></li>
                <li><a title = ""View our Filming in Cambridge page"" href= ""http://www.cambridge.ca/en/build-invest-grow/Filming-in-Cambridge.aspx"" class=""""><span>Filming in Cambridge</span></a></li>
                <li><a title = ""View our Manufacturing Innovation Network (MIN) page"" href=""http://www.cambridge.ca/en/build-invest-grow/Manufacturing-Innovation-Network-MIN.aspx"" class=""""><span>Manufacturing Innovation Network(MIN)</span></a></li>
                <li><a title = ""View our Maps page"" href=""http://www.cambridge.ca/en/learn-about/Maps.aspx?_mid_=2607"" class=""""><span>Maps</span></a></li>
                <li><a title = ""View our Starting or Relocating a Business page"" href=""http://www.cambridge.ca/en/build-invest-grow/Starting-or-Relocating-a-Business.aspx"" class=""""><span>Starting or Relocating a Business</span></a></li>
                <li class=""withChildren""><a title = ""View our Taxes page"" href=""http://www.cambridge.ca/en/your-city/Taxes.aspx"" class=""""><span>Taxes</span></a></li>
                <li><a title = ""View our Utilities page"" href=""http://www.cambridge.ca/en/your-city/Utilities.aspx?_mid_=2618"" class=""""><span>Utilities</span></a></li>
            </ul>                
                
                ";
            }

            result.Top = result.Top.Replace(@"<ul class=""subNav""><li></li></ul>", leftmenu);

            result.Header = Regex.Replace(result.Header, "<title>.*?</title>", "<title>" + title + "</title>", RegexOptions.Singleline | RegexOptions.Multiline | RegexOptions.IgnoreCase);
             
            result.Top = result.Top
                    .Replace("\"/en/", "\"" + host + "en/")
                    .Replace("'/en/", "\'" + host + "en/");
            result.Top = Regex.Replace(result.Top, "<h1>.*?</h1>", "<h1>" + title + "</h1>", RegexOptions.Singleline | RegexOptions.Multiline | RegexOptions.IgnoreCase);
            result.Bottom = result.Bottom
                    .Replace("\"/en/", "\"" + host + "en/")
                    .Replace("'/en/", "\'" + host + "en/")
                    //.ToLower();
                    .Replace("pagesubscription.js", "blank.js")
                    .Replace("PageSubscription.js", "blank.js");

            //PageSubscription.js


            return result;
        }

    }
}