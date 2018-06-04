function ajax(method,url,sfn,efn){
    var oAjax;
    if(window.XMLHttpRequest){
        oAjax=new XMLHttpRequest();
    }else{
        oAjax=new ActiveXObject("Microsoft.XMLHTTP");
    }
    oAjax.open(method,url,true);
    oAjax.send();
    oAjax.onreadystatechange=function(){
        if(oAjax.readyState==4){
            if(oAjax.status==200){               
                sfn(oAjax.responseText);
            }else{
                if(efn){
                    efn(oAjax.status);
                }
            }
        }
    }

}