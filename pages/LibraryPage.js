import {
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { MenuBackSvgIcon, ProfileSvgIcon } from "../components/svg/Svg";
import * as React from "react";
import { useState } from "react";

export default function LibraryPage({ navigation }) {
    const [isActiveCyberpunk, setIsActiveCyberpunk] = useState(false);

    return (
        <SafeAreaView style={styles.library}>
            {isActiveCyberpunk ? (
                <>
                    <View style={styles.library__titleContainer}>
                        <Text style={styles.library__title}>мир киберпанк</Text>
                    </View>
                    <View style={styles.library__container}>
                        <ImageBackground
                            style={styles.library__background}
                            source={require("../assets/image/libraryPage__cyberpunkBg.png")}
                        />
                        <TouchableOpacity
                            style={styles.library__menuBtn}
                            onPress={() => navigation.navigate("Main")}
                        >
                            <MenuBackSvgIcon />
                        </TouchableOpacity>
                    </View>
                </>
            ) : (
                <>
                    <View style={styles.library__titleContainer}>
                        <Text style={styles.library__title}>БИБЛИОТЕКА</Text>
                    </View>
                    <View style={styles.library__container}>
                        <View style={styles.library__textContainer}>
                            <Text style={styles.library__text}>
                                Описание что такое библиотека,что можно в ней
                                делать и тдОписание что такое библиотека,что
                                можно в ней делать и тд
                            </Text>
                            <ImageBackground
                                style={styles.library__lineImage}
                                source={require("../assets/image/LibraryLine.png")}
                            />
                            <View style={styles.library__textBottomContainer}>
                                <Text style={styles.library__titleTextBottom}>
                                    10
                                </Text>
                                <Text style={styles.library__textBottom}>
                                    разделов
                                </Text>
                                <Text style={styles.library__titleTextBottom}>
                                    56
                                </Text>
                                <Text style={styles.library__textBottom}>
                                    книг
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.library__menuBtn}
                            onPress={() => navigation.navigate("Main")}
                        >
                            <MenuBackSvgIcon />
                        </TouchableOpacity>

                        <ImageBackground
                            resizeMode="contain"
                            style={styles.library__leftBtnBg}
                            source={require("../assets/image/libraryLeftBtnBg.png")}
                        >
                            <TouchableOpacity
                                style={styles.library__leftBtn}
                                onPress={() =>
                                    navigation.navigate("LibraryCyberpunkPage")
                                }
                            >
                                <Text style={styles.library__rightBtnTextTitle}>
                                    мир
                                </Text>
                                <Text style={styles.library__rightBtnText}>
                                    киберпанк
                                </Text>
                            </TouchableOpacity>
                        </ImageBackground>
                        <ImageBackground
                            resizeMode="contain"
                            style={styles.library__rightBtnBg}
                            source={require("../assets/image/libraryRightBtnBg.png")}
                        >
                            <TouchableOpacity
                                style={styles.library__rightBtn}
                                onPress={() =>
                                    navigation.navigate("LibraryUtopiaPage")
                                }
                            >
                                <Text style={styles.library__rightBtnTextTitle}>
                                    мир
                                </Text>
                                <Text style={styles.library__rightBtnText}>
                                    утопия
                                </Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                </>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    library__leftBtn: {},
    library__rightBtnTextTitle: {
        color: `rgba(255, 255, 255, 0.70)`,
        textShadowColor: `0px 0px 70px rgba(45, 122, 238, 0.66)`,
        fontFamily: "comics-toba",
        fontSize: 48,
        fontStyle: "normal",
        fontWeight: 400,
        textAlign: "center",
    },
    library__rightBtnText: {
        color: `rgba(255, 255, 255, 0.70)`,
        fontFamily: "comics-toba",
        fontSize: 24,
        fontStyle: "normal",
        fontWeight: 400,
        textAlign: "center",
    },
    library__rightBtn: {},
    library__textBottom: {
        color: "#FFF",
        textAlign: "center",
        fontFamily: "Montserrat",
        fontSize: 10,
        fontStyle: "normal",
        fontWeight: 300,
    },
    library__titleTextBottom: {
        color: "#FFF",
        textAlign: "center",
        fontFamily: "space-armor",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: 400,
    },
    library__textBottomContainer: {
        position: "absolute",
        bottom: 5,
        zIndex: 2,
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        columnGap: 3,
    },
    library__lineImage: {
        position: "absolute",
        width: 150,
        height: 50,
        bottom: 40,
        zIndex: 3,
    },
    library__container: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "black",
    },
    library__titleContainer: {
        width: "100%",
        position: "absolute",
        top: 30,
        left: 0,
        right: 0,
        alignItems: "center",
        zIndex: 3,
    },
    library__title: {
        color: "rgba(255, 255, 255, 0.80)",
        textShadowColor: "0px 0px 70px 0px rgba(45, 122, 238, 0.66)",
        fontSize: 38,
        fontFamily: "comics-toba",
        fontStyle: "normal",
        fontWeight: 400,
    },
    library__menuBtn: {
        position: "absolute",
        top: 15,
        left: 15,
        zIndex: 3,
    },
    library__menuIcon: {
        width: 30,
        height: 20,
    },
    library: {
        flex: 1,
        width: "100%",
        position: "relative",
    },
    library__background: {
        width: "100%",
        height: "100%",
    },
    library__leftBtnBg: {
        width: 300,
        height: "100%",
        position: "absolute",
        zIndex: 2,
        left: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    library__rightBtnBg: {
        width: 300,
        height: "100%",
        position: "absolute",
        zIndex: 2,
        right: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    library__profileIcon: {
        width: 45,
        height: 45,
        //resizeMode: 'cover'
    },
    library__seriesBtn: {
        position: "absolute",
        right: 10,
        bottom: 10,
        display: "flex",
        flexDirection: "row",
        columnGap: 5,
    },
    library__seriesIcon: {
        width: 12,
        height: 20,
    },
    library__profileBtn: {
        position: "absolute",
        top: 10,
        right: 10,
    },
    library__textContainer: {
        position: "absolute",
        width: 180,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        zIndex: 2,
    },
    library__text: {
        color: "#FFF",
        textAlign: "center",
        fontFamily: "Montserrat",
        fontSize: 10,
        fontStyle: "normal",
        fontWeight: 300,
    },
});
