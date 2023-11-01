let playBtn = document.querySelector(".play");

let pauseBtn = "fa-solid fa-pause";

playBtn.addEventListener("click", () => {
    playBtn.classList.toggle("fa-pause");
    playFunc()
});

let startTime = 0;

let playFunc = function() {
    let start = document.querySelector(".start-time");
    console.log(start);

    setInterval(() => {
        startTime += 1;
        start.textContent = startTime;
        console.log(startTime);
    }, 1000)
}
