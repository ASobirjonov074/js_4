let timerBtns = document.querySelectorAll('button')
let timerScreen = document.querySelector('h1')
let con = document.querySelector('.contunue')
let timer = document.querySelector('.timer')

let interval = 0

let minutes = 0
let seconds = 0
let miliseconds = 0

timerBtns.forEach(btn => {
    btn.onclick = () => {
        let btnType = btn.getAttribute('data-type')

        if(btnType === "start") {
            startTimer()
        } else if(btnType === "stop") {
            clearInterval(interval)
        } else if(btnType === "con") {
            startTimer()
        } else {
            clearInterval(interval)
            minutes = 0
            seconds = 0
            miliseconds = 0
            timerScreen.innerHTML = "00:00:00"
        }
    }
})

function startTimer() {
    clearInterval(interval)
    interval = setInterval(() => {
        miliseconds++
        if (miliseconds === 100) {
            miliseconds = 0
            seconds++
        } else if (seconds === 60) {
            seconds = 0
            minutes++
        }

        timerScreen.innerHTML = `${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds} : ${miliseconds < 10 ? `0${miliseconds}` : miliseconds}`
    }, 1);
}