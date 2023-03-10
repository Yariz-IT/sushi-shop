const productsContainer = document.querySelector('#products-container')

async function getProducts() {

    const response = await fetch('./js/products.json')
    console.log(response)

    const productsArray = await response.json()
    console.log(productsArray)


}

getProducts()