const toast = document.getElementById('wrapper-toast');

function showToast() {
    toast.style.transform = 'translateX(0)';
}

function closeToast() {
    toast.style.transform = 'translateX(400px)';
}