
/*
 * commonscript
 * Copyright (c) 2015 BIASL
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 */


var winwin;

function showTodayChart(id, se) {
    //alert("showTodayChart : " + id);
    var url = "../pub/TodaysChart.aspx?compcode=" + id + "&se=" + se;
    //alert(url);
    winwin = window.open(url, 'poppypoppop', 'height=500,width=800,scrollbars=3,top=50');
    if (window.focus) { winwin.focus() }

}

function showHistoricalChart(id, se) {
//    alert("showHistoricalChart : " + id);
    var url = "../pub/HistoricalChart.aspx?compcode=" + id + "&se=" + se;
    //alert(url);
    winwin = window.open(url, 'poppypoppop', 'height=650,width=850,scrollbars=3,top=50');
    if (window.focus) { winwin.focus() }
}

function showMarketDepth(id, se) {
    //    alert("showHistoricalChart : " + id);
    var url = "../pub/MarketDepth.aspx?script=" + id + "&se=" + se;
    //alert(url);
    winwin = window.open(url, 'poppypoppop', 'height=650,width=850,scrollbars=3,top=50');
    if (window.focus) { winwin.focus() }
}

//create the host url of current page
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

    //alert("insidehelper(gethost):"+url);

    return url;
}


//get all all query string from the url of the page
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

// Helper function, parse param from request string
function getParam(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null)
        return "";
    else
        return results[1];
}



function ShowHistoricalChart(divID, data, chartTitle, chartSubTitle) {
    //var chartTitle = "ABC";
    //var chartSubTitle = "";
    //var data1 = "";

    //chartTitle = $("#body_hiddenFieldChartTitle").val();
    //chartSubTitle = $("#body_hiddenFieldChartSubTitle").val();

    //var data = [];

    //alert(data2.GetCompDailyDataList_JSONResult);
    //data = JSON.parse("[" + data1 + "]");
    //data = JSON.parse(data2.GetCompDailyDataList_JSONResult);

    // split the data set into ohlc and volume
    var ohlc = [],
        volume = [],
        dataLength = data.length;

    for (i = 0; i < dataLength; i++) {
        ohlc.push([
            data[i].TradeDateJSON, // the date
            data[i].ScriptOpen, // open
            data[i].ScriptHigh, // high
            data[i].ScriptLow, // low
            data[i].ScriptClose // close
        ]);

        volume.push([
            data[i].TradeDateJSON, // the date
            data[i].ScriptVol // the volume
        ])
        /*
        ohlc.push([
            data[i][0], // the date
            data[i][1], // open
            data[i][2], // high
            data[i][3], // low
            data[i][4] // close
        ]);

        volume.push([
            data[i][0], // the date
            data[i][5] // the volume
        ])
        */
    }

    // set the allowed units for data grouping
    var groupingUnits = [[
        'week',                         // unit name
        [1]                             // allowed multiples
    ], [
        'month',
        [1, 2, 3, 4, 6]
    ]];

    // create the chart
    $('#' + divID).highcharts('StockChart', {

        rangeSelector: {
            selected: 1
        },

        credits: false,
        title: {
            text: chartTitle
        },

        yAxis: [{
            title: {
                text: 'OHLC'
            },
            height: 200,
            lineWidth: 2
        }, {
            title: {
                text: 'Volume'
            },
            top: 300,
            height: 100,
            offset: 0,
            lineWidth: 2
        }],

        series: [{
            type: 'candlestick',
            name: 'Price',
            data: ohlc,
            dataGrouping: {
                units: groupingUnits
            }
        }, {
            type: 'column',
            name: 'Volume',
            data: volume,
            yAxis: 1,
            dataGrouping: {
                units: groupingUnits
            }
        }]
    });
}

