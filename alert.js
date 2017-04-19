function Alert() {
    this.cfg = {
        title:'标题',
        content:'hekkkkkkaskkkkkkkkk',
        handler:""
    }
}
Alert.prototype ={
    alert:function (cfg) {
       var CFG = $.extend(this.cfg,cfg);
       var boundingBox =  $('<div class="mask animate-fade-in"></div>'+
           '<div class="alert_boundingBox animate-fade-in">' +
           '<div class="alert_hd"><strong class="alert_title">' + CFG.title + '</strong></div>' +
           '<div class="alert_bd">' + CFG.content + '</div>' +
           '<div class="alert_ft"><a href="javascript:;" class="alert_btn_primary">确定</a></div>' +
           '</div>');
        boundingBox.appendTo('body');
        var btn = boundingBox.find('alert_btn_primary');
        btn.click(function(){
            CFG.handler && CFG.handler();
            boundingBox.remove();
        });
    },
    confirm:function (cfg) {
        var CFG = $.extend(this.cfg,cfg);
        var boundingBox =  $('<div class="mask animate-fade-in"></div>'+
            '<div class="alert_boundingBox animate-fade-in">' +
            '<div class="alert_hd"><strong class="alert_title">' + CFG.title + '</strong></div>' +
            '<div class="alert_bd">' + CFG.content + '</div>' +
            '<div class="alert_ft"><a href="javascript:;" class="alert_btn alert_btn_default ">取消</a><a href="javascript:;" class="alert_btn alert_btn_primary">确定</a></div>' +
            '</div>');
        boundingBox.appendTo('body');
        var cancelBtn = boundingBox.find('.alert_btn_default');
        var ensureBtn = boundingBox.find('.alert_btn_primary');
        ensureBtn.click(function(){
            CFG.handler && CFG.handler();
            boundingBox.remove();
        });
        cancelBtn.click(function(){
            CFG.handler && CFG.handler();
            boundingBox.remove();
        });

    }
};