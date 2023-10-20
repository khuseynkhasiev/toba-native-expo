import { observable, action } from 'mobx';

function createUserDataStore() {
    const userData = observable({
        name: 'имя',
        surname: 'фамилия',
        login: 'login',
        email: 'email',
        password: 'password',
        password_confirmation: 'repeat-password',
        consent: false,
        agreement: false,
    });

    const updateUserData = action((key, value) => {
        userData[key] = value;
    });

    return {
        userData,
        updateUserData,
    };
}

const newUserDataStore = createUserDataStore();

export default newUserDataStore;
