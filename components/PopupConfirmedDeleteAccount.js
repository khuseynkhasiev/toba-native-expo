import {Text, TouchableOpacity, View, StyleSheet, ImageBackground, TextInput} from "react-native";
import * as React from "react";
import {
    DeleteAccountButtonSvgIcon,
    DeleteConfirmProfilePopupSvgIcon, NotViewPasswordSvgIcon,
    ProfileExitSvgIcon,
    ViewPasswordSvgIcon
} from "./svg/Svg";
import {useEffect, useState} from "react";
import * as api from "../utils/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from "@react-navigation/native";

export default function PopupConfirmedDeleteAccount({setPopupConfirmedDeleteIsActive, handleConfirmedDeleteAccount}){
    const navigation = useNavigation();
    const [popupIsConfirmed, setPopupIsConfirmed] = useState(true);
    const [password, setPassword] = useState('');
    const [passwordIsError, setPasswordIsError] = useState(false);
    const [passwordErrorInputText, setPasswordErrorInputText] = useState('');

    const [token, setToken] = useState('');
    const [openPassword, setOpenPassword] = useState(false);


    const getUserToken = async () => {
        setToken(await AsyncStorage.getItem('userToken'));
    }

    useEffect(() => {
        getUserToken();
    }, [])
    const exitPopup = () => {
        setPopupConfirmedDeleteIsActive(false);
    }

    const nextPopup = () => {
        setPopupIsConfirmed(false)
    }

    function handleBlurInputPassword(){
        if (password.length < 1){
            setPasswordIsError(true);
            setPasswordErrorInputText('Обязательное поле');
            setOpenPassword(false);
        } else {
            setPasswordIsError(false);
        }
    }
    function deleteProfileToken() {
        try {
            AsyncStorage.removeItem('userToken')
                .then(() => {
                    /*navigation.navigate('Authorization');*/
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Authorization' }],
                    });
                    console.log('Значение успешно удалено из AsyncStorage');
                })
                .catch((error) => {
                    console.log('Ошибка удаления в AsyncStorage: ', error);
                });
        } catch (error) {
            console.log('Ошибка удаления в AsyncStorage: ', error);
        }
    }

    const submitPasswordUser = () => {
        if(!passwordIsError) {
            api.userPasswordCheck(password, token)

                .then((data) => {
                    console.log(password);
                    console.log(data.data);
                    if(data.data){
                        setPasswordIsError(false);
                        console.log("удаляем");
                        api.deleteAccountUser(password, token)
                            .then((data) => {
                                console.log(data);
                                deleteProfileToken();
                            })
                            .catch((err) => console.log(err))
                    } else {
                        setPasswordIsError(true);
                        setPasswordErrorInputText('Не верный пароль');
                    }
                    console.log(data);
                })
                .catch((err) => console.log(err))
        }
    }

    return (
        <>
            {popupIsConfirmed
                ?
                <View style={styles.profile__popupExit}>
                    <DeleteAccountButtonSvgIcon />
                    <Text style={styles.popup__text}>Вы действительно хотите удалить из аккаунт?</Text>
                    <View style={styles.popup__btnContainer}>
                        <TouchableOpacity style={styles.popup__btnYes} onPress={() => nextPopup()}>
                            <View style={styles.popup__btnViewYes}>
                                <Text style={styles.popup__btnTextYes}>ДА</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.popup__btnNo} onPress={() => exitPopup()}>
                            <View style={styles.popup__btnViewNo}>
                                <Text style={styles.popup__btnTextNo}>НЕТ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                :
                <View style={styles.profile__popupExit}>
                    <DeleteConfirmProfilePopupSvgIcon />
                    <Text style={styles.popup__text}>Очень жаль, что Вы нас покидаете...</Text>
                    <Text style={styles.popup__textTwo}>Чтобы удалить аккаунт окончательно введите пароль...?</Text>
                    <View style={styles.input__container}>
                        <TextInput
                            style={[styles.input__password, {color: passwordIsError ? 'red' : '#FFF'}]}
                            placeholder="Пароль"
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

                    <TouchableOpacity style={styles.profile__backEditProfile} onPress={() => setPopupConfirmedDeleteIsActive(false)}>
                        <View style={styles.profile__saveBtnContainer}>
                            <Text style={styles.profile__saveBtnText}>ОТМЕНА</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profile__saveBtn} onPress={() => submitPasswordUser()}>
                            <View style={styles.profile__saveBtnContainer}>
                                <Text style={styles.profile__saveBtnText}>УДАЛИТЬ</Text>
                            </View>
                    </TouchableOpacity>
                </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    input__container: {
        width: '75%',
        position: "relative",
    },
    passwordIconSvgButton: {
        position: 'absolute',
        right: 15,
        top: 30,
    },
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
        fontSize: 15,
        fontStyle: 'normal',
        marginTop: 30
    },
    profile__backEditProfile:{
        bottom: 22,
        left: 70,
        position: "absolute"
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
        width: 160,
        height: 30,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.50)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profile__saveBtn:{
        bottom: 22,
        right: 70,
        position: "absolute"
    },
    profile__popupExit:{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: '#000',
        opacity: 0.9,
        zIndex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    popup__btnTextYes: {
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 700,
    },
    popup__btnTextNo: {
        color: '#000',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 700,
    },
    popup__btnContainer: {
        flexDirection: 'row',
        columnGap: 224,
        marginTop: 30,
    },
    popup__btnNo:{
        borderRadius: 10, // border-radius
        backgroundColor: 'rgba(255, 255, 255, 0.50)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    popup__btnViewNo: {
        width: 80,
        height: 30,
        borderRadius: 10, // border-radius
        backgroundColor: 'rgba(255, 255, 255, 0.50)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    popup__btnViewYes:{
        width: 80,
        height: 30,
        borderRadius: 10, // border-radius
        backgroundColor: 'rgba(6, 6, 6, 0.50)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    popup__btnYes:{
        width: 80,
        height: 30,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.50)',


        /*        borderRadius: 10, // border-radius
                backgroundColor: 'rgba(255, 255, 255, 0.5)'*/
    },
    popup__text: {
        width: '75%',
        marginTop: 15,
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 500,
    },
    popup__textTwo: {
        width: '75%',
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 500,
    },
    popup__exitIcon:{
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignItems: "center",
    },
})
