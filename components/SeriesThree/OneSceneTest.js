import { StyleSheet, Text, View } from "react-native";
import React, { useRef, useEffect, useState } from "react";
import { Video } from "expo-av";
import TouchScreen from "../TouchScreen";
import {
  DialogSvgIcon,
  DialogSvgIcon2,
  DialogSvgIcon3,
  DialogSvgIcon4,
} from "../svg/Svg";

export default function OneSceneTest({ navigation }) {
  const videoRef = useRef(null);
  const [posMillis, setPosMillis] = useState(0);
  const [onBuble8sec, setOnBuble8sec] = useState(false);
  const [onBuble12sec, setOnBuble12sec] = useState(false);
  const [onBuble14sec, setOnBuble14sec] = useState(false);
  const [onBuble20sec, setOnBuble20sec] = useState(false);
  const [onBuble26sec, setOnBuble26sec] = useState(false);

  const unloadVideo = async () => {
    try {
      if (videoRef.current) {
        await videoRef.current.unloadAsync();
      }
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    const playbackStatusUpdate = async (status) => {
      if (status.isPlaying) {
        setPosMillis(status.positionMillis);
        // console.log("Current position:", status.positionMillis);
        // Здесь можно добавить условия в зависимости от значения status.positionMillis
        // Например:
        // if (status.positionMillis >= 5000) {
        //   // Действия при достижении 5000 миллисекунд (5 секунд)
        // }

        // if (status.positionMillis >= 1800 && status.positionMillis <= 2000) {
        //   await videoRef.current.pauseAsync();
        // }

        if (status.positionMillis >= 5000 && status.positionMillis <= 5200) {
          await videoRef.current.pauseAsync();
        }

        if (status.positionMillis >= 8000 && status.positionMillis <= 8200) {
          await videoRef.current.pauseAsync();
          setOnBuble8sec(true);
        }
        if (status.positionMillis >= 13000 && status.positionMillis <= 13200) {
          await videoRef.current.pauseAsync();
          setOnBuble12sec(true);
        }
        if (status.positionMillis >= 14000 && status.positionMillis <= 14200) {
          await videoRef.current.pauseAsync();
          setOnBuble14sec(true);
        }
        if (status.positionMillis >= 20000 && status.positionMillis <= 20200) {
          await videoRef.current.pauseAsync();
          setOnBuble20sec(true);
        }
        if (status.positionMillis >= 26000 && status.positionMillis <= 26200) {
          await videoRef.current.pauseAsync();
          setOnBuble26sec(true);
        }
      }
    };

    if (videoRef.current) {
      videoRef.current.setOnPlaybackStatusUpdate(playbackStatusUpdate);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.setOnPlaybackStatusUpdate(null);
      }
    };
  }, []);

  const backPlayScena = async () => {
    if (posMillis >= 5000 && posMillis <= 5200) {
      unloadVideo();
      navigation.replace("Series");
    }

    if (posMillis >= 8000 && posMillis <= 8200) {
      setOnBuble8sec(false);
      await videoRef.current.playFromPositionAsync(0);
    }

    if (posMillis >= 13000 && posMillis <= 13200) {
      setOnBuble12sec(false);
      await videoRef.current.playFromPositionAsync(8000);
    }
    if (posMillis >= 14000 && posMillis <= 14200) {
      setOnBuble14sec(false);
      await videoRef.current.playFromPositionAsync(13000);
    }

    if (posMillis >= 20000 && posMillis <= 20200) {
      setOnBuble20sec(false);
      await videoRef.current.playFromPositionAsync(14000);
    }
    if (posMillis >= 26000 && posMillis <= 26200) {
      setOnBuble26sec(false);
      await videoRef.current.playFromPositionAsync(20000);
    }

    if (posMillis >= 35000 && posMillis <= 40200) {
      setOnBuble26sec(false);
      await videoRef.current.playFromPositionAsync(26000);
    }
  };
  const nextPlayScena = async () => {
    if (posMillis >= 5000 && posMillis <= 5200) {
      await videoRef.current.playFromPositionAsync(5201);
      await videoRef.current.playAsync(); // Запуск воспроизведения после установки позиции
    }
    if (posMillis >= 8000 && posMillis <= 8200) {
      setOnBuble8sec(false);
      await videoRef.current.playFromPositionAsync(8201);
      await videoRef.current.playAsync(); // Запуск воспроизведения после установки позиции
    }
    if (posMillis >= 13000 && posMillis <= 13200) {
      setOnBuble12sec(false);
      await videoRef.current.playFromPositionAsync(13201);
      await videoRef.current.playAsync(); // Запуск воспроизведения после установки позиции
    }
    if (posMillis >= 14000 && posMillis <= 14200) {
      setOnBuble14sec(false);
      await videoRef.current.playFromPositionAsync(14201);
      await videoRef.current.playAsync(); // Запуск воспроизведения после установки позиции
    }
    if (posMillis >= 20000 && posMillis <= 20200) {
      setOnBuble20sec(false);
      await videoRef.current.playFromPositionAsync(20201);
      await videoRef.current.playAsync(); // Запуск воспроизведения после установки позиции
    }
    if (posMillis >= 26000 && posMillis <= 26200) {
      setOnBuble26sec(false);
      await videoRef.current.playFromPositionAsync(26201);
      await videoRef.current.playAsync(); // Запуск воспроизведения после установки позиции
    }
    if (posMillis >= 35000 && posMillis <= 40200) {
      unloadVideo();
      navigation.replace("Series");
    }
  };

  return (
    <View style={styles.container}>
      {onBuble8sec && (
        <View style={styles.onBuble8sec}>
          <DialogSvgIcon />
          <Text style={styles.onBuble8secText}>
            {" "}
            - Аааааа! Моя любимая вечно-опаздывающая банда. – Дрис
          </Text>
        </View>
      )}
      {onBuble12sec && (
        <View style={styles.onBuble12sec}>
          <DialogSvgIcon2 />
          <Text style={styles.onBuble12secText}>
            - Ты знаешь правила, мы были первыми, так что уйдите с дороги! –
            Шамиль
          </Text>
        </View>
      )}
      {onBuble14sec && (
        <View style={styles.onBuble14sec}>
          <DialogSvgIcon3 />
          <Text style={styles.onBuble14secText}>
            - Я знаю правила! – л.б (лидер банды)
          </Text>
        </View>
      )}
      {onBuble20sec && (
        <View style={styles.onBuble20sec}>
          <DialogSvgIcon4 />
          <Text style={styles.onBuble20secText}>
            - Я пришел чтоб этот ушлепок извинился за оскорбление! – л.б (лидер
            банды)
          </Text>
        </View>
      )}
      {onBuble26sec && (
        <View style={styles.onBuble26sec}>
          <DialogSvgIcon />
          <Text style={styles.onBuble26secText}>
            - Какое еще оскорбление? – Дрис
          </Text>
        </View>
      )}
      <Video
        style={styles.backgroundVideo}
        ref={(ref) => {
          videoRef.current = ref;
        }}
        source={require("../../assets/video/ThreeSeries/probnik2.mp4")}
        isLooping={false}
        useNativeControls={false}
        resizeMode="cover"
        shouldPlay
        progressUpdateIntervalMillis={100}
      />
      <TouchScreen touchNext={nextPlayScena} touchBack={backPlayScena} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  onBuble8sec: {
    position: "absolute",
    zIndex: 1,
    top: "10%",
    right: "20%",
  },
  onBuble8secText: {
    position: "absolute",
    padding: 20,
    textAlign: "center",
  },
  onBuble12sec: {
    position: "absolute",
    zIndex: 1,
    top: "1%",
    left: "37%",
  },
  onBuble12secText: {
    position: "absolute",
    padding: 25,
    textAlign: "center",
    fontSize: 12,
  },
  onBuble14sec: {
    position: "absolute",
    zIndex: 1,
    top: "1%",
    right: "30%",
  },
  onBuble14secText: {
    position: "absolute",
    padding: 25,
    textAlign: "center",
    fontSize: 14,
  },
  onBuble20sec: {
    position: "absolute",
    zIndex: 1,
    top: "1%",
    right: "10%",
  },
  onBuble26secText: {
    position: "absolute",
    padding: 25,
    textAlign: "center",
    fontSize: 14,
  },
  onBuble26sec: {
    position: "absolute",
    zIndex: 1,
    top: "10%",
    left: "20%",
  },
  onBuble20secText: {
    position: "absolute",
    padding: 25,
    textAlign: "center",
    fontSize: 14,
  },
  backgroundVideo: {
    position: "absolute",
    height: "100%",
    width: "100%",
    minHeight: 300,
    minWidth: 300,
  },
});
