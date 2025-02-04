const container = document.getElementById('container')
const circleArr = []

let rows = 15
let cols = 15

for (let i = 0; i < rows; i++) {
    circleArr[i] = [] 
    for (let j = 0; j < cols; j++) {
        const circle = document.createElement('div')
        circle.classList.add('circle')
        container.appendChild(circle)
        circleArr[i].push(circle)
    }
}

circleArr.forEach((cols, i) => {
    cols.forEach((circle, j) => {
        circle.addEventListener('click', () => {
            growCircle(i, j)
        })
    })
})

function growCircle(i, j) {
    if (circleArr[i] && circleArr[i][j] && !circleArr[i][j].classList.contains('grow')) {
        circleArr[i][j].classList.add('grow')

        setTimeout(() => {
            growCircle(i - 1, j) // Top
            growCircle(i + 1, j) // Bottom
            growCircle(i, j - 1) // Left
            growCircle(i, j + 1) // Right
        }, 100)

        setTimeout(() => {
            circleArr[i][j].classList.remove('grow')
        }, 300)
    }
}
