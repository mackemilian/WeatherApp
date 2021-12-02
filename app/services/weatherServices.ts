import axios from "axios";
import { IWeather } from "../interfaces/Iweather";

export const weatherServices = (function () {

    // "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=51.5&lon=0'|json_pp"

    enum URL {
        getWeather = "https://api.met.no/weatherapi/locationforecast/2.0/compact",
        jsonFormat = "|json_pp"
    }

    const getWeather = async (lat: number, lon: number) => {
        const result = await axios.get(`${URL.getWeather}?lat=${lat}&lon=${lon}`);
        return result.data as IWeather;
    }

    return {
        getWeather
    }
}());