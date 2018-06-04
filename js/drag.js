function Drag(id){
    var _this=this;
    this.disX=0;
    this.disY=0;
    this.oDiv=document.getElementById(id);
    this.oDiv.onmousedown=function(ev){
        _this.fndown(ev);
        return false;
    }
    
}
Drag.prototype.fndown= function(ev){
    var _this=this;
        this.disX=ev.clientX-this.oDiv.offsetLeft;
        this.disY=ev.clientY-this.oDiv.offsetTop;
        document.onmousemove=function(ev){
            _this.fnmove(ev);
        }
        
        document.onmouseup=function(){
            _this.fnup();
        }
}
Drag.prototype.fnmove= function(ev){
    this.oDiv.style.left=ev.clientX-this.disX+'px';
    this.oDiv.style.top=ev.clientY-this.disY+'px';
}
Drag.prototype.fnup= function (){
    document.onmousemove=null;
    document.onmouseup=null;
}  