import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  GestureResponderEvent,
  StyleSheet,
  Image,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import colors from "../config/colors";

type Props = {
  onPress: (event: GestureResponderEvent) => void;
};

export default function NewPictureButton({ onPress }: Props) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
    
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    width: 80,
    height: 80,
    borderRadius: 40,
    bottom: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 1,
  },
  tinyLogo: {
    width: 40,
    height: 40,
    tintColor: "#5b5b5b",
  }
});
