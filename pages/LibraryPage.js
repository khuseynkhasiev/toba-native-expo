import {
    Image,
    ImageBackground,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity, View,
} from 'react-native';

export default function LibraryPage({ navigation }) {
    return (
        <SafeAreaView style={styles.library}>
            <Text style={styles.library__title}>LIBRARY</Text>
            <View style={styles.library__container}>
                <ImageBackground style={styles.library__background} source={require('../assets/image/libraryBackground.png')} />
                <TouchableOpacity style={styles.library__menuBtn} onPress={() => navigation.navigate('Main')}>
                    <Image style={styles.library__menuIcon} source={require('../assets/image/menuIcon.svg')}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.library__profileBtn} onPress={() => navigation.navigate('Profile')}>
                    <Image style={styles.library__profileIcon} source={require('../assets/image/profileIcon.svg')}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.library__seriesBtn} onPress={() => navigation.navigate('Series')}>
                    <Text style={styles.library__text}>ЧИТАТЬ</Text>
                    <Image style={styles.library__seriesIcon} source={require('../assets/image/seriesIcon.svg')}></Image>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    library__container: {
        width: '100%',
        height: '100%',
        //position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    library__title:{
        color: 'rgba(207, 207, 207, 0.80)',
        textShadowColor: '0px 0px 70px 0px rgba(45, 122, 238, 0.66)',
        fontSize: 64,
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
        letterSpacing: 30,
        position: "absolute",
        top: 50,
        left: 30,
        zIndex: 1,
    },
    library__menuBtn: {
        position: "absolute",
        top: 10,
        left: 30,
    },
    library__menuIcon: {
        width: 30,
        height: 20,
    },
    library: {
        flex: 1,
/*        alignItems: 'center',
        justifyContent: 'center',*/
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
        right: 30,
        marginBottom: 15,
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
        top: 8,
        right: 28,
    },
    library__text: {
        fontSize: 15,
        fontWeight: 700,
        textAlign: 'center',
        lineHeight: 'normal',
        color: '#FFF',
    },
});