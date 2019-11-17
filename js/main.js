//初始化
var d=document;
function qs(a){
    return document.querySelector(a) || new HTMLElement()
}
function creatXhr(){
    if(window.XMLHttpRequest)xmlhttp=new XMLHttpRequest();else xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");return xmlhttp
}
function xhrGet(link,onSuccess,onFailed=function(xmlhttp){}){
    xmlhttp=creatXhr()
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4 && xmlhttp.status==200) onSuccess(xmlhttp)
        else onFailed(xmlhttp)
    }
    xmlhttp.open("GET",link,true);
    xmlhttp.send();
}