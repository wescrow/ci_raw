/**
 * This function stops errors when using console on a machine that doesn't 
 * support the console. 
 **/
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

require(["/js/lib/jquery.js"], function ($){console.log("loading lib/jquery.js...");});
require(["/js/lib/modernizr.js"], function (modernizr){console.log("loading lib/modernizr.js...");});
require(["/js/mod/analytics.js"], function (analytics){console.log("loading mod/analytics.js...");});