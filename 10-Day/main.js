const quoteContainer = document.getElementById('quotecontainer')
const quotebtn = document.getElementById('quotebtn')

const API_URL = 'https://api.quotable.io/random'

getQuote()

async function getQuote(){
    const res = await fetch(API_URL, {
        headers: {
            'Accept':'application/json'
        }
    })
    const data = await res.json()
    quoteContainer.innerHTML = data.quote
}
quotebtn.addEventListener("click", getQuote)