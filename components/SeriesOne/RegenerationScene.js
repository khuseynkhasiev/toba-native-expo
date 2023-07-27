import {StyleSheet, Animated, Text, TouchableOpacity} from "react-native";
import React, { useRef, useEffect, useState } from "react";

import { Video } from "expo-av";
import TouchScreen from "../TouchScreen";

export default function RegenerationScene({ navigation }) {
    const [status, setStatus] = React.useState({});
    const [isActiveDialog, setIsActiveDialog] = useState(false);
    const video = useRef(null);
    const fadeAnimOpacity = useRef(new Animated.Value(0)).current;

    const animOpacity = () => {
        Animated.timing(fadeAnimOpacity, {
            //toValue: click  0 : 1,
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    };
    const prepare = async () => {
        try {
            await video.current.loadAsync(require("../../assets/video/regeniration.mp4"));
            await video.current.playAsync();
            animOpacity();
        } catch (error) {
            console.warn(error);
        }
    };
    const resetIsActiveDialog = () => {
        setIsActiveDialog(false);
    };
    const stopVideo = async () => {
        try {
            if (video.current) {
                await video.current.stopAsync();
            }
        } catch (error) {
            console.warn(error);
        }
    };
    const unloadVideo = async () => {
        try {
            if (video.current) {
                await video.current.unloadAsync();
            }
        } catch (error) {
            console.warn(error);
        }
    };
    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
            // Запуск видео при фокусе на компоненте
            prepare();
        });
        setTimeout(() => {
            setIsActiveDialog(true);
        }, 12500);
        return () => {
            //resetIsActiveDialog();
            stopVideo();
            unloadVideo();
            //video.current = null; // Очистка референса при размонтировании компонента
        };
    }, [navigation]);

    const backScene = () => {
        //resetIsActiveDialog();
        unloadVideo();
        navigation.navigate('BoomTwoScene');
    };
    const nextScene = () => {
        //resetIsActiveDialog();
        unloadVideo();
        navigation.navigate('NewCityScene');
    };
    return (
        <Animated.View style={[styles.container, { opacity: fadeAnimOpacity }]}>
            <Video
                ref={video}
                style={styles.backgroundVideo}
                //source={require("../../assets/video/new-year.mp4")}
                useNativeControls={true}
                resizeMode="cover"
                isLooping={false}
                onPlaybackStatusUpdate={(status) => {
                    setStatus(status);
                    if (status.didJustFinish) {
                        unloadVideo(); // Выгрузка видео после окончания воспроизведения
                    }
                }}
            />
            {
                isActiveDialog && <Text style={styles.dialog}>Этим Хаосом воспользовались Коорпорации и начали перестраивать мир под себя</Text>
            }
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
    dialog: {
        top: "15%",
        left: "20%",
        width: "30%",
        position: "absolute",
        backgroundColor: "white",
        textAlign: "center",
        borderRadius: 5,
        padding: 10,
    },
});