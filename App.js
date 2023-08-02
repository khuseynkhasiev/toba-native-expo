import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import MainStack from "./navigate";
import Intro from "./components/Intro";
import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen"; //
import * as Font from "expo-font";

const fonts = () =>
    Font.loadAsync({
        "space-armor": require("./assets/fonts/SpaceArmor-vmlv4.otf"),
        NanumGothicCoding: require("./assets/fonts/NanumGothicCoding-Regular.ttf"),
        NanumGothicCodingBold: require("./assets/fonts/NanumGothicCoding-Bold.ttf"),
        Montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
    });

export default function App() {
    const [onActive, setIsActive] = useState(true);
    const [font, setFont] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsActive(false);
        }, 10000);
    }, []);

    useEffect(() => {
        // Запрещаем автоматически скрывать экран загрузки при запуске приложения
        SplashScreen.preventAutoHideAsync();

        // Выполняем необходимые действия перед скрытием экрана загрузки
        // Например, загружаем шрифты
        fonts()
            .then(() => {
                // Затем скрываем экран загрузки
                SplashScreen.hideAsync();
                setFont(true);
            })
            .catch((error) => console.warn(error));
    }, []);

    if (font) {
        return (
/*                        <>
                {onActive && <Intro/>}
                {!onActive && <MainStack/>}
                <StatusBar hidden />
            </>*/
            <>
                <MainStack />
                <StatusBar hidden />
            </>
            )
    } else {
        return null; // Возвращаем `null` во время загрузки шрифтов, экран загрузки управляется `expo-splash-screen`
    }
}

/*import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import MainStack from "./navigate";
import Intro from "./components/Intro";
import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen"; //
import * as Font from "expo-font";

const fonts = () =>
    Font.loadAsync({
        "space-armor": require("./assets/fonts/SpaceArmor-vmlv4.otf"),
        NanumGothicCoding: require("./assets/fonts/NanumGothicCoding-Regular.ttf"),
        NanumGothicCodingBold: require("./assets/fonts/NanumGothicCoding-Bold.ttf"),
        Montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
    });

export default function App() {
    const [onActive, setIsActive] = useState(true);
    const [font, setFont] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsActive(false);
        }, 10000);
    }, []);

    useEffect(() => {
        // Запрещаем автоматически скрывать экран загрузки при запуске приложения
        SplashScreen.preventAutoHideAsync();

        // Выполняем необходимые действия перед скрытием экрана загрузки
        // Например, загружаем шрифты
        fonts()
            .then(() => {
                // Затем скрываем экран загрузки
                SplashScreen.hideAsync();
                setFont(true);
            })
            .catch((error) => console.warn(error));
    }, []);

    if (font) {
        return (
            /!*          <>
                  {onActive && <Intro/>}
                  {!onActive && <MainStack/>}
                  <StatusBar hidden />
                </>*!/
            <>
                <MainStack />
                <StatusBar hidden />
            </>
        );
    } else {
        return null; // Возвращаем `null` во время загрузки шрифтов, экран загрузки управляется `expo-splash-screen`
    }
}*/


/*
import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import MainStack from "./navigate";
import Intro from "./components/Intro";
import { useEffect, useState } from "react";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";

const fonts = () =>
  Font.loadAsync({
    "space-armor": require("./assets/fonts/SpaceArmor-vmlv4.otf"),
    NanumGothicCoding: require("./assets/fonts/NanumGothicCoding-Regular.ttf"),
    NanumGothicCodingBold: require("./assets/fonts/NanumGothicCoding-Bold.ttf"),
    Montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
  });

export default function App() {
  const [onActive, setIsActive] = useState(true);
  const [font, setFont] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(false);
    }, 10000);
  });
  if (font) {
    return (
      /!*          <>
            {onActive && <Intro/>}
            {!onActive && <MainStack/>}
            <StatusBar hidden />
          </>*!/
      <>
        <MainStack />
        <StatusBar hidden />
      </>
    );
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={console.warn}
      />
    );
  }
}
*/
