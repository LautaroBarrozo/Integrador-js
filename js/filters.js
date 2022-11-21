const categories = document.querySelector(".categories");

const categoriesList = document.querySelectorAll(".category");

const renderContainer = document.getElementById("productsHomeContainer")

const getProductCard = () => {
    const btns = document.querySelectorAll("#product-card")




    btns.forEach(btn => btn.addEventListener("click", (e) => {
        const product = getProduct(e.target.dataset.id)
        localStorage.setItem("ActiveProduct", JSON.stringify(product))
        window.location.href = "/product-page.html"
    }))

    const getProduct = (id) => {

        const btnFind = products.find((producto) => producto.id === Number(id))

        return btnFind;
    }




}

const applyFilter = (e) => {

    if (!e.target.classList.contains("category")) return;

    let selectedCategory = e.target.dataset.category;
    buttonActiveState(e);

    if (!selectedCategory) {
        render();
        return;
    }
    renderFilteredProducts(selectedCategory);
};


const renderFilteredProducts = (selectedCategory) => {

    const filteredProducts = products.filter((product) => product.category === selectedCategory);

    if (filteredProducts.length === 0) {
        return renderError(renderContainer, "No hay stock de este producto. Por favor, seleccione otra categoría.");
    }

    renderProducts(filteredProducts);
    getProductCard()
};

const buttonActiveState = (e) => {

    const btnList = [...categoriesList];

    const selectedBtn = e.target;

    if (!selectedBtn.classList.contains("active")) {
        btnList.map((btn) => {
            btn.classList.remove("active");
        });

        selectedBtn.classList.add("active");
    }
};


const renderError = (container, message) => {
    container.innerHTML = `<div class="product-error"><h3>${message}</h3></div>`;
    return;
};

const filter = () => {
    categories.addEventListener("click", applyFilter);

};



filter()