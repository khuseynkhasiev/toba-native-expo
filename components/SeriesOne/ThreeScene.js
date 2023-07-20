import {StyleSheet, Animated, Text, TouchableOpacity} from "react-native";
import React, { useRef, useEffect, useState } from "react";

import { Video } from "expo-av";
import TouchScreen from "../TouchScreen";

export default function ThreeScene({ click, navigation }) {
  const [isActiveDialog, setIsActiveDialog] = useState(false);
  const video = useRef(null);
  const fadeAnimOpacity = useRef(new Animated.Value(0)).current;

  const animOpacity = () => {
    Animated.timing(fadeAnimOpacity, {
      //toValue: click ? 0 : 1,
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const [status, setStatus] = React.useState({});

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

    setTimeout(() => {
      setIsActiveDialog(true);
    }, 0)
  }, []);

  const backScene = () => navigation.navigate('TwoScene');
  const nextScene = () => navigation.navigate('FourScene');
  return (
      <Animated.View style={[styles.container, { opacity: fadeAnimOpacity }]}>
        <Video
            ref={video}
            style={styles.backgroundVideo}
            source={require("../../assets/video/bio.mp4")}
            useNativeControls={false}
            resizeMode="cover"
            isLooping={false}
            rate={1.5}
            onPlaybackStatusUpdate={(status) => setStatus(status)}
        />
        {
            isActiveDialog && <Text style={styles.dialog}>3 сцена</Text>
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
    bottom: "15%",
    left: "20%",
    width: "25%",
    position: "absolute",
    backgroundColor: "white",
    textAlign: "center",
    borderRadius: 5,
    //zIndex: 3,
    padding: 10,
  },
});
