import { StyleSheet, Animated } from "react-native";
import React, { useRef, useEffect } from "react";

import { Video } from "expo-av";

export default function ThreeScene({ click }) {
  const video = useRef(null);
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
    const prepare = async () => {
      try {
        await video.current?.playAsync();
        animOpacity();
      } catch (error) {
        console.warn(error);
      }
    };
    prepare();
  }, [click]);

  return (
      <Animated.View style={[styles.container, { opacity: fadeAnimOpacity }]}>
        <Video
            ref={video}
            style={styles.backgroundVideo}
            source={require("../../assets/video/vzriv.mp4")}
            useNativeControls={false}
            resizeMode="cover"
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(status)}
        />
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
});
