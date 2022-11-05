const submitLoginForm = (e) => {
    e.preventDefault()
    if (loginValidation()) {
        formLogin.reset()
        window.location.href = "/home.html"
    }
}


const login = () => {
    formLogin.addEventListener('submit', submitLoginForm)
}

login()