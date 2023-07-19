import { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";

export default function TwoScene({ click }) {
  const fadeAnimScale = useRef(new Animated.Value(1)).current;
  const fadeAnimOpacity = useRef(new Animated.Value(0)).current;
  const fadeOrelTranslateX = useRef(new Animated.Value(0)).current;
  const fadeOrelTranslateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animScale();
    animTranslateX();
    animTranslateY();
    animOpacity();
  }, [click]);

  function animOpacity (){
    Animated.timing(fadeAnimOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }
  function animTranslateX (){
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
  }
  function animTranslateY (){
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
  }

  function animScale () {
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
  }

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
    padding: 10,
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


/*import {useEffect, useRef, useState} from "react";
import {
  Animated,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  Image, View
} from "react-native";
import Chart from "../Chart";
import CircleChart from "../AnimatedPieChart";
import AnimatedPieChart from "../AnimatedPieChart";
import PieChartSlice from "../PieChartSlice";
const { width, height} = Dimensions.get('window')

export default function TwoScene({ click }) {
  const fadeAnimOpacity = useRef(new Animated.Value(0)).current;
  const [twoBack, setTwoBack] = useState(false);
  const [man, setMan] = useState(false);
  const [chart, setChart] = useState(false);
  const [circleChart, setCircleChart] = useState(false);



  //
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  function fadeIn () {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }
  function startCircleChartBack(){
    setTimeout(() => {
      setCircleChart(true)
    }, 2000)
  }

  useEffect(() => {
    animOpacity();
  }, [click]);

  useEffect(() => {
    startTwoBack();
    startManBack();
    startChartBack();
    startCircleChartBack();
  }, [])
  function startTwoBack(){
    setTimeout(() => {
      setTwoBack(true)
    }, 1000)
  }
  function startManBack(){
    setTimeout(() => {
      setMan(true);
      fadeIn();
    }, 1000)
  }
  function startChartBack(){
    setTimeout(() => {
      setChart(true)
    }, 3650)
  }

  function animOpacity(){
    Animated.timing(fadeAnimOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <Animated.View style={[styles.container, { opacity: fadeAnimOpacity }]}>
        {chart && <Image
            style={styles.twoScene__circleImg}
            source={require("../../assets/image/oneseries/twoscene/circrle-chart.png")}
        />}
        {twoBack && <ImageBackground
            style={styles.backgroundImg}
            source={require("../../assets/image/oneseries/twoscene/back-two.png")}
        />}
        <ImageBackground
          style={styles.backgroundImg}
          source={require("../../assets/image/oneseries/twoscene/back-one.png")}
        />
        <Image
            style={styles.twoScene__peopleImg}
            source={require("../../assets/image/oneseries/twoscene/people.png")}
        />
        <Animated.Image
            style={[styles.twoScene__manImg, {
              opacity: fadeAnim,
            }]}
            source={require("../../assets/image/oneseries/twoscene/man.png")}
        />
        { chart && <Chart />}
        { chart && <Text style={styles.dialog}>Новые технологии</Text>}
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  twoScene__circleImg: {
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    position: "absolute",
    zIndex: 2
  },
  twoScene__peopleImg: {
    height: 400,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    zIndex: 3
  },
  twoScene__manImg: {
    position: 'absolute',
    bottom: 0,
    left: width / 2 - 80,
    zIndex: 2,
    height: 400,
    width: 200,
    resizeMode: 'cover',
  },
  wrapper: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  container: {
    width: "100%",
    height: "100%",
    position: 'relative'
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
  backgroundImg: {
    width: "100%",
    height: "100%",
  },
});*/