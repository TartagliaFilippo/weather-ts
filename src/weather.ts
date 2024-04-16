import { CurrentWeather } from "./interfaces/currentWeather.inteface";
import { GeocodedLocation } from "./interfaces/geocoding.interface";

class Weather {
  private static instance: Weather;
  private weatherEndPoint: string =
    "https://api.openweathermap.org/data/2.5/weather";
  private geocodingEndPoint: string =
    "http://api.openweathermap.org/geo/1.0/direct";
  private forecastEndPoint: string =
    "https://pro.openweathermap.org/data/2.5/forecast";
  private settings: { [key: string]: string } = { units: "metric", lang: "it" };
  private apiKey: string = "a66a66c6b64256d23f1bed26655002d2";

  constructor() {}

  static getInstance() {
    if (!Weather.instance) {
      Weather.instance = new Weather();
    }

    return Weather.instance;
  }

  async getLocations(query: string): Promise<GeocodedLocation[]> {
    const response = await fetch(
      `${this.geocodingEndPoint}?q=${query}&limit=5&appid=${this.apiKey}&lang=${this.settings.lang}`
    );
    const data: GeocodedLocation[] = await response.json();
    return data;
  }

  async getCurrentWeather(lat: number, lon: number): Promise<CurrentWeather> {
    const response = await fetch(
      `${this.weatherEndPoint}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=${this.settings.units}&lang=${this.settings.lang}`
    );
    const data: CurrentWeather = await response.json();
    return data;
  }
}

export default Weather;
