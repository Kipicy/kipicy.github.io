//初始化
var d=document;
function qs(a){
    return document.querySelector(a) || new HTMLElement()
}
if (window.XMLHttpRequest)
{
    xmlhttp=new XMLHttpRequest();
}else{
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
