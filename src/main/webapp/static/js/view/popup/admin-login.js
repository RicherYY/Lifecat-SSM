// 检测函数
var isInputAllow = function (value) {
    return !(value === '' || value === undefined || value === null || value.length < 1);
};
// 检测输入是否为空
var checkInput = function (adminName, adminPassword) {
    var success = true;
    if (isInputAllow(adminName)) {
        $('input[name="adminName"]').html(" ");
    } else {
        $('input[name="adminName"]').html("adminName is null");
        success = false;
    }
    if (isInputAllow(adminPassword)) {
        $('input[name="adminPassword"]').html(" ");
    } else {
        $('input[name="adminPassword"]').html("adminPassword is null");
        success = false;
    }
    return success;
};
$('#admin-login').on('click', function () {

        var adminName = $('input[name="adminName"]').val();
        var adminPassword = $('input[name="adminPassword"]').val();

        var isSuccess = checkInput(adminName, adminPassword);

        if (isSuccess) {
            $.ajax({
                url: "/ssm/admin/login",
                type: 'post',
                contentType: 'charset=utf-8;application/json',
                dataType: "json",
                data: {adminName: adminName, adminPassword: adminPassword},
                success: function (res) {
                    setTimeout(function () {
                        parent.layer.msg("操作成功 " + res.data);
                        var index = parent.layer.getFrameIndex(window.name);
                        parent.layer.close(index);
                    }, 1000)
                },
                error: function (res) {
                    setTimeout(function () {
                        parent.layer.msg("操作失败 " + res.msg);
                        var index = parent.layer.getFrameIndex(window.name);
                        parent.layer.close(index);
                    }, 1000)
                }
            });
        }
    }
);