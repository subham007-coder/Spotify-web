let playBtn = document.querySelector(".play");

let pauseBtn = "fa-pause";

let start = document.querySelector(".start-time");


playBtn.addEventListener("click", () => {
    
    toggleFun();
    
    playFunc();
});

let startTime = 0;

let song = new Audio('songs/Chaleya.mp3');

let playFunc = function() {
    
    song.play();
    
    let startIntra = setInterval(() => {
        startTime += 0.01;
        start.textContent = startTime;
        console.log(startTime);
    }, 1000);
    // clearInterval(startIntra)
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