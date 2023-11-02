let playBtn = document.querySelector(".play");

let pauseBtn = "fa-pause";

let start = document.querySelector(".start-time");


playBtn.addEventListener("click", () => {
    if (song.paused || song.currentTime <= 0) {
        playFunc();
        playBtn.classList.remove("fa-circle-play");
        playBtn.classList.remove("play");
        playBtn.classList.add("fa-pause");
    } else {
        console.log("stop");
        playBtn.classList.add("fa-circle-play");
        playBtn.classList.add("play");
        playBtn.classList.remove("fa-pause");
        song.pause();
    }

});

let secTime = 0;

let minTime = 1;

let song = new Audio('songs/Chaleya.mp3');

let playFunc = function () {

    song.play();

    let startIntra = setInterval(() => {
        secTime += 1;

        start.textContent = `0:${secTime}`;
        console.log(`0:${secTime}`);

        if (secTime == `60`) {
            start.textContent = `${minTime}:00`;
            console.log(`${minTime}:00`);
            console.log(minTime);
            clearInterval(startIntra);
        }
    }, 1000);
}
