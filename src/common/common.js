export function DateFormat(DateObj,fmt){
    var o = {
        "M+": DateObj.getMonth() + 1, //月份
        "d+": DateObj.getDate(), //日
        "h+": DateObj.getHours(), //小时
        "m+": DateObj.getMinutes(), //分
        "s+": DateObj.getSeconds(), //秒
        "q+": Math.floor((DateObj.getMonth() + 3) / 3), //季度
        "S": DateObj.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (DateObj.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
