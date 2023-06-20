import {
    ImageBackground,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

export default function MainPage({ navigation }) {
    let titleImg = require('../assets/image/title.jpg');
    const handleSeriesTitle = () => {
        navigation.navigate('Series')
    }
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.img} source={titleImg} />
            <TouchableOpacity style={styles.btn} onPress={handleSeriesTitle}>
                <Text style={styles.text}>Читать</Text>
            </TouchableOpacity>
            <StatusBar hidden />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    btn: {
        position: "absolute",
        width: '25%',
    },
    img: {
        width: '100%',
        height: '100%',
        filter: 'blur(1px)'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        borderRadius: 10,
        textAlign: 'center',
        backgroundColor: 'rgb(235, 93, 61)'
    }
});
