import 'react-native-gesture-handler';
import { StyleSheet, StatusBar } from 'react-native';
import MainStack from './navigate';
import Intro from "./components/Intro";
import {useEffect, useState} from "react";
import AppLoading from "expo-app-loading";

import * as Font from 'expo-font';

const fonts = () => Font.loadAsync({
  'space-armor': require('./assets/fonts/SpaceArmor-vmlv4.otf'),
  'NanumGothicCoding': require('./assets/fonts/NanumGothicCoding-Regular.ttf'),
  'NanumGothicCodingBold': require('./assets/fonts/NanumGothicCoding-Bold.ttf'),
})

export default function App() {
  const [onActive, setIsActive] = useState(true);
  const [font, setFont] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(false);
    }, 10000)
  })
  if(font){
    return (
          <>
            {onActive && <Intro/>}
            {!onActive && <MainStack/>}
            <StatusBar hidden />
          </>
    )
  } else {
    return (
      <AppLoading
          startAsync={fonts}
          onFinish={ () => setFont(true)}
          onError={console.warn}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
