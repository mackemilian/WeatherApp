import * as React from 'react';
import { Image } from 'react-native-svg';
import clearSky_day from '../../assets/images/weather/clearSky_day.png';
import clearSky_night from '../../assets/images/weather/clearSky_night.png';
import clearsky_polartwilight from '../../assets/images/weather/clearsky_polartwilight.png';
import cloudy from '../../assets/images/weather/cloudy.png';
import fair_day from '../../assets/images/weather/fair_day.png';
import fair_night from '../../assets/images/weather/fair_night.png';
import fair_polartwilight from '../../assets/images/weather/fair_polartwilight.png';
import fog from '../../assets/images/weather/fog.png';
import heavyrain from '../../assets/images/weather/heavyrain.png';
import heaveyraindandthunder from '../../assets/images/weather/heaveyraindandthunder.png';
import heavyrainshowers_day from '../../assets/images/weather/heavyrainshowers_day.png';
import heavyrainshowers_night from '../../assets/images/weather/heavyrainshowers_night.png';
import heavyrainshowers_polartwilight from '../../assets/images/weather/heavyrainshowers_polartwilight.png';
import heavyraindandthunder_day from '../../assets/images/weather/heavyraindandthunder_day.png';
import heavyraindandthunder_night from '../../assets/images/weather/heavyraindandthunder_night.png';
import heavyraindandthunder_polartwilight from '../../assets/images/weather/heavyraindandthunder_polartwilight.png';
import heavysleet from '../../assets/images/weather/heavysleet.png';
import heavysleetandthunder from '../../assets/images/weather/heavysleetandthunder.png';
import heavysleetshowers_day from '../../assets/images/weather/heavysleetshowers_day.png';
import heavysleetshowers_night from '../../assets/images/weather/heavysleetshowers_night.png';
import heavysleetshowers_polartwilight from '../../assets/images/weather/heavysleetshowers_polartwilight.png';
import heavysleetsandthunder_day from '../../assets/images/weather/heavysleetsandthunder_day.png';
import heavysleetsandthunder_night from '../../assets/images/weather/heavysleetsandthunder_night.png';
import heavysleetsandthunder_polartwilight from '../../assets/images/weather/heavysleetsandthunder_polartwilight.png';
import heavysnow from '../../assets/images/weather/heavysnow.png';
import heavysnowandthunder from '../../assets/images/weather/heavysnowandthunder.png';
import heavysnowshowers_day from '../../assets/images/weather/heavysnowshowers_day.png';
import heavysnowshowers_night from '../../assets/images/weather/heavysnowshowers_night.png';
import heavysnowshowers_polartwilight from '../../assets/images/weather/heavysnowshowers_polartwilight.png';
import heavysnowshowersandthunder_day from '../../assets/images/weather/heavysnowshowersandthunder_day.png';
import heavysnowshowersandthunder_night from '../../assets/images/weather/heavysnowshowersandthunder_night.png';
import heavysnowshowersandthunder_polartwilight from '../../assets/images/weather/heavysnowshowersandthunder_polartwilight.png';
import lightrain from '../../assets/images/weather/lightrain.png';
import lightrainandthunder from '../../assets/images/weather/lightrainandthunder.png';
import lightrainshowers_day from '../../assets/images/weather/lightrainshowers_day.png';
import lightrainshowers_night from '../../assets/images/weather/lightrainshowers_night.png';
import lightrainshowers_polartwilight from '../../assets/images/weather/lightrainshowers_polartwilight.png';
import lightrainshowersandthunder_day from '../../assets/images/weather/lightrainshowersandthunder_day.png';
import lightrainshowersandthunder_night from '../../assets/images/weather/lightrainshowersandthunder_night.png';
import lightrainshowersandthunder_polartwilight from '../../assets/images/weather/lightrainshowersandthunder_polartwilight.png';
import lightsleet from '../../assets/images/weather/lightsleet.png';
import lightsleetandthunder from '../../assets/images/weather/lightsleetandthunder.png';
import lightsleetshowers_day from '../../assets/images/weather/lightsleetshowers_day.png';
import lightsleetshowers_night from '../../assets/images/weather/lightsleetshowers_night.png';
import lightsleetshowers_polartwilight from '../../assets/images/weather/lightsleetshowers_polartwilight.png';
import lightsnow from '../../assets/images/weather/lightsnow.png';
import lightsnowandthunder from '../../assets/images/weather/lightsnowandthunder.png';
import lightsnowshowers_day from '../../assets/images/weather/lightsnowshowers_day.png';
import lightsnowshowers_night from '../../assets/images/weather/lightsnowshowers_night.png';
import lightsnowshowers_polartwilight from '../../assets/images/weather/lightsnowshowers_polartwilight.png';
import lightssleetshowersandthunder_day from '../../assets/images/weather/lightssleetshowersandthunder_day.png';
import lightssleetshowersandthunder_night from '../../assets/images/weather/lightssleetshowersandthunder_night.png';
import lightssleetshowersandthunder_polartwilight from '../../assets/images/weather/lightssleetshowersandthunder_polartwilight.png';
import lightsnowshowersandthunder_day from '../../assets/images/weather/lightsnowshowersandthunder_day.png';
import lightsnowshowersandthunder_night from '../../assets/images/weather/lightsnowshowersandthunder_night.png';
import lightsnowshowersandthunder_polartwilight from '../../assets/images/weather/lightsnowshowersandthunder_polartwilight.png';



export const getIcon = (symbol_code: string, date: Date) => {
    let hours = date.getHours();
    let timeCode = (hours > 6 && hours < 18) ? ("_day") : ("_night");
    let imageString = `${symbol_code}`
}