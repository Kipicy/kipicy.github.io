var d=document,data=$m.data;
function qs(a){
    return document.querySelector(a) || new HTMLElement()
}

//更新重要信息模块
    function updateInfo(){
        data.xhrGet("https://suiltapico.github.io/data/news.log",function(xmlhttp){
            news=xmlhttp.responseText.split("\n").reverse()
            data.ls("news",xmlhttp.responseText)
        })
        data.xhrGet("https://suiltapico.github.io/data/project.log",function(xmlhttp){
            projects=xmlhttp.responseText.split("\n").reverse()
            data.ls("projects",xmlhttp.responseText)
        })
    }
    //缓存信息
    var news,projects
    data.lsList(["news","projects"],(i,item)=>{
        if(item){
            if(i==0)news=item.split("\n").reverse()
            else if(i==1)projects=item.split("\n").reverse()
        }
    })
    //60s更新一次
    setInterval(()=>{
        updateInfo()
    }, 60000);

//更新页面模块
    function loadPage(url){
        data.xhrGet(url,function(xmlhttp){
            console.log(xmlhttp.split("\n",1))
        })
    }
//解析url模块

    function parseSearch(search){
        var list=search.slice(1).split("&")
        for(var i=0,len=list.length;i<len;i++){
            list[i]=list[i].split("=")
            if(list[i][0]=="link"){
                loadPage(list[i][1])
            }
        }
    }

//页面初始化
updateInfo()
parseSearch(location.search)