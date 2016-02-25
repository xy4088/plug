/**
 * Created by Administrator on 2016/2/23.
 *  Mr. Hu
 */

(function(window,document){

    var window = window,
        document = document;
    var Plug = {
        $: function(id){
            return document.getElementById(id);
        },
        extend: function(obj1,obj2){
            for(var key in obj2){
                if(obj1.hasOwnProperty(key))continue;
                obj1[key] = obj2[key];
            }
            return obj1;
        }
    };
    var Pop = function (o){
        this.config = {
            popId: 'pop',
            xml: '',
            style: {
                width: 400,
                height: 400
            },
            winBg: 'rgba(0, 0, 0, 0.541176)',  //背景颜色,默认是有半透明的; false表示没有颜色;
            fullScreen: false, //是否全屏;
            closeWin: true, //设置是否有弹窗的关闭按钮，默认是有的;
            closeCallback: function(){}  //点叉关闭弹窗的回调;
        };
        this.config = Plug.extend(o,this.config);
        this.node = null;
    };
    Pop.prototype.init = function() {
        var _this = this;
        var config = this.config;
        var $ = Plug.$;

        //弹窗最外层元素，如果有查找，如果没有新创建一个;
        var boxNode = null;
        if($(config.popId)){
            boxNode = $(config.popId);
        }else {
            boxNode = document.createElement('div');
            boxNode.id = "pop";
            document.body.appendChild(boxNode);
        }

        //内容区;
        var contentXml = "";
        if(typeof config.xml == "string"){
            contentXml = config.xml;
        }else {
            //需要获取的内容元素;
            contentXml = config.xml.innerHTML;
        }

        //弹窗透明背景;
        if(config.winBg){
            boxNode.style.backgroundColor = config.winBg+"";
        }else {
            boxNode.style.backgroundColor = "none";
        }

        //弹窗默认的关闭按钮;
        var closeXml = "";
        if(config.closeWin){
            closeXml = '<i id="closeWin" style="display: block;"></i>';
        }else {
            closeXml = '<i id="closeWin" style="display: none;"></i>';
        }

        //弹窗内容部分的外框样式;
        var css = "";
        if(config.fullScreen){
            css = 'width: 100%;height: 100%;position: absolute;background-color: #fff;';
        }else {
            css = 'width: '+config.style.width+
                ';height: '+config.style.height+
                ';margin-left: -'+parseInt(config.style.width)/2+'px;' +
                'margin-top: -'+parseInt(config.style.height)/2+'px;' +
                'position: absolute;left: 50%;top: 50%;background-color: #fff;';
        }
        var winInfoStr = '<div id="pop-main" style="'+css+'"><div class="pop-content">'+contentXml+'</div>'+closeXml+'</div>';
        boxNode.innerHTML = winInfoStr;
        this.node = boxNode;
        _this.show();
        $("closeWin").onclick = function() {
            _this.hide();
        }
    };
    Pop.prototype.hide = function() {
        console.log(2);
        this.node.style.display = "none";
    };
    Pop.prototype.show = function(){
        console.log(1);
        this.node.style.display = "block";
    };
    //调用窗口入口;
    Plug.CreatePop = function(config) {
        Plug.pop = new Pop(config);
        Plug.pop.init();
    };
    window.P = Plug;

})(window,document);