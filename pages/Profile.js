import {
    ImageBackground,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import * as React from 'react';

export default function Profile({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.backgroundImg} source={require('../assets/image/title.jpg')} />
            <TouchableOpacity style={styles.btnRight} onPress={() => navigation.navigate('Series')}>
                <Text style={styles.textBtn}>Читать</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnLeft} onPress={() => navigation.navigate('Library')}>
                <Text style={styles.textBtn}>Библиотека</Text>
            </TouchableOpacity>
            <StatusBar hidden />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    btnRight: {
        position: "absolute",
        right: 5,
        width: '25%',
    },
    btnLeft: {
        position: "absolute",
        left: 5,
        width: '25%',
    },
    profile: {
        position: "absolute",
        top: 5,
        right: 5,
        width: '10%',
    },
    profileText: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#F0F8FF',
        padding: 5
    },
    backgroundImg: {
        width: '100%',
        height: '100%',
        filter: 'blur(1px)'
        //blurRadios: 5
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    textBtn: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#F0F8FF',
        marginBottom: 5,
    },
});