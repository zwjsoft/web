function getElementsByClass(obj,sClass){
    aEle=obj.getElementsByTagName('*')
    var arr=[]
    for(var ele of aEle){
        if(ele.className==sClass){
            arr.push(ele)
        }
    }
    return arr
}

function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr]
    } else {
        return getComputedStyle(obj, false)[attr]
    }
}
function startMove(obj, json,fnend) {
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {
        var bstop=true 
        for(var attr in json){
        var speed 
        var cur=0
        if(attr=='opacity'){
            cur=parseFloat(getStyle(obj, attr))*100
        }else{
            cur=parseInt(getStyle(obj, attr))
        }
        speed= (json[attr] - cur) / 4
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
        //if (json[attr] == cur) {
        //    clearInterval(obj.timer)
        //    if(fnend) fnend()
        //}
        if (json[attr] != cur){
            bstop=false
        }

        //else {
            if(attr=='opacity'){
                obj.style[attr] = (parseFloat(getStyle(obj, attr))*100 + speed )/100
            }else
            {
                obj.style[attr] = parseInt(getStyle(obj, attr)) + speed + 'px'
            }
        //}
    }
    if(bstop){
        clearInterval(obj.timer)
        if(fnend) fnend()
    }
    }, 30)
}