let playBtn = document.querySelector(".play");

let pauseBtn = "fa-pause";

let start = document.querySelector(".start-time");

let secTime = 0;

let minTime = 1;

let song = new Audio('songs/Chaleya.mp3');

playBtn.addEventListener("click", () => {
    if (song.paused || song.currentTime <= 0) {
        console.log("start");
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


let playFunc = function () {

    song.play();

    // let startIntra = setInterval(() => {
    //     secTime += 1;

    //     start.textContent = `0:${secTime}`;
    //     console.log(`0:${secTime}`);

    //     if (secTime == `60`) {
    //         start.textContent = `${minTime}:00`;
    //         console.log(`${minTime}:00`);
    //         console.log(minTime);
    //         clearInterval(startIntra);
    //     }
    // }, 1000);
}

let heart = document.querySelector(".fa-heart");

let green_heart = document.querySelector("#green_heart");

let sikBar = document.querySelector(".progress-bar");

heart.addEventListener("click", () => {
    heart.id = "none";
    green_heart.id = "view";
})
green_heart.addEventListener("click", () => {
    heart.id = "view";
    green_heart.id = "none";
})

song.addEventListener("timeupdate", () => {

    let progresBar = parseInt((song.currentTime / song.duration) * 100);
    sikBar.value = progresBar;
})

sikBar.addEventListener("change", () => {
    song.currentTime = sikBar.value * song.duration / 100;
})