const text = document.getElementById('text');
const strText = "The best preparation for tomorrow is doing your best today...";

let index = 1;

setInterval(textEffect, 150);

function textEffect(){
    text.innerText = strText.slice(0, index);
    index++;

    if(index > strText.length){
        index = 1;
    }

}