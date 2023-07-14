import React, {useEffect, useState} from 'react';
import { View, StyleSheet } from 'react-native';

const Chart = () => {

    const [redLine, setRedLine] = useState(0);
    const [greenLine, setGreenLine] = useState(0);
    const [blueLine, setBlueLine] = useState(0);

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
                }, 40)
            }
        }
    }
    function growthChartGreen(){
        if(greenLine < 100) {
            for (let i=0; i < 100; i++){
                setTimeout(() => {
                    setGreenLine(greenLine + 1);
                }, 30)
            }
        }
    }
    function growthChartBlue(){
        if(blueLine < 100) {
            for (let i=0; i < 100; i++){
                setTimeout(() => {
                    setBlueLine(blueLine + 1);
                }, 25)
            }
        }
    }

    return (
        <View style={styles.chartContainer}>
            <View style={[styles.segment, styles.blueSegment , {height: blueLine}]} />
            <View style={[styles.segment, styles.redSegment, {height: redLine}]} />
            <View style={[styles.segment, styles.greenSegment, {height: greenLine}]} />
        </View>
    );
};

const styles = StyleSheet.create({
    chartContainer: {
        width: '15%',
        height: 110,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        padding: 5,
        top: '20%',
        left: '10%',
        position: "absolute",
        zIndex: 3
    },
    segment: {
        flex: 1,
        marginHorizontal: 2,
        borderRadius: 5,
    },
    blueSegment: {
        backgroundColor: 'blue',
        width: 10,
        //height: blueLine
    },
    redSegment: {
        backgroundColor: 'red',
        width: 10,
        //height: redLine
    },
    greenSegment: {
        backgroundColor: 'green',
        width: 10,
        //height: greenLine
    },
});

export default Chart;