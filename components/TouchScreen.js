import { StyleSheet, TouchableOpacity } from "react-native";


export default function TouchScreen({ touchNext, touchBack }) {
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
            ></TouchableOpacity>
            <TouchableOpacity
                style={styles.btnRight}
                onPress={handleNext}
            ></TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    btnRight: {
        position: "absolute",
        top: 0,
        right: 0,
        width: "50%",
        height: "100%",
        zIndex: 999,
        //backgroundColor: 'red',
        backfaceVisibility: "hidden",
    },
    btnLeft: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "50%",
        height: "100%",
        zIndex: 999,
        //backgroundColor: 'white',
        backfaceVisibility: "hidden",
    },
});
