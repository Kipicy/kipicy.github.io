var d=document
var holdup={}
    sid=document.body.getAttribute("sid")//获得sid

holdup={
    holdup:function(cmd){
        var ifr=d.getElementById("holdupifr")
        ifr.style.display="block"
        switch(cmd){
            case "construction":
                ifr.src="holdup/construction.html"
            break;
            case "error":
                ifr.src="holdup/error.html"
            break;
        }
    }
}
//---hold up拦截系统---
for (const value of config.holdup) {
    if(sid==value[0]){
        holdup.holdup(value[1])
    }
}



