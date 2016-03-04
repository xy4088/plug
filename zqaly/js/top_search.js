
var arr_txt = ['请输入目的地名称或线路关键词','请输入景点名称','请输入旅行社名称','请输入关键词'];
//头部搜索框
$(document).ready(function(){

    var $curtInput=$('#curtInput');
    var m;
    var $curtlist=$('#curtlist');
    $curtInput.mouseover(function(){
        clearInterval(m);$curtlist.show()
    })
    $curtInput.mouseout(function(){
        clearInterval(m);
        m=setInterval(function(){
            $curtlist.hide()},100);
    })
    $curtlist.find('li').hover(function(){
            $(this).css({background:'#f0f0f0'}
            )},
        function(){
            $(this).css({background:'#fff'})
        });
    $curtlist.find('li').click(function(){
        $curtlist.hide();
        var t=$.trim($(this).text());
        $curtInput.find('.onName').text(t);
        var ts=$('#so_input');
        var ts_val = ts.val();
        if(t == '景点') {
            $('#tn').val('jd');
            if(ts_val && $.inArray(ts_val,arr_txt)>-1) {
                ts.val(arr_txt[1]);
                ts[0].defaultValue=arr_txt[1];
                ts.css({color:'#aaa'})
            }
        } else if(t == '旅行社') {
            $('#tn').val('lxs');
            if(ts_val && $.inArray(ts_val,arr_txt)>-1) {
                ts.val(arr_txt[2]);
                ts[0].defaultValue=arr_txt[2];
                ts.css({color:'#aaa'})
            }
        } else if(t == '综合') {
            $('#tn').val('all');
            if(ts_val && $.inArray(ts_val,arr_txt)>-1) {
                ts.val(arr_txt[3]);
                ts[0].defaultValue=arr_txt[3];
                ts.css({color:'#aaa'})
                document.soform.target="blank";
            }
        } else {
            $('#tn').val('line');
            if(ts_val && $.inArray(ts_val,arr_txt)>-1) {
                ts.val(arr_txt[0]);
                ts[0].defaultValue=arr_txt[0];
                ts.css({color:'#aaa'})
            }
        }
    })
    $("#xianlu_so").bind("submit",function(){
        if($("#so_input").val()=='请输入目的地名称或线路关键词' || $("#so_input").val()=='请输入景点名称' || $("#so_input").val()=='请输入旅行社名称' || $("#so_input").val()=='请输入关键词'){
            $("#so_input").parent(".search_top");
            return false;
        }
    })

    $('#so_input').focusEffect();
})
//输入框焦点事件
$.fn.focusEffect=function(){
    var $input=this;
    $input.focus(function() {
        if ($input.val() == '' || $input.val() == this.defaultValue) {
            $input.val('');
            $input.css({
                color: '#333'
            })
        }
    });
    $input.blur(function() {
        if ($input.val() == '') {
            $input.val(this.defaultValue);
            $input.css({
                color: '#aaa'
            })
        }
    })
}

function xx_event(n) {
    var xx = document.createElement('script');xx.async = true;
    xx.src = '#n='+n;
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(xx, s);
}