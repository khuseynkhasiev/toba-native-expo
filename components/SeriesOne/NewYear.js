import { StyleSheet, Animated, Text, View } from "react-native";
import React, { useRef, useEffect, useState } from "react";

import { Video } from "expo-av";
import TouchScreen from "../TouchScreen";
import { useRoute } from "@react-navigation/native";
import BackgroundMusicStore from "../store/BackgroundMusicStore";

export default function NewYear({ navigation }) {
  const route = useRoute();
  /*const { isActiveBackgroundMusic } = route.params;*/

  const [status, setStatus] = React.useState({});
  const video = useRef(null);
  const fadeAnimOpacity = useRef(new Animated.Value(0)).current;
  const [isActiveDialog, setIsActiveDialog] = useState(false);

  const animOpacity = () => {
    Animated.timing(fadeAnimOpacity, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  };

  const prepare = async () => {
    try {
      await video.current.loadAsync(require("../../assets/video/new-year.mp4"));
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
    setTimeout(() => {
      setIsActiveDialog(true);
    }, 8150);
    return () => {
      stopVideo();
      unloadVideo();
      //video.current = null; // Очистка референса при размонтировании компонента
    };
  }, [navigation]);

  const backScene = () => {
    /*    if (isActiveBackgroundMusic){
      BackgroundMusicStore.playMusic();
    }*/
    unloadVideo();
    navigation.goBack();
  };
  const nextScene = () => {
    unloadVideo();
    navigation.replace("ChartMan");
  };
  return (
    <View style={styles.container}>
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
      {isActiveDialog && (
        <Text style={styles.dialog}>Человечество ждало от 21 века...</Text>
      )}
      <TouchScreen touchNext={nextScene} touchBack={backScene} />
    </View>
    // <Animated.View style={[styles.container, { opacity: fadeAnimOpacity }]}>
    //   <Video
    //     ref={video}
    //     style={styles.backgroundVideo}
    //     //source={require("../../assets/video/new-year.mp4")}
    //     useNativeControls={true}
    //     resizeMode="cover"
    //     isLooping={false}
    //     onPlaybackStatusUpdate={(status) => {
    //       setStatus(status);
    //       if (status.didJustFinish) {
    //         unloadVideo(); // Выгрузка видео после окончания воспроизведения
    //       }
    //     }}
    //   />
    //   {isActiveDialog && (
    //     <Text style={styles.dialog}>Человечество ждало от 21 века...</Text>
    //   )}
    //   <TouchScreen touchNext={nextScene} touchBack={backScene} />
    // </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundVideo: "red",
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
