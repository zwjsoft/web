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
function startMove(obj, attr, iTarget,fnend) {
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {
        var speed 
        var cur=0
        if(attr=='opacity'){
            cur=parseFloat(getStyle(obj, attr))*100
        }else{
            cur=parseInt(getStyle(obj, attr))
        }
        speed= (iTarget - cur) / 4
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
        if (iTarget == cur) {
            clearInterval(obj.timer)
            if(fnend) fnend()
        }
        else {
            if(attr=='opacity'){
                obj.style[attr] = (parseFloat(getStyle(obj, attr))*100 + speed )/100
            }else
            {
                obj.style[attr] = parseInt(getStyle(obj, attr)) + speed + 'px'
            }
        }
    }, 30)
}