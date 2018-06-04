function LimitDrag(id){
    Drag.call(this,id);
}
for(var i in Drag.prototype){
    LimitDrag.prototype[i]=Drag.prototype[i]
}

LimitDrag.prototype.fnmove= function(ev){
    var l=ev.clientX-this.disX;
    var t=ev.clientY-this.disY;
    if(l>800) 
        l=800
    else if(l<200)
        l=200
    if(t>600) 
        t=600
    else if(t<200)
        t=200
    this.oDiv.style.left=l+'px';
    this.oDiv.style.top=t+'px';
}