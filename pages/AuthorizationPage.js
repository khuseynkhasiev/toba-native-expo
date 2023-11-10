import {
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
    Text,
    TouchableOpacity,
    Image
} from "react-native";
import {useEffect, useState} from "react";
import * as React from "react";
import * as api from "../utils/api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import newUserDataStore from "../components/store/createUserDataStore";
import PopupRegister from "../components/popupRegister";
import {useNavigation} from "@react-navigation/native";
import { observer } from 'mobx-react';
import BackgroundMusicStore from '../components/store/BackgroundMusicStore';

const Authorization = ({ navigation }) => {

    // Для авторизации
    const [email, setEmail] = useState('');
    const [emailIsError, setEmailIsError] = useState(false);
    const [emailErrorInputText, setEmailErrorInputText] = useState('');

    const [password, setPassword] = useState('');
    const [passwordIsError, setPasswordIsError] = useState(false);
    const [passwordErrorInputText, setPasswordErrorInputText] = useState('Пароль состоит минимум из 8 символов');



    // Для регистрации
    const [name, setName] = useState('');
    const [nameTextIsError, setNameTextIsError] = useState('Обязательное поле');
    const [nameIsError, setNameIsError] = useState(false);

    const [surname, setSurname] = useState('');
    const [surnameTextIsError, setSurnameTextIsError] = useState('Обязательное поле');
    const [surnameIsError, setSurnameIsError] = useState(false);

    const [login, setLogin] = useState('');
    const [loginTextIsError, setLoginTextIsError] = useState('Обязательное поле');
    const [loginIsError, setLoginIsError] = useState(false);

    const [popupRegisterText, setPopupRegisterText] = useState('');
    const [popupRegisterIsActive, setPopupRegisterIsActive] = useState(false);
    const [popupRegisterIsError, setPopupRegisterIsError] = useState(false);

    const navigationNative = useNavigation();

    // переключение между авторизацией и регистрацией
    const [isActive, setIsActive] = useState(true);
    const [isActiveAuthorization, setIsActiveAuthorization] = useState(true);
    const [isActiveRegister, setIsActiveRegister] = useState(false);

    // переключение между авторизацией и регистрацией
    const handleIsActive = () => {
        setIsActive(!isActive);
    }

    const handleIsActiveAuthorization = () => {
        setIsActiveAuthorization(true);
        setIsActiveRegister(false);
    }
    const handleIsActiveRegister = () => {
        setIsActiveAuthorization(false);
        setIsActiveRegister(true);
    }

    // проверка токена, если есть то переход на главную страницу
    const getUserToken = async () => {
        try {
            const value = await AsyncStorage.getItem('userToken');
            if (value !== null) {
                /*console.log('Значение из AsyncStorage: ', value);*/
                navigation.navigate('Main');
            } else {
                console.log('Значение по указанному ключу не найдено.');
            }
        } catch (error) {
            console.error('Ошибка при получении из AsyncStorage: ', error);
        }
    };

    useEffect(() => {
        getUserToken();
    }, [])

    // запуск фоновой музыки
    useEffect(() => {
        if (BackgroundMusicStore.isPlaying) {
            BackgroundMusicStore.playMusic();
        } else {
            BackgroundMusicStore.stopMusic();

        }
    }, [BackgroundMusicStore.isPlaying])

    const handleClickPlayBackgroundMusic = () => {
        if (BackgroundMusicStore.isPlaying) {
            BackgroundMusicStore.stopMusic();
        } else {
            BackgroundMusicStore.playMusic();
        }
    }
    // АВТОРИЗАЦИЯ
    const saveUserToken = async (token) => {
        try {
            await AsyncStorage.setItem('userToken', token);
            console.log('Значение успешно сохранено в AsyncStorage');
            /*navigation.navigate('Main');*/
            // сбрасываем навигационный стек и ставим Main на первое место
            navigationNative.reset({
                index: 0,
                routes: [{ name: 'Main' }], // Переход на экран "Main"
            });
        } catch (error) {
            console.error('Ошибка при сохранении в AsyncStorage: ', error);
        }
    };
    function handleCheckUniqueEmail(){
        return api.checkUniqueEmail(email)
            .then((isEmail) => {
                setPopupRegisterIsActive(false);
                setPopupRegisterIsError(false);

                if(!isEmail){
                    setEmailIsError(true);
                    setEmailErrorInputText('На этой почте не зарегистрирован аккаунт');
                } else {
                    setEmailIsError(false);
                    handleAuthorization();
                }
            })
            .catch((err) => {
                // нужен всплывающий попап
                setPopupRegisterIsActive(true);
                setPopupRegisterIsError(true);
                // нужен всплывающий попап
                if (err instanceof TypeError && err.message === 'Failed to fetch') {
                    // Обработка ошибки, если нет интернет-соединения
                    console.error('Нет интернет-соединения');
                    setPopupRegisterText('Нет интернет-соединения')
                } else {
                    console.error('Необработанная ошибка:', err);
                    setPopupRegisterText('Что то не так, попробуйте позже...')
                }
            })
    }

    function handleAuthorization(){
        return api.authorization(email, password)
            .then((data) => {
                setPopupRegisterIsActive(false);
                setPopupRegisterIsError(false);
                saveUserToken(data.message);
            }).catch((err) => {
                console.error(err);
                setPopupRegisterText(err);
                // нужен всплывающий попап
                setPopupRegisterIsActive(true);
                setPopupRegisterIsError(true);
                // нужен всплывающий попап
            })
    }

    function handleClickAuthorization(){

        const isEmail = handleBlurInputEmail();
        const isPassword = handleBlurInputPassword();

        if (!isEmail && !isPassword) {
            handleCheckUniqueEmail();
        }
    }

    function validateEmail(email){
        // Регулярное выражение для проверки валидности email.
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

        const valid = emailPattern.test(email);
        setEmailIsError(!valid);
        //false
        if(!valid){
            setEmailErrorInputText('Введите корректную почту');
        } else {
        }
        return !valid;
    }

    function handleValidationEmail(){
        if (email.length < 1){
            setEmailIsError(true);
            setEmailErrorInputText('Обязательное поле')
            return true;
        } else {
            return validateEmail(email);
        }
    }

    function handleBlurInputEmail(){
        return handleValidationEmail();
    }

    function handleBlurInputPassword(){
        if (password.length < 8){
            setPasswordIsError(true);
            return true;
        } else {
            setPasswordIsError(false);
            return false;
        }
    }

    // РЕГИСТРАЦИЯ

    // Или изменять данные
    function updateNewUserDataStore (key, value){
        newUserDataStore.updateUserData(key, value);
    }

    // Валидация полей
    function handleBlurInputName(){
        if (name.length < 1){
            setNameIsError(true);
            return true;
        } else {
            setNameIsError(false);
            return false;
        }
    }


    function handleBlurInputSurname(){
        if (surname.length < 1){
            setSurnameIsError(true);
            return true;
        } else {
            setSurnameIsError(false);
            return false;
        }
    }
    function handleBlurInputLogin(){
        if (login.length < 1){
            setLoginIsError(true);
            return true;
        } else {
            setLoginIsError(false);
            return false;
        }
    }

    // Переход на след страницу, если валидация прошла успешно
    const handleNextPageClick = () => {
        const isName = handleBlurInputSurname();
        const isSurname = handleBlurInputName();
        const isLogin = handleBlurInputLogin();
        if (!isName && !isSurname && !isLogin){
            handleUniqueLogin();
        }
    }

    // проверка логина на уникальность
    function handleUniqueLogin(){
        return api.checkUniqueLogin(login)
            .then((isLogin) => {
                setPopupRegisterIsActive(false);
                setPopupRegisterIsError(false);
                setLoginIsError(false);
/*
                console.log(isLogin); // проверка существует ли логин, если не существует возвращает false
*/
                updateNewUserDataStore('name', name);
                updateNewUserDataStore('surname', surname);
                updateNewUserDataStore('login', login);

                if(!isLogin) {
                    navigation.navigate('RegisterPageTwo');
                } else {
                    setLoginIsError(true);
                    setLoginTextIsError('Такой логин уже существует')
                }
            })
            .catch((err) => {
                setPopupRegisterIsActive(true);
                setPopupRegisterIsError(true);
                // нужен всплывающий попап
                if (err instanceof TypeError && err.message === 'Failed to fetch') {
                    // Обработка ошибки, если нет интернет-соединения
                    console.error('Нет интернет-соединения');
                    setPopupRegisterText('Нет интернет-соединения')
                } else {
                    console.error('Необработанная ошибка:', err);
                    setPopupRegisterText('Что то не так, попробуйте позже...')
                }
            })
    }

    return (
        <SafeAreaView style={styles.authorization}>
            <ImageBackground style={styles.authorization__background} source={require('../assets/image/RegisterBg.png')}>
                <View style={styles.authorization__form}>
                    <ImageBackground style={styles.authorization__formBackground} source={require('../assets/image/authorizationFormBg.png')}>
                        <View style={styles.authorization__formContainer}>
                            <View style={styles.authorization__headerBlock}>
                                <TouchableOpacity style={[styles.authorization__headerTextBlock, isActiveAuthorization ? styles.authorization__headerTextBlockLeft_active : '']} onPress={() => handleIsActiveAuthorization()}>
                                    <Text style={[styles.authorization__headerText, isActiveAuthorization ? styles.authorization__headerText_active : '']}>АВТОРИЗАЦИЯ</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.authorization__headerTextBlock, isActiveRegister ? styles.authorization__headerTextBlockLeft_active : '']} onPress={() => handleIsActiveRegister()}>
                                    <Text style={[styles.authorization__headerText, isActiveRegister ? styles.authorization__headerText_active : '']}>СОЗДАТЬ УЧЕТНУЮ ЗАПИСЬ</Text>
                                </TouchableOpacity>
                            </View>
                            {isActiveAuthorization ?
                                <>
                                    <TextInput
                                        style={[styles.input, {color: emailIsError ? 'red' : '#FFF'}]}
                                        placeholder="Электронный адрес"
                                        placeholderTextColor="#FFF" // Установите цвет текста placeholder
                                        onChangeText={(text) => setEmail(text)}
                                        value={emailIsError ? emailErrorInputText : email}
                                        onFocus={() => setEmailIsError(false)}
                                        onBlur={() => handleBlurInputEmail()}
                                    />
                                    <TextInput
                                        style={[styles.input, {color: passwordIsError ? 'red' : '#FFF'}]}
                                        placeholder="Пароль"
                                        placeholderTextColor="#FFF" // Установите цвет текста placeholder
                                        onChangeText={(text) => setPassword(text)}
                                        value={passwordIsError ? passwordErrorInputText : password}
                                        secureTextEntry={!passwordIsError} // Скрывает введенный текст (пароль)
                                        onFocus={() => setPasswordIsError(false)}
                                        onBlur={() => handleBlurInputPassword()}
                                    />
                                    <TouchableOpacity style={styles.authorization__btnContainer} title="Войти" onPress={() => handleClickAuthorization()}>
                                        <Text style={styles.authorization__textBtn}>ВОЙТИ</Text>
                                    </TouchableOpacity>
                                </>
                                :
                                <>
                                    <View style={styles.authorization__nameInputBlock}>
                                        <TextInput
                                            style={[
                                                styles.input__firstName,
                                                { color: nameIsError ? 'red' : '#FFF' }
                                            ]}
                                            placeholder="Имя"
                                            placeholderTextColor='#FFF'
                                            onChangeText={(text) => setName(text)}
                                            value={nameIsError ? nameTextIsError : name}
                                            onFocus={() => {
                                                setNameIsError(false);
                                            }} // Поле в фокусе
                                            onBlur={() => handleBlurInputName()}
                                        />
                                        <TextInput
                                            style={[
                                                styles.input__name,
                                                { color: surnameIsError ? 'red' : '#FFF' }
                                            ]}
                                            placeholder="Фамилия"
                                            placeholderTextColor="#FFF" // Установите цвет текста placeholder
                                            onChangeText={(text) => setSurname(text)}
                                            value={surnameIsError ? surnameTextIsError : surname}
                                            onFocus={() => {
                                                setSurnameIsError(false);
                                            }} // Поле в фокусе
                                            onBlur={() => handleBlurInputSurname()}
                                        />
                                    </View>
                                    <TextInput
                                        style={[styles.input, {color: loginIsError ? 'red' : '#FFF'}]}
                                        placeholder="Ваше универсальное имя пользователя"
                                        placeholderTextColor="#FFF" // Установите цвет текста placeholder
                                        onChangeText={(text) => setLogin(text)}
                                        value={loginIsError ? loginTextIsError : login}
                                        onFocus={() => setLoginIsError(false)}
                                        onBlur={() => handleBlurInputLogin()}
                                    />
                                    <View style={styles.authorization__containerBtn}>
                                        <TouchableOpacity style={styles.authorization__btnContainer} title="ДАЛЕЕ" onPress={handleNextPageClick}>
                                            <Text style={styles.authorization__textBtn}>ДАЛЕЕ</Text>
                                        </TouchableOpacity>
                                    </View>
                                </>
                            }
                        </View>
                        <View style={styles.authorization__footerLine}>
                            <View style={styles.authorization__lineLeft}></View>
                            <Text style={styles.authorization__lineText}>или войти через</Text>
                            <View style={styles.authorization__lineRight}></View>
                        </View>
                        <View style={styles.authorization__footer}>
                            <TouchableOpacity>
                                <Image style={styles.main__profileIcon} source={require('../assets/image/authorizationIcons/iconVk.png')}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.main__profileIcon} source={require('../assets/image/authorizationIcons/iconYandex.png')}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.main__profileIcon} source={require('../assets/image/authorizationIcons/iconGoogle.png')}></Image>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>

                </View>
                {popupRegisterIsActive &&
                    <PopupRegister
                        popupRegisterIsError={popupRegisterIsError}
                        setPopupRegisterIsActive={setPopupRegisterIsActive}
                        popupRegisterText={popupRegisterText}/>
                }
                <TouchableOpacity style={styles.soundIcon} onPress={() => handleClickPlayBackgroundMusic()}>
                    <ImageBackground style={styles.soundActiveIcon} source={require('../assets/image/soundActiveIcon.png')}/>
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    soundIcon: {
        position: "absolute",
        right: 10,
        top: 10,
        zIndex: 2,

    },
    soundActiveIcon: {
        height: 40,
        width: 40,
    },
    authorization: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: "relative"
    },
    authorization__background: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    authorization__formBackground: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 35,
        overflow: 'hidden'
    },
    authorization__form: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        width: '84%',
        height: '90%'
    },
