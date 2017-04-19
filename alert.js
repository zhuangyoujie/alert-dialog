function Alert() {
    this.cfg = {
        width:200,
        height:200,
        title:'',
        content:''
    }
}
Alert.prototype ={
    alert:function (cfg) {
       var CFG = $.extend(this.cfg,cfg);
       var boundingBox =  $('<div class="mask"></div>'+
           '<div class="alert_boundingBox">' +
           '<div class="alert_hd">' + CFG.title + '</div>' +
           '<div class="alert_bd">' + CFG.content + '</div>' +
           '<div class="alert_ft"><a href="javascript:;">确定</a></div>' +
           '</div>');
        boundingBox.appendTo('body');
        boundingBox.css({

        });
    }
}