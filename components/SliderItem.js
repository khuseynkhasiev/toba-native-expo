import 'react-native-gesture-handler';
import {StyleSheet, View, TouchableOpacity, Image, Text, Dimensions, ImageBackground} from 'react-native';
import * as React from "react";
import { useNavigation } from '@react-navigation/native';
import PlayBackgroundMusic from "./store/PlayBackgroundMusic";

const { width, height} = Dimensions.get('window');
const itemWidth = (width - 200 - 44) / 3;
const sliderHeight = height * 0.7;
export default function SliderItem({item}) {

    const navigation = useNavigation();
    function handleClick(){
        // логика связки клика с запуском соотвествующей серии
        if (item.id === 1) {
            //navigation.navigate('SeriesOnePage');
            navigation.navigate('NewYear');
        }
        // отключение фоновой музыки при запуски серии
        PlayBackgroundMusic.offPlay();
    }

    return (
        <TouchableOpacity style={[styles.series__container, { width: itemWidth, height: sliderHeight }]} onPress={() => handleClick()}>
            <ImageBackground
                style={styles.series__titleBackground}
                source={require('../assets/image/seriesTitileBackground.png')}
                resizeMode="cover"
                blurRadius={5}
            >
                <Image style={styles.series__seriesImg} source={item.img} resizeMode="contain"/>
                <View style={styles.series__info}>
                    <Text style={styles.series__nameSeries}>{item.title}</Text>
                    <Text style={styles.series__subtitle}>{item.subtitle}</Text>
                </View>
            </ImageBackground>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    series__titleBackground: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    series__info: {
        height: sliderHeight / 2 - 10
    },
    series__container: {
        columnGap: 50,
        //width: 200,
        //height: 250,
        backdropFilter: 'blur(5px)',
        width: itemWidth,
        borderRadius: 5,
        overflow: 'hidden',
    },
    series__seriesImg: {
        maxWidth: 400,
        //width: 100,
        width: itemWidth - 10,
        //height: 134,
        height: sliderHeight / 2,
        margin: 'auto',
        marginTop: 20,
        marginBottom: 10,
        //borderRadius: 5,
        resizeMode: 'contain'
    },
    series__nameSeries: {
        fontSize: 16,
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#FFF',
        fontFamily: 'NanumGothicCodingBold',
        width: itemWidth - 10,
        textAlign: 'center',
    },
    series__subtitle: {
        color: '#FFF',
        fontFamily: 'Montserrat',
        fontSize: 8,
        fontStyle: 'normal',
        fontWeight: 300,
        width: itemWidth - 10,
        padding: 10,
        textAlign: 'center',
    }
});
