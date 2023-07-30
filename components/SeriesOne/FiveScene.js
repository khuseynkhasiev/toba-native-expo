import { StyleSheet, Animated, Text } from "react-native";
import React, { useRef, useEffect } from "react";

import { Video } from "expo-av";
import TouchScreen from "../TouchScreen";

export default function FiveScene({ navigation }) {
    const [status, setStatus] = React.useState({});
    const video = useRef(null);
    const fadeAnimOpacity = useRef(new Animated.Value(0)).current;

    const animOpacity = () => {
        Animated.timing(fadeAnimOpacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    };

    const prepare = async () => {
        try {
            await video.current?.loadAsync(require("../../assets/video/vzriv.mp4"));
            await video.current?.playAsync();
            animOpacity();
        } catch (error) {
            console.warn(error);
        }
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // Запуск видео при фокусе на компоненте
            prepare();
        });

        // Остановка видео при размонтировании компонента
        return () => {
            unsubscribe();
            video.current?.stopAsync();
        };
    }, [navigation]);

    const backScene = () => {
        navigation.navigate('FourScene');
    };
    const nextScene = () => {
        navigation.navigate('Series');
    };

    return (
        <Animated.View style={[styles.container, { opacity: fadeAnimOpacity }]}>
            <Video
                ref={video}
                style={styles.backgroundVideo}
                //source={require("../../assets/video/one.mp4")}
                useNativeControls={false}
                resizeMode="cover"
                isLooping={false}
                onPlaybackStatusUpdate={(status) => setStatus(status)}
            />
            <Text style={styles.dialog}>Эту сцену поменяем</Text>
            <TouchScreen touchNext={nextScene} touchBack={backScene} />
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
    dialog: {
        top: "10%",
        right: "10%",
        width: "25%",
        position: "absolute",
        backgroundColor: "white",
        textAlign: "center",
        borderRadius: 5,
        padding: 10,
    },
});