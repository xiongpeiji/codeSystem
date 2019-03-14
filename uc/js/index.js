
(function () {
    function navList() {
        var off=true;
        $(".nav-list .dropdown-toggle").click(function(){
            if($(this).next().css("display")=="block"){
                off=false;
            }
            if(off){
                $(this).next().slideDown();
            }else{
                $(this).next().slideUp();
            }
            off=!off;
        });
        get_nav_item();


    }
    function get_nav_item(){
        var nav_item=$('.submenu');

        for(var i=0;i<nav_item.length;i++){
            if(nav_item.eq(i).find("a").hasClass("active")){
                var price_item_index = i;
                nav_item.eq(i).css("display","block");
                return price_item_index;
            }
        }
    }
    function select(text,ul) {
        var off_ul=true;
        $(text).click(function(){
            if(off_ul){
                $(this).next().show();
            }else{
                $(this).next().hide();
            }
            off_ul=!off_ul;
        });
        $(ul).each(function () {
            $(this).click(function(){
                $(text).find("span").html($(this).text());
                $(text).find("span").attr("data-type",$(this).data('type'));
                $(text).find("input[name=select]").val($(this).data('type'));
                $(text).next().hide();
                off_ul=!off_ul;
            });
        });

    }
    function heightAuto(){
        var height=$(window).height();
        var rightHeight=$(".main-content").height();
        var sidebarHeight=height-$(".navbar").height();
        $(".sidebar-box").css("height",sidebarHeight);
        $(".main-content").css("height",sidebarHeight);
        if(sidebarHeight<rightHeight){
            $(".sidebar-box").css("height",rightHeight);
            $(".main-content").css("height",rightHeight);
        }
    }
    function selectWidth() {
        var inputWidth=$("input[type=text]").width();
        $(".select, .select-long,.select p,.select .type-ul").css('width',inputWidth+20+"px");
        //$(".sel").css('width',inputWidth+20+"px");
    }
    function table(id) {
        $("#"+id).DataTable();
    }
    function Validform(id){
        var inputvalid=$("#"+id).find("input[type=text],input[type=password]");
        for(var i=0;i<inputvalid.length;i++){
            $(inputvalid).eq(i).blur(function () {
                if($(this).val()==""){
                    $(this).addClass("Validform_error");
                    $(this).next().remove();
                    $(this).after("<span class='Validform_wrong'>请填写信息！</span>");
                }else{
                    $(this).removeClass("Validform_error");
                    $(this).next().remove();
                    $(this).after("<span class='Validform_right'>通过信息验证！</span>");
                }
            });
        }
    }

    function timeShow() {
        var oTime =$("#time");
        var date = new Date();
        this.year= date.getFullYear();
        this.month=date.getMonth()+1;
        this.month=this.month < 10 ? "0" + this.month : this.month;
        this.day=date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        this.hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        this.minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        this.second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        oTime.html(this.year+"-"+this.month+"-"+this.day+" "+this.hour+':'+this.minute+':'+this.second);
    }
    function showImg(id) {
        var c=$('#'+id+" tr:gt(0)").find("tr td:eq(3) a");
        console.log(c);
        $('#'+id+' .showImg').each(function () {
            $(this).click(function () {
                //alert($(this).attr("title"));
                $("body").append("<div style='width: 100%;height: 100%;background: #000;opacity: .5;position: fixed;top: 0;left: 0;bottom: 0;right: 0;z-index: 99;'></div>");
                $("body").append("<div style='width: 60%;background: #f3f3f3;position: absolute;text-align: center;top: 30%;left: 60%;margin-left: -40%;z-index: 100;border-radius: 4px;overflow: hidden;'>" +
                                "<img src='img/logo.png' style='margin: 50px'>"+
                                "<i style='position:absolute;right: 10px;top: 10px;cursor: pointer;display: inline-block;width: 50px;height: 50px;line-height:50px;text-align: center;font-size: 30px;font-style: normal;font-weight: bold;color: #555;' onclick='$(this).parent().hide();$(this).parent().prev().remove();$(this).parent().remove();'>x</i>"+
                                "</div>");
            })
        })
    }

    $(function () {
        timeShow();
        navList();
        //select(".select p",".type-ul li");

        var tablebox=$('.tablebox').find("table").attr("id");
        if(tablebox){
            table(tablebox);
            showImg(tablebox);
        }

        var form=$(".linkmodify").find("form").attr("id");
        //var form_submit=$(".linkmodify").find("button").attr("id");
        if(form){
            Validform(form);
        }


    });
    $(window).load(function () {
        heightAuto();
        selectWidth();
        setInterval(function(){
            timeShow();
        },1000);
    });
    $(window).resize(function () {
        heightAuto();
        selectWidth();
    });
    
    $("#news_wrapper").bind("DOMNodeInserted",function () {
        heightAuto();
    });
    
})();



