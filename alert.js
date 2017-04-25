function Alert() {
    this.cfg = {
        title:'标题',
        content:'hekkkkkkaskkkkkkkkk',
        handler:"",
        hasMask:true
    }
}
Alert.prototype ={
    alert:function (cfg) {
        var CFG = $.extend(this.cfg,cfg);
        var boundingBox =  $(
            '<div class="alert_boundingBox animate-fade-in">' +
            '<div class="alert_hd"><strong class="alert_title">' + CFG.title + '</strong></div>' +
            '<div class="alert_bd">' + CFG.content + '</div>' +
            '<div class="alert_ft"><a href="javascript:;" class="alert_btn alert_btn_primary">确定</a></div>' +
            '</div>');
        boundingBox.appendTo('body');
        if(CFG.hasMask){
            var mask = $('<div class="jui_mask animate-fade-in"></div>');
            mask.appendTo('body');
        }
        var ensureBtn = boundingBox.find('.alert_btn_primary');
        ensureBtn.click(function(){
            CFG.handler && CFG.handler();
            boundingBox.remove();
            mask.remove();
        });
    },
    confirm:function (cfg) {
        var CFG = $.extend(this.cfg,cfg);
        var boundingBox =  $(
            '<div class="alert_boundingBox animate-fade-in">' +
            '<div class="alert_hd"><strong class="alert_title">' + CFG.title + '</strong></div>' +
            '<div class="alert_bd">' + CFG.content + '</div>' +
            '<div class="alert_ft"><a href="javascript:;" class="alert_btn alert_btn_default ">取消</a><a href="javascript:;" class="alert_btn alert_btn_primary">确定</a></div>' +
            '</div>');
        boundingBox.appendTo('body');
        if(CFG.hasMask){
            var mask = $('<div class="jui_mask animate-fade-in"></div>');
            mask.appendTo('body');
        }
        var cancelBtn = boundingBox.find('.alert_btn_default');
        var ensureBtn = boundingBox.find('.alert_btn_primary');
        ensureBtn.click(function(){
            CFG.handler && CFG.handler();
            boundingBox.remove();
            mask.remove();
        });
        cancelBtn.click(function(){
            CFG.handler && CFG.handler();
            boundingBox.remove();
            mask.remove();
        });

    }
};