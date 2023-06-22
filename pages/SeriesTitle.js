import {ImageBackground, SafeAreaView, StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';

export default function SeriesTitle({ navigation }) {
    let titleImg = require('../assets/image/title.jpg');
    let seriesTwo = require('../assets/image/series-two.png');

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.backgroundImg} source={titleImg}/>
            <View style={styles.seriesContainer}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SeriesOne')}>
                    <Image style={styles.seriesImg}
                           source={seriesTwo}
                    />
                    <Text style={styles.nameSeries}>1 cерия</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SeriesOne')}>
                    <Image style={styles.seriesImg}
                           source={seriesTwo}
                    />
                    <Text style={styles.nameSeries}>2 cерия</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SeriesOne')}>
                    <Image style={styles.seriesImg}
                           source={seriesTwo}
                    />
                    <Text style={styles.nameSeries}>3 cерия</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    btn: {
        alignItems: "center"
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
        filter: 'blur(3px)'
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
        fontSize: 30,
        fontWeight: 'normal',
        color: 'steelblue',
    },
    seriesImg: {
        maxWidth: 400,
        width: 100,
        height: 134,
    }
});
