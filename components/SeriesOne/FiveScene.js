import {StyleSheet, Animated, Text, TouchableOpacity} from "react-native";
import React, {useRef, useEffect, useState} from "react";

import { Video } from "expo-av";
import TouchScreen from "../TouchScreen";

export default function FiveScene({ navigation }) {
    const [isActiveDialog, setIsActiveDialog] = useState(false);
    const video = useRef(null);
    const fadeAnimOpacity = useRef(new Animated.Value(0)).current;
    const [status, setStatus] = React.useState({});

    const animOpacity = () => {
        Animated.timing(fadeAnimOpacity, {
            //toValue: click ? 0 : 1,
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    };

    useEffect(() => {
        const prepare = async () => {
            try {
                await video.current?.playAsync();
                animOpacity();
            } catch (error) {
                console.warn(error);
            }
        };
        prepare();
    }, []);

    const backScene = () => navigation.navigate('FourScene');
    const nextScene = () => navigation.navigate('SixScene');

    return (
        <Animated.View style={[styles.container, { opacity: fadeAnimOpacity }]}>
            <Video
                ref={video}
                style={styles.backgroundVideo}
                source={require("../../assets/video/one.mp4")}
                useNativeControls={false}
                resizeMode="cover"
                isLooping
                onPlaybackStatusUpdate={(status) => setStatus(status)}
            />
            <Text style={styles.dialog}>5 сцена</Text>
            <TouchScreen touchBack={backScene} touchNext={nextScene} />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    backgroundVideo: {
        position: "absolute",
        height: "100%",
        width: "100%",
    },
    twoScene__titleImg: {
        position: "absolute",
        height: "100%",
        width: "100%",
    },
    dialog: {
        top: "10%",
        right: "10%",
        width: "25%",
        position: "absolute",
        backgroundColor: "white",
        textAlign: "center",
        borderRadius: 5,
        //zIndex: 3,
        padding: 10,
    },
});
