import "react-native-gesture-handler";
import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SeriesTitle from "./pages/SeriesTitle";
import MainPage from "./pages/MainPage";
import SeriesOnePage from "./pages/SeriesOnePage";
import LibraryPage from "./pages/LibraryPage";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainPage}
          options={{
            title: "Главная",
              headerShown: false,
            headerStyle: { backgroundColor: "#F0F8FF", height: 30 },
            headerTitleStyle: {
              fontWeight: "bold",
              alignItems: "center",
              justifyContent: "center",
            },
            headerTitleAlign: {
              alignItems: "center",
              justifyContent: "center",
            },
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
          <Stack.Screen
              name="Library"
              component={LibraryPage}
              options={{
                  title: "Библиотека",
                  headerShown: false,
                  headerStyle: { backgroundColor: "#F0F8FF", height: 30 },
                  headerTitleStyle: { fontWeight: "bold" },
                  cardStyleInterpolator:
                  CardStyleInterpolators.forFadeFromBottomAndroid,
              }}
          />
          <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
                  title: "Профиль",
                  headerShown: false,
                  headerStyle: { backgroundColor: "#F0F8FF", height: 30 },
                  headerTitleStyle: { fontWeight: "bold" },
                  cardStyleInterpolator:
                  CardStyleInterpolators.forFadeFromBottomAndroid,
              }}
          />
        <Stack.Screen
          name="Series"
          component={SeriesTitle}
          options={{
            title: "Все серии",
              headerShown: false,
            headerStyle: { backgroundColor: "#F0F8FF", height: 30 },
            headerTitleStyle: { fontWeight: "bold" },
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
          <Stack.Screen
              name="Settings"
              component={Settings}
              options={{
                  title: "Настройки",
                  headerShown: false,
                  headerStyle: { backgroundColor: "#F0F8FF", height: 30 },
                  headerTitleStyle: { fontWeight: "bold" },
                  cardStyleInterpolator:
                  CardStyleInterpolators.forFadeFromBottomAndroid,
              }}
          />
        <Stack.Screen
          name="SeriesOne"
          component={SeriesOnePage}
          options={{
            title: "1 серия",
              headerShown: false,
            headerStyle: { backgroundColor: "#F0F8FF", height: 30 },
            headerTitleStyle: { fontWeight: "bold" },
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
