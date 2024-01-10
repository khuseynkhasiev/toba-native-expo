import { observable, action } from "mobx";

function getUserDataStoreStore() {
    let userData = observable({
        id: "",
        login: "",
        name: "",
        avatar: null,
        surname: "",
        email: "",
        birthday: "",
        email_verified_at: null,
        agreement: false,
        consent: false,
        phone: "",
    });

    const updateUserDataValue = action((key, value) => {
        userData[key] = value;
    });

    const updateUserData = action(
        ({
            id,
            login,
            name,
            avatar,
            surname,
            email,
            birthday,
            email_verified_at,
            agreement,
            consent,
            phone,
        }) => {
            userData.id = id;
            userData.login = login;
            userData.name = name;
            userData.avatar = avatar;
            userData.surname = surname;
            userData.email = email;
            userData.birthday = birthday;
            userData.email_verified_at = email_verified_at;
            userData.agreement = agreement;
            userData.consent = consent;
            userData.phone = phone;
        }
    );

    return {
        userData,
        updateUserData,
        updateUserDataValue,
    };
}

const newGetUserDataStore = getUserDataStoreStore();

export default newGetUserDataStore;
