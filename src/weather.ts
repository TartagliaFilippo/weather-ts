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
}
