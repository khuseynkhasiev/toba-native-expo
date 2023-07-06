import {
    Image,
    ImageBackground,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity, View,
} from 'react-native';
import * as React from 'react';

export default function Profile({ navigation }) {
    return (
        <SafeAreaView style={styles.profile}>
            <Text style={styles.profile__title}>PROFILE</Text>
            <View style={styles.profile__container}>
                <ImageBackground style={styles.profile__background} source={require('../assets/image/profileBackground.png')} />
                <TouchableOpacity style={styles.profile__menuBtn} onPress={() => navigation.navigate('Main')}>
                    <Image style={styles.profile__menuIcon} source={require('../assets/image/menuIcon.svg')}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profile__libraryBtn} onPress={() => navigation.navigate('Library')}>
                    <Image style={styles.profile__libraryIcon} source={require('../assets/image/libraryIcon.svg')}></Image>
                    <Text style={styles.profile__text}>БИБЛИОТЕКА</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profile__seriesBtn} onPress={() => navigation.navigate('Series')}>
                    <Text style={styles.profile__text}>ЧИТАТЬ</Text>
                    <Image style={styles.profile__seriesIcon} source={require('../assets/image/seriesIcon.svg')}></Image>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    profile__title: {
        color: 'rgba(207, 207, 207, 0.80)',
        textShadowColor: '0px 0px 70px 0px rgba(45, 122, 238, 0.66)',
        fontSize: 40,
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
        letterSpacing: 30,
        position: "absolute",
        top: 50,
        right: 30,
        zIndex: 1,
    },
    profile__container: {
        width: '100%',
        height: '100%',
        //position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
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
        flex: 1,
/*        alignItems: 'center',
        justifyContent: 'flex-end',*/
    },
    profile__background: {
        width: '100%',
        height: '100%',
    },
    profile__libraryIcon: {
        width: 16,
        height: 20,
        display: "flex",
        flexDirection: 'row'
    },
    profile__libraryBtn: {
        position: "absolute",
        left: 30,
        marginBottom: 15,
        display: "flex",
        flexDirection: 'row',
        columnGap: 5,
    },
    profile__profileIcon: {
        width: 45,
        height: 45,
        //resizeMode: 'cover'
    },
    profile__seriesBtn: {
        position: "absolute",
        right: 30,
        marginBottom: 15,
        display: "flex",
        flexDirection: 'row',
        columnGap: 5,
    },
    profile__seriesIcon: {
        width: 12,
        height: 20
    },
    profile__profileBtn: {
        position: "absolute",
        top: 8,
        right: 28,
    },
    profile__text: {
        fontSize: 15,
        fontWeight: 700,
        textAlign: 'center',
        lineHeight: 'normal',
        color: '#FFF',
    },
});