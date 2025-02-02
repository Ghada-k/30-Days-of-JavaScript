const quoteContainer = document.getElementById('quoteContainer')
const quoteBtn = document.getElementById('quoteBtn')

const API_URL = 'https://quotes-api-self.vercel.app/quote'


async function getQuote(){
    const response = await fetch(API_URL)
    const data = await response.json()
    console.log(data)  
    quoteContainer.innerHTML = data.quote
}
quoteBtn.addEventListener('click' , getQuote)