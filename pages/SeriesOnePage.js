import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import OneScene from "../components/SeriesOne/OneScene";
import TwoScene from "../components/SeriesOne/TwoScene";
import ThreeScene from "../components/SeriesOne/ThreeScene";
import FourScene from "../components/SeriesOne/FourScene";

export default function SeriesOnePage() {
  const [counter, setCounter] = useState(1);
  const [click, setClick] = useState(false);

  const handleCounter = (value) => {
    setClick(true);
    setTimeout(() => {
      setClick(false);
      if (value === "inc") {
        setCounter(counter + 1)
      }
      else if (value === "dec" && counter > 1)
        {
        setCounter(counter - 1);
        }
    }, 1000);
  };
  return (
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

      {counter === 1 && <OneScene click={click} />}
      {counter === 2 && <TwoScene click={click} />}
{/*      {counter === 3 && <ThreeScene click={click} />}
      {counter === 4 && <FourScene click={click} />}*/}
    </SafeAreaView>
  );
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
