import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import colors from "../config/colors";
import { RootImageParamList } from "../navigators/ImageNavigator";

export default function ImageScreen({
  route,
}: NativeStackScreenProps<RootImageParamList, "Image">) {
  const { width } = Dimensions.get("window");
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: route.params.uri,
          width: width,
          height: width,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.dark,
  },
});
