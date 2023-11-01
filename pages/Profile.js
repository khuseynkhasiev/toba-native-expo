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
import newGetUserDataStore from '../components/store/getUserDateStore';


export default function Profile({ navigation }) {
    const [popupIsActive, setPopupIsActive] = useState(false);

    console.log(newGetUserDataStore.userData);

    const {
        id, login, name, avatar, surname, email, birthday, email_verified_at, agreement, consent, phone
    } = newGetUserDataStore.userData;
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
    return (
        <SafeAreaView style={styles.profile}>
            <ImageBackground style={styles.profile__background} source={require('../assets/image/profileBackground.png')}>
                <TouchableOpacity style={styles.profile__menuBtn} onPress={() => navigation.navigate('Main')}>
                    <Image style={styles.profile__menuIcon} source={require('../assets/image/menuIcon.png')}></Image>
                </TouchableOpacity>
                <Text style={styles.profile__title}>ПРОФИЛЬ</Text>
                <View style={styles.profile__form}>
                    <ImageBackground style={styles.profile__formBackground} source={require('../assets/image/profileBgForm.png')}>
                        <View style={styles.profile__formTopBlock}>
                            <View style={styles.profile__userImageTop}>
                                { avatar === null
                                    ?
                                    <ImageBackground style={styles.profile__image} source={require('../assets/image/profileCircLeImage.png')}>
                                        <Text style={styles.profile__imageText}>фото профиля</Text>
                                    </ImageBackground>
                                    : ''
/*                                    <ImageBackground style={styles.profile__image} source={{ uri: 'https://animics.ru/api/' + avatar }}>>
                                        <Text style={styles.profile__imageText}>фото профиля</Text>
                                    </ImageBackground>*/
                                }

                            </View>
                            <View style={styles.profile__userInfoTop}>
                                <Text style={styles.profile__loginText}>{login}</Text>
                                <Text style={styles.profile__dateText}>
                                    {birthday.split('-').reverse().join('.')}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.profile__formBottomBlock}>
                            <View style={styles.profile__firstLine}>
                                <View style={styles.profile__textContainer}>
                                    <Text style={styles.profile__text}>{name}</Text>
                                    <View style={styles.profile__line}/>
                                </View>
                                <View style={styles.profile__textContainer}>
                                    <Text style={styles.profile__text}>{surname}</Text>
                                    <View style={styles.profile__line}/>
                                </View>
                            </View>
                            <View style={styles.profile__firstLine}>
                                <View style={styles.profile__textContainer}>
                                    <View style={styles.profile__emailLine}>
                                        <Text style={styles.profile__text}>{email}</Text>
                                        {email_verified_at === null
                                            ? <Image style={styles.profile__cancelIcon} source={require('../assets/image/profileCancelIcon.png')}/>
                                            : <Image style={styles.profile__cancelIcon} source={require('../assets/image/profileTrueIcon.png')}/>
                                        }
                                    </View>
                                    <View style={styles.profile__line}/>
                                    {email_verified_at === null
                                        &&
                                        <View style={styles.profile__lineBlock}>
                                            <Text style={styles.profile__textLine}>*нет подтверждения/ </Text>
                                            <TouchableOpacity>
                                                <Text style={styles.profile__textLine_underline}>отправить повторно?</Text>
                                            </TouchableOpacity>
                                        </View>
                                    }
                                </View>
                                <View style={styles.profile__textContainer}>
                                    <Text style={styles.profile__text}>phone</Text>
                                    <View style={styles.profile__line}/>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                    <TouchableOpacity style={styles.profile__editBtn}  onPress={() => navigation.navigate('ProfileEdit')}>
                        <Image style={styles.profile__editUserIcon} source={require('../assets/image/profileEditUser.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profile__exitBtn} onPress={() => setPopupIsActive(true)}>
                        <ImageBackground style={styles.profile__exitImageBg} source={require('../assets/image/popupExitIcon.png')}>
{/*
                            <Image style={styles.profile__exitIcon} source={require('../assets/image/profileExitIcon.png')}/>
*/}
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.profile__seriesBtn} onPress={() => navigation.navigate('Settings')}>
                    <Text style={styles.profile__textBtn}>НАСТРОЙКИ</Text>
                    <Image style={styles.profile__seriesIcon} source={require('../assets/image/seriesIcon.png')}></Image>
                </TouchableOpacity>

            </ImageBackground>
            {popupIsActive
                &&
                <View style={styles.profile__popupExit}>
                    <Image style={styles.popup__exitIcon} source={require('../assets/image/popupExitIcon.png')}/>
                    <Text style={styles.popup__text}>Вы действительно хотите выйти из аккаунта?</Text>
                    <View style={styles.popup__btnContainer}>
                        <TouchableOpacity style={styles.popup__btnYes} onPress={() => handleExitProfile()}>
                            <View style={styles.popup__btnViewYes}>
                                <Text style={styles.popup__btnTextYes}>ДА</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.popup__btnNo}>
                            <View style={styles.popup__btnViewNo}>
                                <Text style={styles.popup__btnTextNo} onPress={() => setPopupIsActive(false)}>НЕТ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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
        alignItems: 'center'
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
        backgroundColor: 'rgba(6, 6, 6, 0.50);',
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
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 500,
    },
    popup__exitIcon:{
        width: 80,
        height: 80,
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
        alignItems: 'center'
    },
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
        bottom: 10,
        right: 10,
        position: "absolute"
    },
    profile__exitImageBg:{
        width: 70,
        height: 70,
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
    profile__image:{
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
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
