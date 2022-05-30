//<img src='https://cdn.dribbble.com/users/234969/screenshots/5404808/medallion_burst_animation.gif'/>

var numberOfClicks = 0

function addCounter (){
    numberOfClicks = numberOfClicks+1
    console.log (numberOfClicks);

    if (numberOfClicks == 1){
    document.getElementById ("counter").textContent= "Haz hecho click "+numberOfClicks+" vez";
    }
    else{
    document.getElementById ("counter").textContent= "Haz hecho click "+numberOfClicks+" veces";
    }
    
}

function increaseSize (){
    switch (numberOfClicks) {
        case 1:
            document.getElementById ("balloon").style.width = "220px";
            document.getElementById ("balloon").style.height ="200px";
        break;
        case 2:
            document.getElementById ("balloon").style.width = "240px";
            document.getElementById ("balloon").style.height ="220px";
        break;
        case 3:
            document.getElementById ("balloon").style.width = "260px";
            document.getElementById ("balloon").style.height ="240px";
        break;
        case 4:
            document.getElementById ("balloon").style.width = "280px";
            document.getElementById ("balloon").style.height ="260px";
        break;
        case 5:
            document.getElementById ("main").style.display = "none"
            document.querySelector (".congrats").style.display = "block"
        

    }
}

function final(){
    addCounter();
    increaseSize();
}