function ShowTodaysChart(divID, categoryData, volumeData, priceData, chartTitle, chartSubTitle) {

    $('#' + divID).highcharts({
        chart: {
            zoomType: 'xy'
        },
        credits: false,
        title: {
            text: chartTitle
        },
        subtitle: {
            text: chartSubTitle,
            style: { "color": "#555555" }
        },
        xAxis: [{
            categories: categoryData,
            labels: {
                autoRotation: [-90]
            },
            title: {
                text: 'TIME'
            }


        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}',
                style: {
                    color: '#89A54E'
                }
            },
            title: {
                text: 'Price',
                style: {
                    color: '#89A54E'
                }
            }
        }, { // Secondary yAxis
            title: {
                text: 'Volume',
                style: {
                    color: '#4572A7'
                }
            },
            labels: {
                format: '{value}',
                style: {
                    color: '#4572A7'
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'horizontal',
            align: 'left',
            x: 50,
            verticalAlign: 'top',
            y: 20,
            floating: true,
            backgroundColor: '#FFFFFF'
        },
        series: [{
            name: 'Volume',
            color: '#4572A7',
            type: 'column',
            yAxis: 1,
            data: volumeData,
            tooltip: {
                valueSuffix: ''
            }

        }, {
            name: 'Price',
            color: '#89A54E',
            type: 'spline',
            data: priceData,
            tooltip: {
                valueSuffix: ''
            }
        }]
    });
}

//ShowDSEIndexChart
function ShowDSEIndexChart(divID, categoryData, priceData, chartTitle, chartSubTitle) {

    $('#' + divID).highcharts({
        chart: {
            zoomType: 'xy'
        },
        credits: false,
        title: {
            text: chartTitle,
            style: { "color": "#555555", "font-size":"12px" }
        },
        subtitle: {
            text: chartSubTitle,
            style: { "color": "#555555" }
        },
        xAxis: [{
            categories: categoryData,
            labels: {
                autoRotation: [-90]
            },
            title: {
                text: 'TIME'
            }


        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}',
                style: {
                    color: '#89A54E'
                }
            },
            title: {
                text: 'Index',
                style: {
                    color: '#89A54E'
                }
            }
        }
        ],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'horizontal',
            align: 'left',
            x: 50,
            verticalAlign: 'top',
            y: 5,
            floating: true,
            backgroundColor: '#FFFFFF'
        },
        series: [
            {
            name: 'Index',
            color: '#89A54E',
            type: 'spline',
            data: priceData,
            tooltip: {
                valueSuffix: '',
                fontSize:'5px'
            },
            states: {
                hover: {
                    lineWidth: 2
                }
            },

        }]
    });
}

function EditProfile() {
    var preferredWidth = 900;//680 to 900 = 220
    var preferredHeight = 623;

    /*Without Compatibility*/
    preferredWidth = 800; //750 to 900 = 150

    preferredHeight = $(window).height();
    //preferredHeight = $(document).height();
    preferredHeight = preferredHeight - 50;

    var hostUrl = gethost();
    hostUrl = hostUrl.replace('priv', 'pub');
    url = hostUrl + "/EditMyPrifileNH.aspx";

    //alert(url);

    ShowPopupColorbox(url + "?showClose=true", preferredWidth, preferredHeight, "");
}

function ResetPassword() {
    var preferredWidth = 900;//680 to 900 = 220
    var preferredHeight = 623;

    /*Without Compatibility*/
    preferredWidth = 500; //750 to 900 = 150
    preferredHeight = 340;

    var hostUrl = gethost();
    hostUrl = hostUrl.replace('priv', 'pub');
    url = hostUrl + "/ResetPassword.aspx";

    //alert(url);

    ShowPopupColorbox(url + "?showClose=true", preferredWidth, preferredHeight, "");
}

function ShowPopupColorbox(url, width, height, caption) {
    //alert(url);

    jQuery.colorbox({
        href: url,
        opacity: '0.6',
        iframe: true,
        width: width,
        height: height,
        overlayClose: false
        //, onLoad: function () { $('#cboxClose').remove(); }
    });



}


function RefreshNewsTicker(divid)
{
    var dd = $('#' + divid).easyTicker({
        direction: 'up',
        easing: 'easeInOutBack',
        speed: 'slow',
        interval: 3000,
        height: 'auto',
        visible:4,
        mousePause: 1,
        controls: {
            up: '.up',
            down: '.down',
            toggle: '.toggle',
            stopText: 'Stop !!!'
        }
    }).data('easyTicker');

    cc = 1;
    $('.aa').click(function () {
        $('.vticker ul').append('<li>' + cc + ' Triangles can be made easily using CSS also without any images. This trick requires only div tags and some</li>');
        cc++;
    });

    $('.vis').click(function () {
        dd.options['visible'] = 3;

    });

    $('.visall').click(function () {
        dd.stop();
        dd.options['visible'] = 0;
        dd.start();
    });

}