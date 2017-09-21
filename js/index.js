$(document).ready(function(){
    // select样式
    (function () {
        $('.form-group-input select').on('change',function () {
            var $formGroupInput = $(this).parents('.form-group-input');
            var $formGroupInputSpan = $formGroupInput.find('span');
            var $formGroupInputValue = $(this).val();
            $formGroupInputSpan.css('color', '#348cf7');
            $formGroupInputSpan.text($formGroupInputValue);
        });
    })();

    // 表单验证操作操作
    (function () {
        $('#subBtn').on('click', function () {
            if(window.sessionStorage){
                // 通用操作
                // 获取表单VALUE值
                var GZtownValue = $('#GZtown').val();
                var GZplaceValue = $('#GZplace').val();
                var GZdateValue = $('#GZdate').val();
                var GZphoneValue = $('#GZphone').val();
                var GZdescriptionValue = $('#GZdescription').val();
                console.log(GZtownValue);
                if (GZtownValue == '') {
                    alert('请选择故障区县');
                    return false;
                }
                if (GZplaceValue == '') {
                    alert('请选择故障地点');
                    return false;
                }
                if (GZdateValue == '') {
                    alert('请选择故障开始时间');
                    return false;
                }
                if (GZphoneValue == '') {
                    alert('请填写联系电话');
                    return false;
                }
                if (GZdescriptionValue == '') {
                    alert('请填写宽带套餐类型、故障现象');
                    return false;
                }
                sessionStorage.setItem("GZtown", GZtownValue);
                sessionStorage.setItem("GZplace", GZplaceValue);
                sessionStorage.setItem("GZdate", GZdateValue);
                sessionStorage.setItem("GZphone", GZphoneValue);
                sessionStorage.setItem("GZdescription", GZdescriptionValue);

                // 视频
                var $videoInput = $('#videoInput');
                var videoInputValue;
                if ($videoInput.length != 0) {
                    videoInputValue = $videoInput.val();
                    if (videoInputValue == '') {
                        alert('请填写投诉的具体视频网站');
                        return false;
                    }
                    sessionStorage.setItem("videoInput", videoInputValue);
                }

                // 部分网站打不开
                var $websiteInput = $('#websiteInput');
                var websiteInputValue;
                if ($websiteInput.length != 0) {
                    websiteInputValue = $websiteInput.val();
                    if (websiteInputValue == '') {
                        alert('请填写投诉的具体视频网站');
                        return false;
                    }
                    sessionStorage.setItem("websiteInput", websiteInputValue);
                }

                //游戏
                var $gameInput = $('#gameInput');
                var gameInputValue;
                if ($gameInput.length != 0) {
                    gameInputValue = $gameInput.val();
                    if (gameInputValue == '') {
                        alert('请填写您投诉的具体游戏名称');
                        return false;
                    }
                    sessionStorage.setItem("gameInput", gameInputValue);
                }
                
            }else{
                // 手机全部支持sessionStorage
                alert("您的设备不支持本地存储功能，表单将不被提交");
                return false;
            }
        });
    })();

    // 家宽设备指引灯
    (function () {
        $('.step-btn-group.wifi').on('click', '.step-btn', function () {
            $('.step-btn-group.wifi .step-btn').css({
                'background-color': '#fff',
                'color': '#348cf7'
            });
            $(this).css({
                'background-color': '#71f46b',
                'color': '#fff'
            });
            var index = $(this).index();
            if (index == 0) {
                $('.light-content').css('background-position','left bottom' );
                $('.light-content-title').text('带无线功能');
            } else {
                $('.light-content').css('background-position','right bottom' );
                $('.light-content-title').text('不带无线功能');
            }
            var indexWifiBox = $('.setWifi-box')[index];
            $('.setWifi-box').hide();
            $(indexWifiBox).show();
        });
    })();
});