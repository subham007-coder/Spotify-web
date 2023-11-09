let playBtn = document.querySelector(".play");

let pauseBtn = "fa-pause";


let song = new Audio("../songs/Chaleya.mp3");
let chaleya = new Audio('../songs/Chaleya.mp3')
let Zinda = new Audio('../songs/Zinda Banda.mp3');
let Ramaiya = new Audio('../songs/Not Ramaiya Jawan.mp3');

playBtn.addEventListener("click", () => {
    if (song.paused || song.currentTime <= 0) {
          
        playFunc();

        playBtn.classList.remove("fa-circle-play");
        playBtn.classList.remove("play");
        playBtn.classList.add("fa-pause");
    }
    else {
        playBtn.classList.add("fa-circle-play");
        playBtn.classList.add("play");
        playBtn.classList.remove("fa-pause");
        song.pause();
    };

});


let playFunc = function () {
    song.play();
}

let heartT = document.querySelector(".heart");

let green_heart = document.querySelector("#green_heart");

let sikBar = document.querySelector(".progress-bar");

heartT.addEventListener("click", () => {
    heartT.id = "none";
    green_heart.id = "view";
    green_heart.classList.add("ani");
});
green_heart.addEventListener("click", () => {
    heartT.id = "view";
    green_heart.id = "none";
});

// sikbar update for first song

song.addEventListener("timeupdate", () => {

    let progresBar = parseInt((song.currentTime / song.duration) * 100);
    sikBar.value = progresBar;

    if (progresBar == 100) {
        playBtn.classList.add("fa-circle-play");
        playBtn.classList.add("play");
        playBtn.classList.remove("fa-pause");
    };
});

sikBar.addEventListener("change", () => {
    song.currentTime = sikBar.value * song.duration / 100;
});

// sikbar update for chaleya song

chaleya.addEventListener("timeupdate", () => {

    let progresBar = parseInt((chaleya.currentTime / chaleya.duration) * 100);
    sikBar.value = progresBar;

    if (progresBar == 100) {
        playBtn.classList.add("fa-circle-play");
        playBtn.classList.add("play");
        playBtn.classList.remove("fa-pause");
    };
});

sikBar.addEventListener("change", () => {
    chaleya.currentTime = sikBar.value * chaleya.duration / 100;
});

// sikbar update for Zinda song

Zinda.addEventListener("timeupdate", () => {

    let progresBar = parseInt((Zinda.currentTime / Zinda.duration) * 100);
    sikBar.value = progresBar;

    if (progresBar == 100) {
        playBtn.classList.add("fa-circle-play");
        playBtn.classList.add("play");
        playBtn.classList.remove("fa-pause");
    };
});

sikBar.addEventListener("change", () => {
    Zinda.currentTime = sikBar.value * Zinda.duration / 100;
});

// sikbar update for Ramaiya song

Ramaiya.addEventListener("timeupdate", () => {

    let progresBar = parseInt((Ramaiya.currentTime / Ramaiya.duration) * 100);
    sikBar.value = progresBar;

    if (progresBar == 100) {
        playBtn.classList.add("fa-circle-play");
        playBtn.classList.add("play");
        playBtn.classList.remove("fa-pause");
    };
});

sikBar.addEventListener("change", () => {
    Ramaiya.currentTime = sikBar.value * Zinda.duration / 100;
});


// say time to user morning,night

let TimeEvent = new Date;

let Hours = TimeEvent.getHours();

if (Hours >= 0 || Hours == 5) { // night
    document.querySelector(".timeEvent h3").innerHTML = `Good Night <i class="ri-moon-line"></i>`;
};
if (Hours >= 6 || Hours == 11) { // morning
    document.querySelector(".timeEvent h3").innerHTML = `Good Morning <i class="ri-sun-cloudy-line"></i>`;
};
if (Hours >= 12 || Hours == 17) { // Good Afternoon
    document.querySelector(".timeEvent h3").innerHTML = `Good Afternoon <i class="ri-sun-line"></i>`;
}
if (Hours >= 18 || Hours == 23) { // Good Evening
    document.querySelector(".timeEvent h3").innerHTML = `Good Evening <i class="ri-moon-cloudy-line"></i>`;
};


// first song min and sec update

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

// chaleya min and sec update

let chaleyaStartTime = document.querySelector(".start-time");
let chaleyaEndTime = document.querySelector(".end-time");

