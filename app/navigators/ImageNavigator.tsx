import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ImageFeedScreen, ImageScreen } from "../screens";

export type RootImageParamList = {
  ImageFeed: undefined;
  Image: { uri: string };
};

export default function ImageNavigator() {
  const Stack = createNativeStackNavigator<RootImageParamList>();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, presentation: "modal" }}
    >
      <Stack.Screen name="ImageFeed" component={ImageFeedScreen} />
      <Stack.Screen name="Image" component={ImageScreen} />
    </Stack.Navigator>
  );
}
