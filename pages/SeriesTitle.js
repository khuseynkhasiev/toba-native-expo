import {ImageBackground, SafeAreaView, StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import * as React from "react";

export default function SeriesTitle({ navigation }) {

    return (
        <SafeAreaView style={styles.series}>
            <ImageBackground style={styles.backgroundImg} source={require('../assets/image/seriesBackground.png')}/>
            <View style={styles.series__container}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SeriesOne')}>
                    <View style={styles.series__block}>
                        <Image style={styles.seriesImg}
                               source={require('../assets/image/seriestitleone.jpg')}
                        />
                        <Text style={styles.series__nameSeries}>1 СЕРИЯ</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SeriesOne')}>
                    <Image style={styles.seriesImg}
                           source={require('../assets/image/seriestitletwo.jpg')}
                    />
                    <Text style={styles.series__nameSeries}>2 СЕРИЯ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SeriesOne')}>
                    <Image style={styles.seriesImg}
                           source={require('../assets/image/seriestitlethree.jpg')}
                    />
                    <Text style={styles.series__nameSeries}>3 СЕРИЯ</Text>
                </TouchableOpacity>
            </View>

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
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    backgroundImg: {
        width: '100%',
        height: '100%',
    },
    series__block: {
      width: 200,
      height: 250,
      filter: 'blur(7.5px)'
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
        marginBottom: 15,
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
    },
    series__container: {
        position: 'absolute',
        flexDirection: 'row',
        columnGap: 22,
        marginBottom: 70
    },
    list:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    series__nameSeries: {
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
