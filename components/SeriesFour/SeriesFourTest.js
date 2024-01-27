import { StyleSheet, Text, View } from "react-native";
import React, { useRef, useEffect, useState } from "react";
import { Video } from "expo-av";
import TouchScreen from "../TouchScreen";
import {
    DialogSvgIcon,
    DialogSvgIcon2,
    DialogSvgIcon3,
    DialogSvgIcon4,
} from "../svg/Svg";

export default function SeriesFourTest({ navigation }) {
    const videoRef = useRef(null);
    const [posMillis, setPosMillis] = useState(0);

    // const [onBubleTwoScene, setOnBubleTwoScene] = useState(false);
    // const [onBubleThreeScene, setOnBubleThreeScene] = useState(false);
    // const [onBubleFourScene, setOnBubleFourScene] = useState(false);
    // const [onBubleFiveScene, setOnBubleFiveScene] = useState(false);
    // const [onBubleSixScene, setOnBubleSixScene] = useState(false);

    const scenePlayStart = 101;
    const sceneStopInterval = 100;
    const sceneOnePause = 2100;
    const sceneTwoPause = 8800;
    const sceneThreePause = 15250;
    const sceneFourPause = 19500;
    const sceneFivePause = 27550;
    const sceneSixPause = 30550;
    const sceneSevenPause = 34850;

    async function moveToBackScene() {
        if (
            posMillis >= sceneOnePause &&
            posMillis <= sceneOnePause + sceneStopInterval
        ) {
            unloadVideo();
            navigation.replace("Series");
        }

        if (
            posMillis >= sceneTwoPause &&
            posMillis <= sceneTwoPause + sceneStopInterval
        ) {
            await videoRef.current.playFromPositionAsync(sceneOnePause);
            // setOnBubleTwoScene(false);
        }
        if (
            posMillis >= sceneThreePause &&
            posMillis <= sceneThreePause + sceneStopInterval
        ) {
            await videoRef.current.playFromPositionAsync(sceneTwoPause);
            // setOnBubleThreeScene(false);
        }
        if (
            posMillis >= sceneFourPause &&
            posMillis <= sceneFourPause + sceneStopInterval
        ) {
            // setOnBubleFourScene(false);
            await videoRef.current.playFromPositionAsync(sceneThreePause);
        }

        if (
            posMillis >= sceneFivePause &&
            posMillis <= sceneFivePause + sceneStopInterval
        ) {
            // setOnBubleFiveScene(false);
            await videoRef.current.playFromPositionAsync(sceneFourPause);
        }
        if (
            posMillis >= sceneSixPause &&
            posMillis <= sceneSixPause + sceneStopInterval
        ) {
            // setOnBubleSixScene(false);
            await videoRef.current.playFromPositionAsync(sceneFivePause);
        }

        if (
            posMillis >= sceneSevenPause &&
            posMillis <= sceneSevenPause + sceneStopInterval
        ) {
            // setOnBubleSixScene(false);
            await videoRef.current.playFromPositionAsync(sceneSixPause);
        }

        if (posMillis >= sceneSevenPause + scenePlayStart) {
            // setOnBubleSixScene(false);
            await videoRef.current.playFromPositionAsync(sceneSevenPause);
        }
    }

    async function moveToNextScene() {
        if (
            posMillis >= sceneOnePause &&
            posMillis <= sceneOnePause + sceneStopInterval
        ) {
            await videoRef.current.playFromPositionAsync(
                sceneOnePause + scenePlayStart
            );
            await videoRef.current.playAsync(); // Запуск воспроизведения после установки позиции
        }
        if (
            posMillis >= sceneTwoPause &&
            posMillis <= sceneTwoPause + sceneStopInterval
        ) {
            await videoRef.current.playFromPositionAsync(
                sceneTwoPause + scenePlayStart
            );
            await videoRef.current.playAsync(); // Запуск воспроизведения после установки позиции
            // setOnBubleTwoScene(false);
        }
        if (
            posMillis >= sceneThreePause &&
            posMillis <= sceneThreePause + sceneStopInterval
        ) {
            await videoRef.current.playFromPositionAsync(
                sceneThreePause + scenePlayStart
            );
            await videoRef.current.playAsync(); // Запуск воспроизведения после установки позиции
            // setOnBubleThreeScene(false);
        }
        if (
            posMillis >= sceneFourPause &&
            posMillis <= sceneFourPause + sceneStopInterval
        ) {
            await videoRef.current.playFromPositionAsync(
                sceneFourPause + scenePlayStart
            );
            await videoRef.current.playAsync(); // Запуск воспроизведения после установки позиции
            // setOnBubleFourScene(false);
        }
        if (
            posMillis >= sceneFivePause &&
            posMillis <= sceneFivePause + sceneStopInterval
        ) {
            await videoRef.current.playFromPositionAsync(
                sceneFivePause + scenePlayStart
            );
            await videoRef.current.playAsync(); // Запуск воспроизведения после установки позиции
            // setOnBubleFiveScene(false);
        }
        if (
            posMillis >= sceneSixPause &&
            posMillis <= sceneSixPause + sceneStopInterval
        ) {
            await videoRef.current.playFromPositionAsync(
                sceneSixPause + scenePlayStart
            );
            await videoRef.current.playAsync(); // Запуск воспроизведения после установки позиции
            // setOnBubleSixScene(false);
        }

        if (
            posMillis >= sceneSevenPause &&
            posMillis <= sceneSevenPause + sceneStopInterval
        ) {
            await videoRef.current.playFromPositionAsync(
                sceneSevenPause + scenePlayStart
            );
            await videoRef.current.playAsync(); // Запуск воспроизведения после установки позиции
            // setOnBubleSixScene(false);
        }
        if (posMillis >= sceneSevenPause + scenePlayStart) {
            unloadVideo();
            navigation.replace("Series");
        }
    }
    async function scenePause(positionMillis) {
        // Здесь можно добавить условия в зависимости от значения positionMillis
        // Например:
        // if (status.positionMillis >= 5000) {
        //   // Действия при достижении 5000 миллисекунд (5 секунд)
        // }
        if (
            positionMillis >= sceneOnePause &&
            positionMillis <= sceneOnePause + sceneStopInterval
        ) {
            await videoRef.current.pauseAsync();
        }

        if (
            positionMillis >= sceneTwoPause &&
            positionMillis <= sceneTwoPause + sceneStopInterval
        ) {
            // setOnBubleTwoScene(true);
            await videoRef.current.pauseAsync();
        }

        if (
            positionMillis >= sceneThreePause &&
            positionMillis <= sceneThreePause + sceneStopInterval
        ) {
            // setOnBubleThreeScene(true);
            await videoRef.current.pauseAsync();
        }

        if (
            positionMillis >= sceneFourPause &&
            positionMillis <= sceneFourPause + sceneStopInterval
        ) {
            // setOnBubleFourScene(true);
            await videoRef.current.pauseAsync();
        }

        if (
            positionMillis >= sceneFivePause &&
            positionMillis <= sceneFivePause + sceneStopInterval
        ) {
            // setOnBubleFiveScene(true);
            await videoRef.current.pauseAsync();
        }

        if (
            positionMillis >= sceneSixPause &&
            positionMillis <= sceneSixPause + sceneStopInterval
        ) {
            // setOnBubleSixScene(true);
            await videoRef.current.pauseAsync();
        }

        if (
            positionMillis >= sceneSevenPause &&
            positionMillis <= sceneSevenPause + sceneStopInterval
        ) {
            // setOnBubleSixScene(true);
            await videoRef.current.pauseAsync();
        }
    }

    const unloadVideo = async () => {
        try {
            if (videoRef.current) {
                await videoRef.current.unloadAsync();
            }
        } catch (error) {
            console.warn(error);
        }
    };

    useEffect(() => {
        const playbackStatusUpdate = async (status) => {
            if (status.isPlaying) {
                setPosMillis(status.positionMillis);
                // console.log("Current position:", status.positionMillis);
                scenePause(status.positionMillis);
            }
        };

        if (videoRef.current) {
            videoRef.current.setOnPlaybackStatusUpdate(playbackStatusUpdate);
        }

        return () => {
            if (videoRef.current) {
                videoRef.current.setOnPlaybackStatusUpdate(null);
            }
        };
    }, []);

    return (
        <View style={styles.container}>
            <Video
                style={styles.backgroundVideo}
                ref={(ref) => {
                    videoRef.current = ref;
                }}
                source={require("../../assets/video/FourSeries/seriesFour.mp4")}
                isLooping={false}
                useNativeControls={false}
                resizeMode="cover"
                shouldPlay
                progressUpdateIntervalMillis={100}
                isMuted={true}
            />
            <TouchScreen
                touchNext={moveToNextScene}
                touchBack={moveToBackScene}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
    },
    onBuble8sec: {
        position: "absolute",
        zIndex: 1,
        top: "11%",
        right: "46%",
    },
    onBuble8secText: {
        position: "absolute",
        padding: 20,
        textAlign: "center",
    },
    onBuble12sec: {
        position: "absolute",
        zIndex: 1,
        top: "1%",
        left: "37%",
    },
    onBuble12secText: {
        position: "absolute",
        padding: 25,
        textAlign: "center",
        fontSize: 12,
    },
    onBuble14sec: {
        position: "absolute",
        zIndex: 1,
        top: "1%",
        right: "30%",
    },
    onBuble14secText: {
        position: "absolute",
        padding: 25,
        textAlign: "center",
        fontSize: 14,
    },
    onBuble20sec: {
        position: "absolute",
        zIndex: 1,
        top: "1%",
        right: "10%",
    },
    onBuble26secText: {
        position: "absolute",
        padding: 25,
        textAlign: "center",
        fontSize: 14,
    },
    onBuble26sec: {
        position: "absolute",
        zIndex: 1,
        top: "10%",
        left: "20%",
    },
    onBuble20secText: {
        position: "absolute",
        padding: 25,
        textAlign: "center",
        fontSize: 14,
    },
    backgroundVideo: {
        position: "absolute",
        height: "100%",
        width: "100%",
        minHeight: 300,
        minWidth: 300,
    },
});
