import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View, StyleSheet } from 'react-native';

const AnimatedPieChart = ({ duration = 2000 }) => {
    const animation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        animateChart();
    }, []);

    const animateChart = () => {
        Animated.timing(animation, {
            toValue: 100,
            duration: duration,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start();
    };

    const chartStyles = {
        width: '100%',
        aspectRatio: 1,
        position: 'relative',
        borderRadius: 50,
        borderWidth: 10,
        borderColor: '#ECECEC',
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
    };

    const fillStyles = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: animation.interpolate({
            inputRange: [0, 100],
            outputRange: ['0%', '100%'],
        }),
        backgroundColor: '#FFC107',
    };

    return (
        <View style={styles.container}>
            <View style={chartStyles}>
                <Animated.View style={fillStyles} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '30%',
        width: '30%',
    },
});

export default AnimatedPieChart;
