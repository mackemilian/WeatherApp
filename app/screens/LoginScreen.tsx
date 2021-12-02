import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Button from "../components/Button";
import { RootLoginParamList } from "../navigators/LoginNavigator";

export default function LoginScreen({
  navigation,
}: NativeStackScreenProps<RootLoginParamList, "Login">) {
  const image =
    "https://i.guim.co.uk/img/media/1ba9bd4ca9e43b21553fe633830acd6fa1f6071c/396_716_2259_1355/master/2259.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e5d9bda8ba42bd81135c95f1be15c752";
  return (
    <ImageBackground
      style={styles.image}
      resizeMode="cover"
      source={{ uri: image }}
    >
      <View style={styles.innerContainer}>
        <Button
          title="Login"
          onPress={() =>
            navigation.navigate("Authenticated", {
              username: "Åsmund Røst Wien",
              imageUri:
                "https://g.acdn.no/obscura/API/dynamic/r1/escenic/tr_1000_2000_s_f/0000/archive/01861/Aurskog_Ungdomsroc_1861845a.jpg?chk=E8DFB8",
            })
          }
        />
        <Button
          title="Register"
          type="light"
          onPress={() => console.log("register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  innerContainer: {
    padding: "20%",
  },
});
