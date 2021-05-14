export enum PartOfTheDay {
  n = "night",
  d = "day",
}

export enum WeatherType {
  Clear = "Clear",
  Rain = "Rain",
  Snow = "Snow",
  Extreme = "Extreme",
}

export interface City {
  id: number;
  country: string;
  name: string;
}

export interface WeatherListItem {
  clouds: {
    all: number;
  };
  dt: number;
  dt_txt: string;
  main: {
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_kf: number;
    temp_max: number;
    temp_min: number;
  };
  rain?: {
    "3h"?: number;
  };
  snow?: {
    "3h"?: number;
  };
  sys: {
    pod: PartOfTheDay;
  };
  weather: {
    description: string;
    icon: string;
    id: number;
    main: WeatherType;
  }[];
  wind: {
    deg: number;
    speed: number;
  };
}

export interface WeatherData {
  city: City;
  cnt: number;
  cod: string;
  message: number;
  list: WeatherListItem[];
}
