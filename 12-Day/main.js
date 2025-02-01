lights = document.querySelectorAll('.light')

let activeLight = 0

setInterval(changeLight, 1000)

function changeLight() {
    lights[activeLight].classList = 'light'
    activeLight++
    if (activeLight > 2) {
        activeLight = 0
    }
    const currentLight = lights[activeLight]
    currentLight.classList.add(currentLight.getAttribute('color'))
}