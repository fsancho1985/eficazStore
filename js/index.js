const urlBase = 'https://fakestoreapi.com';
const textContainer = document.getElementById('text-container');

// API Request
async function getApiData() {
    try {
        const response = await fetch(`${urlBase}/products/categories`)
        const data = await response.json()
        data.map((el) => {
            createCards(el)
        })
    } catch (error) {
        alert(error)
    }

}

// Function to create Cards
function createCards(el) {
    const div = document.createElement('div')
    const title = document.createElement('h3')
    const img = document.createElement('img')
    const link = document.createElement('a')
    title.innerText = el;
    link.appendChild(img)
    link.setAttribute('href', `/catalogo/${el}.html`)
    img.setAttribute('src', `./assets/${el}.jpg`)
    img.setAttribute('alt', `${el}`)
    div.appendChild(title)
    div.appendChild(link)
    div.classList.add('categories-container')
    textContainer.appendChild(div)
}

getApiData();

