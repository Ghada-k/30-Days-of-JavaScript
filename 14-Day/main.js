const count = document.getElementById('count')

updateVisitorCount()

async function updateVisitorCount() {
    const response = await fetch('https://counterpro.vercel.app/api/count/?id=name_id')
    const data = await response.json()
    console.log(data)
    count.textContent = data.count
}

