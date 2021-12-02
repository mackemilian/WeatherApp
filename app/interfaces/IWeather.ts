export interface IWeather {
    geometry:   IGeometry;
    properties: IProperties;
    type:       string;
}

export interface IGeometry {
    coordinates: number[];
    type:        string;
}

export interface IProperties {
    timeseries: ITimesery[];
    meta:       IMeta;
}

export interface IMeta {
    units:      IUnits;
    updated_at: Date;
}

export interface IUnits {
    wind_speed:                      string;
    precipitation_amount_min:        string;
    relative_humidity:               string;
    probability_of_precipitation:    string;
    air_temperature_max:             string;
    fog_area_fraction:               string;
    ultraviolet_index_clear_sky_max: string;
    cloud_area_fraction:             string;
    cloud_area_fraction_low:         string;
    air_pressure_at_sea_level:       string;
    air_temperature:                 string;
    probability_of_thunder:          string;
    air_temperature_min:             string;
    precipitation_amount_max:        string;
    cloud_area_fraction_high:        string;
    wind_speed_of_gust:              string;
    wind_from_direction:             string;
    cloud_area_fraction_medium:      string;
    precipitation_amount:            string;
    dew_point_temperature:           string;
}

export interface ITimesery {
    time: Date;
    data: IData;
}

export interface IData {
    next_12_hours: INextHours;
    next_6_hours:  INextHours;
    next_1_hours:  INextHours;
    instant:       IInstant;
}

export interface IInstant {
    details: { [key: string]: number };
}

export interface INextHours {
    details: IDetails;
    summary: ISummary;
}

export interface IDetails {
    probability_of_thunder:          number;
    precipitation_amount:            number;
    air_temperature_min:             number;
    precipitation_amount_min:        number;
    ultraviolet_index_clear_sky_max: number;
    probability_of_precipitation:    number;
    air_temperature_max:             number;
    precipitation_amount_max:        number;
}

export interface ISummary {
    symbol_code: string;
}