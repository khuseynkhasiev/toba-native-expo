import {ImageBackground, SafeAreaView, StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';

export default function SeriesTitle({ navigation }) {
    const titleImg = require('../assets/image/title.jpg');
    /*const seriesTwo = require('../assets/image/series-two.png');*/

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.backgroundImg} source={titleImg}/>
            <View style={styles.seriesContainer}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SeriesOne')}>
                    <Image style={styles.seriesImg}
                           source={require('../assets/image/seriestitleone.jpg')}
                    />
                    <Text style={styles.nameSeries}>1 cерия</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SeriesOne')}>
                    <Image style={styles.seriesImg}
                           source={require('../assets/image/seriestitletwo.jpg')}
                    />
                    <Text style={styles.nameSeries}>2 cерия</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SeriesOne')}>
                    <Image style={styles.seriesImg}
                           source={require('../assets/image/seriestitlethree.jpg')}
                    />
                    <Text style={styles.nameSeries}>3 cерия</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.btnLeft} onPress={() => navigation.navigate('Main')}>
                <Text style={styles.btnText}>Главная</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnRight} onPress={() => navigation.navigate('Library')}>
                <Text style={styles.btnText}>Библиотека</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    btn: {
        position: 'relative'
    },
    btnLeft: {
        position: "absolute",
        left: 5,
        bottom: 5,
        width: '25%',
    },
    btnRight: {
        position: "absolute",
        right: 5,
        bottom: 5,
        width: '25%',
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#F0F8FF',
        //marginBottom: 5
    },
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    backgroundImg: {
        width: '100%',
        height: '100%',
        //filter: 'blur(3px)',
        blurRadios: 5
    },
    seriesContainer: {
        position: 'absolute',
        flexDirection: 'row',
        columnGap: 20,
    },
    list:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    nameSeries: {
        fontSize: 20,
        fontWeight: 'normal',
        color: 'black',
        backgroundColor: '#F0F8FF',
        borderRadius: 5,
        marginTop: '95%',
        width: 100,
        padding: 5,
        textAlign: 'center',
        position: 'absolute'
    },
    seriesImg: {
        maxWidth: 400,
        width: 100,
        height: 134,
    }
});
