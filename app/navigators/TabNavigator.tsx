import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FontAwesome5 } from "@expo/vector-icons";

import { SettingsScreen, UploadImageScreen } from "../screens";
import ImageNavigator from "./ImageNavigator";
import NewPictureButton from "./NewPictureButton";
import { RootLoginParamList } from "./LoginNavigator";

import { StyleSheet } from "react-native";
import colors from "../config/colors";

export type RootBottomTabPropTypes = {
  ImageNavigator: undefined;
  UploadImage: undefined;
  Settings: { username: string; imageUri: string };
};

export default function TabNavigator({
  route,
}: NativeStackScreenProps<RootLoginParamList, "Authenticated">) {
  const Tab = createBottomTabNavigator<RootBottomTabPropTypes>();
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: { backgroundColor: '#f2f2f2', borderTopWidth: 0 },
    }}>
      <Tab.Screen
        name="ImageNavigator"
        component={ImageNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="image" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="UploadImage"
        component={UploadImageScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewPictureButton
              onPress={() => navigation.navigate("UploadImage")}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        initialParams={{
          username: route.params.username,
          imageUri: route.params.imageUri,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
   navBar: {
    backgroundColor: colors.secondary,
  },
});
