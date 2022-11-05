const form = document.getElementById("form")
const formLogin = document.getElementById("loginForm")

const loginButton = document.getElementById("submitLoginButton")
const registerButton = document.getElementById("submitRegisterButton")

let users = JSON.parse(localStorage.getItem('users')) || []

let activeUser = JSON.parse(localStorage.getItem('activeUser')) || []

const saveLocalStorage = () => {
    localStorage.setItem('users', JSON.stringify(users))
}

const saveActiveUser = (element) => {
    localStorage.setItem('activeUser', JSON.stringify(element))
}

const saveData = () => {
    users = [
        ...users,
        {
            id: users.length + 1,
            name: userName.value,
            email: userEmail.value,
            password: userPassword.value

        }
    ]
}


const submitForm = (e) => {
    e.preventDefault()
    if (formValidation()) {
        saveData()
        form.reset()
        saveLocalStorage()

    }
}

const register = () => {
    form.addEventListener('submit', submitForm)
}

register()
