import {StyleSheet, TouchableOpacity} from "react-native";
import ButtonClickLeft from "../assets/lottie/ButtonClickLeft";
import ButtonClickRight from "../assets/lottie/ButtonClickRight";
import React from "react";


export default function TouchScreen({touchNext, touchBack}) {
    const handleNext = () => {
        touchNext();
    }
    const handleBack = () => {
        touchBack()
    }
    return (
        <>
            <TouchableOpacity
                style={styles.btnLeft}
                onPress={handleBack}
            >
                <ButtonClickLeft/>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btnRight}
                onPress={handleNext}
            >
                <ButtonClickRight/>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    btnRight: {
        position: "absolute",
        top: '50%',
        right: 0,
        width: 80,
        height: 80,
        zIndex: 999,
        transform: [{ translateY: -40 }],
        //backgroundColor: 'red',
        backfaceVisibility: "hidden",
    },
    btnLeft: {
        position: "absolute",
        top: '50%',
        left: 0,
        width: 80,
        height: 80,
        zIndex: 999,
        transform: [{ translateY: -40 }],
        //backgroundColor: 'white',
        backfaceVisibility: "hidden",
    },
});
