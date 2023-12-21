import { StyleSheet, Animated, Text } from "react-native";
import React, { useRef, useEffect, useState } from "react";

import { Video } from "expo-av";
import TouchScreen from "../TouchScreen";
import {useRoute} from "@react-navigation/native";
import BackgroundMusicStore from "../store/BackgroundMusicStore";

export default function TestVideoTwo({ navigation }) {

    const route = useRoute();
/*
    const { isActiveBackgroundMusic } = route.params;
*/

    const [status, setStatus] = React.useState({});
    const video = useRef(null);
    const fadeAnimOpacity = useRef(new Animated.Value(0)).current;
    const [isActiveDialog, setIsActiveDialog] = useState(false);

    const animOpacity = () => {
        Animated.timing(fadeAnimOpacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    };

    const prepare = async () => {
        try {
            await video.current.loadAsync(require("../../assets/video/TwoSeries/TestVideoTwo.mp4"));
            await video.current.playAsync();
            animOpacity();
        } catch (error) {
            console.warn(error);
        }
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
/*        setTimeout(() => {
            setIsActiveDialog(true);
        }, 8150);*/
        return () => {
            stopVideo();
            unloadVideo();
            //video.current = null; // Очистка референса при размонтировании компонента
        };
    }, [navigation]);

    useEffect(() => {
        if (status.didJustFinish) {
            video.current.setPositionAsync(0); // Перемотать видео к началу
            video.current.playAsync(); // Запустить видео снова
        }
    }, [status]);

    const backScene = () => {
/*        if (isActiveBackgroundMusic){
            BackgroundMusicStore.playMusic();
        }*/
        unloadVideo();
        navigation.replace('TestVideoOne');
    };
    const nextScene = () => {
        unloadVideo();
        navigation.replace('SeriesTitle');
    };
    return (
        <Animated.View style={[styles.container, { opacity: fadeAnimOpacity }]}>
            <Video
                ref={video}
                style={styles.backgroundVideo}
                //source={require("../../assets/video/new-year.mp4")}
                useNativeControls={true}
                resizeMode="cover"
                isLooping={true}
/*                onPlaybackStatusUpdate={(status) => {
                    setStatus(status);
                    if (status.didJustFinish) {
                        unloadVideo(); // Выгрузка видео после окончания воспроизведения
                    }
                }}*/
            />
            {isActiveDialog && <Text style={styles.dialog}>Человечество ждало от 21 века...</Text>}
            <TouchScreen touchNext={nextScene} touchBack={backScene} />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        //backgroundColor: 'black'
    },
    backgroundVideo: {
        position: "absolute",
        height: "100%",
        width: "100%",
    },
    dialog: {
        top: "40%",
        right: "38%",
        width: "24%",
        position: "absolute",
        backgroundColor: "white",
        textAlign: "center",
        borderRadius: 5,
        padding: 10,
    },
});
