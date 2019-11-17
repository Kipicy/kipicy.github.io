//获取最新内容模块
xmlhttp.onreadystatechange=function()
{
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
        newsArr=String(xmlhttp.responseText).split("\n").reverse().slice(0,5)
        for(var i=0,len=newsArr.length;i<len;i++){
            if(newsArr[i]){
                var newsLine=newsArr[i].split(" ")
                    ,newsli=d.createElement("li")
                    ,newsa=d.createElement("a")
                newsa.setAttribute("href",newsLine[1])
                newsa.innerHTML=newsLine[0]
                newsli.appendChild(newsa)
                newsli.innerHTML+=" "+newsLine[2]
                qs("#news").appendChild(newsli)
            }
        }
    }
}
xmlhttp.open("GET","http://suiltapico.github.io/data/news.log",true);
xmlhttp.send();