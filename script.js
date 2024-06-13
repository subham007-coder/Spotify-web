let playBtn = document.querySelector(".play");

let pauseBtn = "fa-pause";

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
}

let heart = document.querySelector(".fa-heart");

let green_heart = document.querySelector("#green_heart");

let sikBar = document.querySelector(".progress-bar");

heart.addEventListener("click", (e) => {
    console.log("click");
    heart.id = "none";
    green_heart.id = "view";
    green_heart.classList.add("ani");
})
green_heart.addEventListener("click", () => {
    heart.id = "view";
    green_heart.id = "none";
})

song.addEventListener("timeupdate", () => {

    let progresBar = parseInt((song.currentTime / song.duration) * 100);
    sikBar.value = progresBar;
    // console.log(progresBar);

    if (progresBar == 100) {
        playBtn.classList.add("fa-circle-play");
        playBtn.classList.add("play");
        playBtn.classList.remove("fa-pause");
    }
})

sikBar.addEventListener("change", () => {
    song.currentTime = sikBar.value * song.duration / 100;
});


// say time to user

let TimeEvent = new Date;

let Hours = TimeEvent.getHours();

if (Hours >= 0 || Hours == 5) { // night
    document.querySelector(".timeEvent h3").innerHTML = `Good Night <i class="ri-moon-line"></i>`;
}
if (Hours >= 6 || Hours == 11) { // morning
    document.querySelector(".timeEvent h3").innerHTML = `Good Morning <i class="ri-sun-cloudy-line"></i>`;
}
if (Hours >= 12 || Hours == 17) { // Good Afternoon
    document.querySelector(".timeEvent h3").innerHTML = `Good Afternoon <i class="ri-sun-line"></i>`;
}
if (Hours >= 18 || Hours == 23) { // Good Evening
    document.querySelector(".timeEvent h3").innerHTML = `Good Evening <i class="ri-moon-cloudy-line"></i>`;
}


// song min and sec update

let startTime = document.querySelector(".start-time");
let endTime = document.querySelector(".end-time");

song.addEventListener('timeupdate', () => {
    let song_cur = song.currentTime;
    let song_dur = song.duration;

    let min = Math.floor(song_dur / 60);
    let sec = Math.floor(song_dur % 60);
    if (sec < 10) {
        sec = `0${sec}`;
    }
    endTime.textContent = `${min}:${sec}`;

    let min1 = Math.floor(song_cur / 60);
    let sec1 = Math.floor(song_cur % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    startTime.textContent = `${min1}:${sec1}`;
});


// TODO -->

// API handel
// // Removed from Liked Songs.
