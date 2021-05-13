export interface City {
  id: number;
  country: string;
  name: string;
}

export interface WeatherData {
  city: City;
}
