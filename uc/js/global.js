
function addCookie(objKey, objValue, objDays) {//添加cookie 
    $.cookie(objKey, objValue, { expires: objDays, path: '/'});
}
function removeCookie(objKey) {//删除cookie
    $.cookie(objKey, '', { expires: -1, path: '/' });
}

//获取浏览器参数
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
; (function ($) {
    $.fn.animationEnd = function (callback) {
        var events = ['webkitAnimationEnd', 'OAnimationEnd', 'MSAnimationEnd', 'animationend'],
            i, dom = this;

        function fireCallBack(e) {
            callback(e);
            for (i = 0; i < events.length; i++) {
                dom.off(events[i], fireCallBack);
            }
        }
        if (callback) {
            for (i = 0; i < events.length; i++) {
                dom.on(events[i], fireCallBack);
            }
        }
        return this;
    };
})(jQuery);

function ajaxCallback(url, type, data, async, beforsend, callback, errorcallback) {
    data = type == 'POST' || type == 'PUT' ? JSON.stringify(data) : data;
    try {
        $.ajax({
            url: $.config.url + url,
            type: type,
            data: data != "" ? data : "",
            dataType: 'json',
            contentType: 'application/json',
            async: async,
            beforSend: beforsend,
            success: callback,
            error: errorcallback
        })
    } catch (e) {
        console.log(e)
    }
}

