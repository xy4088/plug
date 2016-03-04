$(document).ready(function(){
    //导航链接选中样式
    $('.menuwarp li a').each(function(){
        if($($(this))[0].href==String(window.location))
            $(this).parent().addClass('act');
    });
    $('.menuwarp').find("li").last().addClass("menuwarpLast");

    //线路tab切换
    Cmd("Menubox_one","Contentbox_one");//
    Cmd("Menubox_two","Contentbox_two");//
    Cmd("Menubox_three","Contentbox_three");//

    $('.advertDiv').jCarouselLite({
        btnPrev: '#btnRight',
        btnNext: '#btnLeft',
        visible: 1,
        auto: 3000,	//自动切换
        speed: 1000 //切换速度
    });
});


//首页小轮播图
; (function ($) {
    $.fn.extend({
        "nav": function (con) {
            var $this = $(this), $nav = $this.find('.switch-tab'), t = (con && con.t) || 3000, a = (con && con.a) || 500, i = 0, autoChange = function () {
                $nav.find('a:eq(' + (i + 1 === 3 ? 0 : i + 1) + ')').addClass('current').siblings().removeClass('current');
                $this.find('.event-item:eq(' + i + ')').css('display', 'none').end().find('.event-item:eq(' + (i + 1 === 3 ? 0 : i + 1) + ')').css({
                    display: 'block',
                    opacity: 0
                }).animate({
                    opacity: 1
                }, a, function () {
                    i = i + 1 === 3 ? 0 : i + 1;
                }).siblings('.event-item').css({
                    display: 'none',
                    opacity: 0
                });
            }, st = setInterval(autoChange, t);
            $this.hover(function () {
                clearInterval(st);
                return false;
            }, function () {
                st = setInterval(autoChange, t);
                return false;
            }).find('.switch-nav>a').bind('click', function () {
                var current = $nav.find('.current').index();
                i = $(this).attr('class') === 'prev' ? current - 2 : current;
                autoChange();
                return false;
            }).end().find('.switch-tab>a').bind('click', function () {
                i = $(this).index() - 1;
                autoChange();
                return false;
            });
            return $this;
        }
    });
}(jQuery));


/*首页景点列表目的地1*/
function showCs() {
    document.getElementById("morecity_tab_w").style.display = "block";
}
function hideCs() {
    document.getElementById("morecity_tab_w").style.display = "none";
}
function tabOver(obj) {
    this.style.color = "yellow";
}
function tabOut(obj) {
    this.style.color = "#333";
}
function tb_over() {
    document.getElementById("a_1").className = "a2";
}
function tb_out() {
    document.getElementById("a_1").className = "a1";
}/*首页景点列表目的地1 e*/

function showCs2() {
    document.getElementById("morecity_tab_w2").style.display = "block";
}
function hideCs2() {
    document.getElementById("morecity_tab_w2").style.display = "none";
}
function tabOver2(obj) {
    this.style.color = "yellow";
}
function tabOut2(obj) {
    this.style.color = "#333";
}
function tb_over2() {
    document.getElementById("a_2").className = "a2";
}
function tb_out2() {
    document.getElementById("a_2").className = "a1";
}/*首页景点列表目的地2 e*/

function showCs3() {
    document.getElementById("morecity_tab_w3").style.display = "block";
}
function hideCs3() {
    document.getElementById("morecity_tab_w3").style.display = "none";
}
function tabOver3(obj) {
    this.style.color = "yellow";
}
function tabOut3(obj) {
    this.style.color = "#333";
}
function tb_over3() {
    document.getElementById("a_3").className = "a2";
}
function tb_out3() {
    document.getElementById("a_3").className = "a1";
}/*首页景点列表目的地3 e*/




//线路tab切换
function Cmd(title,box){
    $('.'+title+'').find("li").first().addClass("hover");
    $('.'+box+'').find("div").first().css({"display":"block"});
    $('.'+title+'').children().eq(1).find("li").last().addClass("homeLineHr");
    $('.'+title+' li').hover(function(){
        $('.'+title+' li').removeClass('hover');
        $(this).addClass('hover');
        $('.'+title+' li').prev().removeClass('homeLineHr');
        $(this).prev().addClass('homeLineHr');
        $('.'+box+' > div').hide().eq($(this).index()).show();
    });
}


/*列表页banner  s*/
function SlideShow(c) {
    var a = document.getElementById("slideContainer"), f = document.getElementById("slidesImgs").getElementsByTagName("li"), h = document.getElementById("slideBar"), n = h.getElementsByTagName("li"), d = f.length, c = c || 3000, e = lastI = 0, j, m;
    function b() {
        m = setInterval(function () {
            e = e + 1 >= d ? e + 1 - d : e + 1;
            g()
        }, c)
    }
    function k() {
        clearInterval(m)
    }
    function g() {
        f[lastI].style.display = "none";
        n[lastI].className = "";
        f[e].style.display = "block";
        n[e].className = "on";
        lastI = e
    }
    f[e].style.display = "block";
    a.onmouseover = k;
    a.onmouseout = b;
    h.onmouseover = function (i) {
        j = i ? i.target : window.event.srcElement;
        if (j.nodeName === "LI") {
            e = parseInt(j.innerHTML, 10) - 1;
            g()
        }
    };
    b()
}/*列表页banner  e*/

var _mvq = _mvq || [];
_mvq.push(['$setAccount', 'm-179842-0']);

_mvq.push(['$logConversion']);
(function() {
    var mvl = document.createElement('script');
    mvl.type = 'text/javascript'; mvl.async = true;
    mvl.src = ('https:' == document.location.protocol ? 'https://static-ssl.mediav.com/mvl.js' : 'http://static.mediav.com/mvl.js');
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(mvl, s);
})();

