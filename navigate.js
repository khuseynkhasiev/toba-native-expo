import 'react-native-gesture-handler';
import React from 'react';
import SeriesTitle from "./pages/SeriesTitle";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MainPage from "./pages/MainPage";
import SeriesOnePage from './pages/SeriesOnePage';


const Stack = createStackNavigator();

export default function Navigate(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Main'
                    component={MainPage}
                    options={{
                        title: 'Главная',
                        headerStyle: { backgroundColor: '#eb5d3d', height: 30},
                        headerTitleStyle: { fontWeight: 'bold',
                            alignItems: 'center',
                            justifyContent: 'center'
                    },
                        headerTitleAlign: {
                            alignItems: 'center',
                            justifyContent: 'center'
                    },
                        cardStyleInterpolator:
                        CardStyleInterpolators.forFadeFromBottomAndroid,
                    }}
                />
                <Stack.Screen
                    name='Series'
                    component={SeriesTitle}
                    options={{
                        title: 'Все серии',
                        headerStyle: { backgroundColor: '#eb5d3d', height: 30},
                        headerTitleStyle: { fontWeight: 'bold' },
                        cardStyleInterpolator:
                        CardStyleInterpolators.forFadeFromBottomAndroid,
                    }}
                />
                <Stack.Screen
                    name='SeriesOne'
                    component={SeriesOnePage}
                    options={{
                        title: '1 серия',
                        headerStyle: { backgroundColor: '#eb5d3d', height: 30},
                        headerTitleStyle: { fontWeight: 'bold' },
                        cardStyleInterpolator:
                        CardStyleInterpolators.forFadeFromBottomAndroid,
                    }
                }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}