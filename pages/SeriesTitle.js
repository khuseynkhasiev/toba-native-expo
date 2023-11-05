import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Image,
    Text,
    Dimensions, ImageBackground, View,
} from 'react-native';
import * as React from "react";
import SliderSeries from "../components/SliderSeries";
import {MenuBackSvgIcon, ProfileSvgIcon} from "../components/svg/Svg";

const { width, height} = Dimensions.get('window')

export default function SeriesTitle({ navigation }) {
    return (
        <View style={styles.series}>
            <ImageBackground
                source={require('../assets/image/seriesBackground.png')}
                //style={[StyleSheet.absoluteFillObject]}
                style={styles.backgroundImg}
            />
            <SliderSeries />
            <TouchableOpacity style={styles.series__profileBtn} onPress={() => navigation.navigate('Profile')}>
                <ProfileSvgIcon />
            </TouchableOpacity>
            <TouchableOpacity style={styles.series__menuBtn} onPress={() => navigation.navigate('Main')}>
                <MenuBackSvgIcon />
            </TouchableOpacity>
            <TouchableOpacity style={styles.series__libraryBtn} onPress={() => navigation.navigate('Library')}>
                <Image style={styles.series__libraryIcon} source={require('../assets/image/libraryIcon.png')}></Image>
                <Text style={styles.series__text}>БИБЛИОТЕКА</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    series: {
        flex: 1,
        position: 'relative'
        //backgroundColor: 'red'
    },
    backgroundImg: {
        //...StyleSheet.absoluteFillObject,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    series__profileIcon: {
        width: 45,
        height: 45,
    },
    series__profileBtn: {
        position: "absolute",
        top: 10,
        right: 10,
    },
    series__menuBtn: {
        position: "absolute",
        top: 15,
        left: 15,
    },
    series__menuIcon: {
        width: 30,
        height: 20,
    },
    series__libraryIcon: {
        width: 16,
        height: 20,
/*        display: "flex",
        flexDirection: 'row'*/
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
        color: '#FFF',
        fontFamily: 'NanumGothicCodingBold',
        letterSpacing: 5,
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
