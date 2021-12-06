import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FontAwesome5 } from "@expo/vector-icons";

import { SettingsScreen, UploadImageScreen } from "../screens";
import ImageNavigator from "./ImageNavigator";
import NewPictureButton from "./NewPictureButton";
import { RootLoginParamList } from "./LoginNavigator";

import { Dimensions, Platform, StyleSheet, View } from "react-native";
import colors from "../config/colors";

export type RootBottomTabPropTypes = {
  Saved: undefined;
  Weather: undefined;
  Settings: undefined;
};

export default function TabNavigator({
  route,
}: NativeStackScreenProps<RootLoginParamList>) {
  const Tab = createBottomTabNavigator<RootBottomTabPropTypes>();
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: 
        {  
          backgroundColor: "#cbd6bd",
        },  
        headerShown: false, 
        tabBarActiveTintColor: "#348899", 
        tabBarHideOnKeyboard: true, 
        tabBarInactiveTintColor: "#5B5B5B"
    }}>
      <Tab.Screen
        name={"Saved"}
        component={ImageNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="heart"  size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"Weather"}
        component={UploadImageScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="umbrella" size={size} color={color} />
            ),
        }}
      />
      <Tab.Screen
        name={"Settings"}
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="cog" size={size} color={color} />
            ),
        }}
        
      />
      
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
   navBar: {
    backgroundColor: colors.primary,
  },

});
