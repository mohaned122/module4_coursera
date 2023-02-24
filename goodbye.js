(function(){
    var byespeaker={};
    var speakword="Good bye";
    byespeaker.speak=function(name){
        console.log(speakword+" "+name);
    }
    window.byespeaker=byespeaker;
})();