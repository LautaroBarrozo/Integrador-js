const homeContainer = document.getElementById("productsHomeContainer")


const renderProduct = (product) => {
    const { id, name, price, origin, color, material, image, description, category, popular } = product;

    return `
        <div class="product-card" data-id = "${id}" id="product-card">
            <div class="product-image-container">
                <img src="${image}" alt="imagen del producto" class="product-image">
            </div>

            <div class="product-name-container">
                <h3>${name}</h3>
            </div>

            <div class="product-price-container">
                <h3>$${price}</h3>
            </div>

            <div class="product-description-container">
                <p>${description}</p>
            </div>
        </div>
    `;
};

const renderProducts = (arr) => {
    homeContainer.innerHTML = arr.map(renderProduct).join("");
};

const renderPopular = () => {
    let popularProducts = products.filter((producto) => producto.popular == true);
    renderProducts(popularProducts);
}

const render = () => {
    renderPopular()
    getProductCard()
}

render()