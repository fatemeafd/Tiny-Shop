const productsList = document.getElementById('product-list')
const products = JSON.parse(sessionStorage.getItem('products'))
console.log(products)

if (products) {
  products.forEach((product, index) => {
    // Create the new list item
    const newListItem = document.createElement('li')
    newListItem.className = 'product-item'

    // Create the image element
    const imgElement = document.createElement('img')
    imgElement.src = product.image // Use the image data from the product
    imgElement.alt = product.name // Use the product name as alt text

    //Create the paragraph element
    const pElement = document.createElement('p')
    pElement.textContent = product.name //Use the product name az text content

    //Append the image and paragraph elements to the list item
    newListItem.appendChild(imgElement)
    newListItem.appendChild(pElement)

    //Append the new list item to the existing product list
    productsList.appendChild(newListItem)
  })
}
