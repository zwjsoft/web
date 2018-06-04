function moveElement(ele){
    this.element=ele;
    this.style=ele.style;
}

moveElement.prototype.getStyle=function(attr) {
    if (this.element.currentStyle) {
        return this.element.currentStyle[attr]
    } else {
        return getComputedStyle(this.element, false)[attr]
    }
}
moveElement.prototype.move=function(json,fnend) {
    var timer = setInterval( ()=> {
        var bstop=true 
        for(var attr in json){
        var speed 
        var cur=0
        if(attr=='opacity'){
            cur=parseFloat(this.getStyle(attr))*100
        }else{
            cur=parseInt(this.getStyle(attr))
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
                this.style[attr] = (parseFloat(this.getStyle(attr))*100 + speed )/100
            }else
            {
                this.style[attr] = parseInt(this.getStyle(attr)) + speed + 'px'
            }
        //}
    }
    if(bstop){
        clearInterval(timer)
        if(fnend) fnend()
    }
    }
    , 30)
    return this;
}