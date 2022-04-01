var fish = document.getElementById("fish");
var n = 5; 
var sto;

fish.addEventListener("click", function(){
    stopRot();
    sto = setInterval(rotate, 5);
});

function rotate(){
    if(n == 365){
        stopRot();
    }else{
        fish.style.transform = "rotate(" + n + "deg)";
        n = n + 5;
    }
}

function stopRot(){
    clearInterval(sto);
    n = 5;
}