const backArrow = document.getElementById("back-arrow")
const ProductContainer = document.getElementById("ProductSectionContaioner")
const commentsForm = document.getElementById("product-comments-form")
const commentsContainer = document.getElementById("comments-container")

let activeProduct = JSON.parse(localStorage.getItem('ActiveProduct')) || []

let comments = JSON.parse(localStorage.getItem('comments')) || []

let activeUser = JSON.parse(localStorage.getItem('activeUser')) || []

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveLocalStorage = () => {
    localStorage.setItem('comments', JSON.stringify(comments))
}

const saveCartLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
};

const saveData = (user, product) => {
    comments = [
        ...comments,
        {
            id: comments.length + 1,
            productId: product.id,
            name: user.name,
            comment: commentInput.value.trim()
        }
    ]
}

const saveCartData = (product, user) => {
    cart = [
        ...cart,
        {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
            userId: user.id
        }
    ]
}


const renderProductPage = (product) => {
    const { id, name, price, origin, color, material, image, description, category, popular } = product;

    return `
        <div class="product-img-container">
            <img src="${image}" alt="" class="product-img">
        </div>

        <div class="product-info-container">

            <div class="product-info">

                <div class="product-title center-flex">
                    <h2>${name}</h2>
                </div>

                <div class="product-price center-flex">
                    <h2>$${price}</h2>
                </div>

                <div class="product-buy-info center-flex">
                    <p><i class="fa-solid fa-truck"></i> Envio gratis</p>
                    <p><i class="fa-solid fa-arrows-rotate"></i> Devolucion gratis</p>
                </div>

                <div class="button-container center-flex">
                    <button class="add-cart-button" id="add-cart-button">Añadir al carrito</button>
                </div>
            </div>

            <div class="product-description">
                <div class="product-title center-flex">
                    <h2>Información del producto</h2>
                </div>

                <div class="description-info center-flex">
                    <h3>origen: ${origin}</h3>
                    <h3>color: ${color}</h3>
                    <h3>material: ${material}</h3>
                </div>

            </div>
        </div>
    `
}

const renderComment = (comments) => {
    const { id, productId, name, comment } = comments

    return `
        <div class="comment divider">
            <div class="comment-user-icon center-flex">
                <i class="fa-solid fa-user" id="user-icon"></i>
            </div>


            <div class="column">
                <div class="comment-user-name">
                    <h3>${name}</h3>
                </div>

                <div class="comment-content">
                    <p>${comment}</p>
                </div>
            </div>

        </div>
    
    `
}


const renderPage = (product) => {
    ProductContainer.innerHTML = renderProductPage(product);
};

const renderComments = () => {
    let productComments = []

    comments.map((comment) => {
        if (comment.productId == activeProduct.id) {
            productComments.push(comment)
        }
    })

    commentsContainer.innerHTML = productComments.map(renderComment).join("")
}

const backToHome = () => {
    window.location.href = "/home.html"
}

const submitForm = (e) => {
    e.preventDefault()
    if (CommentValidation()) {
        saveData(activeUser, activeProduct)
        commentsForm.reset()
        saveLocalStorage()
        location.reload()
    }
}

window.addEventListener('load', () => {
    const addCartButton = document.getElementById("add-cart-button")

    const addProductToCart = () => {
        let existProduct = true


        cart.map((product) => {
            if (product.id == activeProduct.id && product.userName == activeUser.name) {
                existProduct = false
            }
        })

        if (existProduct) {
            alert("el producto ha sido agregado al carrito")
            saveCartData(activeProduct, activeUser)
            saveCartLocalStorage()
        } else if (!existProduct) {
            alert("ESTE PRODUCTO YA SE ENCUENTRA EN EL CARRITO")
        }
    }

    addCartButton.addEventListener('click', addProductToCart)
})


const init = () => {
    backArrow.addEventListener('click', backToHome)
    commentsForm.addEventListener('submit', submitForm)
    renderPage(activeProduct)
    renderComments()

}

init()

