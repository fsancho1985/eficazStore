const urlBase = 'https://fakestoreapi.com';
const textContainer = document.getElementById('text-container');

async function getApiData() {
    try {
        const response = await fetch(`${urlBase}/products/categories`)
        const data = await response.json()
        data.map((el) => {
            const div = document.createElement('div')
            const title = document.createElement('h3')
            const img = document.createElement('img')
            title.innerText = el;
            img.setAttribute('src', `./assets/${el}.jpg`)
            img.setAttribute('alt', `${el}`)
            img.setAttribute('href', `${urlBase}/products/category/${el}`)
            div.appendChild(title)
            div.appendChild(img)
            div.classList.add('categories-container')
            textContainer.appendChild(div)
        })
    } catch (error) {
        alert(error)
    }

}

getApiData();

