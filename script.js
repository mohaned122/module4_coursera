(function(){
    var names=["mohanned","john","zayoud","kamel","allex","bruce","barri"];
    for (let i = 0; i < names.length; i++) {
        var firtletter = names[i].charAt(0).toLowerCase();
        if(names[i].charAt(0)==='j'){
            byespeaker.speak(names[i]);
        }else{
            hellospeaker.speak(names[i]);
        }  
    }
})();