chaleya.addEventListener('timeupdate', () => {
    let song_cur = chaleya.currentTime;
    let song_dur = chaleya.duration;

    let min = Math.floor(song_dur / 60);
    let sec = Math.floor(song_dur % 60);
    if (sec < 10) {
        sec = `0${sec}`;
    }
    chaleyaEndTime.textContent = `${min}:${sec}`;

    let min1 = Math.floor(song_cur / 60);
    let sec1 = Math.floor(song_cur % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    chaleyaStartTime.textContent = `${min1}:${sec1}`;
});

// zinda min and sec update

let zindaStartTime = document.querySelector(".start-time");
let zindaEndTime = document.querySelector(".end-time");

Zinda.addEventListener('timeupdate', () => {
    let song_cur = Zinda.currentTime;
    let song_dur = Zinda.duration;

    let min = Math.floor(song_dur / 60);
    let sec = Math.floor(song_dur % 60);
    if (sec < 10) {
        sec = `0${sec}`;
    }
    zindaEndTime.textContent = `${min}:${sec}`;

    let min1 = Math.floor(song_cur / 60);
    let sec1 = Math.floor(song_cur % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    zindaStartTime.textContent = `${min1}:${sec1}`;
});


// Ramaiya min and sec update

let RamaiyaStartTime = document.querySelector(".start-time");
let RamaiyaEndTime = document.querySelector(".end-time");

Ramaiya.addEventListener('timeupdate', () => {
    let song_cur = Ramaiya.currentTime;
    let song_dur = Ramaiya.duration;

    let min = Math.floor(song_dur / 60);
    let sec = Math.floor(song_dur % 60);
    if (sec < 10) {
        sec = `0${sec}`;
    }
    RamaiyaEndTime.textContent = `${min}:${sec}`;

    let min1 = Math.floor(song_cur / 60);
    let sec1 = Math.floor(song_cur % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    RamaiyaStartTime.textContent = `${min1}:${sec1}`;
});


// green playlist button

let playListBtn = document.querySelector('.list');

playListBtn.addEventListener("click", () => {
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

// handle song list

let songArr = [
    {
        songNumber: document.querySelector(".main #songList:nth-child(1)"),
        songImg: ("../song_playlist/song-logo/chaleya.jpeg"),
        songH5: "Chaleya (From 'Jawan')",
        songP: " Anirudh Ravichander, Arijit Singh, Shilpa Rao...",
    },
    {
        songNumber: document.querySelector(".main #songList:nth-child(2)"),
        songImg: ("../song_playlist/song-logo/song2.jpeg"),
        songH5: "Zinda Banda (From 'Jawan')",
        songP: "Anirudh Ravichander, Irshad Kamil...",
    },
    {
        songNumber: document.querySelector(".main #songList:nth-child(3)"),
    },
    {
        songNumber: document.querySelector(".main #songList:nth-child(4)"),
        songImg: ("../song_playlist/song-logo/song4.jpeg"),
        songH5: "Not Ramaiya Vastavaiya (From 'Jawan')",
        songP: "Anirudh Ravichander, Vishal Dadlani,...",
    },
];

let albumImg = document.querySelector(".album img");
let albumH5 = document.querySelector(".album h5");
let albumP = document.querySelector(".album p");

let songOne = songArr[0].songNumber;
let songTwo = songArr[1].songNumber;
let songThre = songArr[2].songNumber;
let songFour = songArr[3].songNumber;

songOne.addEventListener("click", () => {

    if (song.play()){
        song.pause();
    }

    if (chaleya.paused || chaleya.currentTime <= 0) {
        // playFunc();
        song = chaleya;
        song.play(); // chaleya song
        Zinda.pause();
        Ramaiya.pause();

        albumImg.src = songArr[0].songImg;
        albumH5.textContent = songArr[0].songH5;
        albumP.textContent = songArr[0].songP;

        playBtn.classList.remove("fa-circle-play");
        playBtn.classList.remove("play");
        playBtn.classList.add("fa-pause");
    } else {
        console.log("stop");
        playBtn.classList.add("fa-circle-play");
        playBtn.classList.add("play");
        playBtn.classList.remove("fa-pause");
        chaleya.pause();// chaleya song
    }

});


songTwo.addEventListener("click", () => {
    if (Zinda.paused || Zinda.currentTime <= 0) {
          
        song = Zinda;
        song.play();// chaleya song
        chaleya.pause();
        Ramaiya.pause();
        albumImg.src = songArr[1].songImg;
        albumH5.textContent = songArr[1].songH5;
        albumP.textContent = songArr[1].songP;
        song = Zinda;
        playBtn.classList.remove("fa-circle-play");
        playBtn.classList.remove("play");
        playBtn.classList.add("fa-pause");
    } else {
        console.log("stop");
        playBtn.classList.add("fa-circle-play");
        playBtn.classList.add("play");
        playBtn.classList.remove("fa-pause");
        Zinda.pause();
    }
});

songFour.addEventListener("click", () => {
    if (Ramaiya.paused || Ramaiya.currentTime <= 0) {
          
        song = Ramaiya;
        song.play(); // chaleya song
        Zinda.pause();
        chaleya.pause();
        albumImg.src = songArr[3].songImg;
        albumH5.textContent = songArr[3].songH5;
        albumP.textContent = songArr[3].songP;
        song = Ramaiya;
        playBtn.classList.remove("fa-circle-play");
        playBtn.classList.remove("play");
        playBtn.classList.add("fa-pause");
    } else {
        console.log("stop");
        playBtn.classList.add("fa-circle-play");
        playBtn.classList.add("play");
        playBtn.classList.remove("fa-pause");
        Ramaiya.pause();
    }
});

// pending work

// Like and Remove Songs.

// next and previos button work

// volume up down