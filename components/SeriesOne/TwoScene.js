import { StyleSheet, Animated, Text, TouchableOpacity } from "react-native";
import React, { useRef, useEffect, useState } from "react";

import { Video } from "expo-av";
import { useNavigation } from "@react-navigation/native";
import TouchScreen from "../TouchScreen";

export default function TwoScene({ navigation }) {
  const [status, setStatus] = React.useState({});
  const [isActiveDialog, setIsActiveDialog] = useState(false);
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
      await video.current?.loadAsync(require("../../assets/video/two-scene.mp4"));
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
    navigation.navigate('OneScene');
  };
  const nextScene = () => {
    navigation.navigate('ThreeScene');
  };


  return (
      <Animated.View style={[styles.container, { opacity: fadeAnimOpacity }]}>
        <Video
            ref={video}
            style={styles.backgroundVideo}
            //source={require("../../assets/video/two-scene.mp4")}
            useNativeControls={false}
            resizeMode="cover"
            isLooping={false}
            onPlaybackStatusUpdate={(status) => setStatus(status)}
        />
        {isActiveDialog && <Text style={styles.dialog}>2 сцена</Text>}
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

