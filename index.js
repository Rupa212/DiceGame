let screen = document.getElementById("screen");

function start(){
    makesound();
    // random value
    let p1=Math.floor(Math.random()*6)+1;
    let p2=Math.floor(Math.random()*6)+1;
    
    document.getElementById("p1").src=`${p1}.png`;
    document.getElementById("p2").src=`${p2}.png`;
    if(p1>p2){
        screen.innerHTML = "Player 1 won the Game!!";
        clap();
    }else if(p2>p1){
         screen.innerHTML = "Player 2 won the Game!!";
         clap();
    }else{
        screen.innerHTML = "Opps!! Draw....";
        // clap();
    }
}

function makesound(){
    let music = new Audio('dice.mp3');
    music.play();
}

function clap(){
     let clp = new Audio('clappin.mp3');
     clp.play();
}






  