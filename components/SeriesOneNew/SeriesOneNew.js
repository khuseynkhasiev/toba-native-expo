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

export default function SeriesOneNew({ navigation }) {
    const videoRef = useRef(null);
    const [posMillis, setPosMillis] = useState(0);

    // const [onBubleTwoScene, setOnBubleTwoScene] = useState(false);
    // const [onBubleThreeScene, setOnBubleThreeScene] = useState(false);
    // const [onBubleFourScene, setOnBubleFourScene] = useState(false);
    // const [onBubleFiveScene, setOnBubleFiveScene] = useState(false);
    // const [onBubleSixScene, setOnBubleSixScene] = useState(false);

    const scenePlayStart = 101;
    const sceneStopInterval = 100;
    const scene1Pause = 17200;
    const scene2Pause = 22900;
    const scene3Pause = 27100;
    const scene4Pause = 31900;
    const scene5Pause = 37000;
    const scene6Pause = 42800;
    const scene7Pause = 52600;
    const scene8Pause = 57800;
    const scene9Pause = 63800;
    const scene10Pause = 72900;

    async function moveToBackScene() {
        if (
            posMillis >= scene1Pause &&
            posMillis <= scene1Pause + sceneStopInterval
        ) {
            unloadVideo();
            navigation.replace("Series");
            // navigation.replace("Main");
        }

        if (
            posMillis >= scene2Pause &&
            posMillis <= scene2Pause + sceneStopInterval
        ) {
            await videoRef.current.playFromPositionAsync(scene1Pause);
            // setOnBubleTwoScene(false);
        }
        if (
            posMillis >= scene3Pause &&
            posMillis <= scene3Pause + sceneStopInterval
        ) {
            await videoRef.current.playFromPositionAsync(scene2Pause);
            // setOnBubleThreeScene(false);
        }
        if (
            posMillis >= scene4Pause &&
            posMillis <= scene4Pause + sceneStopInterval
        ) {
            // setOnBubleFourScene(false);
            await videoRef.current.playFromPositionAsync(scene3Pause);
        }

        if (
            posMillis >= scene5Pause &&
            posMillis <= scene5Pause + sceneStopInterval
        ) {
            // setOnBubleFiveScene(false);
            await videoRef.current.playFromPositionAsync(scene4Pause);
        }
        if (
            posMillis >= scene6Pause &&
            posMillis <= scene6Pause + sceneStopInterval
        ) {
            // setOnBubleSixScene(false);
            await videoRef.current.playFromPositionAsync(scene5Pause);
        }

        if (
            posMillis >= scene7Pause &&
            posMillis <= scene7Pause + sceneStopInterval
        ) {
            // setOnBubleSixScene(false);
            await videoRef.current.playFromPositionAsync(scene6Pause);
        }

        if (
            posMillis >= scene8Pause &&
            posMillis <= scene8Pause + sceneStopInterval
        ) {
            // setOnBubleSixScene(false);
            await videoRef.current.playFromPositionAsync(scene7Pause);
        }

        if (
            posMillis >= scene9Pause &&
            posMillis <= scene9Pause + sceneStopInterval
        ) {
            // setOnBubleSixScene(false);
            await videoRef.current.playFromPositionAsync(scene8Pause);
        }

        if (
            posMillis >= scene10Pause &&
            posMillis <= scene10Pause + sceneStopInterval
        ) {
            // setOnBubleSixScene(false);
            await videoRef.current.playFromPositionAsync(scene9Pause);
        }

        if (posMillis >= scene10Pause + scenePlayStart) {
            // setOnBubleSixScene(false);
            await videoRef.current.playFromPositionAsync(scene10Pause);
        }
    }

    async function moveToNextScene() {
        if (
            posMillis >= scene1Pause &&
            posMillis <= scene1Pause + sceneStopInterval
        ) {
            await videoRef.current.playFromPositionAsync(
                scene1Pause + scenePlayStart
            );
            await videoRef.current.playAsync(); // Запуск воспроизведения после установки позиции
        }
        if (
            posMillis >= scene2Pause &&
            posMillis <= scene2Pause + sceneStopInterval
        ) {
            await videoRef.current.playFromPositionAsync(
                scene2Pause + scenePlayStart
            );
            await videoRef.current.playAsync(); // Запуск воспроизведения после установки позиции
            // setOnBubleTwoScene(false);
        }
        if (
            posMillis >= scene3Pause &&
            posMillis <= scene3Pause + sceneStopInterval
        ) {
            await videoRef.current.playFromPositionAsync(
                scene3Pause + scenePlayStart
            );
            await videoRef.current.playAsync(); // Запуск воспроизведения после установки позиции
            // setOnBubleThreeScene(false);
        }
        if (
            posMillis >= scene4Pause &&
            posMillis <= scene4Pause + sceneStopInterval
        ) {
            await videoRef.current.playFromPositionAsync(
                scene4Pause + scenePlayStart
            );
            await videoRef.current.playAsync(); // Запуск воспроизведения после установки позиции
            // setOnBubleFourScene(false);
        }
        if (
            posMillis >= scene5Pause &&
            posMillis <= scene5Pause + sceneStopInterval
        ) {
            await videoRef.current.playFromPositionAsync(
                scene5Pause + scenePlayStart
            );
            await videoRef.current.playAsync(); // Запуск воспроизведения после установки позиции
            // setOnBubleFiveScene(false);
        }
        if (
            posMillis >= scene6Pause &&
            posMillis <= scene6Pause + sceneStopInterval
        ) {
            await videoRef.current.playFromPositionAsync(
                scene6Pause + scenePlayStart
            );
            await videoRef.current.playAsync(); // Запуск воспроизведения после установки позиции
            // setOnBubleSixScene(false);
        }

        if (
            posMillis >= scene7Pause &&
            posMillis <= scene7Pause + sceneStopInterval
        ) {
            await videoRef.current.playFromPositionAsync(
                scene7Pause + scenePlayStart
            );
            await videoRef.current.playAsync(); // Запуск воспроизведения после установки позиции
            // setOnBubleSixScene(false);
        }
        if (
            posMillis >= scene8Pause &&
            posMillis <= scene8Pause + sceneStopInterval
        ) {
            await videoRef.current.playFromPositionAsync(
                scene8Pause + scenePlayStart
            );
            await videoRef.current.playAsync(); // Запуск воспроизведения после установки позиции
            // setOnBubleSixScene(false);
        }

        if (
            posMillis >= scene9Pause &&
            posMillis <= scene9Pause + sceneStopInterval
        ) {
            await videoRef.current.playFromPositionAsync(
                scene9Pause + scenePlayStart
            );
            await videoRef.current.playAsync(); // Запуск воспроизведения после установки позиции
            // setOnBubleSixScene(false);
        }

        if (
            posMillis >= scene10Pause &&
            posMillis <= scene10Pause + sceneStopInterval
        ) {
            await videoRef.current.playFromPositionAsync(
                scene10Pause + scenePlayStart
            );
            await videoRef.current.playAsync(); // Запуск воспроизведения после установки позиции
            // setOnBubleSixScene(false);
        }

        // if (posMillis >= scene10Pause + scenePlayStart) {
        //     unloadVideo();
        //     navigation.replace("Series");
        // }

        if (posMillis >= scene10Pause) {
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
            positionMillis >= scene1Pause &&
            positionMillis <= scene1Pause + sceneStopInterval
        ) {
            await videoRef.current.pauseAsync();
        }

        if (
            positionMillis >= scene2Pause &&
            positionMillis <= scene2Pause + sceneStopInterval
        ) {
            // setOnBubleTwoScene(true);
            await videoRef.current.pauseAsync();
        }

        if (
            positionMillis >= scene3Pause &&
            positionMillis <= scene3Pause + sceneStopInterval
        ) {
            // setOnBubleThreeScene(true);
            await videoRef.current.pauseAsync();
        }

        if (
            positionMillis >= scene4Pause &&
            positionMillis <= scene4Pause + sceneStopInterval
        ) {
            // setOnBubleFourScene(true);
            await videoRef.current.pauseAsync();
        }

        if (
            positionMillis >= scene5Pause &&
            positionMillis <= scene5Pause + sceneStopInterval
        ) {
            // setOnBubleFiveScene(true);
            await videoRef.current.pauseAsync();
        }

        if (
            positionMillis >= scene6Pause &&
            positionMillis <= scene6Pause + sceneStopInterval
        ) {
            // setOnBubleSixScene(true);
            await videoRef.current.pauseAsync();
        }

        if (
            positionMillis >= scene7Pause &&
            positionMillis <= scene7Pause + sceneStopInterval
        ) {
            // setOnBubleSixScene(true);
            await videoRef.current.pauseAsync();
        }

        if (
            positionMillis >= scene8Pause &&
            positionMillis <= scene8Pause + sceneStopInterval
        ) {
            // setOnBubleSixScene(true);
            await videoRef.current.pauseAsync();
        }
        if (
            positionMillis >= scene9Pause &&
            positionMillis <= scene9Pause + sceneStopInterval
        ) {
            // setOnBubleSixScene(true);
            await videoRef.current.pauseAsync();
        }

        if (
            positionMillis >= scene10Pause &&
            positionMillis <= scene10Pause + sceneStopInterval
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
                source={require("../../assets/video/OneSeriesNew/oneseriesnew.mp4")}
                isLooping={false}
                useNativeControls={false}
                // resizeMode="cover"
                resizeMode="contain"
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
