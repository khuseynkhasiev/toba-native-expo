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

export default function TwoScene({ click }) {
  const fadeAnimScale = useRef(new Animated.Value(1)).current;
  const fadeAnimOpacity = useRef(new Animated.Value(0)).current;
  const fadeOrelTranslateX = useRef(new Animated.Value(0)).current;
  const fadeOrelTranslateY = useRef(new Animated.Value(0)).current;

  const animOpacity = () => {
    Animated.timing(fadeAnimOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const animTranslateX = () => {
    Animated.sequence([
      Animated.timing(fadeOrelTranslateX, {
        toValue: click
          ? -Dimensions.get("window").width
          : -Dimensions.get("window").width / 3,
        duration: click ? 700 : 2000,
        useNativeDriver: false,
      }),
      Animated.timing(fadeOrelTranslateX, {
        toValue: -Dimensions.get("window").width / 3 - 70,
        duration: 10000,
        useNativeDriver: false,
      }),
    ]).start();
  };
  const animTranslateY = () => {
    Animated.sequence([
      Animated.timing(fadeOrelTranslateY, {
        toValue: click
          ? -Dimensions.get("window").height
          : -Dimensions.get("window").height / 4,
        duration: click ? 700 : 2000,
        useNativeDriver: false,
      }),
      Animated.timing(fadeOrelTranslateY, {
        toValue: -Dimensions.get("window").height / 4 - 70,
        duration: 10000,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const animScale = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.sequence([
      Animated.timing(fadeAnimScale, {
        toValue: click ? 2 : 1.2,
        duration: click ? 1000 : 5000,
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
    animOpacity();
  }, [click]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <Animated.View style={[styles.container, { opacity: fadeAnimOpacity }]}>
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
          style={[
            styles.orel,
            {
              transform: [
                { translateX: fadeOrelTranslateX },
                { translateY: fadeOrelTranslateY },
              ],
            },
          ]}
        />
        <Text style={styles.dialog}>
          ОГРОМНЫЕ ЗЕЛЁНЫЕ РАВНИНЫ ВСТРЕЧАЮТСЯ С МОГУЧИМИ ГОРНЫМИ ХРЕБТАМИ.
        </Text>
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
    bottom: "0%",
    right: "0%",
    resizeMode: "contain",
    width: "40%",
    height: "60%",
    transform: [{ translateX: 0 }, { translateY: 0 }],
  },
});
