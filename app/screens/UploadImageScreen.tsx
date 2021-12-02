import React, { useRef } from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import colors from "../config/colors";
import { IWeather } from "../interfaces/Iweather";
import { weatherServices } from "../services/weatherServices";
import { Umbrella } from "../assets/weatherIcons";

export default function UploadImageScreen() {
  const [weather, setWeather] = React.useState<IWeather>();
  React.useEffect(() => {
    getListingsFromService();
  }, []);

  const getListingsFromService = async () => {
    const results = await weatherServices.getWeather(1, 5);
    console.log(results);
    setWeather(results)
    console.log(weather?.geometry.coordinates);
    console.log(weather?.properties.meta.units.air_temperature);
    console.log(weather?.properties.meta.units.wind_speed);
    console.log(weather?.properties.timeseries[0].data.instant.details.air_temperature);
};


  // Wait for weather to not be null before rendering
  if (!weather) {
    return null;
  }

  return (
    <View style={[styles.flex, styles.container]}>
       <ScrollView style={styles.scrollView}>
      <View style={[styles.container, styles.topContainer]}>
       
      </View>
      <View style={[styles.bottomContainer]}>
       
        <Image
          style={styles.wave}
          source={require('../assets/wave.png')}
        />
        <View style={[styles.sircleContainer]}>
          <Text style={[styles.sircleText]}>+</Text>
        </View>
    
        
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  iconBackground: {
    width: 200,
    height: 200,
    backgroundColor: colors.primary,
    borderColor: colors.dark,
    borderWidth: 3,
    borderRadius: 10,
  },
  topContainer: {
    width: "100%",
    height: 500,
    backgroundColor: "#4dbcb4",
    position: "relative",
  },
  bottomContainer: {
    width: "100%",
    height: 500,
    backgroundColor: "#4dbcb4",
    zIndex: 2,
    position: "relative",
  },
  wave:{
    width: "100%",
    position: "absolute",
    top: 0,
    height: "100%",
    tintColor: "#f2f2f2",
  },
  sircleContainer:{
    width: 80,
    height: 80,
    borderRadius: 40,
    position: "absolute",
    top: 10,
    alignSelf: "center",
    backgroundColor: "#f2f2f2",
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 1,
  },
  sircleText:{
    fontSize: 40,
    fontWeight: "bold",
    color: "#4dbcb4",
    alignSelf: "center",
    marginTop: 13,
  },
  scrollView:{
    width: "100%",
    height: "100%",
    display: "flex",
  }
});
