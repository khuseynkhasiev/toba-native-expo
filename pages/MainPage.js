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
import {useEffect} from "react";

const MainPage = observer(({ navigation }) => {
    const getUserDate = async () => {
        const token = await AsyncStorage.getItem('userToken');
        api.getUser(token)
            .then((userData) => {
                newGetUserDataStore.updateUserData(userData.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getUserDate();
    },[])

    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.main__textContainer}>
                <Text style={styles.main__title}>TOBA</Text>
                <Text style={styles.main__subtitle}> ANIMICS</Text>
            </View>
            <View style={styles.main__container}>
                <ImageBackground style={styles.main__background} source={require('../assets/image/mainPage.png')} />
                <TouchableOpacity style={styles.main__profileBtn} onPress={() => navigation.navigate('Profile')}>
                    <Image style={styles.main__profileIcon} source={require('../assets/image/profileIcon.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.main__libraryBtn} onPress={() => navigation.navigate('Library')}>
                    <Image style={styles.main__libraryIcon} source={require('../assets/image/libraryIcon.png')}></Image>
                    <Text style={styles.main__textBtn}>БИБЛИОТЕКА</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.main__seriesBtn} onPress={() => navigation.navigate('Series')}>
                    <Text style={styles.main__textBtn}>ЧИТАТЬ</Text>
                    <Image style={styles.main__seriesIcon} source={require('../assets/image/seriesIcon.png')}></Image>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
})

const styles = StyleSheet.create({
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
        fontFamily: 'space-armor',
        color: 'rgba(207, 207, 207, 0.80)',
        textShadowColor: '0px 0px 70px 0px rgba(45, 122, 238, 0.66)',
        fontSize: 96,
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
        right: 30,
        bottom: 15,
        display: "flex",
        flexDirection: 'row',
        columnGap: 5,
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
    main__libraryBtn: {
        position: "absolute",
        left: 30,
        bottom: 15,
        display: "flex",
        flexDirection: 'row',
        columnGap: 5,
    },
    main__profileBtn: {
        position: "absolute",
        top: 8,
        right: 28,
        zIndex: 2,
        color: 'white',
    },
    main__textBtn: {
        fontSize: 15,
        fontWeight: 700,
        fontFamily: 'NanumGothicCodingBold',
        textAlign: 'center',
        color: '#FFF',
        letterSpacing: 5,
    },
});

export default MainPage;
