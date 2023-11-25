import 'react-native-gesture-handler';
import {StyleSheet, View, TouchableOpacity, Image, Text, Dimensions, ImageBackground} from 'react-native';
import * as React from "react";
import { useNavigation } from '@react-navigation/native';
import BackgroundMusicStore from "./store/BackgroundMusicStore";
import {useState} from "react";
import {ReadSeriesButtonSvgIcon} from "./svg/Svg";
import LottieView from "lottie-react-native";

const { width, height} = Dimensions.get('window');
const itemWidth = (width - 200 - 44) / 3;
const sliderHeight = height * 0.7;
export default function SliderItem({item, activeCardId, setActiveCardId}) {

/*
    const [isActiveSeries, setIsActiveSeries] = useState(false);
*/

    const navigation = useNavigation();

    function handleClickSeriesCard(){
        setActiveCardId(item.id === activeCardId ? null : item.id);
    }

    const isActiveSeries = item.id === activeCardId;

    function handleClickReadSeries(){
        const isActive = BackgroundMusicStore.isPlaying;
        if (item.id === 1) {
            //navigation.navigate('SeriesOnePage');
            navigation.navigate('NewYear', {isActiveBackgroundMusic: isActive});
        }
        if(BackgroundMusicStore.isPlaying){
            BackgroundMusicStore.stopMusic();
        }

    }
    return (
        <TouchableOpacity
            style={[styles.series__container, isActiveSeries && styles.series__container_active/* { width: itemWidth, height: sliderHeight }*/]}
            onPress={() => handleClickSeriesCard()}>
            <ImageBackground
                style={[styles.series__titleBackground, isActiveSeries && styles.series__titleBackground_active]}
                source={require('../assets/image/seriesTitileBackground.png')}
                resizeMode="cover"
                /*blurRadius={5}*/
            >
                <Image style={[styles.series__seriesImg, isActiveSeries && styles.series__seriesImg_active]} source={item.img}/>
                <View style={styles.series__info}>
                    <Text style={[styles.series__nameSeriesNumber, isActiveSeries && styles.series__nameSeriesNumber_active]}>{item.title}
                        <Text style={styles.series__nameSeries}> серия</Text>
                    </Text>
                    {isActiveSeries
                        ?
                        <Text style={styles.series__subtitleMax}>{item.subtitleMax}</Text>
                        :
                        <Text style={styles.series__subtitle}>{item.subtitle}</Text>
                    }
                </View>
                {isActiveSeries &&
                    <TouchableOpacity style={styles.series__readBtn} onPress={() => handleClickReadSeries()}>
                        <LottieView
                            source={require('../assets/lottie/readSeriesBgButton.json')}
                            style={{
                                width: 145,
                                height: 40,
                                position: "absolute",
                            }}
                        />
                            <ReadSeriesButtonSvgIcon />
                    </TouchableOpacity>
                }

            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    series__readBtn: {
      position: "absolute",
      right: 15,
      bottom: 15,
    },
    series__titleBackground: {
        flex: 1,
        width: '100%',
        alignItems: 'center',

        /*justifyContent: 'center',*/

    },
    series__titleBackground_active: {
      flexDirection: "row",
        columnGap: 15,
        alignItems: "flex-start",
        position: "relative",
    },
    series__info: {
        /*height: sliderHeight / 2 - 10*/
        /*height: 260 / 2*/
    },
    series__container: {
        columnGap: 50,
        //width: 200,
        //height: 250,
        backdropFilter: 'blur(5px)',
        /*width: itemWidth,*/
        width: 162,
        /*height: 270,*/
        height: '95%',
        borderRadius: 15,
        overflow: 'hidden',
    },
    series__container_active: {
        width: 440,

    },
    series__seriesImg: {
        marginTop: 5,
        width: 132,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 10,
        overflow: 'hidden',
    },
    series__seriesImg_active: {
        width: 187,
        height: 240,
        marginLeft: 15
    },
    series__nameSeriesNumber: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: 400,
        fontStyle: 'normal',
        color: '#FFF',
        fontFamily: 'space-armor',
        /*width: itemWidth - 10,*/
        width: 132,
        textAlign: 'left',
    },
    series__nameSeriesNumber_active: {
        marginTop: 15
    },
    series__nameSeries: {
        fontSize: 16,
        fontWeight: 400,
        fontStyle: 'normal',
        color: '#FFF',
        fontFamily: 'comics-toba',
        /*width: itemWidth - 10,*/
        width: 132,
        textAlign: 'left',
    },
    series__subtitle: {
        color: '#FFF',
        fontFamily: 'Montserrat',
        fontSize: 9,
        fontStyle: 'normal',
        fontWeight: 300,
        /*width: itemWidth - 10,*/
        width: 132,
        textAlign: 'left',
        marginTop: 5
    },
    series__subtitleMax: {
        color: '#FFF',
        fontFamily: 'Montserrat',
        fontSize: 9,
        fontStyle: 'normal',
        fontWeight: 300,
        /*width: itemWidth - 10,*/
        width: 208,
        textAlign: 'left',
        marginTop: 5
    }
});
