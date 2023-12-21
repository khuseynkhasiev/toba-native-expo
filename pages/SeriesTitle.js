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
import {LibraryButtonSvgIcon, MenuBackSvgIcon, ProfileSvgIcon} from "../components/svg/Svg";
import LottieView from "lottie-react-native";

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
{/*            <TouchableOpacity style={styles.series__libraryBtn} onPress={() => navigation.navigate('Library')}>
                <LottieView
                    source={require('../assets/lottie/libraryBgButton.json')} // Укажите путь к вашему JSON-файлу анимации
                    style={{
                        width: 200,
                        height: 40,
                        position: "absolute",
                    }}
                />
                <LibraryButtonSvgIcon />
            </TouchableOpacity>*/}
        </View>
    )
}
const styles = StyleSheet.create({
    series: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'black'
    },
    backgroundImg: {
        //...StyleSheet.absoluteFillObject,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
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

    series__libraryIcon: {
        width: 16,
        height: 20,
/*        display: "flex",
        flexDirection: 'row'*/
    },
    series__libraryBtn: {
        position: "absolute",
        left: 10,
        bottom: 10,
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

});
