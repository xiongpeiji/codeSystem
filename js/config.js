; (function ($) {
    var host = location.host;
    var defaults = {
        api: '/apis/',//正式环境api接口地址
        imgUrl: 'http://39.98.83.9:8080'
    }
    if (host.indexOf('localhost') > -1 || host.indexOf('192') > -1) {
        defaults = {
            api: '/apis/',
            imgUrl: 'http://39.98.83.9:8080'
        }
    }
    $.config = defaults;
})(jQuery);