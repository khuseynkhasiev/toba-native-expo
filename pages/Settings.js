import {
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity, View,
} from 'react-native';
import * as React from 'react';

import { observer } from 'mobx-react';
import BackgroundMusicStore from '../components/store/BackgroundMusicStore';

import {useEffect} from "react";
import {MenuBackSvgIcon, ProfileSvgIcon} from "../components/svg/Svg";

const Settings = ({ navigation }) => {
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

    return (
        <SafeAreaView style={styles.settings}>
            <Text style={styles.settings__title}>НАСТРОЙКИ</Text>
            <View style={styles.settings__container}>
                <ImageBackground style={styles.settings__background} source={require('../assets/image/settingBackground.png')} />
                <TouchableOpacity style={styles.settings__menuBtn} onPress={() => navigation.navigate('Main')}>
                    <MenuBackSvgIcon />
                </TouchableOpacity>
                <TouchableOpacity style={styles.settings__profileBtn} onPress={() => navigation.navigate('Profile')}>
                    <ProfileSvgIcon />
                </TouchableOpacity>
                <TouchableOpacity style={styles.settings__controlBtn} onPress={() => handleClickPlayBackgroundMusic()}>
                    <Text style={styles.settings__textForm}>Фоновая музыка (вкл/выкл)</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    settings__textForm: {
        color: 'white'
    },
    settings__controlBtn: {
        position: "absolute"
    },
    settings__title: {
        color: 'rgba(255, 255, 255, 0.80)',
        textShadowColor: '0px 0px 70px 0px rgba(45, 122, 238, 0.66)',
        fontSize: 38,
        fontFamily: 'comics-toba',
        fontStyle: 'normal',
        fontWeight: 400,
        position: "absolute",
        top: 25,
        left: 75,
        zIndex: 1,
    },
    settings__container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
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
