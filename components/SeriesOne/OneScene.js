import { useEffect, useRef } from "react";
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";

export default function OneScene({ click }) {
  const fadeAnimScale = useRef(new Animated.Value(1)).current;
  const fadeAnimOpacity = useRef(new Animated.Value(0)).current;

  const animOpacity = () => {
    Animated.timing(fadeAnimOpacity, {
      toValue: click ? 0 : 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const animScale = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.sequence([
      Animated.timing(fadeAnimScale, {
        toValue: 3,
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
    animOpacity();
  }, [click]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <Animated.View style={[styles.container, { opacity: fadeAnimOpacity }]}>
        <Animated.Image
          style={[
            styles.backgroundImg,
            { transform: [{ scale: fadeAnimScale }] },
          ]}
          source={require("../../assets/scene/1/1.png")}
        />
        <Text style={styles.dialog}>
          МНЕ СНЯТСЯ СЧАСТЛИВЫЕ СНЫ. В НИХ НЕБО ЧИСТОЕ И НЕ ЗАПЯТНАНО ГРЯЗНЫМ
          ДЫХАНИЕМ ГОРОДА.
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
    padding: 10,
  },
  backgroundImg: {
    width: "100%",
    height: "100%",
  },
});
