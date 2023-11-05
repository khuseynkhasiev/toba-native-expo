import {
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity, View,
} from 'react-native';
import * as React from 'react';
import * as api from '../utils/api';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect, useState} from "react";
import newGetUserDataStore from '../components/store/getUserDataStore';
import PopupExit from "../components/PopupExit";
import PopupVerify from "../components/PopupVerify";
import {useIsFocused} from '@react-navigation/native';
import {
    EmailVerifyYesSvgIcon,
    MenuBackSvgIcon,
    ProfileEditSvgIcon,
    ProfileExitSvgIcon, ProfileVerifyNoSvgIcon
} from "../components/svg/Svg";

export default function Profile({ navigation }) {


    const [popupExitIsActive, setPopupExitIsActive] = useState(false);
    const [popupVerifyIsActive, setPopupVerifyIsActive] = useState(false);
    const [popupVerifyMessage, setPopupVerifyMessage] = useState('');

    const [token, setToken] = useState('');

    const [userData, setUserData] = useState(newGetUserDataStore.userData);
    // для перерисовки при возвращение по навагации назад, обычный способ не работает, т.к. экран сохраняется в кэш
    const isFocused = useIsFocused();
    useEffect(() => {
        const updateStateUserDate = async () => {
            if (isFocused) {
                setUserData(await newGetUserDataStore.userData);
            }
        }
        updateStateUserDate();
    }, [isFocused]);

    const getUserToken = async () => {
        setToken(await AsyncStorage.getItem('userToken'));
    }
    useEffect(() => {
        getUserToken();
    }, [])

    function deleteProfileToken() {
        try {
            AsyncStorage.removeItem('userToken')
                .then(() => {
                    navigation.navigate('Authorization');
                    console.log('Значение успешно удалено из AsyncStorage');
                })
                .catch((error) => {
                    console.error('Ошибка удаления в AsyncStorage: ', error);
                });
        } catch (error) {
            console.error('Ошибка удаления в AsyncStorage: ', error);
        }
    }

    function handleExitProfile(){
        deleteProfileToken();
    }

    function handleEmailVerify(){
        api.emailVerify(token)
            .then((message) => {
                console.log(message);
                setPopupVerifyMessage(message);
                setPopupVerifyIsActive(true);

            })
            .catch((err) => {
                console.log(err);
                setPopupVerifyMessage(err);
                setPopupVerifyIsActive(true);
            })
    }
    return (
        <SafeAreaView style={styles.profile}>
            <ImageBackground style={styles.profile__background} source={require('../assets/image/profileBackground.png')}>
                <TouchableOpacity style={styles.profile__menuBtn} onPress={() => navigation.navigate('Main')}>
                <MenuBackSvgIcon />
                </TouchableOpacity>
                <Text style={styles.profile__title}>ПРОФИЛЬ</Text>
                <View style={styles.profile__form}>
                    <ImageBackground style={styles.profile__formBackground} source={require('../assets/image/profileBgForm.png')}>
                        <View style={styles.profile__formTopBlock}>
                            <View style={styles.profile__userImageTop}>
                                {userData.avatar === null
                                    ?
                                    <View style={styles.profile__imageCircle} source={require('../assets/image/profileCircLeImage.png')}>
                                        <Text style={styles.profile__imageText}>фото профиля</Text>
                                    </View>
                                    :
                                    <Image style={styles.profile__image} source={{ uri: `https://animics.ru/storage/${userData.avatar.substring(userData.avatar.indexOf("avatars/"))}` }}/>
                                }

                            </View>
                            <View style={styles.profile__userInfoTop}>
                                <Text style={styles.profile__loginText}>{userData.login}</Text>
                                <Text style={styles.profile__dateText}>
                                    {userData.birthday.split('-').reverse().join('.')}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.profile__formBottomBlock}>
                            <View style={styles.profile__firstLine}>
                                <View style={styles.profile__textContainer}>
                                    <Text style={styles.profile__text}>{userData.name}</Text>
                                    <View style={styles.profile__line}/>
                                </View>
                                <View style={styles.profile__textContainer}>
                                    <Text style={styles.profile__text}>{userData.surname}</Text>
                                    <View style={styles.profile__line}/>
                                </View>
                            </View>
                            <View style={styles.profile__firstLine}>
                                <View style={styles.profile__textContainer}>
                                    <View style={styles.profile__emailLine}>
                                        <Text style={styles.profile__text}>{userData.email}</Text>
                                        {userData.email_verified_at === null
                                            ? <ProfileVerifyNoSvgIcon />
                                            /*<Image style={styles.profile__cancelIcon} source={require('../assets/image/profileCancelIcon.png')}/>*/
                                            : /*<Image style={styles.profile__cancelIcon} source={require('../assets/image/profileTrueIcon.png')}/>*/
                                            <EmailVerifyYesSvgIcon />
                                        }
                                    </View>
                                    <View style={styles.profile__line}/>
                                    {userData.email_verified_at === null
                                        &&
                                        <View style={styles.profile__lineBlock}>
                                            <Text style={styles.profile__textLine}>*нет подтверждения/ </Text>
                                            <TouchableOpacity onPress={() => handleEmailVerify()}>
                                                <Text style={styles.profile__textLine_underline}>отправить повторно?</Text>
                                            </TouchableOpacity>
                                        </View>
                                    }
                                </View>
                                <View style={styles.profile__textContainer}>
                                    <Text style={styles.profile__text}>{userData.phone === null ? 'Номер телефона не указан' : userData.phone}</Text>
                                    <View style={styles.profile__line}/>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                    <TouchableOpacity style={styles.profile__editBtn}  onPress={() => navigation.navigate('ProfileEdit')}>
                        <ProfileEditSvgIcon />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profile__exitBtn} onPress={() => setPopupExitIsActive(true)}>
                        <ImageBackground style={styles.profile__exitImageBg} source={require('../assets/image/iconEditBtnCircle.png')}>
                            <ProfileExitSvgIcon />
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.profile__seriesBtn} onPress={() => navigation.navigate('Settings')}>
                    <Text style={styles.profile__textBtn}>НАСТРОЙКИ</Text>
                    <Image style={styles.profile__seriesIcon} source={require('../assets/image/seriesIcon.png')}></Image>
                </TouchableOpacity>

            </ImageBackground>
            {popupExitIsActive
                &&
                <PopupExit handleExitProfile={handleExitProfile} setPopupExitIsActive={setPopupExitIsActive}/>
            }
            {popupVerifyIsActive &&
                <PopupVerify message={popupVerifyMessage} setPopupVerifyIsActive={setPopupVerifyIsActive}/>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    profile__cancelIcon:{
        width: 20,
        height: 20,
    },
    profile__emailLine:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
    profile__lineBlock:{
        flexDirection: "row"
    },
    profile__exitBtn:{
        bottom: 0,
        right: 0,
        position: "absolute"
    },
    profile__exitImageBg:{
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },

    profile__exitIcon:{
        width: 24,
        height: 24,
    },
    profile__editBtn:{
        position: "absolute",
        top: 30,
        right: 30
    },
    profile__editUserIcon:{
        width: 30,
        height: 30,
    },
    profile__textContainer:{
        rowGap: 10
    },
    profile__userImageTop:{
        width: 100,
        height: 100,
        position: "relative"
    },
    profile__imageContainer:{
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        overflow: 'hidden'
    },
    profile__imageCircle: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: "#FFF"
    },
    profile__image:{
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        overflow: 'hidden'
    },
    profile__imageText:{
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 300,
        width: 100,
        /*position: "absolute",*/
    },
    profile__textLine:{
        color: '#FFF',
        fontFamily: 'Montserrat',
        fontSize: 10,
        fontStyle: 'normal',
        fontWeight: 300,
    },
    profile__textLine_underline:{
        color: '#FFF',
        fontFamily: 'Montserrat',
        fontSize: 10,
        fontStyle: 'normal',
        fontWeight: 300,
        textDecorationLine: 'underline',
    },
    profile__formTopBlock:{
        flexDirection: "row",
        columnGap: 30,
        width: '100%',
        paddingTop: 15,
        paddingLeft: 30,
        alignItems: 'flex-end'
    },
    profile__formBottomBlock:{
        paddingTop: 10,
        paddingLeft: 30,
        width: '100%',
        rowGap: 10,
    },
    profile__firstLine:{
        flexDirection: 'row',
        columnGap: 70,
    },
    profile__text:{
        color: '#FFF',
        fontFamily: 'Montserrat',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 300,
        paddingLeft: 15
    },
    profile__line:{
        width: 280,
        height: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.50)'
    },

    profile__userInfoTop:{
        flexDirection: "column",
        rowGap: 10
    },
    profile__loginText:{
        color: '#FFF',
        fontFamily: 'Montserrat',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 500
    },
    profile__dateText:{
        color: '#FFF',
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 500,
        textDecorationLine: 'underline'
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
    profile__seriesBtn: {
        position: "absolute",
        right: 30,
        bottom: 15,
        display: "flex",
        flexDirection: 'row',
        columnGap: 5,
    },
    profile__seriesIcon: {
        width: 12,
        height: 20
    },
    profile__textBtn: {
        fontSize: 15,
        fontWeight: 700,
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'NanumGothicCodingBold',
        letterSpacing: 5,
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
        alignItems: 'center',
        alignContent: 'center',
        /*justifyContent: 'center',*/
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
    profile__formContainer: {
        rowGap: 15,
        justifyContent: 'center',
        justifyItems: 'center',
    },
});
