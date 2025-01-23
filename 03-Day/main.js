let hour = document.getElementById('hour')
let minute = document.getElementById('min')
let second = document.getElementById('sec')
let amp = document.getElementById('ampm')

setInterval(function(){
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours ? hours : 12
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds
    hour.innerHTML = hours
    minute.innerHTML = minutes
    second.innerHTML = seconds
    amp.innerHTML = ampm
}, 1000)
