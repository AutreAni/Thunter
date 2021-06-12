export const validateUsername = (text) => {
    if (!text) return false;
    return text.length;
}

export const validatePassword = (password) => {
    if (!password.match(/[a-z]/g) ||
        !password.match(/[A-Z]/g) ||
        !password.match(/[0-9]/g) ||
        password.length < 8) {
        return false;
    }
    return true;
}

export const validateConfirm = (password) => {
    let pass = document.querySelector("input[name = Password]");
    if (password !== pass.value) {
        return false;
    }
    return true;
}

export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const validateData = {
    Username: validateUsername,
    Password: validatePassword,
    Email: validateEmail,
    ConfPass: validateConfirm,
}
