let playBtn = document.querySelector(".play");

let pauseBtn = "fa-pause";

let start = document.querySelector(".start-time");

let song = new Audio('songs/Chaleya.mp3');

playBtn.addEventListener("click", () => {
    if (song.paused || song.currentTime <= 0) {
        console.log("start");
        playFunc();
        timeUpdate();
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

heart.addEventListener("click", () => {
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
    // if(progresBar <= 9){
    //     start.textContent = `0:0${progresBar}`;
    //     console.log(`0:0${progresBar}`);
    // }

    // if (progresBar >= 10) {
    //     start.textContent = `0:${progresBar}`;
    //     console.log(`0:${progresBar}`);
    // }

    // if(progresBar >= 60){
    //     start.textContent = `1:0${progresBar -60}`;
    //     console.log(`1:0${progresBar -60}`);
    // }

    // if(progresBar >= 70){
    //     start.textContent = `1:${progresBar -60}`;
    //     console.log(`1:${progresBar -60}`);
    // }
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

let timeUpdate = function () {

    setInterval(() => {
        let progresBarTime = parseInt((song.currentTime / song.duration) * 190);
        console.log(progresBarTime);


        if (progresBarTime <= 9) {
            start.textContent = `0:0${progresBarTime}`;
            console.log(`0:0${progresBarTime}`);
        }

        if (progresBarTime >= 10) {
            start.textContent = `0:${progresBarTime}`;
            console.log(`0:${progresBarTime}`);
        }

        if (progresBarTime >= 60) {
            start.textContent = `1:0${progresBarTime - 60}`;
            console.log(`1:0${progresBarTime - 60}`);
        }

        if (progresBarTime >= 70) {
            start.textContent = `1:${progresBarTime - 60}`;
            console.log(`1:${progresBarTime - 60}`);
        }

    }, 1000);
}


