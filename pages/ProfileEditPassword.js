import {
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text, TextInput,
    TouchableOpacity, View,
} from 'react-native';
import * as React from 'react';
import * as api from '../utils/api';
import {useEffect, useState} from "react";
import newGetUserDataStore from "../components/store/getUserDataStore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {MenuBackSvgIcon, NotViewPasswordSvgIcon, ViewPasswordSvgIcon} from "../components/svg/Svg";
import LoadingRequestAnimation from "../assets/lottie/LoadingRequestAnimation";

export default function ProfileEditPassword({ navigation }) {
    const {
        id, login, name, avatar, surname, email, birthday, email_verified_at, agreement, consent, phone
    } = newGetUserDataStore.userData;


    const [password, setPassword] = useState('');
    const [passwordIsError, setPasswordIsError] = useState(false);
    const [passwordErrorInputText, setPasswordErrorInputText] = useState('');

    const [newPassword, setNewPassword] = useState('');
    const [newPasswordIsError, setNewPasswordIsError] = useState(false);
    const [newPasswordErrorInputText, setNewPasswordErrorInputText] = useState('');

    const [newPasswordRepeat, setNewPasswordRepeat] = useState('');
    const [newPasswordRepeatIsError, setNewPasswordRepeatIsError] = useState(false);
    const [newPasswordRepeatErrorInputText, setNewPasswordRepeatErrorInputText] = useState('');
    const [token, setToken] = useState('');

    const [openPassword, setOpenPassword] = useState(false);
    const [openNewPassword, setOpenNewPassword] = useState(false);
    const [openNewPasswordRepeat, setOpenNewPasswordRepeat] = useState(false);

    const [loadingIsActive, setLoadingIsActive] = useState(false);

    const getUserToken = async () => {
        setToken(await AsyncStorage.getItem('userToken'));
    }

    useEffect(() => {
        getUserToken();
    }, [])

    function handleBlurInputPassword(){
        if (password.length < 1){
            setPasswordIsError(true);
            setPasswordErrorInputText('Обязательное поле');
            setOpenPassword(false);
        } else {
            setPasswordIsError(false);
        }
    }
    function handleBlurInputNewPassword(){
        if(newPasswordRepeatErrorInputText === 'Пароли не совпадают'){
            setNewPasswordRepeatIsError(false);
        }
        if (newPassword.length < 1){
            setNewPasswordIsError(true);
            setNewPasswordErrorInputText('Обязательное поле');
            setOpenNewPassword(false);
        } else {
            if(hasUpperCaseAndLowerCase(newPassword)){
                setNewPasswordIsError(false);
            } else {
                setNewPasswordIsError(true);
                setNewPasswordErrorInputText('Не меньше 8 символов и символ верхнего и нижнего регистра');
                setOpenNewPassword(false);
            }
        }
    }
    function handleBlurInputRepeatNewPassword(){
        if(newPasswordErrorInputText === 'Пароли не совпадают'){
            setNewPasswordIsError(false);
        }
        if (newPasswordRepeat.length < 1){
            setNewPasswordRepeatIsError(true);
            setNewPasswordRepeatErrorInputText('Обязательное поле');
        } else {
            if(hasUpperCaseAndLowerCase(newPasswordRepeat)){
                setNewPasswordRepeatIsError(false);
            } else {
                setNewPasswordRepeatIsError(true);
                setNewPasswordRepeatErrorInputText('Не меньше 8 символов и символ верхнего и нижнего регистра');
            }
        }
    }
    function comparePasswords(){
        if(newPassword === newPasswordRepeat){
            setNewPasswordRepeatIsError(false);
            setNewPasswordIsError(false);
            return true;
        } else {
            setNewPasswordRepeatIsError(true);
            setNewPasswordIsError(true);
            setNewPasswordRepeatErrorInputText('Пароли не совпадают');
            setNewPasswordErrorInputText('Пароли не совпадают');
            return false
        }
    }

    function hasUpperCaseAndLowerCase(str) {
        return /[A-Z]/.test(str) && /[a-z0-9]/.test(str);
    }

    const editUserPassword = async () => {
        const token = await AsyncStorage.getItem('userToken');
/*        console.log(token);
        console.log(password);
        console.log(newPassword);
        console.log(newPasswordRepeat);*/

        api.editPasswordUser({newPassword, newPasswordRepeat, token, password})
            .then((userData) => {
                console.log(userData);
                navigation.navigate('ProfileEdit');
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const submitPasswordUser = () => {
        comparePasswords();

        if(!passwordIsError && !newPasswordIsError && !newPasswordRepeatIsError) {
            setLoadingIsActive(true);
            api.userPasswordCheck(password, token)
                .then((data) => {
                    if(data.data){
                        editUserPassword();
                    } else {
                        setPasswordIsError(true);
                        setPasswordErrorInputText('Не верный пароль');
                    }
                })
                .catch((err) => console.log(err))
                .finally(() => setLoadingIsActive(false))
        }
    }
    return (
        <SafeAreaView style={styles.profile}>
            <ImageBackground style={styles.profile__background} source={require('../assets/image/profileBackground.png')}>
                {loadingIsActive && <LoadingRequestAnimation />}
                <TouchableOpacity style={styles.profile__menuBtn} onPress={() => navigation.navigate('Main')}>
                    <MenuBackSvgIcon />
                </TouchableOpacity>
                <Text style={styles.profile__title}>ПРОФИЛЬ</Text>
                <View style={styles.profile__form}>
                    <ImageBackground style={styles.profile__formBackground} source={require('../assets/image/profileBgForm.png')}>
                        <View style={styles.profile__formContent}>
                            <Text style={styles.paragraph}>СМЕНА ПАРОЛЯ</Text>
                            <View style={styles.input__container}>
                                <TextInput
                                    style={[styles.input__password, {color: passwordIsError ? 'red' : '#FFF'}]}
                                    placeholder="Старый пароль"
                                    placeholderTextColor="#FFF" // Установите цвет текста placeholder
                                    onChangeText={(text) => setPassword(text)}
                                    value={openPassword ? password : passwordIsError ? passwordErrorInputText : password}
                                    secureTextEntry={openPassword ? false : !passwordIsError} // Скрывает введенный текст (пароль)
                                    onFocus={() => setPasswordIsError(false)}
                                    onBlur={() => handleBlurInputPassword()}
                                />
                                <TouchableOpacity style={styles.passwordIconSvgButton} onPress={() => setOpenPassword(!openPassword)}>
                                    {
                                        openPassword
                                            ? <ViewPasswordSvgIcon />
                                            : <NotViewPasswordSvgIcon />
                                    }
                                </TouchableOpacity>
                            </View>
                            <View style={styles.input__container}>
                                <TextInput
                                    style={[styles.input__password, {color: newPasswordIsError ? 'red' : '#FFF'}]}
                                    placeholder="Новый пароль"
                                    placeholderTextColor="#FFF" // Установите цвет текста placeholder
                                    onChangeText={(text) => setNewPassword(text)}
                                    value={openNewPassword ? newPassword : newPasswordIsError ? newPasswordErrorInputText : newPassword}
                                    secureTextEntry={openNewPassword ? false : !newPasswordIsError} // Скрывает введенный текст (пароль)
                                    onFocus={() => setNewPasswordIsError(false)}
                                    onBlur={() => handleBlurInputNewPassword()}
                                />
                                <TouchableOpacity style={styles.passwordIconSvgButton} onPress={() => setOpenNewPassword(!openNewPassword)}>
                                    {
                                        openNewPassword
                                            ? <ViewPasswordSvgIcon />
                                            : <NotViewPasswordSvgIcon />
                                    }
                                </TouchableOpacity>
                            </View>
                            <View style={styles.input__container}>
                                <TextInput
                                    style={[styles.input__password, {color: newPasswordRepeatIsError ? 'red' : '#FFF'}]}
                                    placeholder="Повторить новый пароль"
                                    placeholderTextColor="#FFF" // Установите цвет текста placeholder
                                    onChangeText={(text) => setNewPasswordRepeat(text)}
                                    value={openNewPasswordRepeat ? newPasswordRepeat : newPasswordRepeatIsError ? newPasswordRepeatErrorInputText: newPasswordRepeat}
                                    secureTextEntry={openNewPasswordRepeat ? false : !newPasswordRepeatIsError} // Скрывает введенный текст (пароль)
                                    onFocus={() => setNewPasswordRepeatIsError(false)}
                                    onBlur={() => handleBlurInputRepeatNewPassword()}
                                />
                                <TouchableOpacity style={styles.passwordIconSvgButton} onPress={() => setOpenNewPasswordRepeat(!openNewPasswordRepeat)}>
                                    {
                                        openNewPasswordRepeat
                                            ? <ViewPasswordSvgIcon />
                                            : <NotViewPasswordSvgIcon />
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                    <TouchableOpacity style={styles.profile__backEditProfile} onPress={() => navigation.navigate('ProfileEdit')}>
                        <View style={styles.profile__saveBtnContainer}>
                            <Text style={styles.profile__saveBtnText}>НАЗАД</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profile__saveBtn} onPress={() => submitPasswordUser()}>
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

    input__container: {
        width: '90%',
        position: "relative",
    },
    passwordIconSvgButton: {
        position: 'absolute',
        right: 15,
        top: 10,
    },
/*    input: {
        color: '#FFF',
        minWidth: '90%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFF',
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },*/


    input__password:{
        color: '#FFF',
        width: '100%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFF',
        paddingLeft: 20,
        paddingTop: 5,
        paddingBottom: 5,
        fontFamily: 'Montserrat',
        fontSize: 13,
        fontStyle: 'normal',
        marginTop: 10
    },
    profile__saveBtn:{
        bottom: 10,
        right: 15,
        position: "absolute"
    },
    profile__backEditProfile:{
        bottom: 10,
        left: 15,
        position: "absolute"
    },
    profile__title: {
        color: 'rgba(255, 255, 255, 0.80)',
        textShadowColor: '0px 0px 70px 0px rgba(45, 122, 238, 0.66)',
        fontSize: 38,
        fontFamily: 'comics-toba',
        /*fontFamily: 'Montserrat',*/
        fontStyle: 'normal',
        fontWeight: 400,
        position: "absolute",
        top: 25,
        left: 75,
        zIndex: 1,
    },
    profile__menuBtn: {
        position: "absolute",
        top: 15,
        left: 15,
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
