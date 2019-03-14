(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
               docEl.style.fontSize =  (clientWidth/7.5) + 'px'; 
               if(clientWidth>1024){
            	   docEl.style.fontSize =  '100px'; 
               }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    recalc();
})(document, window);
;(function ($) {
    var host = location.host;
    var defaults = {
        api: 'http://39.98.83.9:8080/',//正式环境api接口地址
    }
    if (host.indexOf('localhost') > -1 ||host.indexOf('192') > -1) {  
        var defaults = {
            api: 'http://39.98.83.9:8080/',
        }
    }
    $.config = defaults;
})(jQuery);