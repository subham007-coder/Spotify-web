let playBtn = document.querySelector(".play");

let pauseBtn = "fa-pause";

let start = document.querySelector(".start-time");


playBtn.addEventListener("click", () => {
    
    toggleFun();
    
    playFunc();
});

let secTime = 0;

let minTime = 1;

let song = new Audio('songs/Chaleya.mp3');

let playFunc = function() {
    
    song.play();
    
    let startIntra = setInterval(() => {
        secTime += 1;
        
       start.textContent = `0:${secTime}`;
       console.log(`0:${secTime}`);

       if(secTime == `60`){
        start.textContent = `${minTime}:00`;
        console.log(`${minTime}:00`);
        console.log(minTime);
        clearInterval(startIntra);
       }
    }, 1000);
}

let toggleFun = function(){
    playBtn.classList.toggle("fa-pause");
    pauseFun();
}

let pauseFun = function() {
    let pause = document.querySelector(".fa-pause");

    pause.addEventListener("click", () => {
        console.log("stop");
        song.pause();
    })
}