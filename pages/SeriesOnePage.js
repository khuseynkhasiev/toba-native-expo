import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import NewYear from "../components/SeriesOne/./NewYear";
import TwoScene from "../components/SeriesOne/TwoScene";
import Bio from "../components/SeriesOne/Bio";
import FourScene from "../components/SeriesOne/FourScene";
import FiveScene from  "../components/SeriesOne/FiveScene";
import SixScene from "../components/SeriesOne/SixScene";
import TouchScreen from "../components/TouchScreen";

export default function SeriesOnePage() {
  return (
    <SafeAreaView style={styles.container}>
      <NewYear />
    </SafeAreaView>
  );
/*  return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
            disabled={counter <= 1}
            style={styles.btnRight}
            onPress={() => handleCounter("dec")}
        ></TouchableOpacity>
        <TouchableOpacity
            style={styles.btnLeft}
            onPress={() => handleCounter("inc")}
        ></TouchableOpacity>
        {counter === 1 && <NewYear click={click} />}
        {counter === 2 && <TwoScene click={click} />}
        {counter === 3 && <Bio click={click} />}
        {counter === 4 && <FourScene click={click} />}
        {counter === 5 && <FiveScene click={click} counter={setCounter} />}
        {counter === 6 && <SixScene click={click} />}
      </SafeAreaView>
  );*/
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  btnLeft: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "50%",
    height: "100%",
    zIndex: 999,
    backfaceVisibility: "hidden",
  },
  btnRight: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "50%",
    height: "100%",
    zIndex: 999,
    backfaceVisibility: "hidden",
  },
});