/*    authorization__headerTextBlockLeft: {
        width: '50%',
        backgroundColor: 'rgba(0, 0, 0, 0.50)',
        height: 30,
        justifyContent: 'center',
    },*/
    authorization__headerTextBlock: {
        width: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.30)',
        height: 30,
        justifyContent: 'center',
    },

/*    authorization__headerTextBlockRight: {
        width: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.30)',
        height: 30,
        justifyContent: 'center',
    },*/
    authorization__headerTextBlockLeft_active: {
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, 0.50)',
    },
    authorization__headerText: {
        color: "#000",
        textAlign: "center",
        fontFamily: "Montserrat",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "500",
        textTransform: "uppercase"
    },
    authorization__headerText_active: {
        color: "#FFF",
        fontSize: 16,
    },
/*    authorization__headerTextLeft: {
        /!*color: "#FFF",*!/
        textAlign: "center",
        fontFamily: "Montserrat",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "500",
        textTransform: "uppercase"
    },
    authorization__headerTextRight: {
        /!*color: "#000",*!/
        textAlign: "center",
        fontFamily: "Montserrat",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "500",
        textTransform: "uppercase"
    },*/
    authorization__headerBlock: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: 600,
        alignContent: 'center',
        alignItems: 'center'
    },

    authorization__formContainer: {
        rowGap: 15,
        justifyContent: 'center',
        justifyItems: 'center'
    },
    input: {
        color: '#FFF',
        width: 600,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFF',
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    authorization__textBtn: {
        color: '#000',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 'bold',
    },
/*    input__loginError:{
        color: '#000',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 'bold',
    },*/
    authorization__containerBtn: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexDirection: 'row',
    },
    authorization__btnContainer: {
        width: 100,
        height: 30,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        alignItems: 'center',
        alignContent: 'flex-end',
        justifyContent: 'center'
    },
    authorization__footerLine: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 17,
        marginBottom: 10
    },
    authorization__lineLeft: {
        width: '42%',
        height: .5,
        backgroundColor: 'white',
    },
    authorization__lineRight: {
        width: '42%',
        height: .5,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    authorization__lineText: {
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontSize: 10,
        fontStyle: 'normal',
        fontWeight: 500,
        paddingLeft: 9,
        paddingRight: 9
    },
    authorization__footer: {
        flexDirection: 'row',
        columnGap: 50
    },
    authorization__nameInputBlock: {
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    input__firstName: {
        width: '45%',
        color: '#FFF',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFF',
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    input__name: {
        width: '45%',
        color: '#FFF',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFF',
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
});

export default observer(Authorization);
