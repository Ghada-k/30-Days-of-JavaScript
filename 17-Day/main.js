
function search() {
    let wordSearch = document.getElementById('search').value
    let wordList = document.getElementById('word-list')
    wordSearch = wordSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")
    let regex = new RegExp(`${wordSearch}`, 'gi')
    wordList.innerHTML = wordList.textContent.replace(regex, match => `<mark>${match}</mark>`)


}