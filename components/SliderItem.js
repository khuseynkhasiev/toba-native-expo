import 'react-native-gesture-handler';
import {StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import * as React from "react";
import { useNavigation } from '@react-navigation/native';

export default function SliderItem({item}) {
    const navigation = useNavigation();
    function handleClick(){
        if (item.id === 1) {
            navigation.navigate('SeriesOne')
        }
    }

    return (
        <TouchableOpacity style={styles.series__container} onPress={() => handleClick()}>
            <Image style={styles.seriesImg} source={item.img} resizeMode="contain"/>
            <View>
                <Text style={styles.series__nameSeries}>{item.title}</Text>
                <Text style={styles.series__subtitle}>{item.subtitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    series__container: {
        columnGap: 50,
        width: 200,
        height: 250,
        backdropFilter: 'blur(5px)',
    },
    seriesImg: {
        maxWidth: 400,
        width: 100,
        height: 134,
        margin: 'auto',
        marginTop: 19,
        marginBottom: 10
    },
    series__nameSeries: {
        fontSize: 16,
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#FFF',
        fontFamily: 'NanumGothicCodingBold',
        width: '100%',
        textAlign: 'center',
    },
    series__subtitle: {
        color: '#FFF',
        fontFamily: 'Montserrat',
        fontSize: 8,
        fontStyle: 'normal',
        fontWeight: 300,
        lineHeight: 'normal',
        width: '100%',
        padding: 10,
    }
});
