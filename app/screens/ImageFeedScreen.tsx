import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootImageParamList } from "../navigators/ImageNavigator";

const images: string[] = [
  "https://i.guim.co.uk/img/media/1ba9bd4ca9e43b21553fe633830acd6fa1f6071c/396_716_2259_1355/master/2259.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e5d9bda8ba42bd81135c95f1be15c752",
  "https://assets.simpleviewcms.com/simpleview/image/upload/c_fill,g_xy_center,h_732,q_60,w_412,x_1455,y_748/v1/clients/norway/via_ferrata_trolltunga_active_himmelstigen_ringdalsvatnet_hardangerfjord_fjord_norway_photo_algirdas_zabitis_trolltunga_active_b94ef82a-a8bc-49d0-9324-551bb43eefea.jpg",
  "https://hemsedal.com/imager/images/Bedrifter/Hemsedal-Fjellsport/8077/hemsedal-aktiv-via-ferratta-29_2939eaba451c180f3cb7024c7e96a8f3.jpg",
  "https://www.thebmc.co.uk/Handlers/ArticleImageHandler.ashx?id=7939&index=0&w=605&h=434",
];

// Create a function that fetches a api with string param
const fetchApi = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Create a function that fetches an api with string and two string params

const data = fetchApi("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=51.5&lon=0'|json_pp");
console.log(data);

export default function ImageFeedScreen({
  navigation,
}: NativeStackScreenProps<RootImageParamList, "ImageFeed">) {
  const { width } = Dimensions.get("window");
  return (
    <View style={styles.innerContainer}>
      {images.map((uri) => (
        <TouchableOpacity
          key={uri}
          onPress={() => navigation.navigate("Image", { uri })}
        >
          <Image
            source={{
              uri,
              width: width / 3,
              height: width / 3,
            }}
          />
          
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  innerContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
