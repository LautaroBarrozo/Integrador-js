

const saveActiveUser = (element) => {
    localStorage.setItem('activeUser', JSON.stringify(element))
}

const isEmpty = (userInfo) => userInfo == "";

const isNameValid = (userInfo) => {
    const re = /^[A-Za-z]{5,}$/
    return re.test(userInfo)
}

const isEmailValid = (userInfo) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(userInfo)
}

const isPasswordValid = (userInfo) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    return re.test(userInfo)
}

const isCommentInputValid = (comment) => {
    const re = /^[A-Za-z0-9À-ÿ\u00f1\u00d1\s]{5,}$/
    return re.test(comment)
}

const isConfirmValid = (userInfoPassword, userInfoConfirmPassword) => {

    let isValid = false

    if (userInfoPassword === userInfoConfirmPassword) {
        isValid = true
    }

    return isValid
}

const isLoginInfoValid = (userInfoEmail, userInfoPassword) => {

    let isValid = false

    for (let i = 0; i < localStorage.length; i++) {


        let clave = localStorage.key(i)
        let user = JSON.parse(localStorage.getItem(clave));

        users.forEach(e => {
            if (e.email == userInfoEmail && e.password == userInfoPassword) {
                isValid = true
                saveActiveUser(e)
            }
        });
    }

    return isValid
}

const showError = (userInfo, message) => {
    const formField = userInfo.parentElement;
    const error = formField.querySelector("small");
    error.classList.add("error");
    error.textContent = message;
}

const clearError = (userInfo) => {
    const formField = userInfo.parentElement;
    formField.classList.remove("error")
    const error = formField.querySelector("small");
    error.textContent = "";
}
