window.onload = function() {
    addColor()
}

for (let i = 0; i < 9; i++){
    const box = document.createElement('div')
    box.classList.add('box')
    document.querySelector('.container').appendChild(box)
}

const btn = document.querySelector('.btn')
const randomColorBlock = document.querySelectorAll('.box')

const randomHexColorCode = () => {
    const hex = '0123456789ABCDEF';
    const colorLength = 6
    let color = '';
    for (let i = 0; i < colorLength; i++) {
        color += hex[Math.floor(Math.random() * 16)];
        }
        return `#` + color;
}

const addColor = () =>{
    randomColorBlock.forEach(e => {
        let newColor = randomHexColorCode()
        e.style.background = newColor
        e.innerHTML = newColor
    })
}