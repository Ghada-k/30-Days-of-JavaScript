window.addEventListener('mousemove' , (e) => {
    document.getElementById('position').innerHTML = ` The coordinate is: <h3>
    X: ${e.pageX} <br> Y: ${e.pageY} </h3> `
})