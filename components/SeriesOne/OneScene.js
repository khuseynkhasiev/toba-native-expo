import { useEffect, useRef } from "react";
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Text, View,
} from "react-native";
import {Video} from "expo-av";
import * as React from "react";
import Intro from "../Intro";

export default function OneScene({ click }) {
  const fadeAnimOpacity = useRef(new Animated.Value(0)).current;

  const animOpacity = () => {
    useEffect(() => {
      animOpacity();
    }, [click]);

    function animOpacity() {
      Animated.timing(fadeAnimOpacity, {
        toValue: click ? 0 : 1,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }
    //
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    useEffect(() => {
      video.current.playAsync();
    })
    //

    return (
        <SafeAreaView style={styles.wrapper}>
          <Animated.View style={[styles.container, {opacity: fadeAnimOpacity}]}>
            <Intro />
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
}