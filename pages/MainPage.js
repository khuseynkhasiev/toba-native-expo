import {
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import newGetUserDataStore from '../components/store/getUserDataStore';
import {observer} from "mobx-react-lite";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as api from "../utils/api";
import {useEffect, useState} from "react";
import {LibraryButtonSvgIcon, MenuBackSvgIcon, ProfileSvgIcon, ReadButtonSvgIcon} from "../components/svg/Svg";
import * as React from "react";
import LottieView from 'lottie-react-native';
import LoadingRequestAnimation from "../assets/lottie/LoadingRequestAnimation";


const MainPage = observer(({ navigation }) => {
    const [loadingIsActive, setLoadingIsActive] = useState(true);

    const getUserDate = async () => {
        setLoadingIsActive(true);
        const token = await AsyncStorage.getItem('userToken');
        api.getUser(token)
            .then((userData) => {
                newGetUserDataStore.updateUserData(userData.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => setLoadingIsActive(false))
    }

    useEffect(() => {
        getUserDate();
    },[])

    return (
        <SafeAreaView style={styles.main}>
            {loadingIsActive && <LoadingRequestAnimation />}

            <View style={styles.main__textContainer}>
                <Text style={styles.main__title}>ТОБА</Text>
                <Text style={styles.main__subtitle}>ANIMICS</Text>
            </View>
            <View style={styles.main__container}>
                <ImageBackground style={styles.main__background} source={require('../assets/image/mainPage.png')} />
                {
                    !loadingIsActive &&
                    <>
                        <TouchableOpacity style={styles.main__profileBtn} onPress={() => navigation.navigate('Profile')}>
                            <ProfileSvgIcon />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.main__libraryBtn} onPress={() => navigation.navigate('Library')}>
                            <LottieView
                                source={require('../assets/lottie/libraryBgButton.json')} // Укажите путь к вашему JSON-файлу анимации
                                style={{
                                    width: 200,
                                    height: 40,
                                    position: "absolute",
                                }}
                            />
                            <LibraryButtonSvgIcon />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.main__seriesBtn} onPress={() => navigation.navigate('Series')}>
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
                    </>
                }
            </View>
        </SafeAreaView>
    )
})

const styles = StyleSheet.create({
    profile__menuBtn: {
        position: "absolute",
        top: 15,
        left: 15,
    },
    main__container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    main__background: {
        width: '100%',
        height: '100%',
    },
    main__title: {
        fontFamily: 'comics-toba',
        /*fontFamily: 'Montserrat',*/
        color: 'rgba(255, 255, 255, 0.80)',
        textShadowColor: '0px 0px 70px 0px rgba(45, 122, 238, 0.66)',
        fontSize: 128,
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: 'center',
    },
    main__textContainer:{
        position: 'absolute',
        zIndex: 1,
    },
    main__subtitle: {
        fontFamily: 'Montserrat',
        color: '#FFF',
        textAlign: 'center',
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: 400,
        letterSpacing: 60,
    },
    main__profileIcon: {
        width: 45,
        height: 45,
    },
    main__seriesBtn: {
        position: "absolute",
        right: 10,
        bottom: 10,
/*        display: "flex",
        flexDirection: 'row',
        columnGap: 5,*/
    },
    main__seriesIcon: {
        width: 12,
        height: 20
    },
    main__libraryIcon: {
        width: 16,
        height: 20,
        display: "flex",
        flexDirection: 'row'
    },
    main__libraryBtnContainer: {
        borderRadius: 50, // Для border-radius используем borderRadius
        borderWidth: 1, // Для border используем borderWidth
        borderColor: '#FFF', // borderColor задает цвет границы
        background: {
            // Для linear-gradient используем background с LinearGradient
            background: 'linear-gradient(90deg, rgba(79, 17, 255, 0.49) 0%, rgba(255, 255, 255, 0.00) 100%)',
        },
    },
    main__libraryBtn: {
        position: "absolute",
        left: 10,
        bottom: 10,
        display: "flex",
        flexDirection: 'row',
        columnGap: 10,
    },
    main__profileBtn: {
        position: "absolute",
        top: 10,
        right: 10,
        zIndex: 2,
        color: 'white',
    },
    main__libraryTextBtn: {
        fontSize: 15,
        fontWeight: 500,
        fontFamily: 'Montserrat',
        color: '#FFF',
        position: "absolute",
        left: 60,
        bottom: 10,
    },
});

export default MainPage;
