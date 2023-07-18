import { StyleSheet, View, Text, Animated } from "react-native";
import React, { useRef } from "react";

import { Video } from "expo-av";
import { useEffect } from "react";

export default function OneScene({click}) {
  const video = React.useRef(null);
  const fadeAnimOpacity = useRef(new Animated.Value(0)).current;

  const animOpacity = () => {
    Animated.timing(fadeAnimOpacity, {
      toValue: click ? 0 : 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  const [status, setStatus] = React.useState({});
  useEffect(() => {
    video.current.playAsync();
    animOpacity();
  }, [click]);
  return (
    <Animated.View style={[styles.container, { opacity: fadeAnimOpacity }]}>
      <Video
        ref={video}
        style={styles.backgroundVideo}
        source={require("../../assets/video/one.mp4")}
        useNativeControls={false}
        autoPlay={true}
        resizeMode="cover"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={styles.dialog}>
        <Text>Тут начался бой</Text>
      </View>
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
    height: "100%",
    width: "100%",
  },
  dialog: {
    top: "20%",
    left: "35%",
    width: "30%",
    position: "absolute",
    backgroundColor: "white",
    textAlign: "center",
    borderRadius: 5,
    padding: 10,
  },
});
