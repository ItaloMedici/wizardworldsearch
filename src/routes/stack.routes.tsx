import React from "react";

import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";

import CharacterScreen from "../screens/Character";
import Home from "../screens/Home";
import { Character } from "../model/Character";

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
    />
  </Navigator>
)