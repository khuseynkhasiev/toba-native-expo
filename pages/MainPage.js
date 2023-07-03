import {
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

export default function MainPage({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.backgroundImg} source={require('../assets/image/title.jpg')} />
            <TouchableOpacity style={styles.btnRight} onPress={() => navigation.navigate('Series')}>
                <Text style={styles.text}>Читать</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnLeft} onPress={() => navigation.navigate('Library')}>
                <Text style={styles.text}>Библиотека</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profile} onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.profileText}>Профиль</Text>
            </TouchableOpacity>
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
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#F0F8FF',
        padding: 3
    },
    backgroundImg: {
        width: '100%',
        height: '100%',
        filter: 'blur(1px)'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#F0F8FF',
        marginBottom: 5
    },
});
