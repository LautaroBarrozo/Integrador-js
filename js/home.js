const userIcon = document.getElementById("user-icon")
const userMenu = document.getElementById("user-info-menu")
const barsIcon = document.getElementById("navbar-bars")
const barsMenu = document.getElementById("navbar-bars-menu")


window.addEventListener('load', () => {
    const logoutButton = document.getElementById("logout-button")

    logoutButton.addEventListener('click', logOut)
})

let activeUser = JSON.parse(localStorage.getItem('activeUser')) || []

const toggleUserMenu = () => {
    userMenu.classList.toggle("open-user-menu");
    if (barsMenu.classList.contains("open-navbar-menu")) {
        barsMenu.classList.remove("open-navbar-menu");
        return;
    }
};

const toggleNavbarMenu = () => {
    barsMenu.classList.toggle("open-navbar-menu");
    if (userMenu.classList.contains("open-user-menu")) {
        userMenu.classList.remove("open-user-menu");
        return;
    }
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
    localStorage.removeItem('activeUser')
    window.location.href = "/index.html"
}

const init = () => {
    userIcon.addEventListener('click', toggleUserMenu)
    barsIcon.addEventListener('click', toggleNavbarMenu)
    renderUser(activeUser)
}

init()