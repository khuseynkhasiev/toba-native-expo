import {
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import {useState} from "react";
import * as api from "../utils/api";
import * as React from "react";
import {observer} from "mobx-react-lite";
import newUserDataStore from "../components/store/createUserDataStore";
import PopupRegister from "../components/popupRegister";


const RegisterPageTwo = observer(({ navigation }) => {

    const [email, setEmail] = useState('');
    const [emailIsError, setEmailIsError] = useState(false);
    const [emailErrorInputText, setEmailErrorInputText] = useState('');

    const [password, setPassword] = useState('');
    const [passwordIsError, setPasswordIsError] = useState(false);
    const [passwordErrorInputText, setPasswordErrorInputText] = useState('');

    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [passwordRepeatIsError, setPasswordRepeatIsError] = useState(false);
    const [passwordRepeatErrorInputText, setPasswordRepeatErrorInputText] = useState('');

    const [popupRegisterText, setPopupRegisterText] = useState('');
    const [popupRegisterIsActive, setPopupRegisterIsActive] = useState(false);
    const [popupRegisterIsError, setPopupRegisterIsError] = useState(false);

    function validateEmail(email){
        // Регулярное выражение для проверки валидности email.
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

        const valid = emailPattern.test(email);
        setEmailIsError(!valid);
        if(!valid){
            setEmailErrorInputText('Введите корректную почту')
        }
        return !valid;
    }

    function handleValidationEmail (){
        if (email.length < 1){
            setEmailIsError(true);
            setEmailErrorInputText('Обязательное поле')
            return true;
        } else {
            validateEmail(email);
        }
    }

    function handleBlurInputEmail(){
        handleValidationEmail();
    }

    function handleCheckUniqueEmail(){
        return api.checkUniqueEmail(email)
            .then((isEmail) => {
                setPopupRegisterIsActive(false);
                setPopupRegisterIsError(false);

                setEmailIsError(false);
                setEmailErrorInputText('');
                if(!isEmail){
                    updateNewUserDataStore('email', email);
                    updateNewUserDataStore('password', password);
                    updateNewUserDataStore('password_confirmation', passwordRepeat);
                    navigation.navigate('RegisterFinishPage');
                } else {
                    setEmailIsError(true);
                    setEmailErrorInputText('Такая почта уже существует');
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

    function updateNewUserDataStore (key, value){
        newUserDataStore.updateUserData(key, value);
    }

    function handleBlurInputPassword(){
        if(passwordRepeatErrorInputText === 'Пароли не совпадают'){
            setPasswordRepeatIsError(false);
        }
        if (password.length < 1){
            setPasswordIsError(true);
            setPasswordErrorInputText('Обязательное поле');
        } else {
            if(hasUpperCaseAndLowerCase(password)){
                setPasswordIsError(false);
            } else {
                setPasswordIsError(true);
                setPasswordErrorInputText('Не меньше 8 символов и символ верхнего и нижнего регистра');
            }
        }
    }
    function handleBlurInputRepeatPassword(){
        if(passwordErrorInputText === 'Пароли не совпадают'){
            setPasswordIsError(false);
        }
        if (passwordRepeat.length < 1){
            setPasswordRepeatIsError(true);
            setPasswordRepeatErrorInputText('Обязательное поле');
        } else {
            if(hasUpperCaseAndLowerCase(passwordRepeat)){
                setPasswordRepeatIsError(false);
            } else {
                setPasswordRepeatIsError(true);
                setPasswordRepeatErrorInputText('Не меньше 8 символов и символ верхнего и нижнего регистра');
            }
        }
    }
    function comparePasswords(){
        if(password === passwordRepeat){
            setPasswordRepeatIsError(false);
            setPasswordIsError(false);
            return true;
        } else {
            setPasswordRepeatIsError(true);
            setPasswordIsError(true);
            setPasswordRepeatErrorInputText('Пароли не совпадают');
            setPasswordErrorInputText('Пароли не совпадают');
            return false
        }
    }

    function hasUpperCaseAndLowerCase(str) {
        return /[A-Z]/.test(str) && /[a-z0-9]/.test(str);
    }

    function handleClickNextPage () {
        const isNextPage = comparePasswords();
        if(isNextPage){
            if(!emailIsError){
                handleCheckUniqueEmail();
            }
        }
    }

    return (
        <SafeAreaView style={styles.authorization}>
            <ImageBackground style={styles.authorization__background} source={require('../assets/image/RegisterBg.png')}>
                <View style={styles.authorization__form}>
                    <ImageBackground style={styles.authorization__formBackground} source={require('../assets/image/authorizationFormBg.png')}>
                        <View style={styles.authorization__formContainer}>
                            <View style={styles.authorization__headerBlock}>
                                <View style={styles.authorization__headerTextBlockLeft}>
                                    <Text style={styles.authorization__headerTextLeft}>АВТОРИЗАЦИЯ</Text>
                                </View>
                                <View style={[styles.authorization__headerTextBlockRight, styles.authorization__headerTextBlockLeft_active]}>
                                    <Text style={styles.authorization__headerTextRight}>СОЗДАТЬ УЧЕТНУЮ ЗАПИСЬ</Text>
                                </View>
                            </View>
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
                                <TextInput
                                    style={[styles.input, {color: passwordRepeatIsError ? 'red' : '#FFF'}]}
                                    placeholder="Повторный пароль"
                                    placeholderTextColor="#FFF" // Установите цвет текста placeholder
                                    onChangeText={(text) => setPasswordRepeat(text)}
                                    value={passwordRepeatIsError? passwordRepeatErrorInputText: passwordRepeat}
                                    secureTextEntry={!passwordRepeatIsError} // Скрывает введенный текст (пароль)
                                    onFocus={() => setPasswordRepeatIsError(false)}
                                    onBlur={() => handleBlurInputRepeatPassword()}
                                />
                            <View style={styles.authorization__containerBtn}>
                                <TouchableOpacity style={styles.authorization__btnContainer} title="НАЗАД" onPress={() => navigation.navigate('Authorization')}>
                                    <Text style={styles.authorization__textBtn}>НАЗАД</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.authorization__btnContainer} title="ДАЛЕЕ" onPress={() => handleClickNextPage()}>
                                    <Text style={styles.authorization__textBtn}>ДАЛЕЕ</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.footer__container}>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                {popupRegisterIsActive &&
                    <PopupRegister
                        popupRegisterIsError={popupRegisterIsError}
                        setPopupRegisterIsActive={setPopupRegisterIsActive}
                        popupRegisterText={popupRegisterText}/>
                }
            </ImageBackground>
        </SafeAreaView>
    )
})
const styles = StyleSheet.create({
    footer__container: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    footer__image:{
        width: 100,
        height: 20,
        justifyContent: 'center',
        alignContent: 'center',
    },
    authorization: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
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
    authorization__headerTextBlockLeft: {
        width: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.30)',
        height: 30,
        justifyContent: 'center',
    },
    authorization__headerTextBlockRight: {
        width: '50%',
        backgroundColor: 'rgba(0, 0, 0, 0.50)',
        height: 30,
        justifyContent: 'center',
    },
    authorization__headerTextLeft: {
        color: "#000",
        textAlign: "center",
        fontFamily: "Montserrat",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "500",
        textTransform: "uppercase"
    },
    authorization__headerTextRight: {
        color: "#FFF",
        textAlign: "center",
        fontFamily: "Montserrat",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "500",
        textTransform: "uppercase"
    },
    authorization__headerBlock: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: 600,
        alignContent: 'center',
        alignItems: 'center'
    },
    authorization__headerTextBlockLeft_active: {
        height: 40,
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
    authorization__containerBtn: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    authorization__btnContainer: {
        width: 100,
        height: 30,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        alignItems: 'center',
        alignContent: 'center',
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

export default RegisterPageTwo;
