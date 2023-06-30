import {useEffect, useRef, useState} from "react";
import {
    Animated,
    SafeAreaView,
    StyleSheet,
    Text,
} from "react-native";

export default function FourScene ({ click }) {

    const open = require("../../assets/scene/4/2.png");
    const close = require("../../assets/scene/4/1.png");

    const fadeAnimScale = useRef(new Animated.Value(1)).current;
    const fadeAnimOpacity = useRef(new Animated.Value(0)).current;

    const [back, setBack] = useState(close);
    const [time, setTime] = useState(false);
    const animScale = () => {
        Animated.sequence([
            Animated.timing(fadeAnimScale, {
                toValue: 3,
                duration: 1800,
                delay: 500,
                useNativeDriver: false,
            }),
        ]).start();
    };
    const animOpacity = () => {
        Animated.timing(fadeAnimOpacity, {
            toValue: time ? 0 : 1,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    };

    useEffect(() => {
        animScale();
        animOpacity();
        setTimeout(() => {
            setTime(true);
        }, 2000)
        setTimeout(() => {
            setBack(open);
        }, 3500)
    }, [click, time]);

    return (
        <SafeAreaView style={styles.wrapper}>
            <Animated.View style={[styles.container_one, { opacity: fadeAnimOpacity }]}>
                <Animated.Image
                    style={[
                        styles.backgroundImg,
                        { transform: [{ scale: fadeAnimScale }] },
                    ]}
                    source={require("../../assets/scene/4/people.png")}
                />
            </Animated.View>
            {
                time &&
                <Animated.View style={styles.container}>
                    <Animated.Image
                        style={styles.backgroundImg}
                        source={back}
                    />
                    <Text style={styles.dialog}>
                        В МОИХ СНАХ МАМА ВСЁ ЕЩЕ ЖИВА.
                    </Text>
                </Animated.View>
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container_one: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 1,
    },
    wrapper: {
        width: "100%",
        height: "100%",
        overflow: "hidden",
    },
    container: {
        width: "100%",
        height: "100%",
    },
    dialog: {
        top: "20%",
        left: "35%",
        width: "30%",
        position: "absolute",
        backgroundColor: "white",
        textAlign: "center",
        borderRadius: 5,
        padding: 10,
    },
    backgroundImg: {
        width: "100%",
        height: "100%",
    },
});
