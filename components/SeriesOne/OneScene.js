import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { Dimensions } from "react-native";
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

export default function OneScene({ click }) {
  const fadeAnimOpacity = useRef(new Animated.Value(0)).current;
  const fadeAnimBackScale = useRef(new Animated.Value(1)).current;
  const fadeAnimBackTranslateY = useRef(new Animated.Value(0)).current;
  const fadeAnimOpacityFirework = useRef(new Animated.Value(0)).current;

  const [hide1, setHide1] = useState(false);
  const [hide2, setHide2] = useState(false);
  const [hide3, setHide3] = useState(false);
  const animOpacity = () => {
    Animated.timing(fadeAnimOpacity, {
      toValue: click ? 0 : 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const animFireworkOpacity = () => {
    Animated.timing(fadeAnimOpacityFirework, {
      toValue: hide3 ? 1 : 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const animBack = () => {
    Animated.timing(fadeAnimBackScale, {
      toValue: 2,
      duration: 4000,
      useNativeDriver: false,
    }).start();

    Animated.timing(fadeAnimBackTranslateY, {
      toValue: Dimensions.get("window").height / 4,
      duration: 4000,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    animOpacity();
    setTimeout(() => {
      setHide1(true);
    }, 1000);
    setTimeout(() => {
      setHide2(true);
    }, 2000);
    setTimeout(() => {
      setHide3(true);
      animFireworkOpacity();
      animBack();
    }, 3000);
  }, [click]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <Animated.View
        style={[
          styles.container,
          { opacity: fadeAnimOpacity },
          {
            transform: [
              { scale: fadeAnimBackScale },
              { translateY: fadeAnimBackTranslateY },
            ],
          },
        ]}
      >
        <Image
          style={[
            styles.backgroundImg,
            { display: hide1 === true ? "none" : "block" },
          ]}
          source={require("../../assets/scene/1/IMG_0680(1).jpg")}
        />
        <Image
          style={[
            styles.backgroundImg,
            { display: hide2 === true ? "none" : "block" },
          ]}
          source={require("../../assets/scene/1/IMG_0680(2).jpg")}
        />
        <Image
          style={[
            styles.backgroundImg,
            { display: hide3 === true ? "none" : "block" },
          ]}
          source={require("../../assets/scene/1/IMG_0680(3).jpg")}
        />
        <Animated.Image
          style={[
            styles.firework,
            { top: 0 },
            { opacity: fadeAnimOpacityFirework },
          ]}
          source={require("../../assets/scene/1/IMG_0709.png")}
        />

        <Image
          style={styles.backgroundImg}
          source={require("../../assets/scene/1/IMG_0680(4).jpg")}
        />
        <View style={styles.counter}></View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    backgroundColor: "#000",
  },
  container: {
    width: "100%",
    height: "100%",
  },
  counter: {
    fontSize: 30,
    color: "#fff",
    position: "absolute",
    top: 8,
    left: "49%",
  },
  data: {
    position: "absolute",
    top: "-20px",
    left: "-30px",
    fontSize: 35,
    color: "orange",
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
  firework: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    zIndex: 99,
  },
  backgroundImg: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
