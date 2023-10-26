import {
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity, View,
} from 'react-native';
import * as React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile({ navigation }) {

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
            <Text style={styles.profile__title}>PROFILE</Text>
            <View style={styles.profile__container}>
                <ImageBackground style={styles.profile__background} source={require('../assets/image/profileBackground.png')} />
                <TouchableOpacity style={styles.profile__menuBtn} onPress={() => navigation.navigate('Main')}>
                    <Image style={styles.profile__menuIcon} source={require('../assets/image/menuIcon.png')}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.profile__exitBtn} onPress={handleExitProfile}>
                    <Text style={styles.profile__text}>Выйти из профиля</Text>
                </TouchableOpacity>
{/*                <TouchableOpacity style={styles.profile__libraryBtn} onPress={() => navigation.navigate('Library')}>
                    <Image style={styles.profile__libraryIcon} source={require('../assets/image/libraryIcon.png')}></Image>
                    <Text style={styles.profile__text}>БИБЛИОТЕКА</Text>
                </TouchableOpacity>*/}
                <TouchableOpacity style={styles.profile__seriesBtn} onPress={() => navigation.navigate('Settings')}>
                    <Text style={styles.profile__text}>НАСТРОЙКИ</Text>
                    <Image style={styles.profile__seriesIcon} source={require('../assets/image/seriesIcon.png')}></Image>
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
        fontFamily: 'space-armor',
        fontStyle: 'normal',
        fontWeight: 400,
        position: "absolute",
        top: 50,
        right: 30,
        zIndex: 1,
    },
    profile__container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    profile__menuBtn: {
        position: "absolute",
        top: 10,
        left: 30,
    },
    profile__exitBtn: {
        position: "absolute",
        top: 100,
        left: 30,
    },
    profile__menuIcon: {
        width: 30,
        height: 20,
    },
    profile: {
        flex: 1,
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
        bottom: 15,
        display: "flex",
        flexDirection: 'row',
        columnGap: 5,
    },
    profile__profileIcon: {
        width: 45,
        height: 45,
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
    profile__profileBtn: {
        position: "absolute",
        top: 8,
        right: 28,
    },
    profile__text: {
        fontSize: 15,
        fontWeight: 700,
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'NanumGothicCodingBold',
        letterSpacing: 5,
    },
});
