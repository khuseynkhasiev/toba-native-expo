import {
    Image,
    ImageBackground, Linking,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity, View,
} from 'react-native';
import * as React from 'react';

import { observer } from 'mobx-react';
import BackgroundMusicStore from '../components/store/BackgroundMusicStore';

import {useEffect, useState} from "react";
import {
    DeleteAccountButtonSvgIcon, HelpButtonSvgIcon, HelpProjectButtonSvgIcon,
    LanguaryButtonSvgIcon,
    MenuBackSvgIcon,
    NotificationActiveButtonSvgIcon, NotificationDisableButtonSvgIcon,
    PlayButtonSvgIcon,
    ProfileSvgIcon
} from "../components/svg/Svg";
import {Switch} from "react-native-elements";
import PopupConfirmedDeleteAccount from "../components/PopupConfirmedDeleteAccount";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Settings = ({ navigation }) => {

    const [isSoundEnabled, setIsSoundEnabled] = useState(false);
    const [notificationIsActive, setNotificationIsActive] = useState(false);
    const [popupConfirmedDeleteIsActive, setPopupConfirmedDeleteIsActive] = useState(false);

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

    const openPopupConfirmedDeleteAccount = () => {
        setPopupConfirmedDeleteIsActive(true);
    }

    return (
        <SafeAreaView style={styles.settings}>
            <View style={styles.settings__container}>
                <ImageBackground style={styles.settings__background} source={require('../assets/image/settingBackground.png')}>
                    {popupConfirmedDeleteIsActive && <PopupConfirmedDeleteAccount setPopupConfirmedDeleteIsActive={setPopupConfirmedDeleteIsActive}/>}

                    <View style={styles.settings__backgroundContainer}>

                        <ImageBackground style={styles.settings__form} source={require('../assets/image/settingsBgContainer.png')}>
                            <Text style={styles.settings__title}>НАСТРОЙКИ</Text>
                            <View style={styles.settings__row}>
                                <View style={styles.settings__leftBlock}>
                                    <View style={styles.settings__containerText}>
                                        <View style={styles.settings__containerCheck}>
                                            <Text style={styles.settings__leftText}>
                                                Звук/Вкл
                                            </Text>
                                            <Switch
                                                onValueChange={() => setIsSoundEnabled(!isSoundEnabled)}
                                                value={isSoundEnabled}
                                            />
                                        </View>
                                        <View style={styles.settings__containerCheck}>
                                            <Text style={styles.settings__leftText}>
                                                Музыка/Вкл
                                            </Text>
                                            <Switch
                                                onValueChange={() => handleClickPlayBackgroundMusic()}
                                                value={BackgroundMusicStore.isPlaying}
                                            />
                                        </View>
                                    </View>
                                    <TouchableOpacity style={styles.settings__learnComicsBtn}>
                                        <PlayButtonSvgIcon />
                                        <Text style={styles.settings__learnComicsText}>
                                            КАК ПОЛЬЗОВАТЬСЯ КОМИКСОМ
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.settings__rightBlock}>
                                    <View style={styles.settings__rightBlockTop}>
                                        <TouchableOpacity style={styles.settings__card} onPress={() => setNotificationIsActive(!notificationIsActive)}>
                                            {notificationIsActive ?
                                                <NotificationActiveButtonSvgIcon />
                                                :
                                                <NotificationDisableButtonSvgIcon />
                                            }
                                            <Text style={styles.settings__cardText}>
                                                Вкл/
                                                Уведомления
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.settings__card}>
                                            <LanguaryButtonSvgIcon />
                                            <Text style={styles.settings__cardText}>
                                                Язык/ *появится скоро
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.settings__card} onPress={() => openPopupConfirmedDeleteAccount()}>
                                            <DeleteAccountButtonSvgIcon />
                                            <Text style={styles.settings__cardText}>
                                                Удалить
                                                аккаунт
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.settings__rightBlockTop}>
                                        <TouchableOpacity style={styles.settings__card} onPress={() => Linking.openURL('https://pay.cloudtips.ru/p/b7d425cd')}>
                                            <HelpProjectButtonSvgIcon />
                                            <Text style={styles.settings__cardText}>
                                                Помочь проекту
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.settings__card}>
                                            <NotificationActiveButtonSvgIcon />
                                            <Text style={styles.settings__cardText}>
                                                Политика
                                                конф
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.settings__card} onPress={() => Linking.openURL('https://animics.ru/feedback')}>
                                            <HelpButtonSvgIcon />
                                            <Text style={styles.settings__cardText}>
                                                Помощь и поддержка
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                        </ImageBackground>
                    </View>
                </ImageBackground>
                <TouchableOpacity style={styles.settings__menuBtn} onPress={() => navigation.navigate('Main')}>
                    <MenuBackSvgIcon />
                </TouchableOpacity>
                <TouchableOpacity style={styles.settings__profileBtn} onPress={() => navigation.navigate('Profile')}>
                    <ProfileSvgIcon />
                </TouchableOpacity>
{/*                <TouchableOpacity style={styles.settings__controlBtn} onPress={() => handleClickPlayBackgroundMusic()}>
                    <Text style={styles.settings__textForm}>Фоновая музыка (вкл/выкл)</Text>
                </TouchableOpacity>*/}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    settings__row: {
      flexDirection: 'row',
        justifyContent: 'center',
        columnGap: 20
    },
    profile__saveBtn:{
        bottom: 15,
        right: 15,
        position: "absolute"
    },
    settings__rightBlock: {
        width: '50%',
      marginTop: 20,
        rowGap: 15,
    },
    settings__card: {
        flexDirection: 'column',
        rowGap: 7,
        justifyContent: 'center',
        alignItems: "center",
      width: 100,
    },
    settings__rightBlockTop: {
      flexDirection: 'row',
        alignItems: 'flex-start',
    },
    settings__cardText: {
        color: '#FFF',
        fontFamily: 'Montserrat',
        fontSize: 10,
        fontStyle: 'normal',
        fontWeight: 500,
        textAlign: 'center'
    },
    settings__containerCheck: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    switchStyle: {

    },

    settings__learnComicsText: {
        color: '#FFF',
        fontFamily: 'Montserrat',
        fontSize: 10,
        fontStyle: 'normal',
        fontWeight: 500
    },
    settings__learnComicsBtn: {
        width: '100%',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        overflow: 'hidden',
        paddingTop: 14,
        paddingLeft: 20,
        paddingRight: 35,
        paddingBottom: 14,
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 15
    },
    settings__containerText:{
        width: '100%',
        display: "flex",
        flexDirection: "column",
        rowGap: 10
    },
    settings__leftText: {
        color: '#FFF',
        fontFamily: 'Montserrat',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 500,
    },
    settings__leftBlock: {
        width: '40%',
        marginTop: 20
    },
    settings__form: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
        position: "relative",
        borderRadius: 35,
        overflow: "hidden"
    },
    settings__backgroundContainer: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        width: '90%',
        height: '85%',
        position: "relative",
    },
    settings__textForm: {
        color: 'white'
    },
    settings__controlBtn: {
        position: "absolute"
    },
    settings__title: {
        marginTop: 15,
        color: 'rgba(255, 255, 255, 0.80)',
        textShadowColor: '0px 0px 70px 0px rgba(45, 122, 238, 0.66)',
        fontSize: 50,
        fontFamily: 'comics-toba',
        fontStyle: 'normal',
        fontWeight: 400,
/*        position: "absolute",
        top: 25,
        left: 75,
        zIndex: 1,*/
    },
    settings__container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    settings__menuBtn: {
        position: "absolute",
        top: 15,
        left: 15,
    },
    settings__menuIcon: {
        width: 30,
        height: 20,
    },
    settings: {
        flex: 1,
    },
    settings__background: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    settings__libraryIcon: {
        width: 16,
        height: 20,
        display: "flex",
        flexDirection: 'row'
    },
    settings__libraryBtn: {
        position: "absolute",
        left: 30,
        bottom: 15,
        display: "flex",
        flexDirection: 'row',
        columnGap: 5,
    },
    settings__profileIcon: {
        width: 45,
        height: 45,
    },
    settings__seriesBtn: {
        position: "absolute",
        right: 30,
        bottom: 15,
        display: "flex",
        flexDirection: 'row',
        columnGap: 5,
    },
    settings__seriesIcon: {
        width: 12,
        height: 20
    },
    settings__profileBtn: {
        position: "absolute",
        top: 10,
        right: 10,
    },
    settings__text: {
        fontSize: 15,
        fontWeight: 700,
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'NanumGothicCodingBold',
        letterSpacing: 5,
    },
});

export default observer(Settings);
