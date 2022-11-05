const userIcon = document.getElementById("user-icon")
const userMenu = document.getElementById("user-info-menu")
const UserTest = [{ id: 1, name: "Lautaro", email: "lautaro@test.com" }]


const toggleUserMenu = () => {
    userMenu.classList.toggle("open-user-menu");
    if (barsMenu.classList.contains("open-menu")) {
        barsMenu.classList.remove("open-menu");
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

            <button class="logout-button">cerrar sesion</button>
        </div>
    `

}

// const renderUser = (arr) => {
//     userMenu.innerHTML = arr.map(renderUserInfo).join("")
// }

const init = () => {
    userIcon.addEventListener('click', toggleUserMenu)
}

init()