import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Image,
    Text,
    Dimensions,
} from 'react-native';
import * as React from "react";
import SliderSeries from "../components/SliderSeries";

const { width, height} = Dimensions.get('screen')

export default function SeriesTitle({ navigation }) {
    return (
        <SafeAreaView style={styles.series}>
            <Image
                source={require('../assets/image/libraryBackground.png')}
                style={[StyleSheet.absoluteFillObject]}
            />
            <SliderSeries />
            <TouchableOpacity style={styles.series__profileBtn} onPress={() => navigation.navigate('Profile')}>
                <Image style={styles.series__profileIcon} source={require('../assets/image/profileIcon.svg')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.series__menuBtn} onPress={() => navigation.navigate('Main')}>
                <Image style={styles.series__menuIcon} source={require('../assets/image/menuIcon.svg')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.series__libraryBtn} onPress={() => navigation.navigate('Library')}>
                <Image style={styles.series__libraryIcon} source={require('../assets/image/libraryIcon.svg')}></Image>
                <Text style={styles.series__text}>БИБЛИОТЕКА</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    series: {
        flex: 1,
    },
    backgroundImg: {
        width: width,
        height: height,
    },
    series__profileIcon: {
        width: 45,
        height: 45,
    },
    series__profileBtn: {
        position: "absolute",
        top: 8,
        right: 28,
    },
    series__menuBtn: {
        position: "absolute",
        top: 10,
        left: 30,
    },
    series__menuIcon: {
        width: 30,
        height: 20,
    },
    series__libraryIcon: {
        width: 16,
        height: 20,
        display: "flex",
        flexDirection: 'row'
    },
    series__libraryBtn: {
        position: "absolute",
        left: 30,
        bottom: 15,
        display: "flex",
        flexDirection: 'row',
        columnGap: 5,
    },
    series__text: {
        fontSize: 15,
        fontWeight: 700,
        textAlign: 'center',
        lineHeight: 'normal',
        color: '#FFF',
        fontFamily: 'NanumGothicCodingBold',
    },
    list:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    series__nameSeries: {
        fontSize: 10,
        fontWeight: 'normal',
        color: 'black',
        backgroundColor: '#F0F8FF',
        width: 150,
        padding: 5,
        textAlign: 'left',
    },
    series__subtitle:{
        fontSize: 8,
        fontWeight: 'normal',
        color: 'black',
        backgroundColor: '#F0F8FF',
        width: 150,
        padding: 5,
        textAlign: 'left',
    },
});
