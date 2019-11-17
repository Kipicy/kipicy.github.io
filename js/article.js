xhrGet("https://suiltapico.github.io/data/news.log",function(xmlhttp){
    var arr=String(xmlhttp.responseText).split("\n").reverse()
    for(var i=0,len=arr.length;i<len;i++){
        if(arr[i]){
            var line=arr[i].split(" ")
                ,li=d.createElement("li")
                ,a=d.createElement("a")
            a.setAttribute("href",line[1])
            a.innerHTML=line[0]
            li.appendChild(a)
            li.innerHTML+=" "+line[2]
            qs("#news").appendChild(li)
        }
    }
})