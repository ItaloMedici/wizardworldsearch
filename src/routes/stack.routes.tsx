import React from "react";

import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";

import CharacterScreen from "../screens/Character";
import Home from "../screens/Home";
import { Character } from "../model/Character";
import { findHogwartsHouseColor } from "../Theme/ToolTheme";

const { Navigator, Screen } = createNativeStackNavigator();

export const StackRoutes = () => (
  <Navigator>
    <Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false
      }}
    />
    <Screen
      name="Character"
      component={CharacterScreen}
      options={({ route }) => ({
        title: route.params?.character?.name,
        headerTintColor: "#FFF",
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
        headerStyle: {
          backgroundColor: findHogwartsHouseColor(route.params?.character?.house),
        },
      })}
    />
  </Navigator>
)