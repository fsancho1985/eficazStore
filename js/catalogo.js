const urlBase = 'https://fakestoreapi.com';
window.onload = getAllProducts();
const catalog = document.querySelector('#catalog');

async function getAllProducts() {
    try {
        const response = await fetch(`${urlBase}/products`);
        const data = await response.json();
        data.map((el) => {
            createCatalogCards(el)
        })
    } catch (error) {
        alert(error);
    }
};

function createCatalogCards(el) {
    const div = document.createElement('div');
    const wrapperDiv = document.createElement('div')
    div.classList.add('card-catalog')
    const title = document.createElement('h5')
    const price = document.createElement('span')
    const img = document.createElement('img')
    title.innerText = el.title
    price.innerText = `R$ ${el.price.toFixed(2)}`
    img.setAttribute('src', `${el.image}`)
    img.setAttribute('alt', `${el.category}`)
    div.appendChild(title)
    div.appendChild(wrapperDiv)
    wrapperDiv.appendChild(img)
    wrapperDiv.classList.add('wrapper')
    div.appendChild(price)
    catalog.appendChild(div)
}
