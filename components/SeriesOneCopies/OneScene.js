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

    return (
        <SafeAreaView style={styles.wrapper}>
          <Animated.View style={[styles.container, {opacity: fadeAnimOpacity}]}>

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
  })
