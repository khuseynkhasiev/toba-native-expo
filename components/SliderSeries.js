import 'react-native-gesture-handler';
import {StyleSheet, View, Image, Text, FlatList, Dimensions, TouchableOpacity} from 'react-native';
import * as React from "react";
import SliderItem from "./SliderItem";

const { width, height} = Dimensions.get('window')

const Separator = () => {
    return <View style={styles.separator} />;
};
export default function SliderSeries() {
    const series = [
        {
            id: 1,
            title: '1',
            subtitle: 'Краткое описание серии, не более чем два преложения. Допустим это второе предложение чтобы ...',
            subtitleMax: 'Краткое описание серии, не более чем два преложения.Допустим это второе предложение чтобы обозначить максимальное количство символов. \n' +
                'Дополнительное описание.Краткое описание серии, не более чем два преложения.Допустим это второе предложение чтобы обозначить максимальное количство символов. \n',
            img: require('../assets/image/series/seriestitleone.jpg')
        },
        {
            id: 2,
            title: '2',
            subtitle: 'Краткое описание серии, не более чем два преложения. Допустим это второе предложение чтобы ...',
            subtitleMax: 'Краткое описание серии, не более чем два преложения.Допустим это второе предложение чтобы обозначить максимальное количство символов. \n' +
                'Дополнительное описание.Краткое описание серии, не более чем два преложения.Допустим это второе предложение чтобы обозначить максимальное количство символов. \n' +
                'Дополнительное описание Краткое описание серии, не более чем два преложения.Допустим это второе предложение чтобы обозначить максимальное количство символов. \n' +
                'Дополнительное описание ',
            img: require('../assets/image/series/seriestitletwo.jpg')
        },
        {
            id: 3,
            title: '3',
            subtitle: 'Краткое описание серии, не более чем два преложения. Допустим это второе предложение чтобы ...',
            subtitleMax: 'Краткое описание серии, не более чем два преложения.Допустим это второе предложение чтобы обозначить максимальное количство символов. \n' +
                'Дополнительное описание.Краткое описание серии, не более чем два преложения.Допустим это второе предложение чтобы обозначить максимальное количство символов. \n' +
                'Дополнительное описание Краткое описание серии, не более чем два преложения.Допустим это второе предложение чтобы обозначить максимальное количство символов. \n' +
                'Дополнительное описание ',
            img: require('../assets/image/series/seriestitlethree.jpg')
        },
        {
            id: 4,
            title: '4',
            subtitle: 'Краткое описание серии, не более чем два преложения. Допустим это второе предложение чтобы ...',
            subtitleMax: 'Краткое описание серии, не более чем два преложения.Допустим это второе предложение чтобы обозначить максимальное количство символов. \n' +
                'Дополнительное описание.Краткое описание серии, не более чем два преложения.Допустим это второе предложение чтобы обозначить максимальное количство символов. \n' +
                'Дополнительное описание Краткое описание серии, не более чем два преложения.Допустим это второе предложение чтобы обозначить максимальное количство символов. \n' +
                'Дополнительное описание ',
            img: require('../assets/image/series/seriestitleone.jpg')
        },
        {
            id: 5,
            title: '5',
            subtitleMax: 'Краткое описание серии, не более чем два преложения.Допустим это второе предложение чтобы обозначить максимальное количство символов. \n' +
                'Дополнительное описание.Краткое описание серии, не более чем два преложения.Допустим это второе предложение чтобы обозначить максимальное количство символов. \n' +
                'Дополнительное описание Краткое описание серии, не более чем два преложения.Допустим это второе предложение чтобы обозначить максимальное количство символов. \n' +
                'Дополнительное описание ',
            subtitle: 'Краткое описание серии, не более чем два преложения. Допустим это второе предложение чтобы ...',
            img: require('../assets/image/series/seriestitletwo.jpg')
        },
        {
            id: 6,
            title: '6',
            subtitle: 'Краткое описание серии, не более чем два преложения. Допустим это второе предложение чтобы ...',
            subtitleMax: 'Краткое описание серии, не более чем два преложения.Допустим это второе предложение чтобы обозначить максимальное количство символов. \n' +
                'Дополнительное описание.Краткое описание серии, не более чем два преложения.Допустим это второе предложение чтобы обозначить максимальное количство символов. \n' +
                'Дополнительное описание Краткое описание серии, не более чем два преложения.Допустим это второе предложение чтобы обозначить максимальное количство символов. \n' +
                'Дополнительное описание ',
            img: require('../assets/image/series/seriestitlethree.jpg')
        },
        {
            id: 7,
            title: '7',
            subtitle: 'Краткое описание серии, не более чем два преложения. Допустим это второе предложение чтобы ...',
            subtitleMax: 'Краткое описание серии, не более чем два преложения.Допустим это второе предложение чтобы обозначить максимальное количство символов. \n' +
                'Дополнительное описание.Краткое описание серии, не более чем два преложения.Допустим это второе предложение чтобы обозначить максимальное количство символов. \n' +
                'Дополнительное описание Краткое описание серии, не более чем два преложения.Допустим это второе предложение чтобы обозначить максимальное количство символов. \n' +
                'Дополнительное описание ',
            img: require('../assets/image/series/seriestitleone.jpg')
        },
        {
            id: 8,
            title: '8',
            subtitle: 'Краткое описание серии, не более чем два преложения. Допустим это второе предложение чтобы ...',
            subtitleMax: 'Краткое описание серии, не более чем два преложения.Допустим это второе предложение чтобы обозначить максимальное количство символов. \n' +
                'Дополнительное описание.Краткое описание серии, не более чем два преложения.Допустим это второе предложение чтобы обозначить максимальное количство символов. \n',
            img: require('../assets/image/series/seriestitletwo.jpg')
        },
    ]

    return (
        <View style={styles.sliderSeries}>
            <FlatList
                style={[styles.sliderSeries__container, /*{width: width - 200}*/]}
                contentContainerStyle={styles.listContent}
                data={series}
                keyExtractor={(_, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => <SliderItem item={item} />}
                ItemSeparatorComponent={Separator}
                horizontal
                pagingEnabled
                snapToAlignment='center'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    sliderSeries: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sliderSeries__container: {
        /*width: width - 200,*/
        width: '90%',
        marginLeft: 30,
        maxHeight: '73%'
    },
    listContent: {
        flexGrow: 1,
        alignItems: 'center',
    },
    separator: {
        width: 20, // Ширина отступа между компонентами
    },
});
