import {useEffect, useRef, useState} from "react";
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
});