import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Chart = () => {

    const [redLine, setRedLine] = useState(0);
    const [greenLine, setGreenLine] = useState(30);
    const [blueLine, setBlueLine] = useState(15);

    useEffect(() => {
        growthChartBlue();
        growthChartGreen();
        growthChartRed();
    })
    function growthChartRed(){
        if(redLine < 100) {
            for (let i=0; i < 100; i++){
                setTimeout(() => {
                    setRedLine(redLine + 1);
                }, 30)
            }
        }
    }
    function growthChartGreen(){
        if(greenLine < 100) {
            for (let i=0; i < 100; i++){
                setTimeout(() => {
                    setGreenLine(greenLine + 1);
                }, 0)
            }
        }
    }
    function growthChartBlue(){
        if(blueLine < 100) {
            for (let i=0; i < 100; i++){
                setTimeout(() => {
                    setBlueLine(blueLine + 1);
                }, 80)
            }
        }
    }

    return (
        <View style={styles.chartContainer}>
            <View style={[styles.segment, styles.blueSegment , {height: blueLine}]} />
            <Text style={[{fontSize: 13}, {color: 'white'}, {width: 30}]}>{blueLine}</Text>
            <View style={[styles.segment, styles.redSegment, {height: redLine}]} />
            <Text style={[{fontSize: 13}, {color: 'white'}, {width: 30}]}>{redLine}</Text>
            <View style={[styles.segment, styles.greenSegment, {height: greenLine}]} />
            <Text style={[{fontSize: 13}, {color: 'white'}, {width: 30}]}>{greenLine}</Text>
            <View style={[styles.segment, styles.blueSegment , {height: blueLine}]} />
            <Text style={[{fontSize: 13}, {color: 'white'}, {width: 30}]}>{blueLine}</Text>
            <View style={[styles.segment, styles.redSegment, {height: redLine}]} />
            <Text style={[{fontSize: 13}, {color: 'white'}, {width: 30}]}>{redLine}</Text>
            <View style={[styles.segment, styles.greenSegment, {height: greenLine}]} />
            <Text style={[{fontSize: 13}, {color: 'white'}, {width: 30}]}>{greenLine}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    chartContainer: {
        width: '40%',
        height: 110,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        padding: 5,
        top: '25%',
        left: '15%',
        position: "absolute",
        zIndex: 1
    },
    segment: {
        flex: 1,
        marginHorizontal: 5,
        borderRadius: 2,
    },
    blueSegment: {
        //backgroundColor: 'blue',
        width: 10,
        borderColor: 'blue',
        borderWidth: 3
        //height: blueLine
    },
    redSegment: {
        //backgroundColor: 'red',
        width: 10,
        borderColor: 'red',
        borderWidth: 3
        //height: redLine
    },
    greenSegment: {
        //backgroundColor: 'green',
        width: 10,
        borderColor: 'green',
        borderWidth: 3
        //height: greenLine
    },
});

export default Chart;