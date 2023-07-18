import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, Dimensions } from "react-native";
import LottieView from "lottie-react-native";

const { width, height} = Dimensions.get('window')

export default function OneScene({ click }) {
  const [animationLoaded, setAnimationLoaded] = useState(false);

  useEffect(() => {
    setAnimationLoaded(true);
  }, []);

  return (
      <SafeAreaView style={styles.container}>
        {animationLoaded ? (
            <LottieView
                source={require("../../assets/animated/three-scene/vzriv.json")}
                autoPlay
                loop
                style={{
                  width: width,
                  aspectRatio: width / height,
                  flexGrow: 1,
                  alignSelf: 'center',
                }}
                resizeMode="cover"
            />
        ) : (
            <Text>Загрузка ...</Text>
        )}
        <Text style={styles.dialog}>Бдддж... Взрыв ядерной бомбы</Text>
      </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
    alignItems: 'center'
  },
  animation: {
    width: width,
    aspectRatio: width / height,
    flexGrow: 1,
    alignSelf: 'center',
    resizeMode: 'cover'
  },
  dialog: {
    top: "5%",
    right: "10%",
    width: "25%",
    position: "absolute",
    backgroundColor: "white",
    textAlign: "center",
    borderRadius: 5,
    zIndex: 3,
    padding: 10,
  },
});
