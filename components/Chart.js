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
                }, 20)
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
                }, 60)
            }
        }
    }

    return (
        <View style={styles.chart__container}>
            <View style={[styles.segment, styles.chart__blueSegment , {height: blueLine}]} />
            <Text style={styles.chart__text}>{blueLine}</Text>
            <View style={[styles.segment, styles.chart__redSegment, {height: redLine}]} />
            <Text style={styles.chart__text}>{redLine}</Text>
            <View style={[styles.segment, styles.chart__greenSegment, {height: greenLine}]} />
            <Text style={styles.chart__text}>{greenLine}</Text>
            <View style={[styles.segment, styles.chart__blueSegment , {height: blueLine}]} />
            <Text style={styles.chart__text}>{blueLine}</Text>
            <View style={[styles.segment, styles.chart__redSegment, {height: redLine}]} />
            <Text style={styles.chart__text}>{redLine}</Text>
            <View style={[styles.segment, styles.chart__greenSegment, {height: greenLine}]} />
            <Text style={styles.chart__text}>{greenLine}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    chart__text: {
        fontSize: 13,
        color: 'white',
        width: 30
    },
    chart__container: {
        width: '40%',
        height: 110,
        fontWeight: 'bold',
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
    chart__segment: {
        flex: 1,
        marginHorizontal: 5,
        borderRadius: 2,
    },
    chart__blueSegment: {
        backgroundColor: 'blue',
        width: 10,
        /*borderColor: 'blue',
        borderWidth: 3*/
        borderRadius: 2
        //height: blueLine
    },
    chart__redSegment: {
        backgroundColor: 'red',
        width: 10,
        /*borderColor: 'red',
        borderWidth: 3*/
        borderRadius: 2
        //height: redLine
    },
    chart__greenSegment: {
        backgroundColor: 'green',
        width: 10,
        /*borderColor: 'green',
        borderWidth: 3*/
        borderRadius: 2
        //height: greenLine
    },
});

export default Chart;