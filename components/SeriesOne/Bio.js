import {StyleSheet, Animated, Text, TouchableOpacity} from "react-native";
import React, { useRef, useEffect, useState } from "react";

import { Video } from "expo-av";
import TouchScreen from "../TouchScreen";
/*
import {useIsFocused, useNavigation, useRoute} from "@react-navigation/native";
*/

export default function Bio({ navigation }) {
  const [status, setStatus] = React.useState({});
  const [isActiveDialog, setIsActiveDialog] = useState(false);
  const video = useRef(null);
  const fadeAnimOpacity = useRef(new Animated.Value(0)).current;

/*  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();
  // Имя текущего экрана (маршрута)
  const currentScreenName = route.name;*/

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
      await video.current.loadAsync(require("../../assets/video/bio.mp4"));
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
/*  useEffect(() => {
    if(isFocused){
      const unsubscribe = navigation.addListener("focus", () => {
        // Запуск видео при фокусе на компоненте
        prepare();
      });
      setTimeout(() => {
        setIsActiveDialog(true);
      }, 7000);
    }
    return () => {
      stopVideo();
      unloadVideo();
      //video.current = null; // Очистка референса при размонтировании компонента
    };
  }, [navigation, isFocused])*/
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // Запуск видео при фокусе на компоненте
      prepare();
    });
    setTimeout(() => {
      setIsActiveDialog(true);
    }, 7000);
    return () => {
      stopVideo();
      unloadVideo();
      //video.current = null; // Очистка референса при размонтировании компонента
    };
  }, [navigation]);

  const backScene = () => {
    unloadVideo();
    navigation.replace('ChartMan');
  };
  const nextScene = () => {
    unloadVideo();
    navigation.replace('RobotOneScene');
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
            isActiveDialog && <Text style={styles.dialog}>Медицину которая бы вылечила все болезни...</Text>
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
    bottom: "10%",
    left: "28%",
    width: "30%",
    position: "absolute",
    backgroundColor: "white",
    textAlign: "center",
    borderRadius: 5,
    //zIndex: 3,
    padding: 10,
  },
});