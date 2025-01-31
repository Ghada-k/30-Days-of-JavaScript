const countdown = document.getElementById('countdown')

const startMinutes = 10
let time = startMinutes * 60

setInterval(updateCounter, 1000)

function updateCounter() {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60

    seconds = seconds < 10 ? '0' + seconds : seconds

    countdown.innerHTML = `${minutes}:${seconds}`
    time--
}