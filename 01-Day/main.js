const sc = document.querySelector('#sc');
const mn = document.querySelector('#mn');
const hr = document.querySelector('#hr');

const deg = 6;

setInterval(() =>
{
    let day = new Date()
    let ms = day.getMilliseconds()*deg;
    let mm = day.getMinutes()*deg;
    let hh = day.getHours()*30;
    let ss = day.getSeconds()*deg + ms / 1000;

    sc.style.transform = `rotateZ(${ss}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    hr.style.transform = `rotateZ(${hh}deg)`;

})


