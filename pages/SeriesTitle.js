import { Image } from 'expo-image';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
//import titleImg from "../assets/image/title.jpg";
import seriesOne from "../assets/image/series-one.png";
import seriesTwo from "../assets/image/series-two.png";
import seriesThree from "../assets/image/series-three.png";
export default function SeriesTitle({ navigation }) {
    let titleImg = require('../assets/image/title.jpg');
    let seriesTwo = require('../assets/image/series-two.png');

    return (
        <SafeAreaView style={styles.series__container}>
            <Image style={styles.series__titleImg} sourse={titleImg}/>
            <View style={styles.series__seriesContainer}>
                <View style={styles.series__item}>
                    <TouchableOpacity onPress={() => navigation.navigate('SeriesOne')}>
                        <Text style={styles.series__nameSeries}>1 cерия</Text>
                    </TouchableOpacity>
                    <Image style={styles.series__seriesImg}
                           sourse={seriesTwo}
                    />
                </View>
                <View style={styles.series__item}>
                    <Text style={styles.series__nameSeries}>2 серия</Text>
                    <Image style={styles.series__seriesImg} sourse={seriesTwo} />
                </View>
                <View style={styles.series__item}>
                    <Text style={styles.series__nameSeries}>3 серия</Text>
                    <Image style={styles.series__seriesImg} sourse={seriesTwo}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    series__container: {
        //flex: 1,
        //width: '100vw',
        //height: '100vh'
    },
    series__titleImg: {
        width: '100%',
        height: '100%',
        //width: 50,
        //height: 200,
        objectFit: 'cover',
        //filter: 'blur(8px)'
    },
    series__seriesContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        padding: 50
    },
    series__list:{
        width: '100%',
        height: '100%',
        //display: flex,
        justifyContent: 'center',
        //column-gap: 15px
    },
    series__item:{
        //display: flex,
        justifyContent: 'center',
        alignItems: 'center'
    /*:after {
            position: absolute;
            content: ' ';
            width: 130px;
            height: 50px;
            top: -275px;
            left: calc((100% - 65px) / 2);
            margin-left: -30px;
            border: solid 1px rgba(137,130,48,.2);
            -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.3), 0 1px 0 rgba(0,0,0,.2);
            background: linear-gradient(top, rgba(254,243,127,.6) 0%,rgba(240,224,54,.6) 100%);
            background:
                -moz-linear-gradient(top, rgba(254,243,127,.6) 0%,
                rgba(240,224,54,.6) 100%);
            background:
                -webkit-gradient(linear, left top, left bottom,
            color-stop(0%,rgba(254,243,127,.6)),
            color-stop(100%,rgba(240,224,54,.6)));
        }*/
    },
    series__nameSeries: {
    //position: absolute;
        fontSize: 55,
        fontWeight: 'normal',
    //cursor: 'pointer';
    /*text-shadow: -1px -1px #FFF,
        -2px -2px #FFF,
        -1px 1px #FFF,
        -2px 2px #FFF,
        1px 1px #FFF,
        2px 2px #FFF,
        1px -1px #FFF,
        2px -2px #FFF,
        -3px -3px 2px #BBB,
        -3px 3px 2px #BBB,
        3px 3px 2px #BBB,
        3px -3px 2px #BBB;*/
    color: 'steelblue',
    // z-index: 1;
    // transition: '1s',
    },
    series__seriesImg:{
        //display: flex;
        maxWidth: 400,
        //height: 100,
        width: '100%',
        //cursor: pointer;
    /*    -webkit-box-shadow:
        0px 0px 8px 8px #262525;
        -moz-box-shadow:
        0px 0px 8px 8px #262525;
        box-shadow:
        0px 0px 8px 8px #262525;*/
    }
});
