const cartProductContainer = document.getElementById("cart-container")
const total = document.getElementById("total");
const buyBtn = document.getElementById("buy-btn")
const deleteBtn = document.getElementById("delete-btn")

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveCartLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
};

const renderCartProduct = (cartProduct) => {
    const { id, name, price, image, quantity, userId } = cartProduct;

    if (userId == activeUser.id) {
        return `    
        <div class="cart-item">
        <img src=${image} alt="producto del carrito" />
        <div class="item-info">
            <h3 class="item-title">${name}</h3>
            <span class="item-price">$ ${price}</span>
        </div>
        <div class="item-handler">
            <span class="quantity-handler down" data-id=${id}>-</span>
            <span class="item-quantity">${quantity}</span>
            <span class="quantity-handler up" data-id=${id}>+</span>
        </div>
        </div>
    `;
    }
};

const checkCartState = () => {
    saveCartLocalStorage();
    renderCart(cart);
    showTotal(cart);
    disableBtn(buyBtn);
    disableBtn(deleteBtn);
};

const renderCart = () => {
    cartProductContainer.innerHTML = cart.map(renderCartProduct).join("");
};

const getCartTotal = () => {
    let total = 0

    cart.map((product) => {

        if (product.userId == activeUser.id) {
            total += product.price * product.quantity
        }
    })

    return total

};

const showTotal = () => {
    total.innerHTML = `$ ${getCartTotal().toFixed(2)}`;
};

const addUnitToProduct = (product) => {

    cart = cart.map((cartProduct) => {
        return cartProduct.id == product.id && cartProduct.userId == activeUser.id
            ? { ...cartProduct, quantity: cartProduct.quantity + 1, }
            : cartProduct;
    });
};

const substractProductUnit = (existingProduct) => {
    cart = cart.map((cartProduct) => {
        return cartProduct.id == existingProduct.id && cartProduct.userId == activeUser.id
            ? { ...cartProduct, quantity: cartProduct.quantity - 1 }
            : cartProduct;
    });
};

const removeProductFromCart = (existingProduct) => {
    console.log(activeUser.id);
    cart = cart.filter((product) => product.userId !== activeUser.id && existingProduct.userId === activeUser.id);
    checkCartState();
};

const handleMinusBtnEvent = (id) => {
    const existingCartProduct = cart.find((item) => item.id == id && item.userId == activeUser.id);

    if (existingCartProduct.quantity == 1) {
        if (window.confirm("¿Desea Eliminar el producto del carrito?")) {
            removeProductFromCart(existingCartProduct);
        }
        return;
    }
    substractProductUnit(existingCartProduct);
};

const handlePlusBtnEvent = (id) => {
    const existingCartProduct = cart.find((item) => item.id == id);
    addUnitToProduct(existingCartProduct);
};

const handleQuantity = (e) => {
    if (e.target.classList.contains("down")) {
        handleMinusBtnEvent(e.target.dataset.id);
    } else if (e.target.classList.contains("up")) {
        handlePlusBtnEvent(e.target.dataset.id);
    }
    checkCartState();
};

const resetCartItems = () => {
    cart = cart.filter((product) => product.userId != activeUser.id)
    checkCartState();
};

const completeCartAction = (confirmMsg, successMsg) => {
    if (!cart.length) return;
    if (window.confirm(confirmMsg)) {
        resetCartItems();
        alert(successMsg);
    }
};

const completeBuy = () => {
    completeCartAction(
        "¿Desea completar su compra?",
        "La compra se ha realizado correctamente"
    );
};

const deleteCart = () => {
    completeCartAction(
        "¿Está seguro de que desea vaciar el carrito?",
        "No hay productos en el carrito"
    );
};

const disableBtn = (btn) => {
    if (!cart.length) {
        btn.classList.add("disabled");
        return;
    }

    btn.classList.remove("disabled");
};

const cartFunctions = () => {
    document.addEventListener("DOMContentLoaded", renderCart);
    document.addEventListener("DOMContentLoaded", showTotal);
    cartProductContainer.addEventListener("click", handleQuantity);
    buyBtn.addEventListener("click", completeBuy);
    deleteBtn.addEventListener("click", deleteCart);
    disableBtn(buyBtn);
    disableBtn(deleteBtn);
}

cartFunctions()