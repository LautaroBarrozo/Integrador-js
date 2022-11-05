const userName = document.getElementById("userName")
const userEmail = document.getElementById("userEmail")
const userPassword = document.getElementById("userPassword")
const userConfirmPassword = document.getElementById("userConfirmPassword")

const loginUserEmail = document.getElementById("loginEmail")
const loginUserPassword = document.getElementById("loginPassword")

const checknameInput = (input) => {
    let isValid = false;

    const inputContent = input.value.trim()

    if (isEmpty(inputContent)) {
        showError(userName, "ERROR el nombre es obligatorio")
    } else if (!isNameValid(inputContent)) {
        showError(userName, "ERROR el nombre no es valido")
    } else {
        clearError(userName)
        isValid = true
    }

    return isValid
}

const checkEmailInput = (input) => {
    let isValid = false

    const inputContent = input.value.trim()

    if (isEmpty(inputContent)) {
        showError(userEmail, "Error el E-mail es obligatorio")
    } else if (!isEmailValid(inputContent)) {
        showError(userEmail, "ERROR el E-mail no es valido")
    } else {
        clearError(userEmail)
        isValid = true
    }

    return isValid
}

const checkPasswordInput = (input) => {
    let isValid = false

    const inputContent = input.value.trim()

    if (isEmpty(inputContent)) {
        showError(userPassword, "Error la contraseña es obligatoria")
    } else if (!isPasswordValid(inputContent)) {
        showError(userPassword, "Error la contraseña no es valida")
    } else {
        clearError(userPassword)
        isValid = true
    }

    return isValid
}

const checkConfirmPassword = (inputPassword, inputConfirm) => {
    let isValid = false

    const inputPasswordContent = inputPassword.value.trim()
    const inputConfirmContent = inputConfirm.value.trim()

    if (isEmpty(inputConfirmContent)) {
        showError(userConfirmPassword, "Error confirmar contraseña es obligatorio")
    } else if (!isConfirmValid(inputPasswordContent, inputConfirmContent)) {
        showError(userConfirmPassword, "Error las contraseñas deben ser iguales")
    } else {
        clearError(userConfirmPassword)
        isValid = true
    }

    return isValid
}

const checkLoginEmail = (loginEmailInput, loginPasswordInput) => {
    let isValid = false

    const loginEmailContent = loginEmailInput.value.trim()
    const loginPasswordContent = loginPasswordInput.value.trim()

    if (isEmpty(loginEmailContent)) {
        showError(loginUserEmail, "ERROR el E-mail es obligatorio")
    } else if (!isLoginInfoValid(loginEmailContent, loginPasswordContent)) {
        showError(loginUserEmail, "ERROR uno de los datos es incorrecto")
    } else {
        clearError(loginUserEmail)
        isValid = true
    }

    return isValid
}

const checkLoginPassword = (loginEmailInput, loginPasswordInput) => {
    let isValid = false

    const loginEmailContent = loginEmailInput.value.trim()
    const loginPasswordContent = loginPasswordInput.value.trim()

    if (isEmpty(loginPasswordContent)) {
        showError(loginUserPassword, "ERROR la contraseña es obligatoria")
    } else if (!isLoginInfoValid(loginEmailContent, loginPasswordContent)) {
        showError(loginUserPassword, "ERROR uno de los datos es incorrecto")
    } else {
        clearError(loginUserPassword)
        isValid = true
    }

    return isValid
}


const formValidation = () => {
    const isValidName = checknameInput(userName)
    const isEmailValid = checkEmailInput(userEmail)
    const isPasswordValid = checkPasswordInput(userPassword)
    const isConfirmPasswordValid = checkConfirmPassword(userPassword, userConfirmPassword)

    return (
        isValidName && isEmailValid && isPasswordValid && isConfirmPasswordValid
    )
}

const loginValidation = () => {
    const isLoginEmailValid = checkLoginEmail(loginUserEmail, loginUserPassword)
    const isLoginPasswordValid = checkLoginPassword(loginUserEmail, loginUserPassword)

    return (
        isLoginEmailValid && isLoginPasswordValid
    )
}