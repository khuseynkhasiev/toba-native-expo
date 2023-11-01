import {
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text, TextInput,
    TouchableOpacity, View,
} from 'react-native';
import * as React from 'react';
import * as api from '../utils/api';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect, useState} from "react";
import newGetUserDataStore from "../components/store/getUserDateStore";
import EditUserDate from "../components/EditUserDate";
import * as ImagePicker from 'expo-image-picker';


export default function ProfileEditPassword({ navigation }) {
    const {
        id, login, name, avatar, surname, email, birthday, email_verified_at, agreement, consent, phone
    } = newGetUserDataStore.userData;

    const [nameInput, setNameInput] = useState(name);
    const [nameTextIsError, setNameTextIsError] = useState('Обязательное поле');
    const [nameIsError, setNameIsError] = useState(false);

    const [surnameInput, setSurnameInput] = useState('');
    const [surnameTextIsError, setSurnameTextIsError] = useState('Обязательное поле');
    const [surnameIsError, setSurnameIsError] = useState(false);

    const [phoneInput, setPhoneInput] = useState(phone);
    const [phoneTextIsError, setPhoneTextIsError] = useState('Укажите номер телефона');
    const [phoneIsError, setPhoneIsError] = useState(false);

    const [loginInput, setLoginInput] = useState(login);
    const [loginTextIsError, setLoginTextIsError] = useState('Обязательное поле');
    const [loginIsError, setLoginIsError] = useState(false);

    const [date, setDate] = useState('');
    const [dateErrorText, setDateErrorText] = useState('Вам должно быть 14+ лет');
    const [dateIsError, setDateIsError] = useState(false);

    const [token, setToken] = useState('');

    const getUserToken = async () => {
        setToken(await AsyncStorage.getItem('userToken'));
    }

    useEffect(() => {
        getUserToken();
    }, [])
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            // Здесь вы можете отправить изображение на сервер или обработать его дальше
            console.log(result.uri);
        }
        const uri = result.assets[0].uri;
        console.log(uri)
        uploadPhotoToServer(uri);
    };

    async function uploadPhotoToServer(photoUri) {
        try {
            const formData = new FormData();

            // Создайте объект FormData и добавьте фотографию в него
            formData.append('avatar', {
                uri: photoUri,
                name: 'photo.jpg', // Имя файла, которое будет видно на сервере
                type: 'image/jpeg', // Зависит от типа фотографии
            });

            // Загрузка фотографии в формате PNG
            formData.append('avatar', {
                uri: photoUri,
                type: 'image/png', // Зависит от типа фотографии
                name: 'photo.png', // Имя файла на сервере
            });

            // Если у вас есть дополнительные параметры для отправки на сервер, добавьте их сюда
            // formData.append('param1', 'value1');
            // formData.append('param2', 'value2');

            const response = await fetch('https://animics.ru/api/user/edit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data', // Указываем Content-Type как multipart/form-data
                    'Authorization': 'Bearer ' + token
                },
                body: formData,
            });

            if (response.status === 200) {
                const data = await response.json();
                console.log('Фотография успешно загружена', data);
            } else {
                console.log('Ошибка при загрузке фотографии', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Ошибка при загрузке фотографии', error);
        }
    }

    // Валидация полей
    function handleBlurInputName(){
        if (nameInput.length < 1){
            setNameIsError(true);
            return true;
        } else {
            setNameIsError(false);
            return false;
        }
    }
    function handleBlurInputSurname(){
        if (surnameInput.length < 1){
            setSurnameIsError(true);
            return true;
        } else {
            setSurnameIsError(false);
            return false;
        }
    }
    function handleBlurInputPhone() {
        // Создайте регулярное выражение для проверки номера телефона
        const phonePattern = /^[78]\d{10}$/;

        if (!phoneInput) {
            setPhoneIsError(true); // Номер телефона не введен
            setPhoneTextIsError('Номер телефона не указан');
            return true;
        } else if (!phonePattern.test(phoneInput)) {
            setPhoneIsError(true); // Номер телефона введен некорректно
            setPhoneTextIsError('Некорректный номер');
            return true;
        } else {
            setPhoneIsError(false); // Номер телефона введен корректно
            return false;
        }
    }
    function handleBlurInputLogin(){
        if (loginInput.length < 1){
            setLoginIsError(true);
            return true;
        } else {
            setLoginIsError(false);
            return false;
        }
    }

    return (
        <SafeAreaView style={styles.profile}>
            <ImageBackground style={styles.profile__background} source={require('../assets/image/profileBackground.png')}>
                <TouchableOpacity style={styles.profile__menuBtn} onPress={() => navigation.navigate('Main')}>
                    <Image style={styles.profile__menuIcon} source={require('../assets/image/menuIcon.png')}></Image>
                </TouchableOpacity>
                <Text style={styles.profile__title}>ПРОФИЛЬ</Text>
                <View style={styles.profile__form}>
                    <ImageBackground style={styles.profile__formBackground} source={require('../assets/image/profileBgForm.png')}>
                        <View style={styles.profile__formContent}>
                            <Text style={styles.paragraph}>СМЕНА ПАРОЛЯ</Text>
                            <TextInput
                                style={[styles.input__password, {color: loginIsError ? 'red' : '#FFF'}]}
                                placeholder="укажите логин"
                                placeholderTextColor="#FFF" // Установите цвет текста placeholder
                                onChangeText={(text) => setLoginInput(text)}
                                value={loginIsError ? loginTextIsError : loginInput}
                                onFocus={() => setLoginIsError(false)}
                                onBlur={() => handleBlurInputLogin()}
                            />
                            <TextInput
                                style={[styles.input__password, {color: loginIsError ? 'red' : '#FFF'}]}
                                placeholder="укажите логин"
                                placeholderTextColor="#FFF" // Установите цвет текста placeholder
                                onChangeText={(text) => setLoginInput(text)}
                                value={loginIsError ? loginTextIsError : loginInput}
                                onFocus={() => setLoginIsError(false)}
                                onBlur={() => handleBlurInputLogin()}
                            />
                            <TextInput
                                style={[styles.input__password, {color: loginIsError ? 'red' : '#FFF'}]}
                                placeholder="укажите логин"
                                placeholderTextColor="#FFF" // Установите цвет текста placeholder
                                onChangeText={(text) => setLoginInput(text)}
                                value={loginIsError ? loginTextIsError : loginInput}
                                onFocus={() => setLoginIsError(false)}
                                onBlur={() => handleBlurInputLogin()}
                            />
                        </View>

                    </ImageBackground>
                    <TouchableOpacity style={styles.profile__saveBtn}>
                        <View style={styles.profile__saveBtnContainer}>
                            <Text style={styles.profile__saveBtnText}>СОХРАНИТЬ ИЗМЕНЕНИЯ</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    profile__formContent: {
        flex: 1,
        borderRadius: 35, // Здесь установите радиус для всех углов
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        paddingLeft: 30,
        paddingTop: 15,
    },
    paragraph: {
        color: '#FFF',
        fontFamily: 'Montserrat',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 500,
    },
    profile__saveBtnText:{
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 600,
    },
    profile__saveBtnContainer: {
        width: 250,
        height: 30,
        borderRadius: 10,
        backgroundColor: 'rgba(6, 6, 6, 0.50)',
        justifyContent: 'center',
        alignItems: 'center'
    },

    input__password:{
        color: '#FFF',
        width: '80%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFF',
        paddingLeft: 20,
        paddingTop: 5,
        paddingBottom: 5,
        fontFamily: 'Montserrat',
        fontSize: 16,
        fontStyle: 'normal',
        marginTop: 15
    },
    profile__saveBtn:{
        bottom: 15,
        right: 15,
        position: "absolute"
    },
    profile__title: {
        color: 'rgba(207, 207, 207, 0.80)',
        textShadowColor: '0px 0px 70px 0px rgba(45, 122, 238, 0.66)',
        fontSize: 40,
        fontFamily: 'space-armor',
        fontStyle: 'normal',
        fontWeight: 400,
        position: "absolute",
        top: 20,
        left: 75,
        zIndex: 1,
    },
    profile__menuBtn: {
        position: "absolute",
        top: 10,
        left: 30,
    },
    profile__menuIcon: {
        width: 30,
        height: 20,
    },
    profile: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profile__background: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    profile__formBackground: {
        width: '100%',
        height: '100%',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        borderRadius: 35,
    },
    profile__form: {
        top: 15,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        width: '90%',
        height: '70%',
        position: "relative",
    },
});
