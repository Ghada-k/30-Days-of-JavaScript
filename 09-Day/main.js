const colorPicker = document.getElementById('color-picker')

colorPicker.addEventListener('input', () => {
    const selectedColor = colorPicker.value
    document.body.style.backgroundColor = selectedColor
})