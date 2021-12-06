import React, { FC } from "react";
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import colors from "../config/colors";
import { IWeather } from "../interfaces/Iweather";
import { weatherServices } from "../services/weatherServices";
import { imageService } from "../services/iconService";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import axios from "axios";
import { FontAwesome5 } from "@expo/vector-icons";
import { Input } from 'react-native-elements';

export default function UploadImageScreen() {
  const [weather, setWeather] = React.useState<IWeather | null>(null);
  const [weatherIndex, setWeatherIndex] = React.useState<number>(0);
  const [_location, _setLocation] = React.useState<string>("Oslo, Norway");
  const [cords, setCords] = React.useState<number[]>([0, 0]);
  const [lng, setLng] = React.useState<number>(0);
  const [width, setWidth] = React.useState<number>(Dimensions.get('window').width);
  React.useEffect(() => {
    getForecastFromService();
  }, [cords]);


  // TODO -> CHANGE LATER
  const homePlace = {
    description: 'Erling Schiøtz vei 2, Oslo, Norway',
    geometry: { location: { lat: 59.8641027, lng: 10.7922586 } },
  };
  const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 12, lng: 2 } },
  };

  const getForecastFromService = async () => {
    const results = await weatherServices.getWeather(cords[0], cords[1]);
    setWeather(results)
};

  const fetchGeocodeGoogle = async (adress: string) => {
    const result = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${adress}}&key=${"AIzaSyCz7293sLJWRkv30VeW1XDExWxW0adquDA"}`);
    return result.data;
  }

  const openCalendar = () => {
    console.log("openCalendar");
  }
    // https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY

  // Wait for weather to not be null before rendering
  if (!weather) {
    return null;
  } else {
  return (
    <>
    <Image
    style={styles.fade}
    source={require('../assets/fadeBig.png')}
  />
    <View style={[styles.flex, styles.container]}>
      <View style={[styles.flex, styles.searchContainer]}>
      <GooglePlacesAutocomplete
      placeholder='Search'
      minLength={2} // minimum length of text to search
      currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
      currentLocationLabel='Current location' // text of 'Current location' button
      predefinedPlaces={[homePlace, workPlace]} // predefined places from which the user can choose
      
      textInputProps={{
        InputComp: Input, // Component of the input, can be TouchableHighlight, TouchableOpacity, etc.
        value: _location, // value of the text input
        style: {
          paddingStart: 6,
          fontSize: 20,
          height: 55,
          textDecorationLine: 'none',
          color: "#323232",
        },
        onChange: (e) => {_setLocation(e.nativeEvent.text)}, // onChange handler of the text input
        leftIcon: { type: 'font-awesome', name: 'map-marker', size: 30, marginBottom: 5, color: "#5B5B5B" },
        errorStyle: { color: 'red' }, // Style of the input when there is an error.
      }}
      styles={{
        container: {
          
        },
        textInputContainer: {
          height: 55,
        },
        textInput: {
          height: 55,
          color: '#323232',
          fontWeight: 'semi bold',
          backgroundColor: 'none',
          fontSize: 20,
        },
        predefinedPlacesDescription: {
          color: '#348899',
        },
      }}
      onPress={(data, details = null) => {
        fetchGeocodeGoogle(data.description).then(res => {
          setCords([res.results[0].geometry.location.lat, res.results[0].geometry.location.lng]);
          _setLocation(data.description);
        });
      }}

      query={{
        key: 'AIzaSyCz7293sLJWRkv30VeW1XDExWxW0adquDA',
        language: 'en',
        types: 'geocode', // default: 'geocode'
      }}
      />

       <TouchableOpacity onPress={() => openCalendar()}>
        <View style={[styles.weatherDateButton]}>
          <FontAwesome5 name="calendar-week" size={26} style={[styles.calendarIcon]} color={"#606060"} />
          <View style={[styles.weatherDateButtonBackground]}/>
        </View>
      </TouchableOpacity>
      <View style={[styles.inputBackground]}/>
      </View>
       <ScrollView style={styles.scrollView}>
      <View style={[styles.container, styles.topContainer]}>

        <Image
          style={styles.bigWeatherIcon}
          source={imageService(weather?.properties.timeseries[weatherIndex].data.next_1_hours.summary.symbol_code)}
        />

        <Text style={[styles.weatherCode]}>
          {weather?.properties.timeseries[weatherIndex].data.next_1_hours.summary.symbol_code}
        </Text>
        <Text style={[styles.weatherTemprature]}>
        {weather?.properties.timeseries[weatherIndex].data.instant.details.air_temperature}°
        </Text>

        
        <View style={[styles.weatherInlineMainContainer]}>
        <View style={[styles.weatherInlineContainer]}>
        <Image
          style={styles.textLogo}
          source={require('../assets/wind.png')}
        />
        <Text style={[styles.weatherDescription]}>
          {weather?.properties.timeseries[weatherIndex].data.instant.details.wind_speed + " m/s"}
        </Text>
        </View>

        <View style={[styles.weatherInlineContainer]}>
        <Image
          style={styles.textLogo}
          source={require('../assets/humidity.png')}
        />
        <Text style={[styles.weatherDescription]}>
          {weather?.properties.timeseries[weatherIndex].data.instant.details.relative_humidity + " %"}
        </Text>
        </View>
        </View>

        
 
      </View>
      <View style={[styles.bottomContainer]}>
        
        <ScrollView style={styles.scrollViewSide} horizontal={true}  showsHorizontalScrollIndicator={false}>
          <View style={[styles.flex, styles.weatherContainer]}>
        
          {Object.entries(weather?.properties.timeseries).slice(0, 24).map((key, index) => (
            <TouchableOpacity key={index} onPress={() => setWeatherIndex(index)}>
              
            <View style={[(weatherIndex === index) ? styles.weatherCardActive : styles.weatherCard]} > 

            <View style={[(weatherIndex === index) ? styles.weatherCardActiveBackground : null]} /> 

            <Text style={[styles.weatherCardTime]}>{new Date(weather?.properties.timeseries[index].time!).getHours()}</Text>

            <View style={[(weatherIndex === index) ? null : styles.weatherCardLine, (index === 0 && weatherIndex !== index) ? styles.weatherCardLineFirst : null, (index === 24 && weatherIndex !== index) ? styles.weatherCardLineLast : null]}/>
           
              <Image
                style={[styles.tinyLogo]}
                source={imageService(weather?.properties.timeseries[index].data.next_1_hours.summary.symbol_code)}
              />
         
             <Text style={[styles.weatherCardTemprature]}>{weather?.properties.timeseries[index].data.instant.details.air_temperature}°</Text>
          </View>
          </TouchableOpacity>
          ))}
            
           </View>
        </ScrollView>
    
        
      </View>
      </ScrollView>
    </View>
    </>
  );}
}

var calcHeigh = Dimensions.get('window').height - 50;

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: calcHeigh,
    width: "100%",
    position: "absolute",
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
    height: "auto",
    position: "relative",
  },
  bottomContainer: {
    width: "100%",
    height: "auto",
    position: "relative",
  },
  wave:{
    width: "100%",
    position: "absolute",
    top: 0,
    height: "100%",
    tintColor: "#f2f2f2",
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
  },
  weatherCard:{
    width: 100,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  weatherCardActive:{
    width: 100,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  weatherCardActiveBackground:{
    width: "100%",
    height: "100%",
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    opacity: 0.5,
    position: "absolute",
  },
  weatherCardTime:{
    fontSize: 18,
    fontWeight: "normal",
    color: "#343642",
    alignSelf: "center",
    top: 15,
    position: "absolute",
  },
  weatherContainer:{
    height: "100%",
    width: "auto",
    display: "flex",
    flexDirection: "row",
    padding: 10,
  },
  tinyLogo: {
    width: 65,
    height: 65,
    alignSelf: "center",
  },
  weatherCardTemprature:{
    fontSize: 18,
    fontWeight: "bold",
    color: "#343642",
    alignSelf: "center",
    bottom: 15,
    position: "absolute",
  },
  weatherCardLine:{
    width: "100%",
    height: 2,
    backgroundColor: "#f2f2f2",
    position: "absolute",
    alignSelf: "center",
    opacity: 0.4,
  },
  weatherCardLineFirst:{
    width: "100%",
    height: 2,
    backgroundColor: "#f2f2f2",
    position: "absolute",
    alignSelf: "center",
    opacity: 0.4,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
  },
  weatherCardLineLast:{
    width: "100%",
    height: 2,
    backgroundColor: "#f2f2f2",
    position: "absolute",
    alignSelf: "center",
    opacity: 0.4,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
  weatherDescription:{
    fontSize: 14,
    fontWeight: "bold",
    color: "#323232",
    alignSelf: "center",
  },
  weatherCode:{
    fontSize: 18,
    fontWeight: "bold",
    color: "#323232",
    alignSelf: "center",
    marginTop: 12,
  },
  weatherTemprature:{
    fontSize: 64,
    fontWeight: "bold",
    color: "#323232",
    alignSelf: "center",
    marginTop: 6,
  },
  textLogo: {
    width: 30,
    height: 30,
    tintColor: "#323232",
    marginRight: 4,
    opacity: 0.8,
  },
  weatherInlineContainer:{
    height: 40,
    width: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    margin: 10,
  },
  weatherInlineMainContainer:{
    height: 40,
    width: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 6,
    marginBottom: 36,
  },
  bigWeatherIcon:{
    width: Dimensions.get("window").width / 2,
    height: Dimensions.get("window").width / 2,
    marginTop: 126,
  },
  fade:{
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: -1,
  },
  searchContainer: {
    width: "90%",
    top: 60,
    alignSelf: "center",
    display: "flex",
    position: "absolute",
    zIndex: 1,
  },
  inputBackground: {
    width: "100%",
    height: 55,
    backgroundColor: "#f2f2f2",
    borderRadius: 4,
    opacity:  0.5,
    position: "absolute",
    zIndex: -1,
  },
  weatherDateButton:{
    width: 55,
    height: 55,
    position: "absolute",
    right: 0,
    top: 10,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    zIndex: -2,
  },
  calendarIcon:{
    alignSelf: "center",
  },
  weatherDateButtonBackground:{
    width: "100%",
    height: "100%",
    borderRadius: 4,
    backgroundColor: "#f2f2f2",
    position: "absolute",
    zIndex: -4,
    opacity: 0.5,
  },
  locationContainer:{
    width: "90%",
    height: 60,
    top: 60,
    alignSelf: "center",
    display: "flex",
    position: "absolute",
    zIndex: 500,
  }

});
