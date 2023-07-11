import 'react-native-gesture-handler';
import {StyleSheet, View, TouchableOpacity, Image, Text, Dimensions, ImageBackground} from 'react-native';
import * as React from "react";
import { useNavigation } from '@react-navigation/native';

const { width, height} = Dimensions.get('window');
const itemWidth = (width - 200 - 44) / 3;

export default function SliderItem({item}) {


    const navigation = useNavigation();
    function handleClick(){
        if (item.id === 1) {
            navigation.navigate('SeriesOne')
        }
    }

    return (
        <TouchableOpacity style={[styles.series__container, { width: itemWidth }]} onPress={() => handleClick()}>
            <ImageBackground
                style={styles.series__titleBackground}
                source={require('../assets/image/seriesTitileBackground.png')}
                resizeMode="cover"
                blurRadius={5}
            >
                <Image style={styles.seriesImg} source={item.img} resizeMode="contain"/>
                <View>
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
    series__container: {
        columnGap: 50,
        //width: 200,
        height: 250,
        backdropFilter: 'blur(5px)',
        width: itemWidth,
        borderRadius: 5,
        overflow: 'hidden',
    },
    seriesImg: {
        maxWidth: 400,
        //width: 100,
        width: itemWidth - 10,
        height: 134,
        margin: 'auto',
        marginTop: 19,
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
        textAlign: 'center'
    }
});