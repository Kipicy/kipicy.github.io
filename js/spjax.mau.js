try{$m}catch(e){$m={}}
(function(){
    $m.data={
        creatXhr:function(){
            if(window.XMLHttpRequest)var xmlhttp=new XMLHttpRequest();else var xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");return xmlhttp
        }
        ,xhrGet:function(url,onSuccess,onFailed=(xmlhttp)=>{},onNull=(xmlhttp)=>{}){
            var xmlhttp=this.creatXhr()
            xmlhttp.onreadystatechange=function(){
                if(xmlhttp.readyState==4 && xmlhttp.status==200 && xmlhttp.responseText) onSuccess(xmlhttp)
                else if(xmlhttp.readyState==4 && xmlhttp.status==200 && !xmlhttp.responseText)onNull(xmlhttp)
                else onFailed(xmlhttp)
            }
            xmlhttp.open("GET",url,true);
            xmlhttp.send();
        }
        ,ls:function(key,value){
            if(value!==undefined)localStorage.setItem(key,value);
            return localStorage.getItem(key);
        }
        ,delLs:function(key){
            var cache=this.ls(key)
            localStorage.removeItem(key)
            return cache
        }
        ,lsList:function(keyList,func=(item,i)=>{}){
            var values=[]
            for(var i=0,len=keyList.length;i<len;i++){
                func(i,this.ls(keyList[i]));
                values[i]=this.ls(keyList[i])
            }
            return values
        }
    }
}())