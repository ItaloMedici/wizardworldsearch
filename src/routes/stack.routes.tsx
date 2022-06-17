import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Character from "../screens/Character";
import Home from "../screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export const StackRoutes = () => (
  <Navigator>
    <Screen
      name="Home"
      component={Home}
    />
    <Screen
      name="Detail"
      component={Character}
    />
  </Navigator>
)