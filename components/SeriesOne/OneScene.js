import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  Animated,
} from "react-native";
import LottieView from "lottie-react-native";

const { width, height } = Dimensions.get("window");

export default function OneScene({ click }) {
  const [animationLoaded, setAnimationLoaded] = useState(false);
  const fadeAnimOpacity = useRef(new Animated.Value(0)).current;

  const animOpacity = () => {
    Animated.timing(fadeAnimOpacity, {
      toValue: click ? 0 : 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    setAnimationLoaded(true);
    animOpacity();
  }, [click]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={{ opacity: fadeAnimOpacity }}>
        {animationLoaded ? (
          <LottieView
            source={require("../../assets/animated/one-scene/one.json")}
            autoPlay
            loop
            style={{
              width: width,
              aspectRatio: width / height,
              flexGrow: 1,
              alignSelf: "center",
            }}
            resizeMode="cover"
          />
        ) : (
          <Text>Загрузка ...</Text>
        )}
        <Text style={styles.dialog}>Новые технологии</Text>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  container: {
    width: "100%",
    height: "100%",
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
  backgroundImg: {
    width: "100%",
    height: "100%",
  },
});
