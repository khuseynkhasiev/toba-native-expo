import { useEffect, useRef } from "react";
import {
  Animated,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";

export default function ThreeScene({ click }) {
  const fadeAnimOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animOpacity();
  }, [click]);
  function animOpacity (){
    Animated.timing(fadeAnimOpacity, {
      toValue: click ? 0 : 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <Animated.View style={[styles.container, { opacity: fadeAnimOpacity }]}>
        <ImageBackground
          style={styles.backgroundImg}
          source={require("../../assets/scene/3/1.png")}
        />
        <Image
          source={require("../../assets/scene/3/people-m.png")}
          style={styles.imgPeople}
        />
        <Text style={styles.dialog}>
          В ЭТИХ МЕСТАХ ЖИВУТ ЛЮДИ, ЛИЦА КОТОРЫХ НЕ СПРЯТАНЫ ЗА ВИЗОРАМИ И
          МАСКАМИ.
        </Text>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "100%",
  },
  container: {
    width: "100%",
    height: "100%",
  },
  dialog: {
    top: "20%",
    right: "15%",
    width: "40%",
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
  imgPeople: {
    width: 80,
    height: 80,
    top: "5%",
    left: "33%",
    position: "absolute",
  },
});
