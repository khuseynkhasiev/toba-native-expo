import { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function TwoScene() {
  const fadeAnimScale = useRef(new Animated.Value(1)).current;
  const fadeOrelTranslateX = useRef(new Animated.Value(0)).current;
  const fadeOrelTranslateY = useRef(new Animated.Value(0)).current;

  const animTranslateX = () => {
    Animated.sequence([
      Animated.timing(fadeOrelTranslateX, {
        toValue: Dimensions.get("window").width,
        duration: 5000,
        useNativeDriver: false,
      }),
      Animated.timing(fadeOrelTranslateX, {
        toValue: Dimensions.get("window").width + 100,
        duration: 20000,
        useNativeDriver: false,
      }),
    ]).start();
  };
  const animTranslateY = () => {
    Animated.sequence([
      Animated.timing(fadeOrelTranslateY, {
        toValue: Dimensions.get("window").height,
        duration: 5000,
        useNativeDriver: false,
      }),
      Animated.timing(fadeOrelTranslateY, {
        toValue: Dimensions.get("window").height + 100,
        duration: 20000,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const animScale = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.sequence([
      Animated.timing(fadeAnimScale, {
        toValue: 1.2,
        duration: 10000,
        delay: 500,
        useNativeDriver: false,
      }),
      Animated.timing(fadeAnimScale, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: false,
      }),
    ]).start((event) => {
      if (event.finished) animScale();
    });
  };

  useEffect(() => {
    animScale();
    animTranslateX();
    animTranslateY();
  });

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImg}
          source={require("../../assets/scene/2/2.png")}
        />
        <Animated.Image
          source={require("../../assets/scene/2/obl/1.png")}
          style={[styles.obl, { transform: [{ scale: fadeAnimScale }] }]}
        />
        <Animated.Image
          source={require("../../assets/scene/2/obl/2.png")}
          style={[styles.obl, { transform: [{ scale: fadeAnimScale }] }]}
        />
        <Animated.Image
          source={require("../../assets/scene/2/obl/3.png")}
          style={[styles.obl, { transform: [{ scale: fadeAnimScale }] }]}
        />
        <Animated.Image
          source={require("../../assets/scene/2/obl/4.png")}
          style={[styles.obl, { transform: [{ scale: fadeAnimScale }] }]}
        />
        <Animated.Image
          source={require("../../assets/scene/2/or.png")}
          style={[styles.orel, { right: fadeOrelTranslateX, bottom: fadeOrelTranslateY }]}
        />
        <Text style={styles.dialog}>
          ОГРОМНЫЕ ЗЕЛЁНЫЕ РАВНИНЫ ВСТРЕЧАЮТСЯ С МОГУЧИМИ ГОРНЫМИ ХРЕБТАМИ.
        </Text>
      </View>
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
    zIndex: 4,
  },
  backgroundImg: {
    width: "100%",
    height: "100%",
  },
  obl: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 2,
  },
  orel: {
    zIndex: 1,
    position: "absolute",
    bottom: "20%",
    right: "20%",
    resizeMode: "contain",
    width: "40%",
    height: "60%",
  },
});
