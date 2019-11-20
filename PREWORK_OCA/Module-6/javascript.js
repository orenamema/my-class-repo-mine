document.getElementById("blueBtn").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "blue" ;

});

document.getElementById("growBtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "250px";

});

document.getElementById("resetBtn").addEventListener("click", function(){

    $("#box").fadeIn()
    document.getElementById("box").style.backgroundColor = "orange" ;
    document.getElementById("box").style.height = "150px";
    ;

});

document.getElementById("fadeBtn").addEventListener("click", function(){

    $("#box").fadeOut();

});