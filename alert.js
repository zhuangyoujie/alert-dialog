;(function () {
    var Alert = function () {
        this.cfg = {
            title: '标题',
            content: 'hekkkkkkaskkkkkkkkk',
            handler: "",
            hasMask: true,
            confirm:false,
            loading:false
        };
    };
    Alert.prototype = {
        create: function (cfg) {
            var CFG = $.extend(this.cfg, cfg);
            var mask = $('<div class="jui_mask animate-fade-in"></div>'),
                win =$('<div class="alert_boundingBox animate-fade-in"></div>'),
                header = $('<div class="alert_hd"><strong class="alert_title">' + CFG.title + '</strong></div>'),
                content = $('<div class="alert_bd">' + CFG.content + '</div>'),
                loading =  $('<div class="loading"></div>'),
                footer = $('<div class="alert_ft"></div>'),
                winSureBtn =$('<a href="javascript:;" class="alert_btn alert_btn_primary">确定</a>'),
                winCancelBtn =$('<a href="javascript:;" class="alert_btn alert_btn_primary">取消</a>'),
                body = $('body');
            if (CFG.hasMask) {
                body.append(mask);
            };
            if (CFG.loading) {
                body.append(loading);
            }else {
                if (CFG.confirm) {
                    footer.append(winCancelBtn);
                    footer.append(winSureBtn);
                }else  {
                    footer.append(winSureBtn);
                }
                win.append(header);
                win.append(content);
                win.append(footer);
                body.append(win);
            }
            winSureBtn.click(function () {
                CFG.handler && CFG.handler();
                win.remove();
                mask.remove();
            });
            winCancelBtn.click(function () {
                CFG.handler && CFG.handler();
                win.remove();
                mask.remove();
            });

        },
        alert: function (cfg) {
            this.create(cfg);
        },
        confirm: function (cfg) {
            this.create(cfg);

        }
    };
    window.Alert = Alert;
})()
