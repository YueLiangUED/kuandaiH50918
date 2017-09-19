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

    // 表单操作
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
            }else{
                alert("您的设备不支持本地存储功能，表单将不被提交");
                return false;
            }
        });
    })();
});