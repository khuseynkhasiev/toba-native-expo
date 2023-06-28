import { useEffect, useRef } from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function OneScene() {
  const fadeAnimScale = useRef(new Animated.Value(1)).current;

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
  });

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
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
  },
  backgroundImg: {
    width: "100%",
    height: "100%",
  },
});
