import "react-native-gesture-handler";
import React from "react";
import {
    createStackNavigator,
    CardStyleInterpolators,
} from "@react-navigation/stack";
import { Animated } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import SeriesTitle from "./pages/SeriesTitle";
import MainPage from "./pages/MainPage";
import SeriesOnePage from "./pages/SeriesOnePage";
import LibraryPage from "./pages/LibraryPage";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NewYear from "./components/SeriesOne/NewYear";
import ChartMan from "./components/SeriesOne/ChartMan";
import Bio from "./components/SeriesOne/Bio";
import RobotOneScene from "./components/SeriesOne/RobotOneScene";
import RobotTwoScene from "./components/SeriesOne/RobotTwoScene";
import RobotThreeScene from "./components/SeriesOne/RobotThreeScene";
import CityCars from "./components/SeriesOne/CityCars";
import CosmosScene from "./components/SeriesOne/CosmosScene";
import GirlRunScene from "./components/SeriesOne/GirlRunScene";
import GirlRunTwoScene from "./components/SeriesOne/GirlRunTwoScene";
import BoomScene from "./components/SeriesOne/BoomScene";
import BoomTwoScene from "./components/SeriesOne/BoomTwoScene";
import RegenerationScene from "./components/SeriesOne/RegenerationScene";
import NewCityScene from "./components/SeriesOne/NewCityScene";
import PeopleRunStreetsScene from "./components/SeriesOne/PeopleRunStreetsScene";
import SystemSlavesScene from "./components/SeriesOne/SystemSlavesScene";
import AuthorizationPage from "./pages/AuthorizationPage";
import RegisterPageTwo from "./pages/RegisterPageTwo";
import RegisterFinishPage from "./pages/RegisterFinishPage";
import { Provider } from "mobx-react";
import newUserDataStore from "./components/store/createUserDataStore";
import ProfileEdit from "./pages/ProfileEdit";
import ProfileEditPassword from "./pages/ProfileEditPassword";
import LibraryCyberpunkPage from "./pages/LibraryCyberpunkPage";
import LibraryUtopiaPage from "./pages/LibraryUtopiaPage";
import TestVideoOne from "./components/SeriesTwo/TestVideoOne";
import TestVideoTwo from "./components/SeriesTwo/TestVideoTwo";
import OneSceneTest from "./components/SeriesThree/OneSceneTest";
import SeriesFourTest from "./components/SeriesFour/SeriesFourTest";
import SeriesOneNew from "./components/SeriesOneNew/SeriesOneNew";
import { TransitionPresets } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function Navigate() {
    return (
        <Provider newUserDataStore={newUserDataStore}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Authorization"
                        component={AuthorizationPage}
                        options={{
                            title: "Авторизация",
                            headerShown: false,
                            headerStyle: {
                                backgroundColor: "#F0F8FF",
                                height: 30,
                            },
                            headerTitleStyle: {
                                fontWeight: "bold",
                                alignItems: "center",
                                justifyContent: "center",
                            },
                            headerTitleAlign: {
                                alignItems: "center",
                                justifyContent: "center",
                            },
                            // cardStyleInterpolator:
                            // CardStyleInterpolators.forFadeFromBottomAndroid,
                            ...TransitionPresets.FadeFromBottomAndroid,
                            transitionSpec: {
                                open: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации открытия
                                close: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации закрытия
                            },
                        }}
                    />
                    <Stack.Screen
                        name="RegisterPageTwo"
                        component={RegisterPageTwo}
                        options={{
                            title: "Регистрация",
                            headerShown: false,
                            headerStyle: {
                                backgroundColor: "#F0F8FF",
                                height: 30,
                            },
                            headerTitleStyle: {
                                fontWeight: "bold",
                                alignItems: "center",
                                justifyContent: "center",
                            },
                            headerTitleAlign: {
                                alignItems: "center",
                                justifyContent: "center",
                            },
                            // cardStyleInterpolator:
                            // CardStyleInterpolators.forFadeFromBottomAndroid,
                            ...TransitionPresets.FadeFromBottomAndroid,
                            transitionSpec: {
                                open: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации открытия
                                close: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации закрытия
                            },
                        }}
                    />
                    <Stack.Screen
                        name="RegisterFinishPage"
                        component={RegisterFinishPage}
                        options={{
                            title: "Регистрация",
                            headerShown: false,
                            headerStyle: {
                                backgroundColor: "#F0F8FF",
                                height: 30,
                            },
                            headerTitleStyle: {
                                fontWeight: "bold",
                                alignItems: "center",
                                justifyContent: "center",
                            },
                            headerTitleAlign: {
                                alignItems: "center",
                                justifyContent: "center",
                            },
                            // cardStyleInterpolator:
                            // CardStyleInterpolators.forFadeFromBottomAndroid,
                            ...TransitionPresets.FadeFromBottomAndroid,
                            transitionSpec: {
                                open: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации открытия
                                close: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации закрытия
                            },
                        }}
                    />
                    <Stack.Screen
                        name="Main"
                        component={MainPage}
                        options={{
                            title: "Главная",
                            headerLeft: null,
                            headerShown: false,
                            headerStyle: {
                                backgroundColor: "#F0F8FF",
                                height: 30,
                            },
                            headerTitleStyle: {
                                fontWeight: "bold",
                                alignItems: "center",
                                justifyContent: "center",
                            },
                            headerTitleAlign: {
                                alignItems: "center",
                                justifyContent: "center",
                            },
                            gestureEnabled: false,
                            ...TransitionPresets.ScaleFromCenterAndroid, // анимация перехода
                            transitionSpec: {
                                open: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации открытия
                                close: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации закрытия
                            },
                        }}
                    />
                    <Stack.Screen
                        name="Library"
                        component={LibraryPage}
                        options={{
                            title: "Библиотека",
                            headerShown: false,
                            headerStyle: {
                                backgroundColor: "#F0F8FF",
                                height: 30,
                            },
                            headerTitleStyle: { fontWeight: "bold" },
                            // cardStyleInterpolator:
                            // CardStyleInterpolators.forFadeFromBottomAndroid,
                            ...TransitionPresets.FadeFromBottomAndroid,
                            transitionSpec: {
                                open: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации открытия
                                close: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации закрытия
                            },
                        }}
                    />
                    <Stack.Screen
                        name="LibraryCyberpunkPage"
                        component={LibraryCyberpunkPage}
                        options={{
                            title: "Мир Киберпанк",
                            headerShown: false,
                            headerStyle: {
                                backgroundColor: "#F0F8FF",
                                height: 30,
                            },
                            headerTitleStyle: { fontWeight: "bold" },
                            // cardStyleInterpolator:
                            // CardStyleInterpolators.forFadeFromBottomAndroid,
                            ...TransitionPresets.FadeFromBottomAndroid,
                            transitionSpec: {
                                open: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации открытия
                                close: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации закрытия
                            },
                        }}
                    />
                    <Stack.Screen
                        name="LibraryUtopiaPage"
                        component={LibraryUtopiaPage}
                        options={{
                            title: "Мир Утопия",
                            headerShown: false,
                            headerStyle: {
                                backgroundColor: "#F0F8FF",
                                height: 30,
                            },
                            headerTitleStyle: { fontWeight: "bold" },
                            // cardStyleInterpolator:
                            // CardStyleInterpolators.forFadeFromBottomAndroid,
                            ...TransitionPresets.FadeFromBottomAndroid,
                            transitionSpec: {
                                open: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации открытия
                                close: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации закрытия
                            },
                        }}
                    />
                    <Stack.Screen
                        name="Profile"
                        component={Profile}
                        options={{
                            unmountOnBlur: true,
                            title: "Профиль",
                            headerShown: false,
                            headerStyle: {
                                backgroundColor: "#F0F8FF",
                                height: 30,
                            },
                            headerTitleStyle: { fontWeight: "bold" },
                            // cardStyleInterpolator:
                            // CardStyleInterpolators.forFadeFromBottomAndroid,
                            ...TransitionPresets.FadeFromBottomAndroid,
                            transitionSpec: {
                                open: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации открытия
                                close: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации закрытия
                            },
                        }}
                    />
                    <Stack.Screen
                        name="ProfileEdit"
                        component={ProfileEdit}
                        options={{
                            title: "Редактирование профиля",
                            headerShown: false,
                            headerStyle: {
                                backgroundColor: "#F0F8FF",
                                height: 30,
                            },
                            headerTitleStyle: { fontWeight: "bold" },
                            // cardStyleInterpolator:
                            // CardStyleInterpolators.forFadeFromBottomAndroid,
                            ...TransitionPresets.FadeFromBottomAndroid,
                            transitionSpec: {
                                open: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации открытия
                                close: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации закрытия
                            },
                        }}
                    />
                    <Stack.Screen
                        name="ProfileEditPassword"
                        component={ProfileEditPassword}
                        options={{
                            title: "Редактирование профиля",
                            headerShown: false,
                            headerStyle: {
                                backgroundColor: "#F0F8FF",
                                height: 30,
                            },
                            headerTitleStyle: { fontWeight: "bold" },
                            // cardStyleInterpolator:
                            // CardStyleInterpolators.forFadeFromBottomAndroid,
                            presentation: "transparentModal", // затухание при перемещении
                            ...TransitionPresets.forRevealFromBottomAndroid,
                            transitionSpec: {
                                open: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации открытия
                                close: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации закрытия
                            },
                        }}
                    />
                    <Stack.Screen
                        name="Series"
                        component={SeriesTitle}
                        options={{
                            title: "Все серии",
                            headerShown: false,
                            headerStyle: {
                                backgroundColor: "#F0F8FF",
                                height: 30,
                            },
                            headerTitleStyle: { fontWeight: "bold" },
                            // cardStyleInterpolator:
                            // CardStyleInterpolators.forFadeFromBottomAndroid,
                            // cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
                            ...TransitionPresets.FadeFromBottomAndroid,
                            transitionSpec: {
                                open: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации открытия
                                close: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации закрытия
                            },
                        }}
                    />
                    <Stack.Screen
                        name="SeriesOnePage"
                        component={SeriesOnePage}
                        options={{
                            title: "SeriesOnePage",
                            headerShown: false,
                            headerStyle: {
                                backgroundColor: "#F0F8FF",
                                height: 30,
                            },
                            headerTitleStyle: { fontWeight: "bold" },
                            // cardStyleInterpolator:
                            // CardStyleInterpolators.forFadeFromBottomAndroid,
                            ...TransitionPresets.FadeFromBottomAndroid,
                            transitionSpec: {
                                open: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации открытия
                                close: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации закрытия
                            },
                        }}
                    />
                    <Stack.Screen
                        name="Settings"
                        component={Settings}
                        options={{
                            title: "Настройки",
                            headerShown: false,
                            headerStyle: {
                                backgroundColor: "#F0F8FF",
                                height: 30,
                            },
                            headerTitleStyle: { fontWeight: "bold" },
                            // cardStyleInterpolator:
                            // CardStyleInterpolators.forFadeFromBottomAndroid,
                            ...TransitionPresets.FadeFromBottomAndroid,
                            transitionSpec: {
                                open: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации открытия
                                close: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации закрытия
                            },
                        }}
                    />
                    <Stack.Group>
                        <Stack.Screen
                            name="NewYear"
                            component={NewYear}
                            options={{
                                title: "NewYear",
                                headerShown: false,
                                headerStyle: {
                                    backgroundColor: "#F0F8FF",
                                    height: 30,
                                },
                                headerTitleStyle: { fontWeight: "bold" },
                                // cardStyleInterpolator:
                                // CardStyleInterpolators.forFadeFromBottomAndroid,
                                // cardStyleInterpolator: forFade
                                ...TransitionPresets.FadeFromBottomAndroid,
                                transitionSpec: {
                                    open: {
                                        animation: "timing",
                                        config: { duration: 1000 },
                                    }, // Настройка анимации открытия
                                    close: {
                                        animation: "timing",
                                        config: { duration: 700 },
                                    }, // Настройка анимации закрытия
                                },
                            }}
                        />
                        <Stack.Screen
                            name="ChartMan"
                            component={ChartMan}
                            options={{
                                title: "ChartMan",
                                headerShown: false,
                                headerStyle: {
                                    backgroundColor: "#F0F8FF",
                                    height: 30,
                                },
                                headerTitleStyle: { fontWeight: "bold" },
                                // cardStyleInterpolator:
                                // CardStyleInterpolators.forFadeFromBottomAndroid,
                                // cardStyleInterpolator: forFade
                                ...TransitionPresets.FadeFromBottomAndroid,
                                transitionSpec: {
                                    open: {
                                        animation: "timing",
                                        config: { duration: 1000 },
                                    }, // Настройка анимации открытия
                                    close: {
                                        animation: "timing",
                                        config: { duration: 700 },
                                    }, // Настройка анимации закрытия
                                },
                            }}
                        />
                        <Stack.Screen
                            name="Bio"
                            component={Bio}
                            options={{
                                title: "Bio",
                                headerShown: false,
                                headerStyle: {
                                    backgroundColor: "#F0F8FF",
                                    height: 30,
                                },
                                headerTitleStyle: { fontWeight: "bold" },
                                // cardStyleInterpolator:
                                // CardStyleInterpolators.forFadeFromBottomAndroid,
                                // ...TransitionPresets.FadeFromBottomAndroid,
                                // transitionSpec: {
                                //   open: { animation: "timing", config: { duration: 500 } }, // Настройка анимации открытия
                                //   close: { animation: "timing", config: { duration: 500 } }, // Настройка анимации закрытия
                                // },
                            }}
                        />
                        <Stack.Screen
                            name="RobotOneScene"
                            component={RobotOneScene}
                            options={{
                                title: "RobotOneScene",
                                headerShown: false,
                                headerStyle: {
                                    backgroundColor: "#F0F8FF",
                                    height: 30,
                                },
                                headerTitleStyle: { fontWeight: "bold" },
                                // cardStyleInterpolator:
                                // CardStyleInterpolators.forFadeFromBottomAndroid,
                                // ...TransitionPresets.FadeFromBottomAndroid,
                                // transitionSpec: {
                                //   open: { animation: "timing", config: { duration: 500 } }, // Настройка анимации открытия
                                //   close: { animation: "timing", config: { duration: 500 } }, // Настройка анимации закрытия
                                // },
                            }}
                        />
                        <Stack.Screen
                            name="RobotTwoScene"
                            component={RobotTwoScene}
                            options={{
                                title: "RobotTwoScene",
                                headerShown: false,
                                headerStyle: {
                                    backgroundColor: "#F0F8FF",
                                    height: 30,
                                },
                                headerTitleStyle: { fontWeight: "bold" },
                                // cardStyleInterpolator:
                                // CardStyleInterpolators.forFadeFromBottomAndroid,
                                ...TransitionPresets.FadeFromBottomAndroid,
                                transitionSpec: {
                                    open: {
                                        animation: "timing",
                                        config: { duration: 500 },
                                    }, // Настройка анимации открытия
                                    close: {
                                        animation: "timing",
                                        config: { duration: 500 },
                                    }, // Настройка анимации закрытия
                                },
                            }}
                        />
                        <Stack.Screen
                            name="RobotThreeScene"
                            component={RobotThreeScene}
                            options={{
                                title: "RobotThreeScene",
                                headerShown: false,
                                headerStyle: {
                                    backgroundColor: "#F0F8FF",
                                    height: 30,
                                },
                                headerTitleStyle: { fontWeight: "bold" },
                                // cardStyleInterpolator:
                                // CardStyleInterpolators.forFadeFromBottomAndroid,
                                ...TransitionPresets.FadeFromBottomAndroid,
                                transitionSpec: {
                                    open: {
                                        animation: "timing",
                                        config: { duration: 500 },
                                    }, // Настройка анимации открытия
                                    close: {
                                        animation: "timing",
                                        config: { duration: 500 },
                                    }, // Настройка анимации закрытия
                                },
                            }}
                        />
                        <Stack.Screen
                            name="CityCars"
                            component={CityCars}
                            options={{
                                title: "CityCars",
                                headerShown: false,
                                headerStyle: {
                                    backgroundColor: "#F0F8FF",
                                    height: 30,
                                },
                                headerTitleStyle: { fontWeight: "bold" },
                                // cardStyleInterpolator:
                                // CardStyleInterpolators.forFadeFromBottomAndroid,
                                ...TransitionPresets.FadeFromBottomAndroid,
                                transitionSpec: {
                                    open: {
                                        animation: "timing",
                                        config: { duration: 500 },
                                    }, // Настройка анимации открытия
                                    close: {
                                        animation: "timing",
                                        config: { duration: 500 },
                                    }, // Настройка анимации закрытия
                                },
                            }}
                        />
                        <Stack.Screen
                            name="CosmosScene"
                            component={CosmosScene}
                            options={{
                                title: "CosmosScene",
                                headerShown: false,
                                headerStyle: {
                                    backgroundColor: "#F0F8FF",
                                    height: 30,
                                },
                                headerTitleStyle: { fontWeight: "bold" },
                                // cardStyleInterpolator:
                                // CardStyleInterpolators.forFadeFromBottomAndroid,
                                ...TransitionPresets.FadeFromBottomAndroid,
                                transitionSpec: {
                                    open: {
                                        animation: "timing",
                                        config: { duration: 500 },
                                    }, // Настройка анимации открытия
                                    close: {
                                        animation: "timing",
                                        config: { duration: 500 },
                                    }, // Настройка анимации закрытия
                                },
                            }}
                        />
                        <Stack.Screen
                            name="GirlRunScene"
                            component={GirlRunScene}
                            options={{
                                title: "GirlRunScene",
                                headerShown: false,
                                headerStyle: {
                                    backgroundColor: "#F0F8FF",
                                    height: 30,
                                },
                                headerTitleStyle: { fontWeight: "bold" },
                                // cardStyleInterpolator:
                                // CardStyleInterpolators.forFadeFromBottomAndroid,
                                ...TransitionPresets.FadeFromBottomAndroid,
                                transitionSpec: {
                                    open: {
                                        animation: "timing",
                                        config: { duration: 500 },
                                    }, // Настройка анимации открытия
                                    close: {
                                        animation: "timing",
                                        config: { duration: 500 },
                                    }, // Настройка анимации закрытия
                                },
                            }}
                        />
                        <Stack.Screen
                            name="GirlRunTwoScene"
                            component={GirlRunTwoScene}
                            options={{
                                title: "GirlRunTwoScene",
                                headerShown: false,
                                headerStyle: {
                                    backgroundColor: "#F0F8FF",
                                    height: 30,
                                },
                                headerTitleStyle: { fontWeight: "bold" },
                                // cardStyleInterpolator:
                                // CardStyleInterpolators.forFadeFromBottomAndroid,
                                ...TransitionPresets.FadeFromBottomAndroid,
                                transitionSpec: {
                                    open: {
                                        animation: "timing",
                                        config: { duration: 500 },
                                    }, // Настройка анимации открытия
                                    close: {
                                        animation: "timing",
                                        config: { duration: 500 },
                                    }, // Настройка анимации закрытия
                                },
                            }}
                        />
                        <Stack.Screen
                            name="BoomScene"
                            component={BoomScene}
                            options={{
                                title: "BoomScene",
                                headerShown: false,
                                headerStyle: {
                                    backgroundColor: "#F0F8FF",
                                    height: 30,
                                },
                                headerTitleStyle: { fontWeight: "bold" },
                                // cardStyleInterpolator:
                                // CardStyleInterpolators.forFadeFromBottomAndroid,
                                ...TransitionPresets.FadeFromBottomAndroid,
                                transitionSpec: {
                                    open: {
                                        animation: "timing",
                                        config: { duration: 500 },
                                    }, // Настройка анимации открытия
                                    close: {
                                        animation: "timing",
                                        config: { duration: 500 },
                                    }, // Настройка анимации закрытия
                                },
                            }}
                        />
                        <Stack.Screen
                            name="BoomTwoScene"
                            component={BoomTwoScene}
                            options={{
                                title: "BoomTwoScene",
                                headerShown: false,
                                headerStyle: {
                                    backgroundColor: "#F0F8FF",
                                    height: 30,
                                },
                                headerTitleStyle: { fontWeight: "bold" },
                                // cardStyleInterpolator:
                                // CardStyleInterpolators.forFadeFromBottomAndroid,
                                ...TransitionPresets.FadeFromBottomAndroid,
                                transitionSpec: {
                                    open: {
                                        animation: "timing",
                                        config: { duration: 500 },
                                    }, // Настройка анимации открытия
                                    close: {
                                        animation: "timing",
                                        config: { duration: 500 },
                                    }, // Настройка анимации закрытия
                                },
                            }}
                        />
                        <Stack.Screen
                            name="RegenerationScene"
                            component={RegenerationScene}
                            options={{
                                title: "RegenerationScene",
                                headerShown: false,
                                headerStyle: {
                                    backgroundColor: "#F0F8FF",
                                    height: 30,
                                },
                                headerTitleStyle: { fontWeight: "bold" },
                                // cardStyleInterpolator:
                                // CardStyleInterpolators.forFadeFromBottomAndroid,
                                ...TransitionPresets.FadeFromBottomAndroid,
                                transitionSpec: {
                                    open: {
                                        animation: "timing",
                                        config: { duration: 500 },
                                    }, // Настройка анимации открытия
                                    close: {
                                        animation: "timing",
                                        config: { duration: 500 },
                                    }, // Настройка анимации закрытия
                                },
                            }}
                        />
                        <Stack.Screen
                            name="NewCityScene"
                            component={NewCityScene}
                            options={{
                                title: "NewCityScene",
                                headerShown: false,
                                headerStyle: {
                                    backgroundColor: "#F0F8FF",
                                    height: 30,
                                },
                                headerTitleStyle: { fontWeight: "bold" },
                                // cardStyleInterpolator:
                                // CardStyleInterpolators.forFadeFromBottomAndroid,
                                ...TransitionPresets.FadeFromBottomAndroid,
                                transitionSpec: {
                                    open: {
                                        animation: "timing",
                                        config: { duration: 500 },
                                    }, // Настройка анимации открытия
                                    close: {
                                        animation: "timing",
                                        config: { duration: 500 },
                                    }, // Настройка анимации закрытия
                                },
                            }}
                        />
                        <Stack.Screen
                            name="PeopleRunStreetsScene"
                            component={PeopleRunStreetsScene}
                            options={{
                                title: "PeopleRunStreetsScene",
                                headerShown: false,
                                headerStyle: {
                                    backgroundColor: "#F0F8FF",
                                    height: 30,
                                },
                                headerTitleStyle: { fontWeight: "bold" },
                                // cardStyleInterpolator:
                                // CardStyleInterpolators.forFadeFromBottomAndroid,
                                ...TransitionPresets.FadeFromBottomAndroid,
                                transitionSpec: {
                                    open: {
                                        animation: "timing",
                                        config: { duration: 500 },
                                    }, // Настройка анимации открытия
                                    close: {
                                        animation: "timing",
                                        config: { duration: 500 },
                                    }, // Настройка анимации закрытия
                                },
                            }}
                        />
                        <Stack.Screen
                            name="SystemSlavesScene"
                            component={SystemSlavesScene}
                            options={{
                                title: "SystemSlavesScene",
                                headerShown: false,
                                headerStyle: {
                                    backgroundColor: "#F0F8FF",
                                    height: 30,
                                },
                                headerTitleStyle: { fontWeight: "bold" },
                                // cardStyleInterpolator:
                                // CardStyleInterpolators.forFadeFromBottomAndroid,
                                ...TransitionPresets.FadeFromBottomAndroid,
                                transitionSpec: {
                                    open: {
                                        animation: "timing",
                                        config: { duration: 500 },
                                    }, // Настройка анимации открытия
                                    close: {
                                        animation: "timing",
                                        config: { duration: 500 },
                                    }, // Настройка анимации закрытия
                                },
                            }}
                        />
                    </Stack.Group>

                    <Stack.Screen
                        name="TestVideoOne"
                        component={TestVideoOne}
                        options={{
                            title: "TestVideoOne",
                            headerShown: false,
                            headerStyle: {
                                backgroundColor: "#F0F8FF",
                                height: 30,
                            },
                            headerTitleStyle: { fontWeight: "bold" },
                            // cardStyleInterpolator:
                            // CardStyleInterpolators.forFadeFromBottomAndroid,
                            ...TransitionPresets.FadeFromBottomAndroid,
                            transitionSpec: {
                                open: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации открытия
                                close: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации закрытия
                            },
                        }}
                    />
                    <Stack.Screen
                        name="TestVideoTwo"
                        component={TestVideoTwo}
                        options={{
                            title: "TestVideoTwo",
                            headerShown: false,
                            headerStyle: {
                                backgroundColor: "#F0F8FF",
                                height: 30,
                            },
                            headerTitleStyle: { fontWeight: "bold" },
                            // cardStyleInterpolator:
                            // CardStyleInterpolators.forFadeFromBottomAndroid,
                            ...TransitionPresets.FadeFromBottomAndroid,
                            transitionSpec: {
                                open: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации открытия
                                close: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации закрытия
                            },
                        }}
                    />
                    <Stack.Screen
                        name="OneSceneTest"
                        component={OneSceneTest}
                        options={{
                            title: "OneSceneTest",
                            headerShown: false,
                            headerStyle: {
                                backgroundColor: "#F0F8FF",
                                height: 30,
                            },
                            headerTitleStyle: { fontWeight: "bold" },
                            // cardStyleInterpolator:
                            // CardStyleInterpolators.forFadeFromBottomAndroid,
                            ...TransitionPresets.FadeFromBottomAndroid,
                            transitionSpec: {
                                open: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации открытия
                                close: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации закрытия
                            },
                        }}
                    />
                    <Stack.Screen
                        name="SeriesFourTest"
                        component={SeriesFourTest}
                        options={{
                            title: "SeriesFourTest",
                            headerShown: false,
                            headerStyle: {
                                backgroundColor: "#F0F8FF",
                                height: 30,
                            },
                            headerTitleStyle: { fontWeight: "bold" },
                            // cardStyleInterpolator:
                            // CardStyleInterpolators.forFadeFromBottomAndroid,
                            ...TransitionPresets.FadeFromBottomAndroid,
                            transitionSpec: {
                                open: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации открытия
                                close: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации закрытия
                            },
                        }}
                    />
                    <Stack.Screen
                        name="SeriesOneNew"
                        component={SeriesOneNew}
                        options={{
                            title: "SeriesOneNew",
                            headerShown: false,
                            headerStyle: {
                                backgroundColor: "#F0F8FF",
                                height: 30,
                            },
                            headerTitleStyle: { fontWeight: "bold" },
                            // cardStyleInterpolator:
                            // CardStyleInterpolators.forFadeFromBottomAndroid,
                            ...TransitionPresets.FadeFromBottomAndroid,
                            transitionSpec: {
                                open: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации открытия
                                close: {
                                    animation: "timing",
                                    config: { duration: 500 },
                                }, // Настройка анимации закрытия
                            },
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
