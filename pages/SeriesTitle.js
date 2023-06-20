import {ImageBackground, SafeAreaView, StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
//import titleImg from "../assets/image/title.jpg";
/*import seriesOne from "../assets/image/series-one.png";
import seriesTwo from "../assets/image/series-two.png";
import seriesThree from "../assets/image/series-three.png";*/
export default function SeriesTitle({ navigation }) {
    let titleImg = require('../assets/image/title.jpg');
    let seriesTwo = require('../assets/image/series-two.png');

    return (
        <SafeAreaView style={styles.series__container}>
            <ImageBackground style={styles.series__titleImg} source={titleImg}/>
            <View style={styles.series__seriesContainer}>
                <TouchableOpacity style={styles.series__btn} onPress={() => navigation.navigate('SeriesOne')}>
                    <Image style={styles.series__seriesImg}
                           source={seriesTwo}
                    />
                    <Text style={styles.series__nameSeries}>1 cерия</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.series__btn} onPress={() => navigation.navigate('SeriesOne')}>
                    <Image style={styles.series__seriesImg}
                           source={seriesTwo}
                    />
                    <Text style={styles.series__nameSeries}>2 cерия</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.series__btn} onPress={() => navigation.navigate('SeriesOne')}>
                    <Image style={styles.series__seriesImg}
                           source={seriesTwo}
                    />
                    <Text style={styles.series__nameSeries}>3 cерия</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    series__btn: {
        alignItems: "center"
    },
    series__container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    series__titleImg: {
        width: '100%',
        height: '100%',
        filter: 'blur(3px)'
    },
    series__seriesContainer: {
        position: 'absolute',
        flexDirection: 'row',
        columnGap: '10%'
    },
    series__list:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    series__nameSeries: {
        fontSize: 30,
        fontWeight: 'normal',
        color: 'steelblue',
    },
    series__seriesImg: {
        maxWidth: 400,
        width: 100,
        height: 134,
    }
});
