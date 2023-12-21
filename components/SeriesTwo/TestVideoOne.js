import {StyleSheet, Animated, Text, View} from "react-native";
import React, { useRef, useEffect, useState } from "react";
import { Video } from "expo-av";
import TouchScreen from "../TouchScreen";

export default function TestVideoOne({ navigation }) {
    const [isActiveDialog, setIsActiveDialog] = useState(true);
    let videoRef = null;

    const _onPlaybackStatusUpdate = (status) => {
        if (status.isLoaded && status.didJustFinish) {
            videoRef.playFromPositionAsync(3000, { toleranceMillisBefore: 0, toleranceMillisAfter: 0 });
            // Начинаем воспроизведение с 10-й секунды
        }
    };

    const unloadVideo = async () => {
        try {
            if (videoRef.current) {
                await videoRef.current.unloadAsync();
            }
        } catch (error) {
            console.warn(error);
        }
    };

    const backScene = () => {
        unloadVideo();
        navigation.replace('Series');
    };
    const nextScene = () => {
        unloadVideo();
        navigation.replace('Series');
    };


    return (
        <View style={styles.container}>
            <Video
                style={styles.backgroundVideo}
                ref={(ref) => {videoRef = ref}} // Устанавливаем ссылку на видео
                source={require("../../assets/video/TwoSeries/TestVideoOne.mp4")}
                isLooping={false}
                useNativeControls={false}
                resizeMode="cover"
                shouldPlay
                progressUpdateIntervalMillis={100}
                onPlaybackStatusUpdate={_onPlaybackStatusUpdate}
            />
            {isActiveDialog && <Text style={styles.dialog}>Новые технологии...</Text>}
            <TouchScreen touchNext={nextScene} touchBack={backScene} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'black'
    },
    backgroundVideo: {
        position: "absolute",
        height: "100%",
        width: "100%",
        minHeight: 300,
        minWidth: 300,
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
        color: 'black'
    },
});
