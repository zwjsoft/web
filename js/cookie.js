function setCookie(name,value,iday){
    var oDate=new Date();
    oDate.setDate(oDate.getDate()+iday);
    document.cookie=name+"="+value+";expires="+oDate;
}

function removeCookie(name){
    setCookie(name,1,-1)
}

function getCookie(name){
    var s=document.cookie;
    var arr=s.split("; ");
    for(var i=0;i<arr.length;i++){
        var a=arr[i].split("=");
        if(a[0]==name) {
            return a[1]
        }
    }
    return ''
}