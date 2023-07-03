import 'react-native-gesture-handler';
import { StyleSheet, StatusBar } from 'react-native';
import MainStack from './navigate';
import Intro from "./components/Intro";
import {useEffect, useState} from "react";

export default function App() {
  const [onActive, setIsActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(false);
    }, 10000)
  })

  return (
      <>
        {onActive && <Intro/>}
        {!onActive && <MainStack/>}
        <StatusBar hidden />
      </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
