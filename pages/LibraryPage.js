import {
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity, View,
} from 'react-native';
import {MenuBackSvgIcon, ProfileSvgIcon, ReadButtonSvgIcon} from "../components/svg/Svg";
import LottieView from "lottie-react-native";
import * as React from "react";
import TestAnimated from "../components/TestAnimated";

export default function LibraryPage({ navigation }) {

    return (
        <SafeAreaView style={styles.library}>
            <Text style={styles.library__title}>БИБЛИОТЕКА</Text>
            <View style={styles.library__container}>
                <ImageBackground style={styles.library__background} source={require('../assets/image/libraryBackground.png')} />
                <TouchableOpacity style={styles.library__menuBtn} onPress={() => navigation.navigate('Main')}>
                    <MenuBackSvgIcon />
                </TouchableOpacity>
                <TouchableOpacity style={styles.library__profileBtn} onPress={() => navigation.navigate('Profile')}>
                    <ProfileSvgIcon />
                </TouchableOpacity>
                {/*<TestAnimated />*/}

                <TouchableOpacity style={styles.library__seriesBtn} onPress={() => navigation.navigate('Series')}>
                    <LottieView
                        source={require('../assets/lottie/readBgButton.json')} // Укажите путь к вашему JSON-файлу анимации
                        style={{
                            width: 160,
                            height: 40,
                            position: "absolute"
                        }}
                    />
                    <ReadButtonSvgIcon />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    library__container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    library__title:{
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
    library__menuBtn: {
        position: "absolute",
        top: 15,
        left: 15,
    },
    library__menuIcon: {
        width: 30,
        height: 20,
    },
    library: {
        flex: 1,
    },
    library__background: {
        width: '100%',
        height: '100%',
    },
    library__profileIcon: {
        width: 45,
        height: 45,
        //resizeMode: 'cover'
    },
    library__seriesBtn: {
        position: "absolute",
        right: 10,
        bottom: 10,
        display: "flex",
        flexDirection: 'row',
        columnGap: 5,
    },
    library__seriesIcon: {
        width: 12,
        height: 20
    },
    library__profileBtn: {
        position: "absolute",
        top: 10,
        right: 10,
    },
    library__text: {
        fontSize: 15,
        fontWeight: 700,
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'NanumGothicCodingBold',
        letterSpacing: 5,
    },
});
