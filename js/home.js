const userIcon = document.getElementById("user-icon")
const userMenu = document.getElementById("user-info-menu")
const barsIcon = document.getElementById("navbar-bars")
const barsMenu = document.getElementById("navbar-bars-menu")
const cartIcon = document.getElementById("cart-icon")
const cartMenu = document.getElementById("cart-menu")
const overlay = document.getElementById("overlay")

window.addEventListener('load', () => {
    const logoutButton = document.getElementById("logout-button")

    logoutButton.addEventListener('click', logOut)
})

let activeUser = JSON.parse(localStorage.getItem('activeUser')) || []

const toggleUserMenu = () => {
    userMenu.classList.toggle("open-menu");
    if (barsMenu.classList.contains("open-navbar-menu")) {
        barsMenu.classList.remove("open-navbar-menu");
        return;
    } else if (cartMenu.classList.contains("open-menu")) {
        cartMenu.classList.remove("open-menu")
        return
    }
    overlay.classList.toggle("show-overlay")
};

const toggleNavbarMenu = () => {
    barsMenu.classList.toggle("open-navbar-menu");
    if (userMenu.classList.contains("open-menu")) {
        userMenu.classList.remove("open-menu");
        return;
    } else if (cartMenu.classList.contains("open-menu")) {
        cartMenu.classList.remove("open-menu")
        return
    }
    overlay.classList.toggle("show-overlay");
};

const toggleCartMenu = () => {
    cartMenu.classList.toggle("open-menu")
    if (userMenu.classList.contains("open-menu")) {
        userMenu.classList.remove("open-menu")
        return
    } else if (barsMenu.classList.contains("open-navbar-menu")) {
        barsMenu.classList.remove("open-navbar-menu")
        return

    }
    overlay.classList.toggle("show-overlay");
}

const closeOnOverlayClick = () => {
    barsMenu.classList.remove("open-navbar-menu");
    userMenu.classList.remove("open-menu");
    cartMenu.classList.remove("open-menu")
    overlay.classList.remove("show-overlay");
};

const closeOnScroll = () => {
    if (
        !barsMenu.classList.contains("open-navbar-menu") &&
        !cartMenu.classList.contains("open-menu") &&
        !userMenu.classList.contains("open-menu")
    )
        return;
    barsMenu.classList.remove("open-navbar-menu");
    cartMenu.classList.remove("open-menu");
    userMenu.classList.remove("open-menu");
    overlay.classList.remove("show-overlay");
};


const renderUserInfo = (user) => {
    const { id, name, email } = user;

    return `
        <div class="center-flex column">
            <div class="user-menu-icon center-flex">
                <i class="fa-solid fa-user"></i>
            </div>

            <h2 class="user-name">${name}</h2>
            <h4 class="user-name">${email}</h4>

            <button class="logout-button" id="logout-button">cerrar sesion</button>
        </div>
    `

}

const renderUser = (arr) => {
    userMenu.innerHTML = renderUserInfo(arr)
}

const logOut = () => {

    if (window.confirm("está seguro que desea cerrar sesión?")) {
        localStorage.removeItem('activeUser')
        window.location.href = "/index.html"
    }

}

const init = () => {
    userIcon.addEventListener('click', toggleUserMenu)
    barsIcon.addEventListener('click', toggleNavbarMenu)
    cartIcon.addEventListener('click', toggleCartMenu)
    window.addEventListener("scroll", closeOnScroll);
    overlay.addEventListener('click', closeOnOverlayClick)
    renderUser(activeUser)
}

init()