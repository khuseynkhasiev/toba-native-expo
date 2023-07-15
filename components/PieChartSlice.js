import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const PieChartSlice = ({ percentage, color, borderSize, round }) => {
    const sliceStyle = {
        width: 150,
        aspectRatio: 1,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        margin: 5,
    };

    const sliceBeforeStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: round ? '50%' : 0,
        backgroundImage: `radial-gradient(farthest-side, ${color} 98%, transparent)`,
        backgroundPosition: 'top',
        backgroundSize: `${borderSize} ${borderSize}, auto`,
        backgroundRepeat: 'no-repeat',
        WebkitMaskImage: `radial-gradient(farthest-side, transparent calc(99% - ${borderSize}), #000 calc(100% - ${borderSize}))`,
        maskImage: `radial-gradient(farthest-side, transparent calc(99% - ${borderSize}), #000 calc(100% - ${borderSize}))`,
    };

    const sliceAfterStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        borderRadius: round ? '50%' : 0,
        backgroundColor: color,
        transform: [{ translateY: '-50%' }, { rotate: `${percentage * 3.6}deg` }],
    };

    return (
        <View style={styles.slice}>
            <View style={[sliceStyle, round ? styles.round : null]}>
                <View style={[styles.sliceBefore, sliceBeforeStyle]} />
                <View style={[styles.sliceAfter, sliceAfterStyle]} />
                <Text>{percentage}%</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    slice: {
        width: 150,
        aspectRatio: 1,
    },
    round: {
        borderRadius: '50%',
    },
    sliceBefore: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    sliceAfter: {
        position: 'absolute',
        top: '50%',
        left: '50%',
    },
});

export default PieChartSlice;
