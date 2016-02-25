/**
 * Created by Administrator on 2016/2/23.
 *  Mr. Hu
 */

(function(window,document){

    var Plug = {},

        window = window,
        document = document;
    function $(id){
        return document.getElementById(id);
    }
    var Pop = function (){};
    //var pop = Plug.Pop;
    Pop.prototype.config = {

    };
    Pop.prototype.CreatePop = function(obj) {
        console.log(obj);
        var obj = obj;
        var box = $(obj.id);
        var str = $(obj.xmlId);
        var winInfoStr = '<div style="width: '+obj.style.width+';height: '+obj.style.height+';">'+str+'</div>';
        box.style.width = obj.style.width;
        box.style.height = obj.style.height;
    };

    Pop.prototype.show = function() {
        console.log(this);
    };
    Plug.pop = new Pop();
    window.P = Plug;

})(window,document);