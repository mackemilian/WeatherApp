import React from "react";
import { StyleSheet, View } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NavigationProp } from "@react-navigation/native";

import Button from "../components/Button";
import User from "../components/User";
import { RootLoginParamList } from "../navigators/LoginNavigator";
import { RootBottomTabPropTypes } from "../navigators/TabNavigator";
import { weatherServices } from "../services/weatherServices";
import { IWeather } from "../interfaces/Iweather";

export default function SettingsScreen({
  route,
}: BottomTabScreenProps<RootBottomTabPropTypes, "Settings">) {
  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    justifyContent: "space-between",
  },
});
