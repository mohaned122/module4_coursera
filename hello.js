(function(){
    var hellospeaker={};
    var speakword="hello";
    hellospeaker.speak=function(name){
        console.log(speakword+" "+name);
    }
    window.hellospeaker=hellospeaker;
})();