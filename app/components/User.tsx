import React from "react";
import { Text, StyleSheet, View, Image, Dimensions } from "react-native";

import colors from "../config/colors";

type Props = { username: string; imageUri: string };

export default function User({ username, imageUri }: Props) {
  const { width } = Dimensions.get("screen");

  const size = width / 2;

  const styles = StyleSheet.create({
    container: { alignItems: "center" },
    imageContainer: {
      width: size,
      height: size,
      borderRadius: size / 2,
      borderWidth: 1,
      borderColor: colors.dark,
      overflow: "hidden",
      marginBottom: 15,
    },
    username: {
      color: colors.dark,
      textTransform: "capitalize",
      fontSize: 20,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUri, width: size, height: size }} />
      </View>
      <Text style={styles.username}>{username}</Text>
    </View>
  );
}
