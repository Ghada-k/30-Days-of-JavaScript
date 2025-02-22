const bar = document.querySelector('.progress-done')


setTimeout(()=>{
    bar.style.width = bar.dataset.width
    bar.style.opacity = 1
},500)
