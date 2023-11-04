const BASE_URL = 'https://animics.ru/api';

const getResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(res);
}

const authorization = (email, password) => {
    return fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    }).then((res) => {
        if (res.ok) {
            return res.json(); // В случае успешного ответа возвращаем JSON
        } else {
            return res.json().then((errorData) => {
                throw errorData.message; // В случае ошибки выбрасываем сообщение об ошибке
            });
        }
    });
}

const getUser = (token) => {
    return fetch(`${BASE_URL}/user`, {
        method: 'GET',
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    }).then((res) => {
        if (res.ok) {
            return res.json(); // В случае успешного ответа возвращаем JSON
        } else {
            return res.json().then((errorData) => {
                throw errorData.message; // В случае ошибки выбрасываем сообщение об ошибке
            });
        }
    })
}

const sendMessageSupportEmail = ({email, name, message}) => {
    return fetch(`${BASE_URL}/support`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, name, message})
    }).then((res) => getResponse(res))
}

const checkUniqueLogin = (login) => {
    return fetch(`${BASE_URL}/register/unique/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({login})
    }).then((res) => getResponse(res))
        .then((data) => !data.message)
}

const checkUniqueEmail = (email) => {
    return fetch(`${BASE_URL}/register/unique/email`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email})
    }).then((res) => getResponse(res))
        .then((data) => !data.message)
}
const register = ({
                      agreement,
                      consent,
                      email,
                      login,
                      name,
                      surname,
                      password,
                      password_confirmation,
                      date
                  }) => {
    return fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            agreement,
            consent,
            email,
            login,
            name,
            surname,
            password,
            password_confirmation,
            date
        })
    })
        .then((res) => res.ok ? res.json() : Promise.reject(res));
}

const emailVerify = (token) => {
    return fetch(`${BASE_URL}/user/profile/email/re-verify`, {
        method: 'POST',
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    }).then((res) => res.json())
        .then((res) => res.message);
}
const editUser = ({
                      loginInput,
                      nameInput,
                      surnameInput,
                      date,
                      phoneInput,
                      token
                  }) => {
    const requestBody = {
        login: loginInput,
        name: nameInput,
        surname: surnameInput,
        birthday: date,
        phone: phoneInput,
    };
    return fetch(`${BASE_URL}/user/edit`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`

        },
        body: JSON.stringify(requestBody)
    })
        .then((res) => res.ok ? res.json() : Promise.reject(res));
}
const editPasswordUser = ({
                          newPassword,
                          newPasswordRepeat,
                      token
                  }) => {
    return fetch(`${BASE_URL}/user/edit`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`
        },
        body: JSON.stringify({password: newPassword, password_confirmation: newPasswordRepeat})
    })
        .then((res) => res.ok ? res.json() : Promise.reject(res));
}
const registerSocial = ({
                            agreement,
                            consent,
                            email,
                            login,
                            name,
                            surname,
                            password,
                            password_confirmation,
                            date,
                            uuid
                        }) => {
    return fetch(`${BASE_URL}/v1/oauth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            agreement,
            consent,
            email,
            login,
            name,
            surname,
            password,
            password_confirmation,
            date,
            uuid
        })
    })
        .then((res) => res.ok ? res.json() : Promise.reject(res));
}

export {
    register,
    checkUniqueLogin,
    checkUniqueEmail,
    sendMessageSupportEmail,
    registerSocial,
    authorization,
    getUser,
    editUser,
    emailVerify,
    editPasswordUser
}
