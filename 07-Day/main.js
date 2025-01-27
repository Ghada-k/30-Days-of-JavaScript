function shuffle (){
    let image = document.getElementById('img')
    let random = Math.floor(Math.random()*6) +1
    image.setAttribute("src", `src/${random}.png`)
}

function anim() {
    setTimeout(shuffle, 500)
    let image = document.getElementById('img')
    image.setAttribute("src", `src/dice-rol.gif`)
    
}