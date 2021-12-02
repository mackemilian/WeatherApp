import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginScreen } from "../screens";
import TabNavigator from "./TabNavigator";

export type RootLoginParamList = {
  Login: undefined;
  Authenticated: { username: string; imageUri: string };
};

export default function LoginNavigator() {
  const Stack = createNativeStackNavigator<RootLoginParamList>();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Authenticated" component={TabNavigator} />
    </Stack.Navigator>
  );
}
