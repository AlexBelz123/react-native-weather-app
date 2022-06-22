export interface IForecastWeather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface ICurrentForecast {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: number;
  uvi: number;
  visibility: number;
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
  weather: IForecastWeather[];
}

interface IDay {
  day: number;
  eve: number;
  morn: number;
  night: number;
}

export interface ITemp extends IDay {
  min: number;
  max: number;
}

export interface IDailyForecast {
  clouds: number;
  dew_point: number;
  dt: number;
  humidity: number;
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  uvi: number;
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
  feels_like: IDay;
  temp: ITemp;
  weather: IForecastWeather[];
}

export interface IWeather {
  current: ICurrentForecast;
  daily: IDailyForecast[];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
}

// ---------------------------------------
