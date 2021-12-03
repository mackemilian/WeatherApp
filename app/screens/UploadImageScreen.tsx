import React from "react";
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import colors from "../config/colors";
import { IWeather } from "../interfaces/Iweather";
import { weatherServices } from "../services/weatherServices";
import { Umbrella } from "../assets/weatherIcons";

export default function UploadImageScreen() {
  const [weather, setWeather] = React.useState<IWeather | null>(null);
  React.useEffect(() => {
    getListingsFromService();
  }, []);

  const getListingsFromService = async () => {
    const results = await weatherServices.getWeather(1, 5);
    console.log(results);
    setWeather(results)
    console.log(weather?.properties.timeseries[0].data.instant.details.air_temperature);
    console.log(weather?.properties.timeseries[0].data.next_1_hours.summary.symbol_code);
};

const getIcon = (symbol_code: string, date: Date) => {
  let hours = date.getHours();
  let timeCode = (hours > 6 && hours < 18) ? ("_day") : ("_night");
  let imageString = `${symbol_code}`
}


  // Wait for weather to not be null before rendering
  if (!weather) {
    return null;
  } else {
    const getImage = (s: string) => {
      if(!s) return;
      console.log(`../assets/weatherIcons/${s}.png`);
      var imageString : string = `../assets/weatherIcons/${"snow"}.png`;
      return (
      <Image
      style={styles.tinyLogo}
      source={{uri: imageString}}
      />);
    }
  return (
    <View style={[styles.flex, styles.container]}>
       <ScrollView style={styles.scrollView}>
      <View style={[styles.container, styles.topContainer]}>
       
      </View>
      <View style={[styles.bottomContainer]}>
        
        <ScrollView style={styles.scrollViewSide} horizontal={true}  showsHorizontalScrollIndicator={false}>
          <View style={[styles.flex, styles.weatherContainer]}>
        
          {Object.entries(weather?.properties.timeseries).slice(0, 24).map((key, index) => (
            <TouchableOpacity key={index}>
            <View style={[styles.weatherCard]} > 
            <Text style={[styles.weatherCardTime]}>{new Date(weather?.properties.timeseries[index].time!).getHours()}</Text>
            <View style={[styles.weatherCardLine]}/>
           
            <getImage s = {weather?.properties.timeseries[index].data.next_1_hours.summary.symbol_code}/>
         
             <Text style={[styles.weatherCardTemprature]}>{weather?.properties.timeseries[index].data.instant.details.air_temperature}°C</Text>
          </View>
          </TouchableOpacity>
          ))}
            
           </View>
        </ScrollView>
    
        
      </View>
      </ScrollView>
    </View>
  );}
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
    height: 400,
    backgroundColor: "#4dbcb4",
    position: "relative",
  },
  bottomContainer: {
    width: "100%",
    height: 500,
    backgroundColor: "#f2f2f2",
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
  },
  scrollViewSide:{
    width: "100%",
    height: 175,
    position: "relative",
    marginTop: 10,
  },
  weatherCard:{
    width: 100,
    height: 150,
    backgroundColor: "#f2f2f2",
    justifyContent: 'center',
    alignItems: 'center',
  },
  weatherCardTime:{
    fontSize: 18,
    fontWeight: "normal",
    color: "#5b5b5b",
    alignSelf: "center",
    top: 15,
    position: "absolute",
  },
  weatherContainer:{
    height: "100%",
    width: "auto",
    display: "flex",
    flexDirection: "row",
  },
  tinyLogo: {
    width: 65,
    height: 65,
    alignSelf: "center",
  },
  weatherCardTemprature:{
    fontSize: 18,
    fontWeight: "bold",
    color: "#5b5b5b",
    alignSelf: "center",
    bottom: 15,
    position: "absolute",
  },
  weatherCardLine:{
    width: "100%",
    height: 2,
    backgroundColor: "#ececec",
    position: "absolute",
    alignSelf: "center",
  },
});
